<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'Privacy | Dr Tammi Quek Clinic',
    'description' => 'How the clinic website handles appointment enquiries, minimises personal data and protects information submitted through the website.',
    'path' => 'privacy',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Privacy</nav>
<section class="page-hero">
    <div class="site-shell"><p class="eyebrow">Privacy</p><h1>Using only the information needed to respond to an enquiry</h1><p class="lead">The appointment request form is designed to collect limited administrative information at the first stage. It does not request a child’s full name, identification number, exact date of birth, school name, medical reports or file uploads.</p></div>
</section>
<section class="section">
    <div class="site-shell prose">
        <p><strong>Draft for clinic review before production publication.</strong></p>
        <h2>Information collected</h2>
        <p>The website may collect a parent or guardian’s name, email address, telephone or WhatsApp number, country of residence, current location, the child’s broad age range, broad areas of concern, previous-assessment status, possible school-coordination needs, preferred contact method and a short message.</p>
        <h2>Purpose</h2>
        <p>This information is used to review the general nature of an appointment enquiry, contact the parent or guardian and discuss appropriate next steps. Submitting an enquiry does not establish a doctor-patient relationship or confirm an appointment.</p>
        <h2>Data minimisation</h2>
        <p>Please do not include a child’s full name, NRIC, passport or FIN number, exact date of birth, school name, detailed medical history, medication information, reports or confidential documents in the initial form.</p>
        <h2>Sharing and service providers</h2>
        <p>Information may be processed by service providers needed to operate the website, email and security systems. It should not be used for advertising audiences or shared with advertisers.</p>
        <h2>Security</h2>
        <p>The website uses server-side validation, a security token, spam controls, rate limiting and transport security when deployed correctly. No website or email system can guarantee absolute security.</p>
        <h2>Retention</h2>
        <p>Enquiry information should be retained only for as long as reasonably needed for appointment administration, legal obligations and appropriate clinic operations. The clinic should document and approve its final retention schedule.</p>
        <h2>Analytics</h2>
        <p>Analytics, if enabled, must not receive names, contact details, child age ranges, concern categories, messages or medical information. The website can measure general page and contact-button usage without transmitting form contents.</p>
        <h2>International visitors</h2>
        <p>Families outside Singapore may submit an enquiry. Information will be processed for clinic administration in Singapore and may pass through the clinic’s approved technology providers.</p>
        <h2>Access, correction and withdrawal</h2>
        <p>The clinic’s approved privacy contact details must be added before production publication. Families may contact the clinic to ask about access, correction or withdrawal of consent, subject to applicable requirements.</p>
        <h2>Urgent concerns</h2>
        <p>The website form is not monitored as an emergency service. Seek appropriate urgent medical assistance in your location for urgent or emergency concerns.</p>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
