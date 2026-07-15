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

const concerns: Array<{ icon: IconName; title: string }> = [
  { icon: 'autism', title: 'Autism' },
  { icon: 'brain', title: 'ADHD' },
  { icon: 'speech', title: 'Speech & Language' },
  { icon: 'book', title: 'Learning Difficulties' },
  { icon: 'behaviour', title: 'Behavioural Concerns' },
  { icon: 'anxiety', title: 'Anxiety' },
];

const assistantQuestions = [
  ['Does my child need a developmental assessment?', 'Families often enquire when they notice concerns involving development, communication, attention, learning, behaviour or social-emotional wellbeing. A consultation is required before any conclusion can be reached.'],
  ['What happens during a first consultation?', 'The clinic reviews the child’s history, current concerns and available reports, then discusses suitable next steps with the parent or guardian.'],
  ['Do you help with ADHD or autism concerns?', 'The clinic supports a range of developmental and behavioural concerns. The assessment approach is individualised for each child and family.'],
];

const isPreview = process.env.NEXT_PUBLIC_SITE_ENV !== 'production';

export default function HomePage() {
  return (
    <main>
      {isPreview && (
        <div className="previewBar">Preview site — enquiry delivery is disabled and search indexing is blocked.</div>
      )}

      <header className="siteHeader">
        <div className="shell headerInner">
          <a className="brand" href="#top" aria-label="Dr Tammi Quek clinic home">
            <span className="brandMark" aria-hidden="true"><span /><span /></span>
            <span className="brandWords">
              <strong>Dr Tammi Quek</strong>
              <small>Developmental &amp; Behavioural Paediatrics Clinic</small>
            </span>
          </a>

          <nav className="desktopNav" aria-label="Primary navigation">
            <a href="#about">About <span>⌄</span></a>
            <a href="#services">Services <span>⌄</span></a>
            <a href="#conditions">Conditions <span>⌄</span></a>
            <a href="#resources">Resources <span>⌄</span></a>
            <a href="#assistant">Ask Dr Tammi <span>⌄</span></a>
          </nav>

          <a className="button buttonPrimary compact" href="#contact"><Icon name="phone" size={18} /> Contact</a>

          <details className="mobileMenu">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#conditions">Conditions</a>
              <a href="#resources">Resources</a>
              <a href="#assistant">Ask Dr Tammi</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="decor decorLeft" aria-hidden="true" />
        <div className="decor decorRight" aria-hidden="true" />
        <div className="shell heroGrid">
          <div className="heroCopy">
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

          <div className="portraitWrap" aria-label="Approved current portrait of Dr Tammi Quek">
            <div className="portraitPhoto" role="img" aria-label="Dr Tammi Quek portrait; approved image loads when supplied" />
            <span className="assetNote">Current approved headshot</span>
          </div>

          <aside className="assistantCard" id="assistant" aria-labelledby="assistantTitle">
            <div className="assistantHead">
              <Icon name="sparkles" size={29} />
              <div><strong id="assistantTitle">Ask Dr Tammi&apos;s Clinic Assistant</strong><small><span className="onlineDot" /> Educational guide</small></div>
            </div>
            <div className="assistantBody">
              <p>Get clear, general information about clinic services and the appointment request process.</p>
              <div className="assistantQuestions">
                {assistantQuestions.map(([question, answer]) => (
                  <details key={question}>
                    <summary><Icon name="speech" size={20} /><span>{question}</span><b>›</b></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
              <div className="assistantSafety"><Icon name="shield" size={24} /><span><strong>Educational information only.</strong> This guide does not diagnose a condition or replace professional medical advice.</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="trustSection" id="about">
        <div className="shell trustGrid">
          <article><Icon name="shield" size={34} /><div><strong>Specialist Paediatrician</strong><span>Developmental &amp; Behavioural Paediatrics</span></div></article>
          <article><Icon name="sparkles" size={34} /><div><strong>Individualised Care</strong><span>Guidance based on each child&apos;s needs</span></div></article>
          <article><Icon name="people" size={34} /><div><strong>Family-centred Approach</strong><span>Collaborative, respectful and empowering</span></div></article>
          <article><Icon name="location" size={34} /><div><strong>Singapore-based Clinic</strong><span>Novena Medical Center</span></div></article>
        </div>
      </section>

      <section className="contentSection" id="conditions">
        <div className="shell concernsPanel">
          <div className="sectionIntro">
            <p className="eyebrow">Who we support</p>
            <h2>Who We Help</h2>
            <p>We support children, adolescents and young adults with a range of developmental and behavioural concerns.</p>
          </div>
          <div className="concernGrid">
            {concerns.map((concern) => (
              <article className="concernCard" key={concern.title}>
                <Icon name={concern.icon} size={43} />
                <strong>{concern.title}</strong>
              </article>
            ))}
          </div>
          <div className="scenePhoto sceneConsult" role="img" aria-label="Illustrative family consultation image; approved image loads when supplied">
            <span>Illustrative family consultation</span>
          </div>
        </div>
      </section>

      <section className="contentSection processArea" id="services">
        <div className="shell storyGrid">
          <div className="scenePhoto scenePlay" role="img" aria-label="Illustrative developmental activity with family; approved image loads when supplied">
            <span>Illustrative developmental activity</span>
          </div>

          <div className="processCard">
            <p className="eyebrow">A clear, human-managed process</p>
            <h2>How It Works</h2>
            <p>A supportive journey for your child and family. Appointment requests are reviewed before a suitable consultation is arranged.</p>
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

          <div className="scenePhoto sceneLearning" role="img" aria-label="Illustrative parent and child learning image; approved image loads when supplied">
            <span>Illustrative parent and child learning</span>
          </div>
        </div>
        <p className="imageDisclaimer shell">Illustrative image areas; no actual patients shown. Final approved images will replace the staging placeholders.</p>
      </section>

      <section className="ctaSection" id="contact">
        <div className="shell ctaBar">
          <div className="ctaTitle"><span><Icon name="calendar" size={27} /></span><div><strong>Ready to take the next step?</strong><small>Contact the clinic team to discuss an appointment request.</small></div></div>
          <a href="https://wa.me/6596274893" target="_blank" rel="noreferrer" className="contactPill whatsappPill"><Icon name="whatsapp" size={23} /><span>WhatsApp Us</span></a>
          <a href="tel:+6563976637" className="contactPill"><Icon name="phone" size={22} /><span>+65 6397 6637</span></a>
          <a href="#contactForm" className="contactPill"><Icon name="mail" size={22} /><span>Send an Enquiry</span></a>
          <a href="#contactForm" className="button buttonPrimary"><Icon name="calendar" size={20} /> Request an Appointment</a>
        </div>
      </section>

      <section className="contactDetails" id="contactForm">
        <div className="shell detailGrid">
          <article><Icon name="location" size={30} /><div><strong>Novena Medical Center</strong><span>10 Sinaran Drive, #10-12<br />Singapore 307506</span></div></article>
          <article><Icon name="location" size={30} /><div><strong>Near Novena MRT</strong><span>Convenient access by MRT,<br />bus and taxi</span></div></article>
          <article><Icon name="clock" size={30} /><div><strong>By appointment</strong><span>Clinic arrangements are<br />confirmed by the clinic team</span></div></article>
          <article><Icon name="phone" size={30} /><div><strong>Contact</strong><span>Telephone: +65 6397 6637<br />WhatsApp: +65 9627 4893</span></div></article>
        </div>
      </section>

      <footer className="siteFooter" id="resources">
        <div className="shell footerInner">
          <div className="footerBrand"><strong>Dr Tammi Quek</strong><span>Developmental &amp; Behavioural Paediatrics Clinic</span></div>
          <p>General website information does not replace individual medical advice, assessment or emergency care.</p>
          <div className="footerLinks"><a href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#conditions">Concerns</a><a href="#contact">Contact</a></div>
          <small>© 2026 Dr Tammi Quek Developmental &amp; Behavioural Paediatrics Clinic.</small>
        </div>
      </footer>
    </main>
  );
}
