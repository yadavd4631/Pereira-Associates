import { ArrowUpRight } from 'lucide-react';
import { AppLayout, PageHero } from './_shared/AppLayout';

const officeAddress =
  '604, 6th Floor, Pooja Apartments, Behind Parsee Agyari, Chinchpokli Road, Off. Hill Road, Bandra West, Mumbai 400050, India.';
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

const contacts = [
  {
    name: 'Adv. Darryl Pereira',
    role: 'Legal Counsel',
    email: 'darrylpereira@yahoo.com',
    phone: '+91 9167734342',
    phoneHref: '+919167734342',
  },
  {
    name: 'Adv. Natasha Kasad',
    role: 'Senior Associate',
    email: 'pereiraassociates604@gmail.com',
    phone: '+91 9769302381',
    phoneHref: '+919769302381',
  },
  {
    name: 'Adv. Beverly Fernandes',
    role: 'Associate',
    email: 'pereiraassociates604@gmail.com',
    phone: '+91 9920844503',
    phoneHref: '+919920844503',
  },
];

export function Contact() {
  return (
    <AppLayout active="Contact">
      <PageHero eyebrow="Pereira &amp; Associates · Bandra West" title={<>Contact <em>the office</em></>} lede="Our office is in Bandra West, Mumbai. Reach the team directly or find us at the address below." image="bandra-architecture.jpg" alt="Illustrative image of an old Bandra building" index="05" />
      <div className="p-container">

        <section className="p-section" id="office">
          <p className="p-eyebrow">Office address</p>
          <h2 className="p-section-title">Bandra West, Mumbai</h2>
          <div className="p-office-layout">
            <div className="p-office-address">
              <h2>Visit the office</h2>
              <address>
                604, 6th Floor, Pooja Apartments,<br />
                Behind Parsee Agyari, Chinchpokli Road,<br />
                Off. Hill Road, Bandra West,<br />
                Mumbai 400050, India.
              </address>
            </div>
            <div className="p-office-address">
              <h2>Find the address</h2>
              <p className="p-body">View the office address in Google Maps.</p>
              <a className="p-link" href={mapsHref} target="_blank" rel="noreferrer">
                Open Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="p-section">
          <p className="p-eyebrow">Direct contact</p>
          <h2 className="p-section-title">Contact a member of the team</h2>
          <p className="p-section-intro">For general enquiries, please contact a member of our team.</p>
          <div className="p-contact-list">
            {contacts.map((person) => (
              <article className="p-contact-person" key={person.name}>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
                <div className="p-contact-links">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="p-section">
          <div className="p-careers">
            <div>
              <p className="p-eyebrow">Careers</p>
              <h2>Job opportunities and internships</h2>
              <p>For job opportunities and internships, please contact us by email or phone.</p>
            </div>
            <div className="p-careers-actions">
              <a href="mailto:pereiraassociates604@gmail.com?subject=Career%20opportunities">Email for opportunities</a>
              <a href="tel:+919820735332">Call +91 9820735332</a>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
