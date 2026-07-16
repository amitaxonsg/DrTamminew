import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';

export const metadata: Metadata = {
  title: 'Schools & Professionals | Developmental Paediatrics Singapore',
  description:
    'Information for schools, teachers, therapists and healthcare professionals working with children seen by Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic.',
  alternates: { canonical: '/schools-professionals/' },
};

export default function SchoolsProfessionalsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Schools & professionals"
        title="Understanding the child across home, school and clinical settings."
        intro="With parent or guardian consent, information from teachers, therapists, doctors and other professionals may help the clinic understand how a child functions across environments."
        imageClass="schoolsImage"
        imageAlt="Illustrative discussion between family, school and professionals"
      >
        <Link className="button buttonPrimary" href="/contact/">Contact the Clinic</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell infoGrid">
          <article className="infoCard" data-reveal>
            <h2>School information</h2>
            <p>
              Teacher observations, report cards, learning plans and examples of classroom functioning can provide
              useful context when concerns involve attention, learning, behaviour, communication or participation.
            </p>
          </article>
          <article className="infoCard" data-reveal>
            <h2>Therapy and assessment reports</h2>
            <p>
              Existing speech-language, occupational therapy, psychology, educational or medical reports can help
              avoid unnecessary duplication and clarify what questions remain.
            </p>
          </article>
          <article className="infoCard" data-reveal>
            <h2>Coordinated recommendations</h2>
            <p>
              Where appropriate, the clinic can help integrate information and discuss recommendations that are
              practical across the child’s daily environments.
            </p>
          </article>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>Communication requires consent</h2>
            <p>
              The clinic respects patient privacy. Communication with schools or other professionals is considered
              only where appropriate and with parent or guardian consent.
            </p>

            <h2>School visits</h2>
            <p>
              School visits may be available depending on the school’s location, the clinical question and scheduling.
              Because Dr Tammi may travel around Singapore for school-related work, appointment arrangements need to
              remain flexible and human-managed.
            </p>

            <h2>Helpful information for a referral or enquiry</h2>
            <ul>
              <li>The specific developmental, behavioural or learning concern</li>
              <li>How the concern affects participation or progress</li>
              <li>Strategies already tried and the child’s response</li>
              <li>Relevant assessments, therapy or school support</li>
              <li>The family’s main questions and priorities</li>
            </ul>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>For families</h2>
            <p>
              Parents remain central to the process. Schools and professionals should ask the family to contact the
              clinic directly unless a different arrangement has been agreed.
            </p>
            <Link className="button buttonSecondary" href="/contact/">Enquiry information</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
