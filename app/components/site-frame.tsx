import Link from 'next/link';
import type { ReactNode } from 'react';
import { SITE, primaryNavigation } from '../lib/site';

const isPreview = process.env.NEXT_PUBLIC_SITE_ENV !== 'production';

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      {isPreview && (
        <div className="previewBar">
          Preview website — search indexing is blocked and appointment requests remain human-managed.
        </div>
      )}

      <header className="siteHeader">
        <div className="shell headerInner">
          <Link className="officialLogo" href="/" aria-label="Dr Tammi Quek clinic home">
            <img
              src="/assets/brand/dr-tammi-logo-new.png"
              alt="Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic"
              width="310"
              height="70"
            />
          </Link>

          <nav className="desktopNav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            {primaryNavigation.map((item) =>
              'items' in item && item.items ? (
                <details className="navDropdown" key={item.label}>
                  <summary>{item.label}<span aria-hidden="true">⌄</span></summary>
                  <div className="navDropdownPanel">
                    {item.items.map((child) => (
                      <Link href={child.href} key={child.href}>{child.label}</Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link href={'href' in item ? item.href : '/'} key={item.label}>{item.label}</Link>
              ),
            )}
          </nav>

          <Link className="headerCta" href="/contact/">Send an Enquiry</Link>

          <details className="mobileMenu">
            <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
            <div className="mobilePanel">
              <Link href="/">Home</Link>
              {primaryNavigation.map((item) =>
                'items' in item && item.items ? (
                  <div className="mobileGroup" key={item.label}>
                    <span>{item.label}</span>
                    {item.items.map((child) => (
                      <Link href={child.href} key={child.href}>{child.label}</Link>
                    ))}
                  </div>
                ) : (
                  <Link href={'href' in item ? item.href : '/'} key={item.label}>{item.label}</Link>
                ),
              )}
              <Link className="mobileCta" href="/contact/">Send an Enquiry</Link>
            </div>
          </details>
        </div>
      </header>

      {children}

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <img
              src="/assets/brand/dr-tammi-logo-new.png"
              alt="Dr Tammi Quek clinic"
              width="270"
              height="61"
            />
            <p>
              Developmental and behavioural paediatrics for children, adolescents and families in Singapore.
            </p>
          </div>

          <div>
            <h2>Clinic</h2>
            <Link href="/about/">Dr Tammi Quek</Link>
            <Link href="/clinic/">Clinic & Approach</Link>
            <Link href="/services/">Services</Link>
            <Link href="/concerns/">Concerns</Link>
          </div>

          <div>
            <h2>Families</h2>
            <Link href="/international-families/">International Families</Link>
            <Link href="/resources/">Resources</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/ai-guidance/">AI Guidance</Link>
          </div>

          <div>
            <h2>Contact</h2>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {SITE.whatsapp}</a>
            <a href={SITE.emailHref}>{SITE.email}</a>
            <span>{SITE.addressLine1}<br />{SITE.addressLine2}</span>
          </div>
        </div>

        <div className="shell footerBottom">
          <p>
            Website information is general education only and does not replace individual medical advice,
            diagnosis, treatment or emergency care.
          </p>
          <small>© 2026 {SITE.legalName}. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
