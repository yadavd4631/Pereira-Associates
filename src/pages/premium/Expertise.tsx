import { ArrowRight } from 'lucide-react';
import { AppLayout, pageHref, PageHero } from './_shared/AppLayout';

const litigation = [
  'Company Law',
  'Insolvency Bankruptcy Law',
  'General Corporate and Commercial',
  'Real Estate',
  'Succession Laws & Testamentary matters',
  'Arbitration',
  'Co-operative Housing Society',
];

const nonLitigation = [
  'Property related documentation',
  'Release Deed, Family Arrangement, Wills',
  'Sale Deed /Agreement of Sale',
  'Power of Attorney, Gift Deed, Leave and License Agreement',
  'Society Forms, Legal Opinions',
  'Corporate Strategy and Other Agreements as required.',
];

export function Expertise() {
  return (
    <AppLayout active="Expertise">
      <PageHero eyebrow="Pereira &amp; Associates · Mumbai" title={<>Areas of <em>practice</em></>} lede="From representation in litigation to the documents and agreements that help people and businesses move forward." image="office-atmosphere.jpg" alt="Illustrative image of a quiet legal study" index="03" />
      <div className="p-container">

        <section className="p-section">
          <p className="p-eyebrow">Scope of work</p>
          <h2 className="p-section-title">Litigation and non-litigation matters</h2>
          <p className="p-section-intro">The practice covers the following areas of work.</p>
          <div className="p-practice-groups">
            <PracticeGroup
              title="Litigation"
              description="Representation and counsel across disputes and related matters."
              items={litigation}
            />
            <PracticeGroup
              title="Non-litigation"
              description="Documentation, agreements and advisory work for people and businesses."
              items={nonLitigation}
            />
          </div>
        </section>

        <section className="p-section">
          <div className="p-address-panel">
            <div>
              <p className="p-eyebrow">Contact</p>
              <h2 className="p-section-title">Speak with the practice</h2>
              <p className="p-section-intro p-approach-note">The office is based in Bandra West, Mumbai.</p>
            </div>
            <a className="p-button" href={pageHref('Contact')}>Office contact details <ArrowRight size={15} /></a>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

function PracticeGroup({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <article className="p-practice-group">
      <h2>{title}</h2>
      <p>{description}</p>
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
