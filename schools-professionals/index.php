<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'Schools and Professionals | Dr Tammi Quek Clinic',
    'description' => 'Information about appropriate collaboration between the clinic, families, schools, therapists and other professionals supporting a child.',
    'path' => 'schools-professionals',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Schools &amp; Professionals</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Schools &amp; professionals</p><h1>Collaboration that connects understanding with daily life</h1><p class="lead">Where appropriate and properly authorised, communication with schools and other professionals may help the clinic understand how a child participates, learns and manages different settings.</p></div>
        <div class="page-card"><h2>Arranged by people, not a calendar</h2><p>School communication or visits cannot be booked automatically online. Suitability depends on the child’s needs, the school’s location and clinic availability.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Contact the Clinic</a></div>
    </div>
</section>
<section class="section">
    <div class="site-shell">
        <div class="section-head"><div><p class="eyebrow">Working together</p><h2>Possible areas of collaboration</h2></div><p class="section-copy">The exact form of collaboration is decided individually and requires appropriate parent or guardian authorisation.</p></div>
        <div class="content-grid">
            <article class="content-card"><h2>School Information</h2><p>Relevant observations may help provide context about learning, attention, communication, behaviour, social participation or classroom demands.</p></article>
            <article class="content-card"><h2>Professional Communication</h2><p>Where suitable, the clinic may communicate with therapists, psychologists, paediatricians or other professionals involved in the child’s care.</p></article>
            <article class="content-card"><h2>Practical Recommendations</h2><p>Recommendations may support shared understanding between the family, school and other professionals without replacing each professional’s role.</p></article>
            <article class="content-card"><h2>School Visits</h2><p>A visit may be considered in selected circumstances. It depends on the purpose, location, availability and what is appropriate for the child.</p></article>
            <article class="content-card"><h2>Confidentiality</h2><p>Information should be shared only through an appropriate process and with the necessary consent. Do not place confidential records in the public enquiry form.</p></article>
            <article class="content-card"><h2>Manual Coordination</h2><p>Clinic staff coordinate arrangements directly because every child, family and school situation is different.</p></article>
        </div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell split-panel">
        <div class="split-copy"><p class="eyebrow">A respectful process</p><h2>Parents remain central to communication</h2><p>The clinic does not contact a school or professional simply because an online enquiry was submitted. The need, purpose, consent and practical arrangements are discussed with the family first.</p><p>Please do not send school reports, student identification details or confidential documents through the initial website form.</p></div>
        <div class="split-media"><?= image_tag('assets/images/school-collaboration-approved.jpg', 'Illustrative discussion between a doctor, parent and education professional') ?></div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
