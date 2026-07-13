<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'Thank You | Dr Tammi Quek Clinic',
    'description' => 'Confirmation that an appointment enquiry has been submitted for clinic review.',
    'path' => 'thank-you',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Enquiry received</p><h1>Thank you for contacting the clinic</h1><p class="lead">This is an appointment request, not a confirmed appointment. The clinic team will review the information and contact you to discuss suitable next steps.</p><div class="hero-actions"><a class="button button-primary" href="<?= e(site_url()) ?>">Return to Home</a><a class="button button-outline" href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">WhatsApp the Clinic</a></div></div>
        <div class="page-card"><h2>Please remember</h2><p>Do not send identification numbers, detailed medical records or confidential school documents unless the clinic team requests them and provides an appropriate method.</p></div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
