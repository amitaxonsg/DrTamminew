import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, PageHero } from '../components/page-hero';
import { frequentlyAskedQuestions } from '../lib/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Dr Tammi Quek Clinic',
  description:
    'Answers about developmental paediatric consultations, appointment requests, international families, school communication and the KIMI AI educational guide.',
  alternates: { canonical: '/faq/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: frequentlyAskedQuestions.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Straightforward answers before you contact the clinic."
        intro="These answers explain the clinic process and help families decide what information to prepare. They are general information rather than medical advice for an individual child."
        imageClass="resourcesImage"
        imageAlt="Illustrative family reading clinic information"
      >
        <Link className="button buttonPrimary" href="/contact/">Send an Enquiry</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell faqList">
          {frequentlyAskedQuestions.map((item) => (
            <details className="faqItem" key={item.question} data-reveal>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
