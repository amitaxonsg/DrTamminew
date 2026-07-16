import type { Metadata } from 'next';
import { PageHero } from '../components/page-hero';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  title: 'Contact & Appointment Enquiry | Dr Tammi Quek Clinic',
  description:
    'Contact Dr Tammi Quek Clinic in Singapore by website enquiry, email, telephone or WhatsApp. Appointment dates are arranged manually after review.',
  alternates: { canonical: '/contact/' },
};

const smtpEndpoint = process.env.NEXT_PUBLIC_SMTP2MAIL_ENDPOINT;

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact the clinic"
        title="Begin with a brief enquiry, not an online booking."
        intro="Tell the clinic team what concerns you most. Every request is screened manually before the appropriate consultation pathway and appointment dates are discussed."
        imageClass="contactImage"
        imageAlt="Reception area at Dr Tammi Quek clinic"
      />

      <section className="contentSection">
        <div className="shell contactOptions">
          <article className="contactOption" data-reveal>
            <h2>Telephone</h2>
            <p>For general clinic and appointment enquiries.</p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </article>
          <article className="contactOption" data-reveal>
            <h2>WhatsApp</h2>
            <p>Send a brief non-urgent message to the clinic team.</p>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">{SITE.whatsapp}</a>
          </article>
          <article className="contactOption" data-reveal>
            <h2>Email</h2>
            <p>Suitable for a concise enquiry and discussion of how to provide reports securely.</p>
            <a href={SITE.emailHref}>{SITE.email}</a>
          </article>
        </div>
      </section>

      <section className="contentSection sectionTint">
        <div className="shell proseGrid">
          <article className="prose" data-reveal>
            <h2>What to include</h2>
            <ul className="enquiryChecklist">
              <li>Parent or guardian contact details</li>
              <li>Country and city of residence</li>
              <li>The child’s age range</li>
              <li>The main developmental, behavioural or learning concern</li>
              <li>Any previous assessments or reports</li>
              <li>Whether school coordination may be needed</li>
            </ul>

            <h2>What not to include in an initial unsecured message</h2>
            <p>
              Avoid sending identification numbers, passwords, full medical records or other highly sensitive personal
              information until the clinic advises on an appropriate way to provide documents.
            </p>

            {smtpEndpoint ? (
              <form className="enquiryForm" action={smtpEndpoint} method="post">
                <input type="hidden" name="subject" value="Website enquiry for Dr Tammi Quek Clinic" />
                <label>
                  Parent or guardian name
                  <input name="parent_name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  Telephone or WhatsApp
                  <input name="phone" autoComplete="tel" required />
                </label>
                <label>
                  Country and city
                  <input name="location" autoComplete="country-name" required />
                </label>
                <label>
                  Child’s age range
                  <select name="age_range" required defaultValue="">
                    <option value="" disabled>Select age range</option>
                    <option>Birth to 3 years</option>
                    <option>4 to 6 years</option>
                    <option>7 to 12 years</option>
                    <option>13 to 17 years</option>
                    <option>18 years or older</option>
                  </select>
                </label>
                <label>
                  Main concern
                  <textarea
                    name="message"
                    rows={7}
                    maxLength={2500}
                    placeholder="Please provide a brief, non-identifying summary. Do not include identification numbers or passwords."
                    required
                  />
                </label>
                <label className="consentRow">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>I understand this is an enquiry, not an appointment confirmation or emergency service.</span>
                </label>
                <button className="button buttonPrimary" type="submit">Send Enquiry</button>
              </form>
            ) : (
              <div className="aiSafety">
                <h2>Online form integration pending</h2>
                <p>
                  The page is prepared for the SMTP2Mail API. Until the endpoint is configured, please contact the clinic
                  by email, telephone or WhatsApp using the details above.
                </p>
              </div>
            )}
          </article>

          <aside className="sideCard" data-reveal>
            <h2>Clinic location</h2>
            <p>{SITE.addressLine1}<br />{SITE.addressLine2}</p>
            <h2>No automatic booking</h2>
            <p>
              The clinic team may need to review reports, choose a consultation format or coordinate with a school before
              offering suitable dates.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
