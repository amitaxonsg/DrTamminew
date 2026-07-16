import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../components/page-hero';
import { concerns } from '../lib/site';

export const metadata: Metadata = {
  title: 'Child Development, Behaviour & Learning Concerns Singapore',
  description:
    'Information about autism, ADHD, developmental delay, speech and language, learning, behaviour and emotional wellbeing concerns supported by a developmental paediatrician in Singapore.',
  alternates: { canonical: '/concerns/' },
};

export default function ConcernsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Concerns we support"
        title="Understanding concerns within the child’s wider development."
        intro="A concern may involve one area or several areas at once. The clinic looks at development, communication, behaviour, attention, learning, relationships, emotional wellbeing and daily functioning together."
        imageClass="concernsImage"
        imageAlt="Illustrative developmental activity for a child and family"
      >
        <Link className="button buttonPrimary" href="/contact/">Discuss Your Concerns</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell sectionIntro" data-reveal>
          <p className="eyebrow">Information for families</p>
          <h2>Common reasons families seek a developmental consultation</h2>
          <p>
            These pages offer general educational information. They are not diagnostic checklists and cannot determine
            whether a child has a particular condition.
          </p>
        </div>
        <div className="shell cardGrid threeCols">
          {concerns.map((concern) => (
            <Link className="contentCard concernLink" href={`/concerns/${concern.slug}/`} key={concern.slug} data-reveal>
              <h3>{concern.title}</h3>
              <p>{concern.summary}</p>
              <span>Read the family guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>When there is no clear diagnosis</h2>
            <p>
              Families do not need to arrive with a diagnosis. Parents may simply feel that something is not progressing
              as expected, that school has raised concerns, or that previous assessments do not yet provide a clear and
              integrated plan.
            </p>
            <p>
              A developmental paediatric consultation can help organise the available information, identify strengths,
              consider possible contributing factors and discuss whether any further assessment is appropriate.
            </p>
          </article>
          <aside className="sideCard" data-reveal>
            <h2>Start with the main question</h2>
            <p>
              A useful enquiry does not need to be long. Briefly describe what concerns you most, how it affects daily life
              and what evaluations or support the child has already received.
            </p>
            <Link className="button buttonSecondary" href="/contact/">What to include in an enquiry</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
