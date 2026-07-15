<?php
require dirname(__DIR__) . '/includes/bootstrap.php';
$concernFaqs = [
    ['question' => 'Does a concern automatically mean a diagnosis?', 'answer' => 'No. Similar concerns can have different explanations. An individual clinical assessment is needed before conclusions are made.'],
    ['question' => 'Should I wait until school problems become severe?', 'answer' => 'Families may enquire whenever a developmental, learning, attention, behavioural or emotional concern is affecting the child or causing uncertainty.'],
    ['question' => 'Can several concerns occur together?', 'answer' => 'Yes. Development, communication, attention, learning, behaviour and emotional wellbeing can influence one another, which is why a holistic view is important.'],
];
$page = [
    'title' => 'Developmental and Behavioural Concerns in Children | Singapore',
    'description' => 'Plain-language information about developmental delays, autism and social communication, ADHD, speech and language, learning, behaviour, anxiety and related concerns.',
    'path' => 'concerns',
    'faqs' => $concernFaqs,
];
require dirname(__DIR__) . '/includes/header.php';
?>
<nav class="site-shell breadcrumbs" aria-label="Breadcrumb"><a href="<?= e(site_url()) ?>">Home</a> / Concerns</nav>
<section class="page-hero">
    <div class="site-shell page-hero-grid">
        <div><p class="eyebrow">Concerns we support</p><h1>Developmental, behavioural, learning and social-emotional concerns</h1><p class="lead">A concern does not by itself establish a diagnosis. The purpose of an individual consultation is to understand the child’s development, strengths, daily functioning and context more fully.</p></div>
        <div class="page-card"><h2>Not sure where your concern fits?</h2><p>Send a short, general summary. Clinic staff will contact you to understand the enquiry before an appointment is arranged.</p><a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Contact the Clinic</a></div>
    </div>
</section>
<section class="section">
    <div class="site-shell content-grid">
        <article class="content-card"><h2>Autism and Social Communication</h2><p>Concerns may involve social interaction, communication, flexibility, sensory experiences or patterns of behaviour. Individual assessment is required.</p></article>
        <article class="content-card"><h2>Developmental Delays</h2><p>Families may notice differences in movement, communication, play, independence, learning or other developmental areas.</p></article>
        <article class="content-card"><h2>Speech and Language</h2><p>Concerns may include delayed speech, difficulty understanding language, expressing ideas or using communication socially.</p></article>
        <article class="content-card"><h2>ADHD and Attention</h2><p>Attention, activity level, impulse control and executive functioning are considered in relation to the child’s age, environment and demands.</p></article>
        <article class="content-card"><h2>Learning Difficulties</h2><p>Learning concerns may affect reading, writing, mathematics, memory, processing, classroom participation or academic confidence.</p></article>
        <article class="content-card"><h2>Behavioural Concerns</h2><p>Behaviour is considered alongside communication, emotional regulation, development, relationships and environmental expectations.</p></article>
        <article class="content-card"><h2>Anxiety and Emotional Wellbeing</h2><p>Anxiety, worries, avoidance or emotional distress may affect home life, school participation, friendships and learning.</p></article>
        <article class="content-card"><h2>Prematurity and Early Development</h2><p>Children born prematurely may benefit from developmental review where there are questions about progress or participation.</p></article>
        <article class="content-card"><h2>Genetic or Complex Developmental Needs</h2><p>Developmental and behavioural support may form part of wider care for children with genetic or complex medical circumstances.</p></article>
    </div>
</section>
<section class="section section-soft">
    <div class="site-shell">
        <div class="section-head"><div><p class="eyebrow">A connected picture</p><h2>Why a holistic view matters</h2></div><p class="section-copy">Children do not experience development, learning, behaviour and emotions as separate categories. Understanding how these areas interact can support more useful recommendations.</p></div>
        <div class="faq-list">
            <?php foreach ($concernFaqs as $index => $faq): $id = 'concern-faq-' . $index; ?>
            <div class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="<?= e($id) ?>" data-accordion-button><?= e($faq['question']) ?></button><div id="<?= e($id) ?>" class="faq-answer" hidden><?= e($faq['answer']) ?></div></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php require dirname(__DIR__) . '/includes/footer.php'; ?>
