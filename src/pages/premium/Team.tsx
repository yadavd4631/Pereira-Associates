import { useState } from 'react';
import { ArrowRight, LayoutGrid, Network } from 'lucide-react';
import { AppLayout, assetHref, pageHref, PageHero } from './_shared/AppLayout';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  tier: string;
  tierNumber: string;
  reportingTo?: string;
  description: string;
  image: string;
}

const people: TeamMember[] = [
  {
    name: 'Adv. Darryl Pereira',
    role: 'Founder & Legal Counsel',
    initials: 'DP',
    tier: 'Firm Leadership',
    tierNumber: 'Tier 01',
    description: 'Founding Advocate and Central Government panel counsel overseeing practice vision, senior advocacy, and client mandates.',
    image: 'team/darryl-pereira.jpg',
  },
  {
    name: 'Mrs. Rosenda Pereira',
    role: 'Manager',
    initials: 'RP',
    tier: 'Practice Management',
    tierNumber: 'Tier 02',
    reportingTo: 'Adv. Darryl Pereira',
    description: 'Directs practice operations, institutional relations, registry coordination, and executive administration.',
    image: 'team/rosenda-pereira.jpg',
  },
  {
    name: 'Adv. Natasha M. Kasad',
    role: 'Senior Associate',
    initials: 'NMK',
    tier: 'Senior Legal',
    tierNumber: 'Tier 03',
    reportingTo: 'Practice Leadership',
    description: 'Senior legal advocate leading commercial litigation strategy, property dispute resolution, and high-value drafting.',
    image: 'team/natasha-kasad.jpg',
  },
  {
    name: 'Adv. Beverly Fernandes',
    role: 'Associate',
    initials: 'BF',
    tier: 'Legal Associate',
    tierNumber: 'Tier 04',
    reportingTo: 'Adv. Natasha M. Kasad',
    description: 'Advocate handling corporate documentation, civil court proceedings, testamentary petitions, and society matters.',
    image: 'team/beverly-fernandes.jpg',
  },
  {
    name: 'Adv. Lisa Marie Chittilappilly',
    role: 'Junior Associate',
    initials: 'LC',
    tier: 'Junior Legal',
    tierNumber: 'Tier 05',
    reportingTo: 'Adv. Beverly Fernandes',
    description: 'Junior advocate assisting on case law research, title searches, court appearances, and documentation filings.',
    image: 'team/lisa-marie.jpg',
  },
  {
    name: 'Boris Pereira',
    role: 'Legal Intern',
    initials: 'BP',
    tier: 'Internship',
    tierNumber: 'Tier 06',
    reportingTo: 'Adv. Lisa Marie Chittilappilly',
    description: 'Legal intern supporting judicial precedents research, brief preparation, and chambers archive management.',
    image: 'team/boris-pereira.jpg',
  },
];

export function Team() {
  const [viewMode, setViewMode] = useState<'hierarchy' | 'grid'>('hierarchy');

  return (
    <AppLayout active="Team">
      <PageHero
        eyebrow="Pereira &amp; Associates · Bandra West"
        title={<>The Team</>}
        lede="Working together from our Bandra office, our team brings care and attention to every instruction."
        image="premium-legal-library.jpg"
        alt="AI-generated illustration of an empty legal library with bookshelves and a desk"
        index="04"
      />
      <div className="p-container">
        <section className="p-section" aria-label="Pereira & Associates team">
          <div className="p-team-intro" style={{ marginBottom: 12 }}>
            <p className="p-section-intro" style={{ margin: 0 }}>
              A structured practice working in close coordination from our Bandra chambers.
            </p>
          </div>

          <div className="pa-team-controls">
            <div className="pa-view-toggle" role="tablist" aria-label="Team display format">
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'hierarchy'}
                className={`pa-toggle-btn ${viewMode === 'hierarchy' ? 'active' : ''}`}
                onClick={() => setViewMode('hierarchy')}
                data-testid="toggle-hierarchy"
              >
                <Network size={15} />
                Practice Hierarchy
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'grid'}
                className={`pa-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                data-testid="toggle-grid"
              >
                <LayoutGrid size={15} />
                Directory Grid
              </button>
            </div>
            <p className="p-section-intro" style={{ margin: 0, fontSize: 13 }}>
              {viewMode === 'hierarchy'
                ? 'Showing reporting structure from Practice Leadership to Interns.'
                : 'Displaying complete chambers personnel.'}
            </p>
          </div>

          {viewMode === 'hierarchy' ? (
            <div data-testid="team-hierarchy-view">
              {/* Vertical Hierarchy Tree */}
              <div className="pa-hierarchy-tree" data-testid="team-hierarchy-tree">
                {people.map((person, index) => {
                  const isLeadership = index === 0;
                  const isLast = index === people.length - 1;
                  return (
                    <div key={person.name} className="pa-tree-node">
                      <article
                        className={`pa-node-card rv ${isLeadership ? 'pa-node-leadership' : ''}`}
                        style={{ ['--d' as string]: `${index * 80}ms` }}
                        data-testid={`card-hierarchy-${index}`}
                      >
                        <div className="pa-node-photo" aria-label={`Photograph of ${person.name}`}>
                          <img src={assetHref(`images/${person.image}`)} alt={person.name} />
                        </div>
                        <div className="pa-node-content">
                          <div className="pa-node-meta">
                            <span className="pa-node-tier">{person.tierNumber} · {person.tier}</span>
                            {person.reportingTo && (
                              <span className="pa-node-reporting">Reports to: {person.reportingTo}</span>
                            )}
                          </div>
                          <h2 className="pa-node-name">{person.name}</h2>
                          <p className="pa-node-role">{person.role}</p>
                          <p className="pa-node-desc">{person.description}</p>
                        </div>
                      </article>

                      {!isLast && (
                        <div className="pa-tree-connector" aria-hidden="true">
                          <div className="pa-connector-line" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="pa-team-grid" data-testid="team-grid-view">
              {people.map((person, index) => (
                <article
                  className="pa-person rv"
                  style={{ ['--d' as string]: `${(index % 3) * 110}ms` }}
                  key={person.name}
                  data-testid={`card-team-${index}`}
                >
                  <div className="pa-portrait">
                    <img src={assetHref(`images/${person.image}`)} alt={`Photograph of ${person.name}`} />
                  </div>
                  <div className="pa-person-body">
                    <span className="pa-person-tier">{person.tierNumber} · {person.tier}</span>
                    <h2>{person.name}</h2>
                    <p>{person.role}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
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
