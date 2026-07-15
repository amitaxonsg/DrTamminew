<?php
require __DIR__ . '/includes/bootstrap.php';
http_response_code(404);
$page = [
    'title' => 'Page Not Found | Dr Tammi Quek Clinic',
    'description' => 'The requested clinic website page could not be found.',
    'path' => '404',
];
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Page not found</p><h1>We could not find that page</h1><p class="lead">The link may have changed or the address may have been entered incorrectly.</p><div class="hero-actions"><a class="button button-primary" href="<?= e(site_url()) ?>">Return to Home</a><a class="button button-outline" href="<?= e(site_url('contact/')) ?>">Contact the Clinic</a></div></div>
        <div class="page-card"><h2>Useful pages</h2><p><a href="<?= e(site_url('services/')) ?>">Services</a><br><a href="<?= e(site_url('concerns/')) ?>">Concerns we support</a><br><a href="<?= e(site_url('faq/')) ?>">Frequently asked questions</a></p></div>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
