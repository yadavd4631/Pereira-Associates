import { ArrowRight } from 'lucide-react';
import { AppLayout, pageHref, PageHero } from './_shared/AppLayout';

const people = [
  { name: 'Adv. Darryl Pereira', role: 'Legal Counsel', initials: 'DP' },
  { name: 'Mrs. Rosenda Pereira', role: 'Manager', initials: 'RP' },
  { name: 'Adv. Natasha Kasad', role: 'Senior Associate', initials: 'NK' },
  { name: 'Adv. Beverly Fernandes', role: 'Associate', initials: 'BF' },
  { name: 'Adv. Lisa Marie Chittilappilly', role: 'Junior Associate', initials: 'LC' },
  { name: 'Boris Pereira', role: 'Legal Intern', initials: 'BP' },
];

export function Team() {
  return (
    <AppLayout active="Team">
      <PageHero eyebrow="Pereira &amp; Associates · Bandra West" title={<>Our <em>people</em></>} lede="Working together from our Bandra office, our team brings care and attention to every instruction." image="premium-legal-library.jpg" alt="AI-generated illustration of an empty legal library with bookshelves and a desk" index="04" />
      <div className="p-container">

        <section className="p-section" aria-label="Pereira & Associates team">
          <div className="p-team-intro">
            <div>
              <h2 className="p-section-title">The team</h2>
              <p className="p-section-intro">Meet the people of Pereira &amp; Associates.</p>
            </div>
            <p className="p-team-count"><strong>6 colleagues</strong>One practice, based in Bandra</p>
          </div>
          <div className="pa-team-grid">
            {people.map((person, index) => (
              <article className="pa-person rv" style={{ ['--d' as string]: `${(index % 3) * 110}ms` }} key={person.name} data-testid={`card-team-${index}`}>
                <div className="pa-portrait" role="img" aria-label={`Photograph placeholder for ${person.name}; no photograph supplied`}>
                  <i aria-hidden="true">{String(index + 1).padStart(2, '0')}</i>
                  <b aria-hidden="true">{person.initials}</b>
                  <small>Portrait placeholder · photograph to be supplied</small>
                </div>
                <div className="pa-person-body">
                  <h2>{person.name}</h2>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="p-section">
          <div className="p-address-panel">
            <div>
              <p className="p-eyebrow">Pereira &amp; Associates · Advocates &amp; Notary</p>
              <h2 className="p-section-title">Contact the practice</h2>
            </div>
            <a className="p-button" href={pageHref('Contact')}>Office contact details <ArrowRight size={15} /></a>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
