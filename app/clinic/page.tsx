import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'Clinic at Novena Medical Center Singapore',
  description:
    'Visit Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic at Novena Medical Center, Singapore. Learn how enquiries and appointments are arranged.',
  alternates: { canonical: '/clinic/' },
};

export default function ClinicPage() {
  return (
    <main>
      <PageHero
        eyebrow="Clinic & Approach"
        title="A calm Singapore clinic with a carefully coordinated process."
        intro="The clinic is located at Novena Medical Center. Every new request is reviewed manually so the team can understand what the child may need before arranging an appointment."
        imageClass="clinicReceptionImage"
        imageAlt="Reception area at Dr Tammi Quek clinic"
      >
        <Link className="button buttonPrimary" href="/contact/">Contact the Clinic</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell infoGrid">
          <article className="infoCard" data-reveal>
            <span className="smallLabel">Location</span>
            <h2>Novena Medical Center</h2>
            <p>{SITE.addressLine1}<br />{SITE.addressLine2}</p>
          </article>
          <article className="infoCard" data-reveal>
            <span className="smallLabel">Telephone</span>
            <h2>{SITE.phone}</h2>
            <p>Call the clinic team for general appointment and administrative enquiries.</p>
          </article>
          <article className="infoCard" data-reveal>
            <span className="smallLabel">WhatsApp</span>
            <h2>{SITE.whatsapp}</h2>
            <p>Send a brief message. Please avoid sending highly sensitive identifiers through an unsecured channel.</p>
          </article>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell splitFeature">
          <div className="featureCopy" data-reveal>
            <p className="eyebrow">Why there is no online date picker</p>
            <h2>Different children require different appointment pathways.</h2>
            <p>
              Some requests can be arranged as a single consultation. Others may require prior reports,
              a child evaluation, a feedback appointment, school information or coordination with other professionals.
            </p>
            <p>
              The team therefore reviews each request before offering dates. This protects clinical time and helps
              ensure that the family is directed to the most appropriate consultation format.
            </p>
            <Link className="button buttonSecondary" href="/services/">How consultations work</Link>
          </div>
          <ol className="numberList" data-reveal>
            <li><span>1</span><div><h3>Initial enquiry</h3><p>Contact the clinic by website, email, telephone or WhatsApp.</p></div></li>
            <li><span>2</span><div><h3>Information review</h3><p>The team may request reports or additional background information.</p></div></li>
            <li><span>3</span><div><h3>Appointment planning</h3><p>The clinic selects a suitable consultation structure and contacts the family.</p></div></li>
            <li><span>4</span><div><h3>Coordination where needed</h3><p>School or professional communication may be discussed with consent.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contentSection">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Clinic photographs</p>
          <h2>What families can expect on arrival</h2>
          <p>These photographs show the clinic entrance, reception and waiting areas at Novena Medical Center.</p>
        </div>
        <div className="shell galleryGrid">
          <div className="galleryImage entrance" role="img" aria-label="Clinic entrance and Dr Tammi Quek sign" data-reveal><span>Clinic entrance</span></div>
          <div className="galleryImage reception" role="img" aria-label="Clinic reception counter" data-reveal><span>Reception</span></div>
          <div className="galleryImage waitingOne" role="img" aria-label="Clinic waiting area with seating" data-reveal><span>Waiting area</span></div>
          <div className="galleryImage waitingTwo" role="img" aria-label="Second view of clinic waiting area" data-reveal><span>Waiting area</span></div>
        </div>
      </section>
    </main>
  );
}
