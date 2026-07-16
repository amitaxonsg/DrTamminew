import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'Developmental & Behavioural Paediatrics Services Singapore',
  description:
    'Developmental paediatric consultation, assessment planning, follow-up, parent guidance and school coordination for children and adolescents in Singapore.',
  alternates: { canonical: '/services/' },
};

const services = [
  {
    title: 'Developmental paediatric consultation',
    text: 'A medical review of developmental, behavioural, attention, learning, communication or social-emotional concerns, tailored to the child’s age, history and current functioning.',
  },
  {
    title: 'Assessment planning',
    text: 'Review of existing reports and clinical information to determine whether further developmental, psychological, educational, speech-language or other assessment may be useful.',
  },
  {
    title: 'Integrated case review',
    text: 'Bringing together medical, developmental, family, school and therapy information so that recommendations reflect the child’s broader needs rather than one isolated concern.',
  },
  {
    title: 'Parent guidance',
    text: 'Clear explanations and practical discussion to help parents understand their child’s strengths, needs and possible next steps.',
  },
  {
    title: 'Follow-up and monitoring',
    text: 'Ongoing review when appropriate, including monitoring progress, changing needs and the usefulness of current support strategies.',
  },
  {
    title: 'School and professional coordination',
    text: 'Consideration of school reports, teacher feedback or communication with relevant professionals where clinically appropriate and with parent or guardian consent.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Clinic services"
        title="Individualised developmental and behavioural paediatric care."
        intro="Consultations are planned around the questions that matter for the child and family. The clinic reviews development, behaviour, attention, learning, communication, emotional wellbeing and day-to-day functioning in context."
        imageClass="servicesImage"
        imageAlt="Illustrative family consultation in a developmental paediatrics setting"
      >
        <Link className="button buttonPrimary" href="/contact/">Send an Enquiry</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">What the clinic provides</p>
          <h2>A consultation pathway shaped around the child.</h2>
          <p>
            Not every family needs the same number or type of appointments. The clinic team reviews each enquiry
            before arranging a suitable pathway.
          </p>
        </div>
        <div className="shell infoGrid">
          {services.map((service) => (
            <article className="infoCard" key={service.title} data-reveal>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>What a consultation may include</h2>
            <ul>
              <li>Discussion of the family’s main questions and priorities</li>
              <li>Developmental, medical, behavioural and educational history</li>
              <li>Review of prior medical, therapy, psychological or school reports</li>
              <li>Observation or evaluation appropriate to the child’s age and needs</li>
              <li>Discussion of strengths, areas of concern and functional impact</li>
              <li>Recommendations for support, follow-up or further evaluation where needed</li>
            </ul>

            <h2>What the clinic does not replace</h2>
            <p>
              The clinic focuses on developmental and behavioural paediatrics. It does not replace a child’s
              regular paediatrician for immunisations, routine sick visits or general paediatric care. Some children
              may also need input from other specialists, therapists, psychologists or educational professionals.
            </p>

            <h2>School visits and communication</h2>
            <p>
              School information can be especially useful when concerns involve attention, learning, behaviour,
              social participation or classroom functioning. School visits may be considered depending on the school’s
              location, the child’s needs and clinic scheduling. This is one reason appointments cannot be selected from
              an automated booking calendar.
            </p>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Before contacting the clinic</h2>
            <p>It may help to prepare:</p>
            <ul>
              <li>The child’s age range</li>
              <li>The main concerns and when they began</li>
              <li>Previous assessments or reports</li>
              <li>Current school and support arrangements</li>
              <li>Whether the family lives outside Singapore</li>
            </ul>
            <a className="button buttonSecondary" href={SITE.whatsappHref} target="_blank" rel="noreferrer">WhatsApp the Clinic</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
