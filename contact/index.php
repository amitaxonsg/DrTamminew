<?php
require dirname(__DIR__) . '/includes/bootstrap.php';

$page = [
    'title' => 'Request an Appointment | Dr Tammi Quek Clinic',
    'description' => 'Send a secure appointment request to Dr Tammi Quek’s developmental and behavioural paediatrics clinic. Staff review every enquiry before arranging an appointment.',
    'path' => 'contact',
];

$errors = $_SESSION['form_errors'] ?? [];
$old = $_SESSION['form_old'] ?? [];
$success = (string) ($_SESSION['form_success'] ?? '');
unset($_SESSION['form_errors'], $_SESSION['form_old'], $_SESSION['form_success']);

require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Request an Appointment</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Human-managed appointment requests</p><h1>Tell the clinic team how they can contact you</h1><p class="lead">This form helps staff understand the general nature of your enquiry. It is for administrative screening and does not provide medical advice or confirm an appointment.</p></div>
        <div class="page-card"><h2>Prefer direct contact?</h2><p><a href="tel:<?= e(CLINIC_PHONE_URI) ?>"><?= e(CLINIC_PHONE_DISPLAY) ?></a><br><a href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">WhatsApp <?= e(CLINIC_WHATSAPP_DISPLAY) ?></a></p><p>Please do not send identification numbers or detailed medical records through WhatsApp or the initial website form.</p></div>
    </div>
</section>
<section class="section">
    <div class="site-shell form-layout">
        <form class="enquiry-form" action="<?= e(site_url('contact/submit.php')) ?>" method="post" novalidate>
            <div>
                <p class="eyebrow">Child development and learning enquiry</p>
                <h2>Request an Appointment</h2>
                <p>Submitting this form is an appointment request, not a confirmed booking. The clinic team will contact you before any appointment is arranged.</p>
            </div>

            <?php if ($success !== ''): ?><div class="form-alert success" role="status"><?= e($success) ?></div><?php endif; ?>
            <?php if ($errors !== []): ?>
                <div class="form-alert error" role="alert" tabindex="-1">
                    <strong>Please review the following:</strong>
                    <ul><?php foreach ($errors as $error): ?><li><?= e((string) $error) ?></li><?php endforeach; ?></ul>
                </div>
            <?php endif; ?>

            <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
            <input type="hidden" name="started_at" value="<?= e((string) time()) ?>">
            <div class="honeypot" aria-hidden="true"><label>Leave this field empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>

            <div class="form-grid">
                <div class="form-field"><label for="guardian_name">Parent or guardian name *</label><input id="guardian_name" name="guardian_name" maxlength="100" autocomplete="name" required value="<?= e((string) ($old['guardian_name'] ?? '')) ?>"></div>
                <div class="form-field"><label for="email">Email address *</label><input id="email" name="email" type="email" maxlength="160" autocomplete="email" required value="<?= e((string) ($old['email'] ?? '')) ?>"></div>
                <div class="form-field"><label for="phone">Telephone or WhatsApp *</label><input id="phone" name="phone" type="tel" maxlength="40" autocomplete="tel" required value="<?= e((string) ($old['phone'] ?? '')) ?>"></div>
                <div class="form-field"><label for="country">Country of residence *</label><input id="country" name="country" maxlength="80" autocomplete="country-name" required value="<?= e((string) ($old['country'] ?? '')) ?>"></div>

                <div class="form-field"><label for="location_status">Current location *</label><select id="location_status" name="location_status" required><option value="">Select one</option><?php foreach (['Currently in Singapore','Outside Singapore','Planning to travel to Singapore'] as $value): ?><option<?= (($old['location_status'] ?? '') === $value) ? ' selected' : '' ?>><?= e($value) ?></option><?php endforeach; ?></select></div>
                <div class="form-field"><label for="age_range">Child’s age range *</label><select id="age_range" name="age_range" required><option value="">Select one</option><?php foreach (['Under 3','3–5','6–11','12–17','18 or above'] as $value): ?><option<?= (($old['age_range'] ?? '') === $value) ? ' selected' : '' ?>><?= e($value) ?></option><?php endforeach; ?></select></div>

                <fieldset class="form-field full"><legend class="fieldset-label">Broad area of concern *</legend><p class="form-help">Select only the broad categories relevant to the enquiry.</p><div class="option-grid">
                    <?php $selectedConcerns = is_array($old['concerns'] ?? null) ? $old['concerns'] : []; foreach (['Development','Speech or language','Attention or ADHD','Autism or social communication','Learning','Behaviour','Social or emotional wellbeing','Anxiety','Other'] as $value): ?>
                    <label class="option"><input type="checkbox" name="concerns[]" value="<?= e($value) ?>"<?= in_array($value, $selectedConcerns, true) ? ' checked' : '' ?>> <span><?= e($value) ?></span></label>
                    <?php endforeach; ?>
                </div></fieldset>

                <div class="form-field"><label for="previous_assessment">Previous assessment *</label><select id="previous_assessment" name="previous_assessment" required><option value="">Select one</option><?php foreach (['Yes','No','Unsure'] as $value): ?><option<?= (($old['previous_assessment'] ?? '') === $value) ? ' selected' : '' ?>><?= e($value) ?></option><?php endforeach; ?></select></div>
                <div class="form-field"><label for="school_coordination">May school coordination be required? *</label><select id="school_coordination" name="school_coordination" required><option value="">Select one</option><?php foreach (['Yes','No','Unsure'] as $value): ?><option<?= (($old['school_coordination'] ?? '') === $value) ? ' selected' : '' ?>><?= e($value) ?></option><?php endforeach; ?></select></div>
                <div class="form-field full"><label for="preferred_contact">Preferred contact method *</label><select id="preferred_contact" name="preferred_contact" required><option value="">Select one</option><?php foreach (['WhatsApp','Telephone','Email'] as $value): ?><option<?= (($old['preferred_contact'] ?? '') === $value) ? ' selected' : '' ?>><?= e($value) ?></option><?php endforeach; ?></select></div>

                <div class="form-field full"><label for="message">Short summary *</label><textarea id="message" name="message" maxlength="1000" required data-message-field><?= e((string) ($old['message'] ?? '')) ?></textarea><p class="form-help">Please provide only a short summary. Do not enter a child’s full name, identification number, detailed medical history, school name or confidential records. <span data-message-count>0/1000</span></p></div>

                <div class="form-field full"><label class="option"><input type="checkbox" name="consent" value="1" required<?= !empty($old['consent']) ? ' checked' : '' ?>> <span>I understand that this form is for administrative screening and does not provide medical advice or confirm an appointment. I consent to the clinic using the information provided to contact me about this enquiry.</span></label></div>
                <div class="form-field full"><button class="button button-primary" type="submit">Send Appointment Request</button><p class="form-help">Do not use this form for urgent or emergency medical concerns. Seek appropriate urgent medical assistance in your location.</p></div>
            </div>
        </form>

        <aside class="sidebar-note">
            <h2>What not to include</h2>
            <p>The first enquiry does not need detailed or identifying information about the child.</p>
            <ul><li>No child’s full name</li><li>No NRIC, passport or FIN</li><li>No exact date of birth</li><li>No school name</li><li>No medical reports or attachments</li><li>No medication list</li></ul>
            <p>Clinic staff will explain what is needed after reviewing the initial enquiry.</p>
        </aside>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
