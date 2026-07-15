<?php
require __DIR__ . '/includes/bootstrap.php';

$homeFaqs = [
    ['question' => 'What is developmental and behavioural paediatrics?', 'answer' => 'It is a paediatric specialty focused on how children and adolescents develop, communicate, learn, behave and manage social and emotional demands.'],
    ['question' => 'How do I request an appointment?', 'answer' => 'Send a short enquiry through the website, WhatsApp or telephone. The clinic team reviews each request and contacts the family before arranging an appointment.'],
    ['question' => 'Why can I not choose an appointment date online?', 'answer' => 'The clinic first needs to understand the child’s needs, previous assessments and whether coordination with a school or other professionals may be required.'],
    ['question' => 'Can families living outside Singapore enquire?', 'answer' => 'Yes. Families living overseas may submit an enquiry. The clinic team will review the circumstances before advising whether an appointment in Singapore may be suitable.'],
    ['question' => 'Can the clinic communicate with schools?', 'answer' => 'School communication or visits may be considered where appropriate, with suitable parent or guardian authorisation and subject to location and availability.'],
];

$page = [
    'title' => 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    'description' => 'Holistic developmental and behavioural paediatrics in Singapore for children, adolescents and families with developmental, attention, learning, communication and social-emotional concerns.',
    'path' => '',
    'faqs' => $homeFaqs,
];

$assistantQuestions = [
    'Does my child need a developmental assessment?',
    'What happens during a first consultation?',
    'Do you help with ADHD or autism?',
];

