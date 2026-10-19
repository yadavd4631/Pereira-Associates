import { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Maximize2,
  Minimize2,
  Presentation,
  ShieldCheck,
  X,
} from 'lucide-react';
import { AppLayout, assetHref, pageHref, PageHero } from './_shared/AppLayout';

interface PresentationItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  slidesCount: number;
  topics: string[];
}

const presentations: PresentationItem[] = [
  {
    id: 'family-settlement',
    title: 'Deed of Family Settlement and Mediation',
    slug: 'deed-family-settlement-mediation',
    category: 'Family Arrangements & Succession',
    description:
      'A comprehensive legal guide on family settlement deeds, mediation principles, statutory validity, partition arrangements, stamp duty, and dispute prevention.',
    slidesCount: 17,
    topics: [
      'Concept and legal validity of Family Settlement Deeds',
      'Mediation process and peaceful dispute resolution',
      'Rights of family members and partition arrangements',
      'Registration, stamp duty, and court precedent considerations',
    ],
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney – Law & Practice',
    slug: 'power-of-attorney',
    category: 'Property & Documentation',
    description:
      'In-depth analysis of General & Special Powers of Attorney, execution formalities, NRI attestation, consular authentication, and revocation.',
    slidesCount: 26,
    topics: [
      'General vs Special Power of Attorney distinctions',
      'Execution by NRIs, consular authentication, and apostille',
      'Registration and adjudication before the Collector of Stamps',
      'Duties of Attorney, limits of authority, and revocation procedures',
    ],
  },
  {
    id: 'gift-release-deed',
    title: 'Gift Deed & Release Deed',
    slug: 'gift-deed-release-deed',
    category: 'Property Law & Transfers',
    description:
      'Legal requirements governing voluntary property transfers through Gift Deeds and relinquishment of undivided shares through Release Deeds.',
    slidesCount: 24,
    topics: [
      'Essential ingredients of a valid Gift Deed under Transfer of Property Act',
      'Acceptance during donor’s lifetime and irrevocable status',
      'Release Deed execution between co-owners and legal heirs',
      'Stamp duty concessions for family transfers and registration mandates',
    ],
  },
  {
    id: 'registering-will',
    title: 'Registering a Will in India – Process, Legal Benefits & Dispute Prevention',
    slug: 'registering-will-in-india',
    category: 'Testamentary & Succession',
    description:
      'Essential walkthrough on drafting, executing, attesting, and registering a Will before the Sub-Registrar of Assurances to avoid contentious disputes.',
    slidesCount: 10,
    topics: [
      'Legal prerequisites for executing a valid testamentary will',
      'Role of attesting witnesses and medical fitness certificates',
      'Procedure before the Sub-Registrar of Assurances',
      'Mitigating grounds of challenge: undue influence, fraud, and disputes',
    ],
  },
  {
    id: 'redevelopment-mumbai',
    title: 'Redevelopment of Buildings in Mumbai',
    slug: 'redevelopment-buildings-mumbai',
    category: 'Society Laws & Real Estate',
    description:
      'Complete legal framework on housing society redevelopment under Section 79A, developer selection, Development Agreements, and member protection.',
    slidesCount: 22,
    topics: [
      'Section 79A directives under the Maharashtra Co-operative Societies Act',
      'Selection of Project Management Consultants (PMC) and Developer tenders',
      'Key clauses in Development Agreement & Permanent Alternate Accommodation Agreement (PAAA)',
      'Hardship compensation, corpus fund, transit rent, and bank guarantees',
    ],
  },
  {
    id: 'law-testamentary',
    title: 'Law on Testamentary & Succession',
    slug: 'law-on-testamentary',
    category: 'Succession & High Court Proceedings',
    description:
      'Practical analysis of testamentary proceedings in the Bombay High Court, including Probate Petitions, Letters of Administration, caveats, and citations.',
    slidesCount: 12,
    topics: [
      'Distinction between Probate, Letters of Administration, and Succession Certificate',
      'Testamentary jurisdiction and filings in the Bombay High Court',
      'Caveats, citations, and handling contentious testamentary suits',
      'Intestate succession principles and ancestral property devolution',
    ],
  },
];

