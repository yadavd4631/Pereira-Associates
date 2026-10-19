import { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Maximize2,
  Minimize2,
  Presentation,
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
  tags: string[];
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
    tags: ['Family Settlement', 'Mediation Act', 'Partition & Shares', 'Stamp Duty & Registration'],
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney – Law & Practice',
    slug: 'power-of-attorney',
    category: 'Property & Documentation',
    description:
      'In-depth analysis of General & Special Powers of Attorney, execution formalities, NRI attestation, consular authentication, and revocation.',
    slidesCount: 26,
    tags: ['General & Special POA', 'NRI Apostille', 'Collector Adjudication', 'Revocation Formalities'],
  },
  {
    id: 'gift-release-deed',
    title: 'Gift Deed & Release Deed',
    slug: 'gift-deed-release-deed',
    category: 'Property Law & Transfers',
    description:
      'Legal requirements governing voluntary property transfers through Gift Deeds and relinquishment of undivided shares through Release Deeds.',
    slidesCount: 24,
    tags: ['Gift Deed Essentials', 'Release of Undivided Share', 'Family Duty Concessions', 'Registration'],
  },
  {
    id: 'registering-will',
    title: 'Registering a Will in India – Process, Legal Benefits & Dispute Prevention',
    slug: 'registering-will-in-india',
    category: 'Testamentary & Succession',
    description:
      'Essential walkthrough on drafting, executing, attesting, and registering a Will before the Sub-Registrar of Assurances to avoid contentious disputes.',
    slidesCount: 10,
    tags: ['Will Execution', 'Sub-Registrar Process', 'Attestation Formalities', 'Dispute Mitigation'],
  },
  {
    id: 'redevelopment-mumbai',
    title: 'Redevelopment of Buildings in Mumbai',
    slug: 'redevelopment-buildings-mumbai',
    category: 'Society Laws & Real Estate',
    description:
      'Complete legal framework on housing society redevelopment under Section 79A, developer selection, Development Agreements, and member protection.',
    slidesCount: 22,
    tags: ['Section 79A Compliance', 'Development Agreement', 'PAAA Execution', 'Bank Guarantees'],
  },
  {
    id: 'law-testamentary',
    title: 'Law on Testamentary & Succession',
    slug: 'law-on-testamentary',
    category: 'Succession & High Court Proceedings',
    description:
      'Practical analysis of testamentary proceedings in the Bombay High Court, including Probate Petitions, Letters of Administration, caveats, and citations.',
    slidesCount: 12,
    tags: ['Probate Proceedings', 'Letters of Administration', 'Bombay High Court', 'Caveats & Citations'],
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

  // Lock body scroll when modal is open
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
        <section className="p-section" aria-label="Chambers Presentations">
          <p className="p-eyebrow">Presentation Decks &amp; Briefings</p>
          <h2 className="p-section-title">Chambers Presentations</h2>
          <p className="p-section-intro">
            Interactive presentation slide decks prepared for clients, institutions, and legal seminars.
            Click below to view the slides in high resolution directly in your browser.
          </p>

          <div className="pa-ppt-grid">
            {presentations.map((item) => (
              <article key={item.id} className="pa-ppt-card rv">
                <div>
                  <div className="pa-ppt-head">
                    <div className="pa-ppt-badge">
                      <Presentation size={15} />
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
                        <Eye size={16} /> View Slides
                      </span>
                    </div>
                  </div>

                  <h3
                    className="pa-ppt-title"
                    onClick={() => openPresentation(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.title}
                  </h3>

                  <p className="pa-ppt-desc">{item.description}</p>

                  <div className="pa-ppt-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="pa-ppt-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pa-ppt-foot">
                  <span className="pa-ppt-meta">{item.slidesCount} Slides · View Only</span>
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

        {/* Contact Strip */}
        <section className="p-section">
          <div className="p-address-panel">
            <div>
              <p className="p-eyebrow">Pereira &amp; Associates · Advocates &amp; Notary</p>
              <h2 className="p-section-title">Schedule a Consultation</h2>
              <p className="p-section-intro p-approach-note">
                Need considered counsel on testamentary succession, property redevelopment, or documentation?
                Reach our Bandra West chambers.
              </p>
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
                <Presentation size={13} /> Knowledge Centre
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
              {/* Protective transparent shield */}
              <div
                className="pa-slide-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="pa-slide-watermark" aria-hidden="true">
                Pereira &amp; Associates · Knowledge Centre · View Only
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
