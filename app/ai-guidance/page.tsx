import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'KIMI AI Guidance | Prepare a Developmental Paediatrics Enquiry',
  description:
    'Use KIMI AI for general educational guidance and to prepare questions before contacting Dr Tammi Quek Clinic. Not a diagnosis, assessment or booking system.',
  alternates: { canonical: '/ai-guidance/' },
};

const prompts = [
  'Help me organise a short list of developmental concerns to discuss with a clinic. Do not diagnose or recommend treatment.',
  'What general information is useful when enquiring about a developmental paediatric consultation for a child?',
  'Help me summarise school, learning and attention concerns in neutral language for a clinic enquiry.',
  'What types of previous reports may be useful for a developmental paediatrician to review?',
];

export default function AiGuidancePage() {
  return (
    <main>
      <PageHero
        eyebrow="KIMI AI educational guide"
        title="Use AI to organise questions, not to diagnose a child."
        intro="The KIMI guide is a marketing and educational tool that can help families prepare a clearer enquiry. It does not assess, diagnose, prescribe, book appointments or replace professional care."
        imageClass="aiImage"
        imageAlt="Illustrative family using an educational AI guidance tool"
      >
        <a className="button buttonPrimary" href={SITE.kimiUrl} target="_blank" rel="noreferrer">Open KIMI Guidance</a>
      </PageHero>

      <section className="contentSection">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>Appropriate uses</h2>
            <ul>
              <li>Learning what developmental and behavioural paediatrics covers</li>
              <li>Organising broad concerns into a short, neutral summary</li>
              <li>Preparing questions for the clinic team</li>
              <li>Understanding what reports or school information may be useful</li>
              <li>Finding the most relevant information page on this website</li>
            </ul>

            <h2>What the guide must not be used for</h2>
            <ul>
              <li>Diagnosing autism, ADHD, developmental delay or any other condition</li>
              <li>Deciding whether medication or treatment is appropriate</li>
              <li>Handling urgent safety, psychiatric or medical concerns</li>
              <li>Replacing consultation with a qualified professional</li>
              <li>Selecting or confirming an appointment date</li>
            </ul>

            <div className="aiSafety">
              <h2>Privacy reminder</h2>
              <p>
                Do not enter a child’s full name, identification number, exact date of birth, medical record number,
                school login details or other highly sensitive identifying information into a third-party AI service.
                Use general, non-identifying descriptions and contact the clinic directly for clinical communication.
              </p>
            </div>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Human review remains essential</h2>
            <p>
              The clinic team manually reviews every enquiry because consultation structure, prior reports,
              school coordination and scheduling vary from child to child.
            </p>
            <Link className="button buttonSecondary" href="/contact/">Contact the clinic</Link>
          </aside>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Example prompts</p>
          <h2>Questions families can safely ask</h2>
        </div>
        <div className="shell promptGrid">
          {prompts.map((prompt) => (
            <article className="promptCard" key={prompt} data-reveal>
              <code>{prompt}</code>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
