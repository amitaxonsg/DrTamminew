import Link from 'next/link';
import { JsonLd } from './components/page-hero';
import { SITE, concerns } from './lib/site';

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${SITE.productionUrl}/#clinic`,
  name: SITE.legalName,
  url: `${SITE.productionUrl}/`,
  image: `${SITE.productionUrl}/wp-content/uploads/2021/07/dr-tammi-logo-new.png`,
  medicalSpecialty: 'Developmental and Behavioural Paediatrics',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.addressLine1,
    addressLocality: 'Singapore',
    postalCode: '307506',
    addressCountry: 'SG',
  },
  areaServed: ['Singapore', 'Indonesia', 'Malaysia', 'Philippines', 'Southeast Asia'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.productionUrl}/#website`,
  name: 'Dr Tammi Quek Clinic',
  url: `${SITE.productionUrl}/`,
  inLanguage: 'en-SG',
  publisher: { '@id': `${SITE.productionUrl}/#clinic` },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={[clinicSchema, websiteSchema]} />

      <section className="homeHero">
        <div className="shell homeHeroGrid">
          <div className="homeHeroCopy" data-reveal>
            <p className="eyebrow">Developmental & behavioural paediatrics in Singapore</p>
            <h1>
              Holistic support for each child’s development, learning and emotional wellbeing.
            </h1>
            <p className="heroLead">
              We approach and support each child and family based on their unique concerns and needs.
              Every child is evaluated across developmental stages, social and emotional needs, and academic learning.
            </p>
            <div className="buttonRow">
              <Link className="button buttonPrimary" href="/contact/">Send an Enquiry</Link>
              <a className="button buttonWhatsApp" href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp the Clinic
              </a>
            </div>
            <p className="microcopy">
              Appointment dates are not selected online. Every request is screened and arranged manually by the clinic team.
            </p>
          </div>

          <div className="homePortrait" role="img" aria-label="Current approved portrait of Dr Tammi Quek" data-reveal>
            <span>Dr Tammi Quek</span>
          </div>

          <aside className="kimiCard" data-reveal>
            <p className="eyebrow light">Educational AI guide</p>
            <h2>Prepare for your enquiry with KIMI AI</h2>
            <p>
              Use the guide to organise general questions about developmental concerns, clinic services and what information may help the clinic review your request.
            </p>
            <ul>
              <li>Understand which clinic page may be relevant</li>
              <li>Prepare a concise summary for the clinic team</li>
              <li>Learn what reports or school information may be useful</li>
            </ul>
            <a className="button buttonLight" href={SITE.kimiUrl} target="_blank" rel="noreferrer">
              Open KIMI Guidance
            </a>
            <small>
              Not an online diagnosis, medical assessment, emergency service or appointment-booking system. Avoid entering identifying or highly sensitive medical information into third-party AI tools.
            </small>
          </aside>
        </div>
      </section>

      <section className="trustBand">
        <div className="shell trustGrid">
          <article data-reveal><span>01</span><h2>Whole-child perspective</h2><p>Development, behaviour, learning, social and emotional needs are considered together.</p></article>
          <article data-reveal><span>02</span><h2>Family partnership</h2><p>Parents are supported with clear explanations and practical, individualised guidance.</p></article>
          <article data-reveal><span>03</span><h2>Human-managed care</h2><p>Each enquiry and appointment pathway is reviewed by the clinic team rather than automated.</p></article>
          <article data-reveal><span>04</span><h2>Singapore clinic</h2><p>Located at Novena Medical Center, with school coordination considered where appropriate.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Concerns we support</p>
          <h2>Clear information, without reducing a child to a label.</h2>
          <p>
            Families may seek help because of communication, attention, learning, behaviour, development or emotional wellbeing. Each concern is considered within the child’s wider developmental and family context.
          </p>
        </div>
        <div className="shell cardGrid threeCols">
          {concerns.map((concern) => (
            <Link className="contentCard concernLink" href={`/concerns/${concern.slug}/`} key={concern.slug} data-reveal>
              <h3>{concern.title}</h3>
              <p>{concern.summary}</p>
              <span>Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section sectionTint">
        <div className="shell splitFeature">
          <div className="featureImage clinicWaitingImage" role="img" aria-label="Dr Tammi Quek clinic waiting area" data-reveal />
          <div className="featureCopy" data-reveal>
            <p className="eyebrow">A calm, coordinated process</p>
            <h2>Why appointments remain human-managed</h2>
            <p>
              A new enquiry may require previous reports, a specific consultation format, school communication or coordination across several visits. For that reason, families cannot choose a date from an automated calendar.
            </p>
            <ol className="numberList">
              <li><span>1</span><div><h3>Send a brief enquiry</h3><p>Use the website, email or WhatsApp to describe the main concern.</p></div></li>
              <li><span>2</span><div><h3>Clinic review</h3><p>The team considers the child’s needs and what information may be required.</p></div></li>
              <li><span>3</span><div><h3>Manual arrangement</h3><p>Staff contact the family to coordinate the appropriate appointment pathway.</p></div></li>
            </ol>
            <Link className="textLink" href="/services/">See how the clinic works →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell twoCardGrid">
          <article className="contentCard regionCard" data-reveal>
            <p className="eyebrow">International families</p>
            <h2>Planning a Singapore consultation from overseas</h2>
            <p>
              The clinic receives enquiries from families in Indonesia and the Philippines, and welcomes enquiries from Malaysia and elsewhere in Southeast Asia. Families should contact the clinic before making travel arrangements.
            </p>
            <Link className="button buttonSecondary" href="/international-families/">International family guide</Link>
          </article>
          <article className="contentCard schoolCard" data-reveal>
            <p className="eyebrow">Schools & professionals</p>
            <h2>Support across the child’s real environments</h2>
            <p>
              Where appropriate and with consent, information from teachers, therapists, doctors or other professionals can help build a more complete understanding of the child’s needs.
            </p>
            <Link className="button buttonSecondary" href="/schools-professionals/">For schools & professionals</Link>
          </article>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="shell clinicStrip">
          <div className="clinicEntranceImage" role="img" aria-label="Entrance to Dr Tammi Quek clinic at Novena Medical Center" data-reveal />
          <div data-reveal>
            <p className="eyebrow">Visit the clinic</p>
            <h2>{SITE.addressLine1}</h2>
            <p>{SITE.addressLine2}</p>
            <div className="buttonRow">
              <a className="button buttonPrimary" href={SITE.phoneHref}>{SITE.phone}</a>
              <Link className="button buttonSecondary" href="/clinic/">View clinic information</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner" data-reveal>
          <div>
            <p className="eyebrow light">Start with a conversation</p>
            <h2>Tell the clinic team what concerns you most.</h2>
            <p>A brief initial enquiry helps the team advise on the appropriate next step.</p>
          </div>
          <div className="buttonRow">
            <Link className="button buttonLight" href="/contact/">Send an Enquiry</Link>
            <a className="button buttonOutlineLight" href={SITE.emailHref}>Email the Clinic</a>
          </div>
        </div>
      </section>
    </main>
  );
}
