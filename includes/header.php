<?php
/** @var array<string,mixed> $page */
$page = $page ?? [];
$title = (string) ($page['title'] ?? CLINIC_SHORT_NAME);
$description = (string) ($page['description'] ?? 'Developmental and behavioural paediatrics in Singapore.');
$path = (string) ($page['path'] ?? '');
$canonical = canonical_url($path);
$faqs = is_array($page['faqs'] ?? null) ? $page['faqs'] : [];

$schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
        [
            '@type' => 'MedicalClinic',
            '@id' => canonical_url() . '#clinic',
            'name' => CLINIC_NAME,
            'url' => canonical_url(),
            'telephone' => CLINIC_PHONE_DISPLAY,
            'medicalSpecialty' => 'Developmental and Behavioural Paediatrics',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => CLINIC_ADDRESS_LINE_1 . ', ' . CLINIC_ADDRESS_LINE_2,
                'addressLocality' => 'Singapore',
                'postalCode' => '307506',
                'addressCountry' => 'SG',
            ],
        ],
        [
            '@type' => 'WebSite',
            '@id' => canonical_url() . '#website',
            'url' => canonical_url(),
            'name' => CLINIC_NAME,
            'inLanguage' => 'en-SG',
        ],
        [
            '@type' => 'WebPage',
            '@id' => $canonical . '#webpage',
            'url' => $canonical,
            'name' => $title,
            'description' => $description,
            'isPartOf' => ['@id' => canonical_url() . '#website'],
            'about' => ['@id' => canonical_url() . '#clinic'],
            'inLanguage' => 'en-SG',
        ],
    ],
];

if ($faqs !== []) {
    $entities = [];
    foreach ($faqs as $faq) {
        if (!isset($faq['question'], $faq['answer'])) {
            continue;
        }
        $entities[] = [
            '@type' => 'Question',
            'name' => (string) $faq['question'],
            'acceptedAnswer' => [
                '@type' => 'Answer',
                'text' => strip_tags((string) $faq['answer']),
            ],
        ];
    }
    if ($entities !== []) {
        $schema['@graph'][] = [
            '@type' => 'FAQPage',
            '@id' => $canonical . '#faq',
            'mainEntity' => $entities,
        ];
    }
}
?>
<!doctype html>
<html lang="en-SG">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($title) ?></title>
    <meta name="description" content="<?= e($description) ?>">
    <link rel="canonical" href="<?= e($canonical) ?>">
    <meta name="robots" content="<?= is_production() ? 'index,follow,max-image-preview:large' : 'noindex,nofollow' ?>">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_SG">
    <meta property="og:title" content="<?= e($title) ?>">
    <meta property="og:description" content="<?= e($description) ?>">
    <meta property="og:url" content="<?= e($canonical) ?>">
    <meta property="og:site_name" content="<?= e(CLINIC_NAME) ?>">
    <meta property="og:image" content="<?= e(canonical_url('assets/images/social-share')) ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#981536">
    <link rel="stylesheet" href="<?= e(asset_url('assets/css/site.css')) ?>">
    <script type="application/ld+json"><?= json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
    <script src="<?= e(asset_url('assets/js/site.js')) ?>" defer></script>
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<?php if (!is_production()): ?>
<div class="preview-notice" role="status">Local preview — enquiries are not emailed and search indexing is disabled.</div>
<?php endif; ?>
<header class="site-header" data-site-header>
    <div class="site-shell header-inner">
        <a class="brand" href="<?= e(site_url()) ?>" aria-label="Dr Tammi Quek clinic home">
            <img src="<?= e(asset_url('assets/images/logo.svg')) ?>" alt="Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic" width="310" height="72">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" data-nav-toggle>
            <span class="sr-only">Open menu</span><span></span><span></span><span></span>
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation" data-primary-nav>
            <a<?= page_is('/about') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('about/')) ?>">About</a>
            <a<?= page_is('/services') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('services/')) ?>">Services</a>
            <a<?= page_is('/concerns') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('concerns/')) ?>">Concerns</a>
            <a<?= page_is('/resources') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('resources/')) ?>">Resources</a>
            <a<?= page_is('/international-families') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('international-families/')) ?>">International Families</a>
            <a<?= page_is('/schools-professionals') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('schools-professionals/')) ?>">Schools &amp; Professionals</a>
            <a<?= page_is('/faq') ? ' aria-current="page"' : '' ?> href="<?= e(site_url('faq/')) ?>">FAQ</a>
            <a href="<?= e(site_url('contact/')) ?>">Contact</a>
        </nav>
        <a class="button button-primary header-cta" href="<?= e(site_url('contact/')) ?>">Request an Appointment</a>
    </div>
</header>
<main id="main-content">
