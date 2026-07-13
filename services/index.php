<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$page = [
    'title' => 'Developmental Paediatrics Services Singapore | Dr Tammi Quek',
    'description' => 'Developmental and behavioural paediatrics consultations, assessment, parent guidance and appropriate coordination with schools and professionals in Singapore.',
    'path' => 'services',
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Services</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Clinic services</p><h1>Individualised support for developmental and behavioural concerns</h1><p class="lead">Recommendations and next steps depend on the child’s needs, previous assessments and circumstances. The clinic team first reviews each enquiry before arranging an appointment.</p></div>
        <div class="page-card"><h2>Not an instant booking system</h2><p>The clinic does not offer online date selection. Staff contact each family so the appropriate consultation and any practical coordination can be arranged.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Send an Enquiry</a></div>
    </div>
</section>
<section class="section">
    <div class="site-shell">
        <div class="content-grid">
            <article class="content-card"><h2>Developmental Consultation</h2><p>A structured discussion of concerns, developmental history, strengths, daily functioning and relevant learning or social-emotional needs.</p></article>
            <article class="content-card"><h2>Developmental Assessment</h2><p>The assessment approach is selected according to the child’s age, needs, previous evaluations and the clinical questions being considered.</p></article>
            <article class="content-card"><h2>Attention and Learning</h2><p>Support for concerns involving attention, activity level, executive functioning, learning and participation at home or school.</p></article>
            <article class="content-card"><h2>Autism and Communication</h2><p>Assessment and guidance for social communication, interaction, flexibility and related developmental concerns.</p></article>
            <article class="content-card"><h2>Behavioural and Emotional Needs</h2><p>Consideration of behaviour, emotional regulation, anxiety and the child’s wider developmental and environmental context.</p></article>
            <article class="content-card"><h2>Parent Guidance</h2><p>Practical explanations and strategies intended to help parents understand and support their child.</p></article>
            <article class="content-card"><h2>Review of Existing Assessments</h2><p>Relevant previous evaluations may be considered when requested through an appropriate and secure process.</p></article>
            <article class="content-card"><h2>Follow-up Support</h2><p>Follow-up is planned according to the child’s needs, progress and any coordination required with the family or other professionals.</p></article>
            <article class="content-card"><h2>School and Professional Coordination</h2><p>Communication or visits may be considered where appropriate, authorised and practically possible.</p></article>
        </div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell split-panel">
        <div class="split-copy"><p class="eyebrow">Scope of practice</p><h2>Developmental and behavioural paediatrics</h2><p>The clinic focuses on developmental and behavioural paediatrics. It does not replace a child’s regular paediatrician and does not provide routine general paediatric services such as immunisations or acute sick-child care.</p><p>For urgent or emergency medical concerns, seek appropriate urgent assistance in your location.</p></div>
        <div class="split-media"><?= image_tag('assets/images/dr-tammi-family-approved.jpg', 'Illustrative family discussion about developmental needs') ?></div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
