<?php
require dirname(__DIR__) . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method not allowed.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 32768) {
    http_response_code(413);
    exit('Request too large.');
}

$redirect = site_url('contact/');
$errors = [];

if (!csrf_is_valid($_POST['csrf_token'] ?? null)) {
    $errors[] = 'Your secure form session expired. Please reload the page and try again.';
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    // Honeypot: respond as though accepted without processing the content.
    $_SESSION['form_success'] = 'Thank you. Your request has been received for review.';
    header('Location: ' . $redirect, true, 303);
    exit;
}

$startedAt = filter_var($_POST['started_at'] ?? null, FILTER_VALIDATE_INT);
if (!$startedAt || time() - $startedAt < 3) {
    $errors[] = 'Please take a moment to review the form before submitting it.';
}

$lastSubmission = (int) ($_SESSION['last_enquiry_at'] ?? 0);
if ($lastSubmission > 0 && time() - $lastSubmission < 60) {
    $errors[] = 'Please wait before sending another enquiry.';
}

$cleanSingleLine = static function (string $value, int $max): string {
    $value = preg_replace('/[\r\n\0]+/', ' ', trim($value)) ?? '';
    return mb_substr($value, 0, $max);
};

$guardianName = $cleanSingleLine((string) ($_POST['guardian_name'] ?? ''), 100);
$email = trim((string) ($_POST['email'] ?? ''));
$phone = $cleanSingleLine((string) ($_POST['phone'] ?? ''), 40);
$country = $cleanSingleLine((string) ($_POST['country'] ?? ''), 80);
$locationStatus = $cleanSingleLine((string) ($_POST['location_status'] ?? ''), 50);
$ageRange = $cleanSingleLine((string) ($_POST['age_range'] ?? ''), 30);
$previousAssessment = $cleanSingleLine((string) ($_POST['previous_assessment'] ?? ''), 10);
$schoolCoordination = $cleanSingleLine((string) ($_POST['school_coordination'] ?? ''), 10);
$preferredContact = $cleanSingleLine((string) ($_POST['preferred_contact'] ?? ''), 20);
$message = trim((string) ($_POST['message'] ?? ''));
$message = mb_substr($message, 0, 1000);
$consent = isset($_POST['consent']) && $_POST['consent'] === '1';

$allowedLocation = ['Currently in Singapore', 'Outside Singapore', 'Planning to travel to Singapore'];
$allowedAges = ['Under 3', '3–5', '6–11', '12–17', '18 or above'];
$allowedYesNo = ['Yes', 'No', 'Unsure'];
$allowedContact = ['WhatsApp', 'Telephone', 'Email'];
$allowedConcerns = ['Development', 'Speech or language', 'Attention or ADHD', 'Autism or social communication', 'Learning', 'Behaviour', 'Social or emotional wellbeing', 'Anxiety', 'Other'];
$concerns = array_values(array_intersect(
    $allowedConcerns,
    array_map('strval', is_array($_POST['concerns'] ?? null) ? $_POST['concerns'] : [])
));

if ($guardianName === '') $errors[] = 'Enter the parent or guardian name.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 160) $errors[] = 'Enter a valid email address.';
if ($phone === '' || !preg_match('/^[0-9+() .-]{7,40}$/', $phone)) $errors[] = 'Enter a valid telephone or WhatsApp number.';
if ($country === '') $errors[] = 'Enter the country of residence.';
if (!in_array($locationStatus, $allowedLocation, true)) $errors[] = 'Select the current location.';
if (!in_array($ageRange, $allowedAges, true)) $errors[] = 'Select the child’s age range.';
if ($concerns === []) $errors[] = 'Select at least one broad area of concern.';
if (!in_array($previousAssessment, $allowedYesNo, true)) $errors[] = 'Select the previous assessment status.';
if (!in_array($schoolCoordination, $allowedYesNo, true)) $errors[] = 'Select whether school coordination may be required.';
if (!in_array($preferredContact, $allowedContact, true)) $errors[] = 'Select the preferred contact method.';
if ($message === '' || mb_strlen($message) < 10) $errors[] = 'Enter a short summary of at least 10 characters.';
if (!$consent) $errors[] = 'Consent is required before the clinic can contact you.';

$old = [
    'guardian_name' => $guardianName,
    'email' => $email,
    'phone' => $phone,
    'country' => $country,
    'location_status' => $locationStatus,
    'age_range' => $ageRange,
    'concerns' => $concerns,
    'previous_assessment' => $previousAssessment,
    'school_coordination' => $schoolCoordination,
    'preferred_contact' => $preferredContact,
    'message' => $message,
    'consent' => $consent ? '1' : '',
];

if ($errors !== []) {
    $_SESSION['form_errors'] = $errors;
    $_SESSION['form_old'] = $old;
    header('Location: ' . $redirect, true, 303);
    exit;
}

$reference = 'DTQ-' . date('Ymd-His') . '-' . strtoupper(bin2hex(random_bytes(2)));
$subjectCountry = preg_replace('/[^\pL\pN .-]/u', '', $country) ?: 'Country not stated';
$subject = 'New Clinic Enquiry – ' . $subjectCountry;
$body = implode("\n", [
    'Reference: ' . $reference,
    'Received: ' . date('Y-m-d H:i T'),
    '',
    'Parent/guardian: ' . $guardianName,
    'Email: ' . $email,
    'Telephone/WhatsApp: ' . $phone,
    'Country: ' . $country,
    'Current location: ' . $locationStatus,
    'Child age range: ' . $ageRange,
    'Broad concerns: ' . implode(', ', $concerns),
    'Previous assessment: ' . $previousAssessment,
    'School coordination may be required: ' . $schoolCoordination,
    'Preferred contact: ' . $preferredContact,
    '',
    'Short summary:',
    $message,
    '',
    'The sender accepted the administrative screening consent statement.',
]);

if (is_production()) {
    $recipient = clinic_email();
    $mailFrom = env_value('MAIL_FROM', '');
    if ($recipient === '' || $mailFrom === '') {
        $_SESSION['form_errors'] = ['The enquiry service is not configured yet. Please contact the clinic by WhatsApp or telephone.'];
        $_SESSION['form_old'] = $old;
        header('Location: ' . $redirect, true, 303);
        exit;
    }

    $safeFrom = filter_var($mailFrom, FILTER_VALIDATE_EMAIL) ? $mailFrom : '';
    if ($safeFrom === '') {
        $_SESSION['form_errors'] = ['The enquiry service is temporarily unavailable. Please contact the clinic by WhatsApp or telephone.'];
        $_SESSION['form_old'] = $old;
        header('Location: ' . $redirect, true, 303);
        exit;
    }

    $headers = [
        'From: ' . CLINIC_SHORT_NAME . ' Website <' . $safeFrom . '>',
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Enquiry-Reference: ' . $reference,
    ];

    if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
        $_SESSION['form_errors'] = ['The enquiry could not be sent. Please contact the clinic by WhatsApp or telephone.'];
        $_SESSION['form_old'] = $old;
        header('Location: ' . $redirect, true, 303);
        exit;
    }
}

$_SESSION['last_enquiry_at'] = time();
$_SESSION['form_success'] = 'Thank you. Your appointment request has been received. This is not a confirmed appointment. The clinic team will review the information and contact you to discuss appropriate next steps. Reference: ' . $reference;
header('Location: ' . $redirect, true, 303);
