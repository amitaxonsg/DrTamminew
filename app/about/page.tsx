import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'Dr Tammi Quek | Developmental Paediatrician Singapore',
  description:
    'Learn about Dr Tammi Quek, her developmental and behavioural paediatrics background, and her holistic, family-centred approach in Singapore.',
  alternates: { canonical: '/about/' },
};

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr Tammi Quek Chaey Moon',
  honorificPrefix: 'Dr',
  medicalSpecialty: 'Developmental and Behavioural Paediatrics',
  worksFor: {
    '@type': 'MedicalClinic',
    name: SITE.legalName,
    address: `${SITE.addressLine1}, ${SITE.addressLine2}`,
  },
  url: `${SITE.productionUrl}/about/`,
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={physicianSchema} />
      <PageHero
        eyebrow="About Dr Tammi"
        title="A developmental paediatrician focused on the whole child."
        intro="Dr Tammi Quek works with children, adolescents, young adults and their families across developmental, behavioural, attention, learning and social-emotional concerns."
        imageClass="doctorPortraitImage"
        imageAlt="Current portrait of Dr Tammi Quek"
      >
        <Link className="button buttonPrimary" href="/contact/">Send an Enquiry</Link>
      </PageHero>

      <section className="contentSection">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>Training and professional background</h2>
            <p>
              Dr Quek completed her undergraduate medical training at University College London,
              University of London, graduating in 1999. She returned to Singapore in 2000 and entered
              postgraduate paediatric training at the National University Hospital.
            </p>
            <p>
              After completing the six-year paediatric training programme, she became fully registered
              as a paediatrician with the Singapore Medical Council in 2007 and a Fellow of the Academy
              of Medicine, Singapore in 2008. She is also a member of the Royal College of Paediatrics
              and Child Health in the United Kingdom.
            </p>

            <h2>A whole-child perspective</h2>
            <p>
              Developmental and behavioural concerns rarely exist in isolation. A child may be managing
              differences in communication, attention, learning, behaviour, relationships, emotional
              wellbeing or several of these areas at the same time.
            </p>
            <p>
              The clinic therefore looks beyond a single symptom or label. The aim is to understand the
              child’s strengths, developmental history, daily functioning, family context, school experience
              and existing support before planning the next steps.
            </p>

            <div className="quoteCard">
              <p>
                “We approach and support each child and their family based on their unique concerns and needs.
                Every child is evaluated holistically across developmental stages, social and emotional needs,
                and academic learning. We aim to empower parents to best support their child.”
              </p>
            </div>

            <h2>Partnership with families</h2>
            <p>
              Parents and guardians bring essential knowledge about their child. The consultation process is
              designed to clarify concerns, recognise strengths, review what has already been tried and discuss
              practical support that fits the individual child and family.
            </p>
            <p>
              Where appropriate and with consent, information from schools, therapists, doctors and other
              professionals may be considered so that recommendations reflect the child’s real environments.
            </p>
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Professional details</h2>
            <p>Dr Tammi Quek Chaey Moon</p>
            <ul>
              <li>MBBS (London)</li>
              <li>MRCPCH</li>
              <li>M.Med (Paediatrics)</li>
              <li>FAMS</li>
              <li>Developmental and Behavioural Paediatrics</li>
            </ul>
            <Link className="button buttonSecondary" href="/clinic/">Clinic & Approach</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
