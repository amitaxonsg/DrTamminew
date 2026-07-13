<?php
require __DIR__ . '/includes/bootstrap.php';

$homeFaqs = [
    [
        'question' => 'What is developmental and behavioural paediatrics?',
        'answer' => 'It is a paediatric specialty focused on how children and adolescents develop, communicate, learn, behave and manage social and emotional demands.',
    ],
    [
        'question' => 'How do I request an appointment?',
        'answer' => 'Send a short enquiry through the website, WhatsApp or telephone. The clinic team reviews each request and contacts the family before arranging an appointment.',
    ],
    [
        'question' => 'Why can I not choose an appointment date online?',
        'answer' => 'The clinic first needs to understand the child’s needs, previous assessments and whether coordination with a school or other professionals may be required.',
    ],
    [
        'question' => 'Can families living outside Singapore enquire?',
        'answer' => 'Yes. Families living overseas may submit an enquiry. The clinic team will review the circumstances before advising whether an appointment in Singapore may be suitable.',
    ],
    [
        'question' => 'Can the clinic communicate with schools?',
        'answer' => 'School communication or visits may be considered where appropriate, with suitable parent or guardian authorisation and subject to location and availability.',
    ],
];

$page = [
    'title' => 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    'description' => 'Holistic developmental and behavioural paediatrics in Singapore for children, adolescents and families with developmental, attention, learning, communication and social-emotional concerns.',
    'path' => '',
    'faqs' => $homeFaqs,
];

require __DIR__ . '/includes/header.php';
?>
<section class="hero" aria-labelledby="home-title">
    <div class="site-shell hero-grid">
        <div class="hero-copy">
            <p class="eyebrow">Developmental &amp; behavioural paediatrics in Singapore</p>
            <h1 id="home-title"><span class="accent">Clarity and practical support</span> for developmental, behavioural and learning concerns</h1>
            <p class="lead">Holistic, individualised assessment and guidance for children, adolescents and their families—based in Singapore and welcoming enquiries from families overseas.</p>
            <div class="hero-actions">
                <a class="button button-primary" href="<?= e(site_url('contact/')) ?>">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3zm13 8H4v10h16zM6 12h4v3H6z"/></svg>
                    Request an Appointment
                </a>
                <a class="button button-outline" href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2m0 18a8 8 0 0 1-4.1-1.1l-.3-.2l-2.8.9l.9-2.7l-.2-.3A8 8 0 1 1 12 20m4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1s-.6.8-.8.9s-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.1c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4s-1 1-1 2.4s1 2.8 1.2 3s2 3.1 5 4.3c.7.3 1.2.5 1.7.6c.7.2 1.3.2 1.8.1c.6-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1s-.3-.2-.5-.3"/></svg>
                    WhatsApp the Clinic
                </a>
            </div>
            <p class="hero-note">Appointment requests are reviewed by the clinic team. No appointment date is selected or confirmed online.</p>
            <div class="hero-values" aria-label="Clinic approach">
                <span>Child-centred</span><span>Family-partnered</span><span>Individualised</span>
            </div>
        </div>

        <div class="portrait-card">
            <div class="portrait-frame">
                <?= image_tag('assets/images/dr-tammi-current.jpg', 'Dr Tammi Quek, developmental and behavioural paediatrician in Singapore', '', true) ?>
            </div>
            <div class="portrait-label"><strong>Dr Tammi Quek</strong><span>Developmental &amp; Behavioural Paediatrician</span></div>
        </div>

        <aside class="guide-card" aria-labelledby="guide-title">
            <div class="guide-header">
                <p class="guide-kicker">Clear, general information</p>
                <h2 id="guide-title">Clinic Information Guide</h2>
            </div>
            <div class="guide-body">
                <p class="guide-intro">Explore practical information about enquiries and the clinic. This guide does not diagnose a condition or replace an individual medical consultation.</p>
                <div class="guide-list">
                    <?php
                    $guideItems = [
                        ['Does my child need a developmental consultation?', 'Families often enquire when they have concerns about development, communication, attention, learning, behaviour or social-emotional wellbeing. An individual consultation is needed before any conclusion can be reached.'],
                        ['What happens after I send an enquiry?', 'The clinic team reviews the general information and contacts the parent or guardian to understand the child’s needs and discuss suitable next steps.'],
                        ['Does the clinic assess ADHD or autism concerns?', 'The clinic works with a range of developmental and behavioural concerns. The appropriate assessment process depends on the individual child.'],
                        ['Can families living outside Singapore enquire?', 'Yes. Overseas families may submit an enquiry for review before travel or appointment arrangements are made.'],
                        ['Can the clinic communicate with schools?', 'School communication or visits may be considered where appropriate, authorised and practically possible.'],
                    ];
                    foreach ($guideItems as $index => $item):
                        $id = 'guide-answer-' . $index;
                    ?>
                    <div class="guide-item">
                        <button class="guide-question" type="button" aria-expanded="false" aria-controls="<?= e($id) ?>" data-accordion-button><?= e($item[0]) ?></button>
                        <div class="guide-answer" id="<?= e($id) ?>" hidden><?= e($item[1]) ?></div>
                    </div>
                    <?php endforeach; ?>
                </div>
                <p class="guide-disclaimer">General educational information only. For an individual concern, contact the clinic team.</p>
                <?php if (kimi_chat_url() !== ''): ?>
                    <a class="button button-primary guide-link" href="<?= e(kimi_chat_url()) ?>" target="_blank" rel="noopener">Open Educational Assistant</a>
                <?php else: ?>
                    <a class="button button-primary guide-link" href="<?= e(site_url('faq/')) ?>">Read Clinic FAQs</a>
                <?php endif; ?>
            </div>
        </aside>
    </div>
