import type { ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  imageClass,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  imageClass?: string;
  imageAlt?: string;
}) {
  return (
    <section className="pageHero">
      <div className="shell pageHeroGrid">
        <div className="pageHeroCopy" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          {children && <div className="pageHeroActions">{children}</div>}
        </div>
        {imageClass && (
          <div
            className={`pageHeroImage ${imageClass}`}
            role="img"
            aria-label={imageAlt ?? ''}
            data-reveal
          />
        )}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
