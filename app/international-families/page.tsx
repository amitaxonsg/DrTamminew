import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'International Families | Developmental Paediatrician Singapore',
  description:
    'Information for families travelling to Singapore from Indonesia, Malaysia, the Philippines and elsewhere in Southeast Asia for a developmental paediatric consultation.',
  alternates: { canonical: '/international-families/' },
};

export default function InternationalFamiliesPage() {
  return (
    <main>
      <PageHero
        eyebrow="International families"
        title="Plan a Singapore consultation before arranging travel."
        intro="The clinic receives enquiries from families based outside Singapore, including Indonesia and the Philippines. Families from Malaysia and elsewhere in Southeast Asia are also welcome to enquire."
        imageClass="internationalImage"
        imageAlt="Illustrative international family preparing for a Singapore clinic visit"
      >
        <Link className="button buttonPrimary" href="/contact/">International Enquiry Guide</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Regional families</p>
          <h2>One useful page for the region, not thin country-by-country pages.</h2>
          <p>
            Families often share similar planning questions, but each child’s clinical needs remain individual.
            The clinic therefore provides one substantive regional guide and screens every enquiry personally.
          </p>
        </div>
        <div className="shell countryGrid">
          <article className="countryCard" data-reveal>
            <h3>Families from Indonesia</h3>
            <p>
              Contact the clinic before booking flights or accommodation. Include previous developmental,
              therapy, school or medical reports where available so the team can advise what may be needed.
            </p>
          </article>
          <article className="countryCard" data-reveal>
            <h3>Families from the Philippines</h3>
            <p>
              A brief initial summary can help the clinic decide whether further information is needed before
              discussing a Singapore appointment pathway.
            </p>
          </article>
          <article className="countryCard" data-reveal>
            <h3>Families from Malaysia</h3>
            <p>
              Families in Malaysia may enquire by website, email or WhatsApp. The clinic team will advise on
              suitable next steps before the family makes travel arrangements.
            </p>
          </article>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>What to send with an international enquiry</h2>
            <ul>
              <li>Country and city of residence</li>
              <li>The child’s age range and main concerns</li>
              <li>Previous developmental, medical, therapy, psychological or school reports</li>
              <li>Current school level and support arrangements</li>
              <li>Whether school or professional communication may be needed</li>
              <li>Any time constraints related to travel, without choosing a date online</li>
            </ul>

            <h2>Why the clinic reviews first</h2>
            <p>
              An overseas family may need to coordinate travel, school absence and several professional schedules.
              The clinic first considers whether the available information is sufficient, what type of consultation
              may be appropriate and whether more than one visit may be required.
            </p>

            <h2>Do not travel until the clinic confirms</h2>
            <p>
              Sending an enquiry does not create an appointment. The clinic team will contact the family after review
              and will manually coordinate any suitable appointment dates.
            </p>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Contact from overseas</h2>
            <p>Telephone: {SITE.phone}</p>
            <p>WhatsApp: {SITE.whatsapp}</p>
            <p>Email: {SITE.email}</p>
            <a className="button buttonSecondary" href={SITE.whatsappHref} target="_blank" rel="noreferrer">WhatsApp the clinic</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
