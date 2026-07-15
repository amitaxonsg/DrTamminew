<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$faqs = [
    ['question' => 'Can a family living outside Singapore submit an enquiry?', 'answer' => 'Yes. The clinic team can review a short initial enquiry before advising whether an appointment in Singapore may be suitable.'],
    ['question' => 'Does submitting an enquiry confirm an appointment?', 'answer' => 'No. Staff will contact the family before any appointment is arranged.'],
    ['question' => 'Should reports be uploaded with the first enquiry?', 'answer' => 'No. Please send only a short summary. The clinic team will advise if records are needed and how they should be shared.'],
    ['question' => 'Can school information be considered?', 'answer' => 'School information or communication may be considered where relevant, authorised and practical.'],
];
$page = [
    'title' => 'International Families | Developmental Paediatrics Singapore',
    'description' => 'Information for families from Indonesia, the Philippines, Malaysia and other countries seeking developmental paediatric care in Singapore.',
    'path' => 'international-families',
    'faqs' => $faqs,
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / International Families</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">International families</p><h1>Seeking developmental paediatric care in Singapore</h1><p class="lead">Families living outside Singapore are welcome to submit an enquiry. The clinic team first reviews the child’s general needs, previous assessments, location and practical requirements before advising whether an appointment in Singapore may be suitable.</p></div>
        <div class="page-card"><h2>Plan before travelling</h2><p>Submitting an enquiry does not confirm an appointment. Please wait for the clinic team to contact you before making consultation-specific arrangements.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Submit an International Enquiry</a></div>
    </div>
</section>
<section class="section">
    <div class="site-shell split-panel">
        <div class="split-copy"><p class="eyebrow">Based in Singapore</p><h2>Welcoming enquiries from overseas</h2><p>Families from Indonesia, the Philippines, Malaysia and other countries may contact the clinic team to ask whether a consultation in Singapore may be appropriate.</p><p>Each enquiry is reviewed individually. Practical discussion may include the reason for the enquiry, existing assessments, travel timing and whether school or professional coordination may be relevant.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Send a Short Enquiry</a></div>
        <div class="split-media"><?= image_tag('assets/images/international-family-approved.jpg', 'Illustrative multicultural family consultation in Singapore') ?></div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell">
        <div class="section-head"><div><p class="eyebrow">Before an appointment</p><h2>How the process works</h2></div><p class="section-copy">The first enquiry is intentionally brief. Detailed medical or school records should not be sent until requested through an appropriate method.</p></div>
        <div class="content-grid">
            <article class="content-card"><h3>1. Submit a brief enquiry</h3><p>Provide parent or guardian contact details, country of residence, the child’s age range and a short description of the main concern.</p></article>
            <article class="content-card"><h3>2. Clinic review</h3><p>The team considers the general needs, possible consultation type and any practical questions that should be discussed.</p></article>
            <article class="content-card"><h3>3. Staff contact</h3><p>A team member contacts the family to clarify information and discuss whether an appointment in Singapore may be suitable.</p></article>
            <article class="content-card"><h3>4. Records if requested</h3><p>The clinic may later request relevant reports or school information and provide instructions for appropriate sharing.</p></article>
            <article class="content-card"><h3>5. Travel planning</h3><p>Families should make consultation-specific plans only after the appointment has been arranged by clinic staff.</p></article>
            <article class="content-card"><h3>6. Ongoing coordination</h3><p>Follow-up and any communication with other professionals depend on the child’s individual circumstances.</p></article>
        </div>
        <div class="faq-list">
            <?php foreach ($faqs as $index => $faq): $id = 'international-faq-' . $index; ?>
            <div class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="<?= e($id) ?>" data-accordion-button><?= e($faq['question']) ?></button><div id="<?= e($id) ?>" class="faq-answer" hidden><?= e($faq['answer']) ?></div></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
