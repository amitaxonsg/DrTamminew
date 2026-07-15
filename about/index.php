<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'About the Clinic | Dr Tammi Quek Singapore',
    'description' => 'Learn about Dr Tammi Quek’s developmental and behavioural paediatrics clinic and its holistic, child-centred and family-partnered approach.',
    'path' => 'about',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / About</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div>
            <p class="eyebrow">About the clinic</p>
            <h1>Understanding the whole child, not only one concern</h1>
            <p class="lead">The clinic supports children, adolescents and families through developmental and behavioural paediatrics, with careful attention to development, communication, learning, behaviour and social-emotional wellbeing.</p>
        </div>
        <div class="page-card">
            <h2>Our approach</h2>
            <p>Each child is considered as an individual. The clinic works in partnership with families and, where appropriate, other professionals or schools.</p>
            <a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Request an Appointment</a>
        </div>
    </div>
</section>
<section class="section">
    <div class="site-shell split-panel">
        <div class="split-copy">
            <p class="eyebrow">Child-centred care</p>
            <h2>A holistic and individualised perspective</h2>
            <p>We approach and support each child and their family according to their unique concerns and needs. Every child is considered holistically across their developmental stage, social and emotional wellbeing, and academic learning.</p>
            <p>We aim to empower parents with a clearer understanding of their child’s strengths and needs, together with practical ways to support them.</p>
            <div class="principles">
                <div class="principle"><strong>Listen carefully</strong><span>Parents and caregivers bring essential knowledge about the child’s daily life.</span></div>
                <div class="principle"><strong>Consider context</strong><span>Home, school, relationships, development and learning are connected.</span></div>
                <div class="principle"><strong>Plan individually</strong><span>Recommendations reflect each child’s needs and circumstances.</span></div>
                <div class="principle"><strong>Work together</strong><span>Collaboration may include schools and other professionals when appropriate.</span></div>
            </div>
        </div>
        <div class="split-media"><?= image_tag('assets/images/dr-tammi-current.jpg', 'Dr Tammi Quek, developmental and behavioural paediatrician in Singapore') ?></div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell">
        <div class="section-head"><div><p class="eyebrow">Professional care</p><h2>What families can expect</h2></div><p class="section-copy">The precise assessment and follow-up process depends on the child’s needs, previous assessments and practical circumstances.</p></div>
        <div class="content-grid">
            <article class="content-card"><h3>Thoughtful assessment</h3><p>Concerns are considered in the context of the child’s development, strengths, environment and learning needs.</p></article>
            <article class="content-card"><h3>Clear communication</h3><p>Families receive explanations and practical guidance in language that supports informed decisions.</p></article>
            <article class="content-card"><h3>Appropriate collaboration</h3><p>With suitable authorisation, communication with schools or other professionals may be considered where useful.</p></article>
        </div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