export function KnowledgeCenter() {
  const [activeDeck, setActiveDeck] = useState<PresentationItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openPresentation = (deck: PresentationItem) => {
    setActiveDeck(deck);
    setCurrentSlide(1);
  };

  const closePresentation = useCallback(() => {
    setActiveDeck(null);
    setCurrentSlide(1);
    setIsFullscreen(false);
  }, []);

  const nextSlide = useCallback(() => {
    if (!activeDeck) return;
    setCurrentSlide((prev) => (prev < activeDeck.slidesCount ? prev + 1 : prev));
  }, [activeDeck]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!activeDeck) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closePresentation();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDeck, nextSlide, prevSlide, closePresentation]);

  // Lock body scroll when viewer modal is open
  useEffect(() => {
    if (activeDeck) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDeck]);

  return (
    <AppLayout active="Knowledge">
      <PageHero
        eyebrow="Pereira &amp; Associates · Legal Insights"
        title={<>Knowledge <em>Centre</em></>}
        lede="Presentations, practical legal briefings, and slide decks prepared by our chambers across core practice areas."
        image="office-atmosphere.jpg"
        alt="Chambers library with legal briefs and presentations"
        index="05"
      />

      <div className="p-container">
        <section className="p-section" aria-label="Presentations and PPT decks">
          <p className="p-eyebrow">Presentation Decks &amp; Briefings</p>
          <h2 className="p-section-title">Chambers Presentations</h2>
          <p className="p-section-intro">
            Interactive presentation slide decks prepared for clients, institutions, and legal seminars.
            Click below to view the slides in high resolution directly in your browser.
          </p>

          <div className="pa-ppt-grid">
            {presentations.map((item) => (
              <article key={item.id} className="pa-ppt-card rv">
                <div className="pa-ppt-head">
                  <div className="pa-ppt-badge">
                    <Presentation size={17} />
                    <span>Presentation Deck</span>
                  </div>
                  <span className="pa-ppt-category">{item.category}</span>
                </div>

                <div
                  className="pa-ppt-cover-preview"
                  onClick={() => openPresentation(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openPresentation(item);
                  }}
                  aria-label={`Open presentation: ${item.title}`}
                >
                  <img
                    src={assetHref(`slides/${item.slug}/slide-001.jpg`)}
                    alt={`Title slide of ${item.title}`}
                    loading="lazy"
                  />
                  <div className="pa-ppt-cover-overlay">
                    <span className="pa-ppt-cover-btn">
                      <Eye size={18} /> View Slides
                    </span>
                  </div>
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
                  <span className="pa-ppt-meta">
                    <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4, color: 'var(--pa-copper)' }} />
                    {item.slidesCount} Slides · View Only
                  </span>
                  <button
                    className="pa-ppt-view-btn"
                    type="button"
                    onClick={() => openPresentation(item)}
                    data-testid={`view-ppt-${item.id}`}
                  >
                    <Eye size={15} />
                    View Presentation
                  </button>
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

      {/* Interactive In-Browser Slide Viewer Modal (View-Only, No Download) */}
      {activeDeck && (
        <div
          className={`pa-slide-modal ${isFullscreen ? 'is-fullscreen' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing presentation: ${activeDeck.title}`}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Top Bar */}
          <header className="pa-modal-header">
            <div className="pa-modal-info">
              <span className="pa-modal-badge">
                <Presentation size={14} /> Knowledge Centre
              </span>
              <h2 className="pa-modal-title">{activeDeck.title}</h2>
            </div>
            <div className="pa-modal-actions">
              <span className="pa-slide-counter">
                Slide <strong>{currentSlide}</strong> of {activeDeck.slidesCount}
              </span>
              <button
                type="button"
                className="pa-modal-btn"
                onClick={() => setIsFullscreen(!isFullscreen)}
                aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
                title={isFullscreen ? 'Exit full screen' : 'Full screen'}
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button
                type="button"
                className="pa-modal-btn pa-modal-close"
                onClick={closePresentation}
                aria-label="Close presentation viewer"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          {/* Main Stage */}
          <div className="pa-modal-stage">
            <button
              type="button"
              className="pa-stage-nav pa-stage-prev"
              onClick={prevSlide}
              disabled={currentSlide === 1}
              aria-label="Previous slide"
              title="Previous slide (Left Arrow)"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="pa-slide-frame" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={assetHref(
                  `slides/${activeDeck.slug}/slide-${String(currentSlide).padStart(3, '0')}.jpg`
                )}
                alt={`Slide ${currentSlide} of ${activeDeck.title}`}
                className="pa-active-slide-img"
                draggable={false}
              />
              {/* Transparent protective shield preventing right-click & drag save */}
              <div
                className="pa-slide-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="pa-slide-watermark" aria-hidden="true">
                Pereira &amp; Associates · Knowledge Centre
              </div>
            </div>

            <button
              type="button"
              className="pa-stage-nav pa-stage-next"
              onClick={nextSlide}
              disabled={currentSlide === activeDeck.slidesCount}
              aria-label="Next slide"
              title="Next slide (Right Arrow)"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Bottom Thumbnails Rail */}
          <footer className="pa-modal-footer">
            <div className="pa-thumbnails-rail" role="tablist" aria-label="Slide thumbnails">
              {Array.from({ length: activeDeck.slidesCount }, (_, idx) => idx + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  role="tab"
                  aria-selected={num === currentSlide}
                  className={`pa-thumb-btn ${num === currentSlide ? 'is-active' : ''}`}
                  onClick={() => setCurrentSlide(num)}
                  aria-label={`Jump to slide ${num}`}
                >
                  <img
                    src={assetHref(
                      `slides/${activeDeck.slug}/slide-${String(num).padStart(3, '0')}.jpg`
                    )}
                    alt=""
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="pa-thumb-num">{num}</span>
                </button>
              ))}
            </div>
          </footer>
        </div>
      )}
    </AppLayout>
  );
}
