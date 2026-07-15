<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$faqs = [
    ['question' => 'What is developmental and behavioural paediatrics?', 'answer' => 'It is a paediatric specialty focused on children’s development, communication, learning, attention, behaviour, relationships and social-emotional wellbeing.'],
    ['question' => 'Does the clinic provide routine general paediatric care?', 'answer' => 'No. The clinic focuses on developmental and behavioural paediatrics and does not replace a child’s regular paediatrician or provide routine acute-care services.'],
    ['question' => 'How do I request an appointment?', 'answer' => 'Submit a short website enquiry, contact the clinic through WhatsApp or telephone, or use the approved clinic email when it is available.'],
    ['question' => 'Why can I not choose a date online?', 'answer' => 'The clinic first needs to understand the child’s needs, any previous assessment and whether school or professional coordination may be relevant. Staff therefore arrange appointments manually.'],
    ['question' => 'Does submitting the form confirm an appointment?', 'answer' => 'No. The form is an appointment request. Clinic staff will contact the parent or guardian before any appointment is confirmed.'],
    ['question' => 'What information should I provide initially?', 'answer' => 'Provide parent or guardian contact details, country of residence, the child’s age range, broad areas of concern and a short summary. Do not include identification numbers or detailed medical records.'],
    ['question' => 'Should I upload reports?', 'answer' => 'No. The initial form does not accept uploads. If reports are needed, the clinic team will advise what is relevant and how it should be shared.'],
    ['question' => 'Can the clinic communicate with my child’s school?', 'answer' => 'School communication or visits may be considered where appropriate, authorised and practically possible. Arrangements are made manually.'],
    ['question' => 'Can overseas families submit an enquiry?', 'answer' => 'Yes. Families outside Singapore may send an enquiry for review before appointment or travel arrangements are made.'],
    ['question' => 'Does the Clinic Information Guide diagnose conditions?', 'answer' => 'No. The guide provides general educational and clinic information only. It does not assess symptoms or replace a consultation.'],
    ['question' => 'Is the enquiry form suitable for urgent concerns?', 'answer' => 'No. Do not use the form for an urgent or emergency medical concern. Seek appropriate urgent medical assistance in your location.'],
];
$page = [
    'title' => 'Frequently Asked Questions | Dr Tammi Quek Clinic',
    'description' => 'Answers about developmental paediatrics, appointment requests, school coordination, international enquiries, privacy and preparing to contact the clinic.',
    'path' => 'faq',
    'faqs' => $faqs,
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / FAQ</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Frequently asked questions</p><h1>Practical answers before you contact the clinic</h1><p class="lead">These answers explain the clinic’s process and general scope. They are not medical advice for an individual child.</p></div>
        <div class="page-card"><h2>Still have a question?</h2><p>Send a short enquiry without confidential reports or identification details. The clinic team will contact you.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Contact the Clinic</a></div>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell faq-list">
        <?php foreach ($faqs as $index => $faq): $id = 'faq-' . $index; ?>
        <div class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="<?= e($id) ?>" data-accordion-button><?= e($faq['question']) ?></button><div id="<?= e($id) ?>" class="faq-answer" hidden><?= e($faq['answer']) ?></div></div>
        <?php endforeach; ?>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
