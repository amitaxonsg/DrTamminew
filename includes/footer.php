</main>
<footer class="site-footer">
    <div class="site-shell footer-grid">
        <section class="footer-brand" aria-labelledby="footer-brand-title">
            <img src="<?= e(asset_url('assets/images/logo-reverse.svg')) ?>" alt="" width="300" height="70" loading="lazy">
            <h2 id="footer-brand-title" class="sr-only"><?= e(CLINIC_NAME) ?></h2>
            <p>Holistic developmental and behavioural paediatrics for children, adolescents and families, based in Singapore.</p>
        </section>
        <nav aria-label="Footer navigation">
            <h2>Explore</h2>
            <a href="<?= e(site_url('about/')) ?>">About the clinic</a>
            <a href="<?= e(site_url('services/')) ?>">Services</a>
            <a href="<?= e(site_url('concerns/')) ?>">Concerns we support</a>
            <a href="<?= e(site_url('resources/')) ?>">Resources</a>
            <a href="<?= e(site_url('faq/')) ?>">Frequently asked questions</a>
        </nav>
        <nav aria-label="Families and professionals">
            <h2>For Families</h2>
            <a href="<?= e(site_url('international-families/')) ?>">International families</a>
            <a href="<?= e(site_url('schools-professionals/')) ?>">Schools &amp; professionals</a>
            <a href="<?= e(site_url('contact/')) ?>">Request an appointment</a>
            <a href="<?= e(site_url('privacy/')) ?>">Privacy</a>
        </nav>
        <section class="footer-contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">Contact the Clinic</h2>
            <address>
                <?= e(CLINIC_ADDRESS_LINE_1) ?><br>
                <?= e(CLINIC_ADDRESS_LINE_2) ?><br>
                <?= e(CLINIC_ADDRESS_LINE_3) ?>
            </address>
            <a href="tel:<?= e(CLINIC_PHONE_URI) ?>"><?= e(CLINIC_PHONE_DISPLAY) ?></a>
            <a href="<?= e(whatsapp_url()) ?>" target="_blank" rel="noopener">WhatsApp <?= e(CLINIC_WHATSAPP_DISPLAY) ?></a>
            <?php if (clinic_email() !== ''): ?>
                <a href="mailto:<?= e(clinic_email()) ?>"><?= e(clinic_email()) ?></a>
            <?php endif; ?>
        </section>
    </div>
    <div class="site-shell footer-bottom">
        <p>&copy; <?= e(current_year()) ?> Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic Pte Ltd.</p>
        <p>Information is educational and does not replace an individual medical consultation. An enquiry does not confirm an appointment.</p>
    </div>
</footer>
</body>
</html>
