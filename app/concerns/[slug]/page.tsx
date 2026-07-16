import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '../../components/page-hero';
import { concerns } from '../../lib/site';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concerns.map((concern) => ({ slug: concern.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);

  if (!concern) return {};

  return {
    title: concern.searchTitle,
    description: concern.summary,
    alternates: { canonical: `/concerns/${concern.slug}/` },
  };
}

export default async function ConcernDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);

  if (!concern) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: concern.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main>
      <JsonLd data={faqSchema} />
      <div className="shell breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/concerns/">Concerns</Link> / {concern.title}
      </div>

      <section className="pageHero">
        <div className="shell pageHeroGrid">
          <div className="pageHeroCopy" data-reveal>
            <p className="eyebrow">Family information guide</p>
            <h1>{concern.title}</h1>
            <p>{concern.overview}</p>
            <div className="pageHeroActions">
              <Link className="button buttonPrimary" href="/contact/">Send an Enquiry</Link>
            </div>
          </div>
          <div className="pageHeroImage concernsImage" role="img" aria-label={`Illustrative image for ${concern.title}`} data-reveal />
        </div>
      </section>

      <section className="contentSection">
        <div className="shell concernDetailGrid">
          <article className="contentCard" data-reveal>
            <p className="eyebrow">Reasons families may seek advice</p>
            <h2>Observations that may be worth discussing</h2>
            <ul className="checkList">
              {concern.signs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="contentCard" data-reveal>
            <p className="eyebrow">Clinical approach</p>
            <h2>How a consultation may help</h2>
            <ul className="checkList">
              {concern.support.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>Assessment is broader than a checklist</h2>
            <p>
              Similar behaviours can have different causes and can affect each child differently. A developmental
              paediatric assessment considers the child’s history, strengths, needs, health, learning environment,
              family context and functioning across settings.
            </p>
            <p>
              Online questionnaires or AI tools may help organise observations, but they cannot provide a diagnosis or
              replace a clinical consultation.
            </p>

            <h2>Questions families often ask</h2>
            <div className="faqList">
              {concern.questions.map((item) => (
                <details className="faqItem" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Preparing an enquiry</h2>
            <p>Include the child’s age range, main concern, functional impact and any prior reports.</p>
            <Link className="button buttonSecondary" href="/contact/">Contact the clinic</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
