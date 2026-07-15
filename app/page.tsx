'use client';

import { useEffect } from 'react';

type IconName =
  | 'calendar'
  | 'whatsapp'
  | 'phone'
  | 'mail'
  | 'shield'
  | 'sparkles'
  | 'heart'
  | 'people'
  | 'location'
  | 'clock'
  | 'autism'
  | 'brain'
  | 'speech'
  | 'book'
  | 'behaviour'
  | 'anxiety'
  | 'clipboard'
  | 'arrow';

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M7 14h3v3H7z"/></>,
    whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.7-4.7A8.5 8.5 0 1 1 20.5 11.8Z"/><path d="M8.4 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.5.1.8.8 1.3 1.9 2.3 3.3 3 .3.2.6.1.8-.1l.9-1c.2-.2.4-.3.7-.1l2 .9c.3.1.4.3.4.5 0 .4-.2 1.4-.9 2-.6.6-1.5.8-2.4.6-1.5-.3-3.4-1.2-5.1-2.8-1.5-1.4-2.7-3.3-3-4.8-.2-1 .1-1.8.6-2.4Z"/></>,
    phone: <path d="M6.6 3h3l1.5 4.3-2 1.8a15 15 0 0 0 5.8 5.8l1.8-2 4.3 1.5v3c0 1.1-.9 2-2 2C10.7 19.4 4.6 13.3 4.6 5c0-1.1.9-2 2-2Z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    sparkles: <><path d="m12 2 1.2 3.8L17 7l-3.8 1.2L12 12l-1.2-3.8L7 7l3.8-1.2L12 2ZM19 13l.7 2.3L22 16l-2.3.7L19 19l-.7-2.3L16 16l2.3-.7L19 13ZM5 14l.9 2.6L8.5 17l-2.6.9L5 20.5l-.9-2.6L1.5 17l2.6-.4L5 14Z"/></>,
    heart: <path d="M20.8 5.7a5.4 5.4 0 0 0-7.7 0L12 6.8l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.7Z"/>,
    people: <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2.5 20v-1.5A4.5 4.5 0 0 1 7 14h2a4.5 4.5 0 0 1 4.5 4.5V20M14 14h3a4.5 4.5 0 0 1 4.5 4.5V20"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>,
    autism: <path d="M8 3h4v4h4v4h4v4h-4v4h-4v-4H8v4H4v-4H0v-4h4V7h4V3Z"/>,
    brain: <><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3h3V4H9Z"/><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3h-3V4h3ZM8 9h4M12 14h4"/></>,
    speech: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8M8 13h5"/></>,
    book: <><path d="M3 5h7a3 3 0 0 1 3 3v12H6a3 3 0 0 0-3 3V5Z"/><path d="M21 5h-7a3 3 0 0 0-3 3v12h7a3 3 0 0 1 3 3V5Z"/></>,
    behaviour: <><circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5M21 20v-2a5 5 0 0 0-5-5M9 17h6M12 14v6"/></>,
    anxiety: <><path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z"/><path d="M9 10h.01M15 10h.01M9.5 15c1.7-1.2 3.3-1.2 5 0"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5"/></>,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  };

  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

const navigation = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Concerns', '#concerns'],
  ['Resources', '#resources'],
  ['International Families', '#international-families'],
  ['Schools & Professionals', '#schools-professionals'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
] as const;

const concerns: Array<{ icon: IconName; title: string; summary: string }> = [
  { icon: 'autism', title: 'Autism & Social Communication', summary: 'Support for concerns involving social interaction, communication, flexibility and development.' },
  { icon: 'brain', title: 'ADHD & Attention', summary: 'Assessment and practical guidance for attention, impulsivity and executive functioning concerns.' },
  { icon: 'speech', title: 'Speech & Language', summary: 'Review of communication development and how language needs may affect daily life and learning.' },
  { icon: 'book', title: 'Learning Difficulties', summary: 'Understanding learning profiles, school participation and factors affecting educational progress.' },
  { icon: 'behaviour', title: 'Behavioural Concerns', summary: 'A whole-child view of behaviour, development, family context and environmental demands.' },
  { icon: 'anxiety', title: 'Anxiety & Emotional Wellbeing', summary: 'Support for emotional regulation, anxiety and social-emotional concerns alongside development.' },
];