</section>

<div class="trust-wrap">
    <div class="site-shell trust-strip" aria-label="Clinic overview">
        <?php
        $trust = [
            ['Developmental & Behavioural Paediatrics', 'Specialist developmental care'],
            ['Holistic Assessment', 'Development, learning and wellbeing'],
            ['Child-centred Approach', 'Each child considered individually'],
            ['Family Partnership', 'Collaborative and practical guidance'],
            ['Singapore-based Clinic', 'At Novena Medical Center'],
        ];
        foreach ($trust as $item):
        ?>
        <div class="trust-item">
            <span class="icon-disc" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3l7 3v5c0 4.8-3 8.3-7 10-4-1.7-7-5.2-7-10V6z"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="m9 12 2 2 4-5"/></svg></span>
            <span><strong><?= e($item[0]) ?></strong><span><?= e($item[1]) ?></span></span>
        </div>
        <?php endforeach; ?>
    </div>
</div>

<section class="section" aria-labelledby="support-title">
    <div class="site-shell support-panel">
        <div class="support-intro">
            <p class="eyebrow">Who we support</p>
            <h2 id="support-title">Who We Help</h2>
            <p>We support children, adolescents and young adults with a range of developmental, behavioural, attention, communication, learning and social-emotional concerns.</p>
            <a href="<?= e(site_url('concerns/')) ?>">View all concerns →</a>
        </div>
        <div class="concern-grid">
            <?php
            $concerns = [
                ['Autism & Social Communication', 'M8 6h8M12 2v4m-4 8h8m-6 4h4'],
                ['ADHD & Attention', 'M12 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 14v4m-4 0h8'],
                ['Speech & Language', 'M4 5h16v11H9l-5 4z'],
                ['Learning Difficulties', 'M4 4h7a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3zm16 0h-7a3 3 0 0 0-3 3v13h7a3 3 0 0 1 3 3z'],
                ['Behavioural Concerns', 'M4 19v-2a4 4 0 0 1 4-4h2m10 6v-2a4 4 0 0 0-4-4h-2M9 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6'],
                ['Anxiety & Emotional Wellbeing', 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z'],
            ];
            foreach ($concerns as $concern):
            ?>
            <a class="concern-card" href="<?= e(site_url('concerns/')) ?>">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="<?= e($concern[1]) ?>"/></svg>
                <strong><?= e($concern[0]) ?></strong>
            </a>
            <?php endforeach; ?>
        </div>
        <div>
            <div class="support-image"><?= image_tag('assets/images/dr-tammi-children-approved.jpg', 'Illustrative scene of Dr Tammi supporting children in a developmental activity') ?></div>
            <p class="image-caption">Illustrative image; no actual patients shown.</p>
        </div>
    </div>
</section>

<section class="section section-soft" aria-labelledby="approach-title">
    <div class="site-shell split-panel">
        <div class="split-copy">
            <p class="eyebrow">Our approach</p>
            <h2 id="approach-title">A Holistic and Individualised Approach</h2>
            <p>We approach and support each child and their family according to their unique concerns and needs. Every child is considered holistically across their developmental stage, social and emotional wellbeing, and academic learning.</p>
            <p>We aim to empower parents with a clearer understanding of their child’s strengths and needs, and with practical ways to support them.</p>
            <div class="principles">
                <div class="principle"><strong>Whole-child understanding</strong><span>Development, learning, behaviour and wellbeing considered together.</span></div>
                <div class="principle"><strong>Family partnership</strong><span>Parents and caregivers are active partners throughout the process.</span></div>
                <div class="principle"><strong>Individualised guidance</strong><span>Recommendations reflect each child’s needs and circumstances.</span></div>
                <div class="principle"><strong>Collaboration</strong><span>Schools and other professionals may be involved where appropriate.</span></div>
            </div>
        </div>
        <div class="split-media"><?= image_tag('assets/images/dr-tammi-family-approved.jpg', 'Illustrative discussion between Dr Tammi, children and a family') ?></div>
    </div>
</section>

<section class="section" aria-labelledby="process-title">
    <div class="site-shell process-panel">
        <div class="section-head">
            <div><p class="eyebrow">Human-managed arrangements</p><h2 id="process-title">How the Appointment Request Process Works</h2></div>
            <p class="section-copy">The clinic does not use an instant calendar because each request may involve different assessment, school and coordination needs.</p>
        </div>
        <div class="process-grid">
            <?php
            $steps = [
                ['Send an Enquiry', 'Share a short summary through the secure form, WhatsApp or telephone.'],
                ['Clinic Review', 'The team considers the general nature of the request and what information may be needed.'],
                ['Staff Follow-up', 'A team member contacts the parent or guardian to understand the circumstances.'],
                ['Appointment & Coordination', 'The suitable consultation and any appropriate school coordination are arranged manually.'],
            ];
            foreach ($steps as $index => $step):
            ?>
            <div class="process-step">
                <span class="step-number"><?= e((string) ($index + 1)) ?></span>
                <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.7" d="M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z"/></svg></span>
                <div><h3><?= e($step[0]) ?></h3><p><?= e($step[1]) ?></p></div>
            </div>
            <?php endforeach; ?>
        </div>
        <p class="process-note"><strong>Important:</strong> submitting an enquiry does not confirm an appointment. The clinic team will contact the family before arrangements are made.</p>
    </div>
</section>

<section class="section section-soft" aria-labelledby="international-title">
    <div class="site-shell international-panel">
        <div class="international-copy">
            <p class="eyebrow">International families</p>
            <h2 id="international-title">Based in Singapore, Welcoming Enquiries from Families Overseas</h2>
            <p>The clinic welcomes enquiries from families living outside Singapore. Families from Indonesia, the Philippines, Malaysia and other countries may ask whether a consultation in Singapore may be suitable.</p>
            <p>Each enquiry is reviewed individually before an appointment is arranged, including practical discussion of existing assessments, travel plans and possible school coordination.</p>
            <a class="button button-light" href="<?= e(site_url('international-families/')) ?>">Information for International Families</a>
        </div>
        <div class="international-media"><?= image_tag('assets/images/international-family-approved.jpg', 'Illustrative multicultural family consultation in Singapore') ?></div>
    </div>
</section>

<section class="section" aria-labelledby="visit-title">
    <div class="site-shell">
        <div class="section-head">
            <div><p class="eyebrow">Visit the clinic</p><h2 id="visit-title">A Convenient Novena Location</h2></div>
            <p class="section-copy">Novena Medical Center is located above Novena MRT station and is integrated with Square 2. Take the medical centre lift to Level 10 and proceed to unit #10-12.</p>
        </div>
        <div class="clinic-grid">
            <figure class="clinic-photo"><?= image_tag('assets/images/clinic-entrance.jpg', 'Clinic entrance at Novena Medical Center') ?><figcaption>Clinic entrance at Novena Medical Center</figcaption></figure>
            <figure class="clinic-photo"><?= image_tag('assets/images/clinic-reception.jpg', 'Clinic reception area') ?><figcaption>Clinic reception area</figcaption></figure>
            <figure class="clinic-photo"><?= image_tag('assets/images/clinic-waiting-1.jpg', 'Clinic waiting area') ?><figcaption>Clinic waiting area</figcaption></figure>
            <article class="location-card">
                <h3><?= e(CLINIC_SHORT_NAME) ?></h3>
                <p><?= e(CLINIC_ADDRESS_LINE_1) ?><br><?= e(CLINIC_ADDRESS_LINE_2) ?><br><?= e(CLINIC_ADDRESS_LINE_3) ?></p>
                <p>Appointments are arranged by the clinic team after reviewing each enquiry.</p>
                <div class="location-actions">
                    <a class="button button-primary" href="https://www.google.com/maps/search/?api=1&amp;query=10+Sinaran+Drive+Novena+Medical+Center+Singapore+307506" target="_blank" rel="noopener">Get Directions</a>
                    <a class="button button-outline" href="tel:<?= e(CLINIC_PHONE_URI) ?>">Call <?= e(CLINIC_PHONE_DISPLAY) ?></a>
                </div>
            </article>
        </div>
    </div>
</section>

<section class="section section-soft" aria-labelledby="faq-title">
    <div class="site-shell">
        <div class="section-head">
            <div><p class="eyebrow">Common questions</p><h2 id="faq-title">Helpful Answers Before You Enquire</h2></div>
            <a class="button button-outline" href="<?= e(site_url('faq/')) ?>">View All FAQs</a>
        </div>
        <div class="faq-list">
            <?php foreach ($homeFaqs as $index => $faq): $id = 'home-faq-' . $index; ?>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false" aria-controls="<?= e($id) ?>" data-accordion-button><?= e($faq['question']) ?></button>
                <div class="faq-answer" id="<?= e($id) ?>" hidden><?= e($faq['answer']) ?></div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section" aria-labelledby="next-step-title">
    <div class="site-shell contact-band">
        <div><h2 id="next-step-title">Ready to take the next step?</h2><p>Send an enquiry and the clinic team will contact you to understand your concerns and discuss suitable next steps.</p></div>
        <a class="contact-chip" href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">WhatsApp the Clinic</a>
        <a class="contact-chip" href="tel:<?= e(CLINIC_PHONE_URI) ?>"><?= e(CLINIC_PHONE_DISPLAY) ?></a>
        <a class="button button-primary" href="<?= e(site_url('contact/')) ?>">Request an Appointment</a>
    </div>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
