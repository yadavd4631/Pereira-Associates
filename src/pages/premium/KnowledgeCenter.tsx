import { ArrowDownToLine, ArrowRight, FileSpreadsheet, Presentation } from 'lucide-react';
import { AppLayout, assetHref, pageHref, PageHero } from './_shared/AppLayout';

interface PresentationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fileUrl: string;
  slidesCount: number;
  topics: string[];
}

const presentations: PresentationItem[] = [
  {
    id: 'property-docs',
    title: 'Property Documentation & Conveyancing in Mumbai',
    category: 'Real Estate & Conveyancing',
    description: 'A comprehensive legal walkthrough on Sale Deeds, Title Search Certificates, encumbrance verification, and registration formalities.',
    fileUrl: 'presentations/property-documentation-conveyancing.pptx',
    slidesCount: 18,
    topics: [
      'Chain of title and 30-year search verification',
      'Essential covenants in agreements for sale & conveyance',
      'Registration, stamp duty valuation, and adjudication',
      'Deed of Declaration and Apartment Ownership procedures',
    ],
  },
  {
    id: 'coop-housing',
    title: 'Co-operative Housing Society Law & Governance',
    category: 'Society Laws & Compliance',
    description: 'Detailed presentation on Maharashtra Co-operative Societies Act, model bye-laws, transfer of shares, and flat transmissions.',
    fileUrl: 'presentations/cooperative-housing-societies-law.pptx',
    slidesCount: 22,
    topics: [
      'Membership admission, associate membership, and nomination',
      'Deemed conveyance procedures and developer agreements',
      'Dispute redressal mechanisms under Co-operative Courts',
      'Redevelopment guidelines and Section 79A compliance',
    ],
  },
  {
    id: 'wills-probate',
    title: 'Wills, Succession Laws & Testamentary Proceedings',
    category: 'Succession & Estate Planning',
    description: 'Practical guide to drafting valid wills, obtaining Probate and Letters of Administration from the Bombay High Court.',
    fileUrl: 'presentations/wills-succession-testamentary.pptx',
    slidesCount: 20,
    topics: [
      'Execution, attestation, and codicil best practices',
      'Probate petitions and caveats in the Bombay High Court',
      'Letters of Administration and Succession Certificates',
      'Family settlement arrangements and release deeds',
    ],
  },
  {
    id: 'commercial-arbitration',
    title: 'Commercial Arbitration & Alternate Dispute Resolution',
    category: 'Arbitration & Litigation',
    description: 'Strategic legal overview of institutional and ad-hoc arbitration under the Arbitration & Conciliation Act, 1996.',
    fileUrl: 'presentations/commercial-arbitration-overview.pptx',
    slidesCount: 16,
    topics: [
      'Drafting enforceable dispute resolution & arbitration clauses',
      'Interim reliefs under Section 9 & Section 17',
      'Conduct of arbitral proceedings and evidence handling',
      'Enforcement and challenge of awards under Section 34',
    ],
  },
];

export function KnowledgeCenter() {
  return (
    <AppLayout active="Knowledge">
      <PageHero
        eyebrow="Pereira &amp; Associates · Legal Insights"
        title={<>Knowledge <em>Center</em></>}
        lede="Presentations, practical legal briefings, and slide decks prepared by our chambers across core practice areas."
        image="office-atmosphere.jpg"
        alt="Chambers library with legal briefs and presentations"
        index="05"
      />

      <div className="p-container">
        <section className="p-section" aria-label="Presentations and PPT decks">
          <p className="p-eyebrow">Presentation Decks &amp; Briefings</p>
          <h2 className="p-section-title">Legal Presentations (PPT)</h2>
          <p className="p-section-intro">
            Download presentation slide decks prepared for clients, institutions, and legal seminars.
          </p>

          <div className="pa-ppt-grid">
            {presentations.map((item) => (
              <article key={item.id} className="pa-ppt-card rv">
                <div className="pa-ppt-head">
                  <div className="pa-ppt-badge">
                    <Presentation size={18} />
                    <span>PPT Presentation</span>
                  </div>
                  <span className="pa-ppt-category">{item.category}</span>
                </div>

                <h3 className="pa-ppt-title">{item.title}</h3>
                <p className="pa-ppt-desc">{item.description}</p>

                <div className="pa-ppt-topics">
                  <h4>Key topics covered:</h4>
                  <ul>
                    {item.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="pa-ppt-foot">
                  <span className="pa-ppt-meta">{item.slidesCount} Slides · .PPTX format</span>
                  <a
                    className="pa-ppt-download"
                    href={assetHref(item.fileUrl)}
                    download
                    data-testid={`download-ppt-${item.id}`}
                  >
                    <ArrowDownToLine size={15} />
                    Download PPT
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="p-section">
          <div className="p-address-panel">
            <div>
              <p className="p-eyebrow">Pereira &amp; Associates · Advocates &amp; Notary</p>
              <h2 className="p-section-title">Contact Us</h2>
            </div>
            <a className="p-button" href={pageHref('Contact')}>
              Contact Us <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