const assistantQuestions = [
  ['Does my child need a developmental assessment?', 'Families often enquire when they notice concerns involving development, communication, attention, learning, behaviour or social-emotional wellbeing. An individual consultation is needed before any conclusion can be reached.'],
  ['What happens during a first consultation?', 'The clinic reviews the child’s history, current concerns and available reports, then discusses suitable next steps with the parent or guardian.'],
  ['Do you help with ADHD or autism concerns?', 'The clinic supports a range of developmental and behavioural concerns. The assessment approach is individualised for each child and family.'],
] as const;

const faqs = [
  ['How do I request an appointment?', 'Use the appointment, WhatsApp or telephone options on this page. The clinic team reviews each request before arranging a suitable consultation.'],
  ['Why can I not select an appointment date immediately?', 'Developmental and behavioural appointments may require different preparation, reports or coordination. The clinic therefore reviews each request before confirming the appropriate appointment.'],
  ['Can families living outside Singapore enquire?', 'Yes. International families may submit an enquiry before travel so the clinic team can review the circumstances and advise on suitable next steps.'],
  ['Can the clinic communicate with schools or other professionals?', 'School or professional collaboration may be considered where appropriate, with parent or guardian authorisation and subject to practical availability.'],
  ['Does the KIMI clinic assistant provide a diagnosis?', 'No. The assistant provides general educational information only and does not diagnose a condition or replace an individual medical consultation.'],
] as const;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://new.drtammiquek.com';
const isPreview = process.env.NEXT_PUBLIC_SITE_ENV !== 'production';
const kimiUrl = process.env.NEXT_PUBLIC_KIMI_URL ?? 'https://www.kimi.com/';
const enquiryUrl = process.env.NEXT_PUBLIC_ENQUIRY_URL ?? 'https://drtammiquek.com/paediatrics-clinic/contact/';

const clinicSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': `${siteUrl}/#clinic`,
      name: 'Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic',
      url: `${siteUrl}/`,
      telephone: '+65 6397 6637',
      medicalSpecialty: 'Developmental and Behavioural Paediatrics',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10 Sinaran Drive, #10-12 Novena Medical Center',
        addressLocality: 'Singapore',
        postalCode: '307506',
        addressCountry: 'SG',
      },
      areaServed: ['Singapore', 'Southeast Asia', 'International families'],
      knowsAbout: [
        'Developmental paediatrics',
        'Behavioural paediatrics',
        'Autism and social communication concerns',
        'ADHD and attention concerns',
        'Speech and language development',
        'Learning difficulties',
        'Child and adolescent emotional wellbeing',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Dr Tammi Quek Clinic',
      inLanguage: 'en-SG',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'Developmental & Behavioural Paediatrician Singapore | Dr Tammi Quek',
      description: 'Developmental and behavioural paediatrics in Singapore for children, adolescents and families with developmental, attention, communication, learning and social-emotional concerns.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#clinic` },
      inLanguage: 'en-SG',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export default function HomePage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest('details')?.removeAttribute('open');
  };

  return (
    <main className="siteRoot">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {isPreview && (
        <div className="previewBar">Preview site — enquiry delivery is handled by the existing clinic form and search indexing is blocked.</div>
      )}

      <header className="siteHeader">
        <div className="shell headerInner">
          <a className="brand" href="#top" aria-label="Dr Tammi Quek clinic home">
            <img src="/assets/images/logo.svg" alt="Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic" width="310" height="72" />
          </a>

          <nav className="desktopNav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>

          <a className="button buttonPrimary headerCta" href="#contact"><Icon name="calendar" size={18} /> Request an Appointment</a>

          <details className="mobileMenu">
            <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMobileMenu}>{label}</a>)}
              <a className="mobileAppointment" href="#contact" onClick={closeMobileMenu}>Request an Appointment</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="decor decorLeft" aria-hidden="true" />
        <div className="decor decorRight" aria-hidden="true" />
        <div className="shell heroGrid">
          <div className="heroCopy reveal" data-reveal>
            <p className="eyebrow">Developmental &amp; behavioural paediatrics in Singapore</p>
            <h1><span>Clarity and support</span> for developmental, behavioural and learning concerns.</h1>
            <p>Evidence-informed assessment and personalised care for children and adolescents—partnering with families every step of the way.</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#contact"><Icon name="calendar" size={20} /> Request an Appointment</a>
              <a className="button buttonWhatsApp" href="https://wa.me/6596274893" target="_blank" rel="noreferrer"><Icon name="whatsapp" size={21} /> WhatsApp Us</a>
            </div>
            <div className="heroValues" aria-label="Clinic values">
              <span><Icon name="heart" size={16} /> Child-centred</span>
              <span><Icon name="people" size={16} /> Family-partnered</span>
              <span><Icon name="shield" size={16} /> Individualised</span>
            </div>
          </div>

          <div className="portraitWrap reveal revealDelay1" data-reveal aria-label="Approved current portrait of Dr Tammi Quek">
            <div className="portraitPhoto" role="img" aria-label="Dr Tammi Quek, developmental and behavioural paediatrician in Singapore" />
            <span className="assetNote">Current approved headshot</span>
          </div>

          <aside className="assistantCard reveal revealDelay2" id="assistant" data-reveal aria-labelledby="assistantTitle">
            <div className="assistantHead">
              <Icon name="sparkles" size={29} />
              <div><strong id="assistantTitle">Ask Dr Tammi&apos;s Clinic Assistant</strong><small><span className="onlineDot" /> KIMI AI educational guide</small></div>
            </div>
            <div className="assistantBody">
              <p>Get clear, general information about clinic services, common concerns and the appointment request process.</p>
              <div className="assistantQuestions">
                {assistantQuestions.map(([question, answer]) => (
                  <details key={question}>
                    <summary><Icon name="speech" size={20} /><span>{question}</span><b>›</b></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
              <div className="assistantSafety"><Icon name="shield" size={24} /><span><strong>Educational information only.</strong> This assistant does not diagnose a condition or replace professional medical advice.</span></div>
              <a className="button buttonPrimary assistantButton" href={kimiUrl} target="_blank" rel="noreferrer"><Icon name="sparkles" size={18} /> Open KIMI Assistant</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="trustSection" id="about">
        <div className="shell trustGrid reveal" data-reveal>
          <article><Icon name="shield" size={34} /><div><strong>Specialist Paediatrician</strong><span>Developmental &amp; Behavioural Paediatrics</span></div></article>
          <article><Icon name="sparkles" size={34} /><div><strong>Individualised Care</strong><span>Guidance based on each child&apos;s needs</span></div></article>
          <article><Icon name="people" size={34} /><div><strong>Family-centred Approach</strong><span>Collaborative, respectful and empowering</span></div></article>
          <article><Icon name="location" size={34} /><div><strong>Singapore-based Clinic</strong><span>Novena Medical Center</span></div></article>
        </div>
      </section>

      <section className="contentSection aboutSection">
        <div className="shell aboutGrid">
          <div className="contentCopy reveal" data-reveal>
            <p className="eyebrow">About the clinic</p>
            <h2>A holistic view of each child&apos;s development, learning and wellbeing</h2>
            <p>Developmental and behavioural paediatrics considers how children and adolescents communicate, learn, regulate attention and emotions, participate socially and manage everyday demands.</p>
            <p>The clinic works in partnership with families to understand strengths and concerns, consider available information and provide practical, individualised guidance.</p>
            <a className="textLink" href="#services">Explore clinic services <Icon name="arrow" size={18} /></a>
          </div>
          <div className="scenePhoto sceneConsult reveal revealDelay1" data-reveal role="img" aria-label="Illustrative family consultation; no actual patients shown"><span>Illustrative family consultation</span></div>
        </div>
      </section>

      <section className="contentSection softSection" id="services">
        <div className="shell">
          <div className="sectionIntro reveal" data-reveal>
            <p className="eyebrow">Clinic services</p>
            <h2>Assessment, understanding and practical next steps</h2>
            <p>Care is tailored to the child&apos;s developmental stage, family circumstances and the nature of the concerns raised.</p>
          </div>
          <div className="serviceGrid">
            <article className="serviceCard reveal" data-reveal><Icon name="clipboard" size={34} /><h3>Developmental Assessment</h3><p>Review of developmental history, current concerns, available reports and the child&apos;s individual profile.</p></article>
            <article className="serviceCard reveal revealDelay1" data-reveal><Icon name="brain" size={34} /><h3>Attention &amp; Learning</h3><p>Support for attention, executive functioning, learning participation and school-related concerns.</p></article>
            <article className="serviceCard reveal revealDelay2" data-reveal><Icon name="people" size={34} /><h3>Family Guidance</h3><p>Clear explanations and practical recommendations to help families support the child day to day.</p></article>
            <article className="serviceCard reveal revealDelay3" data-reveal><Icon name="book" size={34} /><h3>School Collaboration</h3><p>Communication or coordination with schools and professionals where appropriate and authorised.</p></article>
          </div>
        </div>
      </section>

      <section className="contentSection" id="concerns">
        <div className="shell concernsPanel">
          <div className="sectionIntro reveal" data-reveal>
            <p className="eyebrow">Who we support</p>
            <h2>Concerns families commonly bring to the clinic</h2>
            <p>Every child is considered individually. The examples below are broad areas of concern rather than diagnoses made through a website.</p>
          </div>
          <div className="concernGrid">
            {concerns.map((concern, index) => (
              <article className={`concernCard reveal revealDelay${Math.min(index % 4, 3)}`} key={concern.title} data-reveal>
                <Icon name={concern.icon} size={40} />
                <strong>{concern.title}</strong>
                <p>{concern.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contentSection resourceSection" id="resources">
        <div className="shell resourceGrid">
          <article className="resourceCard reveal" data-reveal>
            <span className="resourceIcon"><Icon name="book" size={29} /></span>
            <p className="eyebrow">Resources</p>
            <h2>Clear information for families</h2>
            <p>Plain-language guidance about developmental paediatrics, appointment preparation and what families may expect from the clinic process.</p>
            <a className="textLink" href="#faq">Read frequently asked questions <Icon name="arrow" size={18} /></a>
          </article>
          <article className="resourceCard reveal revealDelay1" id="international-families" data-reveal>
            <span className="resourceIcon"><Icon name="location" size={29} /></span>
            <p className="eyebrow">International families</p>
            <h2>Enquire before travelling to Singapore</h2>
            <p>Families living overseas may submit an enquiry for review before arranging travel. The clinic team can advise whether a Singapore appointment may be suitable.</p>
            <a className="textLink" href="#contact">Contact the clinic <Icon name="arrow" size={18} /></a>
          </article>
          <article className="resourceCard reveal revealDelay2" id="schools-professionals" data-reveal>
            <span className="resourceIcon"><Icon name="people" size={29} /></span>
            <p className="eyebrow">Schools &amp; professionals</p>
            <h2>Collaborative support where appropriate</h2>
            <p>With suitable parent or guardian authorisation, school or professional communication may be considered according to the child&apos;s needs and practical availability.</p>
            <a className="textLink" href="#contact">Discuss coordination <Icon name="arrow" size={18} /></a>
          </article>
        </div>
      </section>

      <section className="contentSection processArea">
        <div className="shell storyGrid">
          <div className="scenePhoto scenePlay reveal" data-reveal role="img" aria-label="Illustrative developmental activity with children; no actual patients shown"><span>Illustrative developmental activity</span></div>

          <div className="processCard reveal revealDelay1" data-reveal>
            <p className="eyebrow">A clear, human-managed process</p>
            <h2>How an appointment request works</h2>
            <p>Appointment requests are reviewed before a suitable consultation is arranged because each child and family may require different preparation.</p>
            <div className="steps">
              <div><span>1</span><i><Icon name="calendar" size={27} /></i><strong>Send an Enquiry</strong></div>
              <b><Icon name="arrow" size={21} /></b>
              <div><span>2</span><i><Icon name="people" size={27} /></i><strong>Clinic Review</strong></div>
              <b><Icon name="arrow" size={21} /></b>
              <div><span>3</span><i><Icon name="clipboard" size={27} /></i><strong>Assessment Plan</strong></div>
              <b><Icon name="arrow" size={21} /></b>
              <div><span>4</span><i><Icon name="heart" size={27} /></i><strong>Practical Support</strong></div>
            </div>
          </div>

          <div className="scenePhoto sceneLearning reveal revealDelay2" data-reveal role="img" aria-label="Illustrative parent and child learning activity; no actual patients shown"><span>Illustrative parent and child learning</span></div>
        </div>
        <p className="imageDisclaimer shell">Illustrative images; no actual patients shown. Final approved clinic images can replace these staging visuals later.</p>
      </section>

      <section className="contentSection faqSection" id="faq">
        <div className="shell faqGrid">
          <div className="sectionIntro reveal" data-reveal>
            <p className="eyebrow">Frequently asked questions</p>
            <h2>Helpful answers before contacting the clinic</h2>
            <p>These answers provide general information. An individual consultation is needed for advice about a specific child.</p>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer], index) => (
              <details className={`faqItem reveal revealDelay${Math.min(index % 4, 3)}`} key={question} data-reveal>
                <summary><span>{question}</span><b>+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection" id="contact">
        <div className="shell ctaBar reveal" data-reveal>
          <div className="ctaTitle"><span><Icon name="calendar" size={27} /></span><div><strong>Ready to take the next step?</strong><small>Contact the clinic team to discuss an appointment request.</small></div></div>
          <a href="https://wa.me/6596274893" target="_blank" rel="noreferrer" className="contactPill whatsappPill"><Icon name="whatsapp" size={23} /><span>WhatsApp Us</span></a>
          <a href="tel:+6563976637" className="contactPill"><Icon name="phone" size={22} /><span>+65 6397 6637</span></a>
          <a href={enquiryUrl} className="contactPill"><Icon name="mail" size={22} /><span>Send an Enquiry</span></a>
          <a href={enquiryUrl} className="button buttonPrimary"><Icon name="calendar" size={20} /> Request an Appointment</a>
        </div>
      </section>

      <section className="contactDetails">
        <div className="shell detailGrid reveal" data-reveal>
          <article><Icon name="location" size={30} /><div><strong>Novena Medical Center</strong><span>10 Sinaran Drive, #10-12<br />Singapore 307506</span></div></article>
          <article><Icon name="location" size={30} /><div><strong>Near Novena MRT</strong><span>Convenient access by MRT,<br />bus and taxi</span></div></article>
          <article><Icon name="clock" size={30} /><div><strong>By appointment</strong><span>Arrangements are confirmed<br />by the clinic team</span></div></article>
          <article><Icon name="phone" size={30} /><div><strong>Contact</strong><span>Telephone: +65 6397 6637<br />WhatsApp: +65 9627 4893</span></div></article>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="shell footerInner">
          <a className="footerBrand" href="#top"><img src="/assets/images/logo.svg" alt="Dr Tammi Quek Clinic" width="260" height="60" /></a>
          <p>General website information does not replace individual medical advice, assessment, diagnosis, treatment or emergency care.</p>
          <div className="footerLinks">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <small>© 2026 Dr Tammi Quek Developmental &amp; Behavioural Paediatrics Clinic.</small>
        </div>
      </footer>
    </main>
  );
}
