<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'Child Development Resources | Dr Tammi Quek Singapore',
    'description' => 'Clear, educational information for families about developmental paediatrics, preparing for an enquiry, school collaboration and consultations in Singapore.',
    'path' => 'resources',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Resources</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Family resources</p><h1>Clear information to help families prepare and ask useful questions</h1><p class="lead">These resources provide general educational information. They do not diagnose a condition or replace an individual medical consultation.</p></div>
        <div class="page-card"><h2>Have an individual concern?</h2><p>The clinic team can review a short enquiry and contact you to understand the child’s needs.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Send an Enquiry</a></div>
    </div>
</section>
<section class="section">
    <div class="site-shell">
        <div class="content-grid">
            <article class="content-card"><p class="eyebrow">Guide 01</p><h2>What developmental paediatrics considers</h2><p>Developmental and behavioural paediatrics looks at development, communication, attention, learning, behaviour, relationships and emotional wellbeing in context.</p><a href="<?= e(site_url('services/')) ?>">Explore clinic services →</a></article>
            <article class="content-card"><p class="eyebrow">Guide 02</p><h2>Preparing an initial clinic enquiry</h2><p>At the first stage, provide only a short summary, your contact details, country of residence and the child’s general age range. Avoid identification numbers and detailed records.</p><a href="<?= e(site_url('contact/')) ?>">View the enquiry form →</a></article>
            <article class="content-card"><p class="eyebrow">Guide 03</p><h2>Why appointments are arranged manually</h2><p>Different children may need different types of consultation, previous information or school coordination. Staff therefore review each request before suggesting arrangements.</p><a href="<?= e(site_url('faq/')) ?>">Read common questions →</a></article>
            <article class="content-card"><p class="eyebrow">Guide 04</p><h2>Working with schools and professionals</h2><p>With appropriate authorisation, collaboration may help connect clinical understanding with the child’s learning environment and daily participation.</p><a href="<?= e(site_url('schools-professionals/')) ?>">For schools and professionals →</a></article>
            <article class="content-card"><p class="eyebrow">Guide 05</p><h2>Information for overseas families</h2><p>Families living outside Singapore can submit an enquiry for review before travel or consultation arrangements are made.</p><a href="<?= e(site_url('international-families/')) ?>">International family information →</a></article>
            <article class="content-card"><p class="eyebrow">Guide 06</p><h2>Understanding broad areas of concern</h2><p>Plain-language summaries can help families organise questions without encouraging self-diagnosis or assuming a particular outcome.</p><a href="<?= e(site_url('concerns/')) ?>">View concerns we support →</a></article>
        </div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell prose">
        <p class="eyebrow">Search-friendly, people-first content</p>
        <h2>Why these pages are public rather than hidden</h2>
        <p>Helpful medical information should be visible, understandable and accountable. The website therefore uses useful public pages instead of hidden keyword pages or repetitive country pages. This supports families and gives search and answer systems clear, factual information to interpret.</p>
        <p>All medical content should be reviewed by the clinic before production launch and updated when services or processes change.</p>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
