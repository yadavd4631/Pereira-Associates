import { useState } from 'react';
import { ArrowRight, LayoutGrid, Network } from 'lucide-react';
import { AppLayout, assetHref, pageHref, PageHero } from './_shared/AppLayout';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  description: string;
  image: string;
}

const people: TeamMember[] = [
  {
    name: 'Adv. Darryl Pereira',
    role: 'Founder & Legal Counsel',
    initials: 'DP',
    description: 'Founding Advocate and Central Government panel counsel overseeing practice vision, senior advocacy, and client mandates.',
    image: 'team/darryl-pereira.jpg',
  },
  {
    name: 'Mrs. Rosenda Pereira',
    role: 'Manager',
    initials: 'RP',
    description: 'Directs practice operations, institutional relations, registry coordination, and executive administration.',
    image: 'team/rosenda-pereira.jpg',
  },
  {
    name: 'Adv. Natasha M. Kasad',
    role: 'Senior Legal Associate',
    initials: 'NMK',
    description: 'Senior Legal Associate handling Corporate documentation, Civil Court proceedings, Testamentary Petitions and Society matters.',
    image: 'team/natasha-kasad.jpg',
  },
  {
    name: 'Adv. Beverly Fernandes',
    role: 'Legal Associate',
    initials: 'BF',
    description: 'Legal Associate, handling Court appearances, Commercial litigation and Dispute Resolution.',
    image: 'team/beverly-fernandes.jpg',
  },
  {
    name: 'Adv. Lisa Marie',
    role: 'Junior Associate',
    initials: 'LC',
    description: 'Junior Associate assisting on case law research, title searches and documentation filings.',
    image: 'team/lisa-marie.jpg',
  },
  {
    name: 'Boris Pereira',
    role: 'Legal Intern',
    initials: 'BP',
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
        lede="Working together, our team brings care, attention and prompt service."
        image="premium-legal-library.jpg"
        alt="Chambers legal library"
        index="04"
      />
      <div className="p-container">
        <section className="p-section" aria-label="Pereira & Associates team">
          <div className="p-team-intro" style={{ marginBottom: 12 }}>
            <p className="p-section-intro" style={{ margin: 0 }}>
              Working together, our team brings care, attention and prompt service to every client instruction.
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
                Chambers Structure
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
                ? 'Showing our chambers team structure and responsibilities.'
                : 'Displaying complete chambers personnel.'}
            </p>
          </div>

          {viewMode === 'hierarchy' ? (
            <div data-testid="team-hierarchy-view">
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
                    <h2>{person.name}</h2>
                    <p className="pa-person-role">{person.role}</p>
                    <p className="pa-person-desc">{person.description}</p>
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
