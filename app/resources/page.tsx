import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { concerns } from '../lib/site';

export const metadata: Metadata = {
  title: 'Parent Resources | Developmental Paediatrics Singapore',
  description:
    'Clear parent resources about developmental paediatric consultations, preparing reports, school information and common child development concerns in Singapore.',
  alternates: { canonical: '/resources/' },
};

const guides = [
  {
    title: 'Preparing for a developmental paediatric consultation',
    text: 'Organise the main questions, relevant reports, school feedback and examples of how concerns affect daily life.',
    href: '/services/',
  },
  {
    title: 'When parents are concerned but there is no diagnosis',
    text: 'Families may seek advice because development feels uneven, school has raised concerns or previous reports do not yet form a clear plan.',
    href: '/concerns/',
  },
  {
    title: 'Planning a consultation from outside Singapore',
    text: 'Contact the clinic before arranging travel and send available background information for review.',
    href: '/international-families/',
  },
  {
    title: 'Working with schools and professionals',
    text: 'Understand how school observations and professional reports may contribute to a more complete picture.',
    href: '/schools-professionals/',
  },
  {
    title: 'Using AI safely for general guidance',
    text: 'Use AI to organise questions, not to diagnose a child, recommend treatment or replace professional care.',
    href: '/ai-guidance/',
  },
  {
    title: 'What to include in an enquiry',
    text: 'A short, structured message helps the clinic screen the request while limiting unnecessary sensitive information.',
    href: '/contact/',
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Parent resources"
        title="Clear information before, during and after an enquiry."
        intro="These resources explain the clinic process in plain language and help families prepare useful questions. They provide general education and do not replace a medical consultation."
        imageClass="resourcesImage"
        imageAlt="Illustrative parent resources and developmental guidance"
      />

      <section className="contentSection">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Start here</p>
          <h2>Practical guides for families</h2>
        </div>
        <div className="shell infoGrid">
          {guides.map((guide) => (
            <Link className="infoCard concernLink" href={guide.href} key={guide.title} data-reveal>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
              <span>Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Concern guides</p>
          <h2>Read by topic</h2>
          <p>Each guide explains common observations, how a consultation may help and questions families often ask.</p>
        </div>
        <div className="shell cardGrid threeCols">
          {concerns.map((concern) => (
            <Link className="contentCard concernLink" href={`/concerns/${concern.slug}/`} key={concern.slug} data-reveal>
              <h3>{concern.title}</h3>
              <p>{concern.summary}</p>
              <span>Open guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