$highlights = [
    ['Specialist Paediatrician', 'Developmental & Behavioural Paediatrics', 'M12 2l7 3v6c0 5.3-3.4 9.4-7 11c-3.6-1.6-7-5.7-7-11V5zm-1 6v5l4 2'],
    ['Evidence-based Care', 'Aligned with international best practices', 'M12 3l2.2 4.5L19 8l-3.5 3.4.8 4.8L12 14.7 7.7 16.2l.8-4.8L5 8l4.8-.5z'],
    ['Family-centred Approach', 'Collaborative, respectful and empowering', 'M8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m8 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6M3.5 20a4.5 4.5 0 0 1 9 0m2 0a4.5 4.5 0 0 1 9 0'],
    ['Singapore-based Clinic', 'Conveniently located with easy accessibility', 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zm0-8a3 3 0 1 1 0-6a3 3 0 0 1 0 6z'],
];

$conditions = [
    ['Autism', 'M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 4h7v3h-7zm3-4h1v7h-1z'],
    ['ADHD', 'M12 2l2.8 5.7L21 9l-4.5 4.3 1 6.2L12 16.8 6.5 19.5l1-6.2L3 9l6.2-1.3z'],
    ['Speech & Language', 'M4 6h16v10H8l-4 4zm4 4h8m-8 3h5'],
    ['Learning Difficulties', 'M5 5h6a3 3 0 0 1 3 3v11H8a3 3 0 0 0-3 3zm14 0h-6a3 3 0 0 0-3 3v11h6a3 3 0 0 1 3 3z'],
    ['Behavioural Concerns', 'M4 18v-1.2A4.8 4.8 0 0 1 8.8 12h1.4A4.8 4.8 0 0 1 15 16.8V18m-6-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m8 9v-1a4 4 0 0 1 4-4m-2-5a2.5 2.5 0 1 0 0-5'],
    ['Anxiety', 'M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10z'],
];

$steps = [
    ['1', 'Book', 'an Appointment', 'M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1z'],
    ['2', 'Comprehensive', 'Assessment', 'M4 19v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8z'],
    ['3', 'Personalised', 'Care Plan', 'M7 4h10v16H7zM9.5 8h5M9.5 12h5M9.5 16h3'],
    ['4', 'Ongoing', 'Support', 'M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10z'],
];

$assistantUrl = kimi_chat_url() !== '' ? kimi_chat_url() : site_url('faq/');
$emailHref = clinic_email() !== '' ? 'mailto:' . clinic_email() : site_url('contact/');
$emailLabel = clinic_email() !== '' ? clinic_email() : 'Contact the clinic';

require __DIR__ . '/includes/header.php';
?>
<section class="client-home-hero" aria-labelledby="home-title">
    <div class="site-shell client-hero-grid">
        <div class="client-hero-copy">
            <p class="client-kicker">Developmental &amp; behavioural paediatrics in Singapore</p>
            <h1 id="home-title" class="client-hero-title"><span class="accent">Clarity and support</span> for developmental, behavioural and learning concerns.</h1>
            <p class="client-hero-lead">Evidence-based assessment and personalised care for children and teens—partnering with families every step of the way.</p>
            <div class="client-hero-actions">
                <a class="button button-primary" href="<?= e(site_url('contact/')) ?>">
                    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3zm13 8H4v10h16zM6 12h4v3H6z"/></svg>
                    Book an Appointment
                </a>
                <a class="button client-whatsapp" href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">
                    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2m0 18a8 8 0 0 1-4.1-1.1l-.3-.2l-2.8.9l.9-2.7l-.2-.3A8 8 0 1 1 12 20"/></svg>
                    WhatsApp Us
                </a>
            </div>
            <div class="client-values"><span>Child-centred</span><span>Family-partnered</span><span>Evidence-based</span></div>
        </div>

        <div class="client-doctor" role="img" aria-label="Dr Tammi Quek, developmental and behavioural paediatrician in Singapore"></div>

        <aside class="client-assistant" aria-labelledby="assistant-title">
            <div class="client-assistant-head">
                <div class="client-assistant-spark" aria-hidden="true">✦</div>
                <div><h2 id="assistant-title">Ask Dr Tammi’s Clinic Assistant</h2><p><span class="client-status"></span>AI Assistant</p></div>
            </div>
            <div class="client-assistant-body">
                <p class="client-assistant-intro">Get quick, reliable answers about our services. It can help with common questions and guide you to the right support.</p>
                <div class="client-question-list">
                    <?php foreach ($assistantQuestions as $question): ?>
                    <a class="client-question" href="<?= e($assistantUrl) ?>"<?= kimi_chat_url() !== '' ? ' target="_blank" rel="noopener"' : '' ?>><span class="bubble" aria-hidden="true">◯</span><span><?= e($question) ?></span><span class="arrow" aria-hidden="true">›</span></a>
                    <?php endforeach; ?>
                </div>
                <div class="client-assistant-note"><span aria-hidden="true">♢</span><div><strong>Educational and safe.</strong><br>It does not replace professional advice and will refer you to Dr Tammi when appropriate.</div></div>
            </div>
        </aside>
    </div>
</section>

<div class="client-highlight-wrap">
    <div class="site-shell client-highlights" aria-label="Clinic highlights">
        <?php foreach ($highlights as $item): ?>
        <div class="client-highlight">
            <span class="client-icon-circle" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="<?= e($item[2]) ?>"/></svg></span>
            <div><strong><?= e($item[0]) ?></strong><span><?= e($item[1]) ?></span></div>
        </div>
        <?php endforeach; ?>
    </div>
</div>

<section class="client-main-grid-section" aria-labelledby="who-title">
    <div class="site-shell client-card-grid">
        <article class="client-panel client-who">
            <h2 id="who-title">Who We Help</h2>
            <p>We support children and teens with a range of developmental and behavioural concerns.</p>
        </article>

        <?php foreach ($conditions as $condition): ?>
        <a class="client-panel client-condition" href="<?= e(site_url('concerns/')) ?>">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="<?= e($condition[1]) ?>"/></svg>
            <strong><?= e($condition[0]) ?></strong>
        </a>
        <?php endforeach; ?>

        <div class="client-panel client-photo client-photo-top" role="img" aria-label="Illustrative family consultation"></div>
        <div class="client-panel client-photo client-photo-left" role="img" aria-label="Illustrative developmental support activity with a family"></div>

        <article class="client-panel client-process" aria-labelledby="process-title">
            <h2 id="process-title">How It Works</h2>
            <p>A simple, supportive journey for your child and family.</p>
            <div class="client-steps">
                <?php foreach ($steps as $step): ?>
                <div class="client-step">
                    <span class="client-step-number"><?= e($step[0]) ?></span>
                    <span class="client-step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="<?= e($step[3]) ?>"/></svg></span>
                    <div><strong><?= e($step[1]) ?></strong><span><?= e($step[2]) ?></span></div>
                </div>
                <?php endforeach; ?>
            </div>
        </article>

        <div class="client-panel client-photo client-photo-right" role="img" aria-label="Illustrative parent and child learning activity"></div>
    </div>
</section>

<section class="client-cta-wrap" aria-labelledby="next-step-title">
    <div class="site-shell">
        <div class="client-cta">
            <div class="client-cta-intro">
                <span class="client-cta-round" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M7 2v3m10-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1zM8 12h3v3H8z"/></svg></span>
                <div><h2 id="next-step-title">Ready to take the next step?</h2><p>We’re here to help your child thrive.</p></div>
            </div>
            <a class="client-chip green" href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">◯ WhatsApp Us</a>
            <a class="client-chip" href="tel:<?= e(CLINIC_PHONE_URI) ?>">☎ <?= e(CLINIC_PHONE_DISPLAY) ?></a>
            <a class="client-chip" href="<?= e($emailHref) ?>">✉ <?= e($emailLabel) ?></a>
            <a class="button button-primary" href="<?= e(site_url('contact/')) ?>">▣ Book an Appointment</a>
        </div>

        <div class="client-info">
            <div class="client-info-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zm0-8a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/></svg><div><strong><?= e(CLINIC_ADDRESS_LINE_1) ?></strong><p><?= e(CLINIC_ADDRESS_LINE_2) ?><br><?= e(CLINIC_ADDRESS_LINE_3) ?></p></div></div>
            <div class="client-info-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M5 18V8l7-4 7 4v10M3 18h18M8 18v-4h8v4"/></svg><div><strong>Near Novena MRT</strong><p>Easy access by MRT and connected mall access.</p></div></div>
            <div class="client-info-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0a10 10 0 0 1 20 0z"/></svg><div><strong>Appointments by Review</strong><p>Each enquiry is reviewed before a suitable appointment is arranged.</p></div></div>
            <div class="client-info-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M6.6 10.8c1.6 3 3.9 5.3 6.9 6.9l2.3-2.3c.3-.3.8-.4 1.2-.3c1 .3 2 .4 3 .4V21C10.8 21 3 13.2 3 3h4.9c0 1 .1 2 .4 3c.1.4 0 .9-.3 1.2z"/></svg><div><strong><?= e(CLINIC_PHONE_DISPLAY) ?></strong><p><?= clinic_email() !== '' ? e(clinic_email()) : 'Contact via the website form or WhatsApp.' ?></p></div></div>
        </div>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
