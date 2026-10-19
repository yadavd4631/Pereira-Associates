import { ArrowUpRight } from 'lucide-react';
import { AppLayout, PageHero } from './_shared/AppLayout';

const officeAddress =
  '604, 6th Floor, Pooja Apartments, Behind Parsee Agyari, Chinchpokli Road, Off. Hill Road, Bandra West, Mumbai 400050, India.';
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

const contacts = [
  {
    name: 'Adv. Darryl Pereira',
    role: 'Founder & Legal Counsel',
    email: 'darrylpereira@yahoo.com',
    phone: '+91 9167734342',
    phoneHref: '+919167734342',
  },
  {
    name: 'Adv. Natasha M. Kasad',
    role: 'Senior Legal Associate',
    email: 'pereiraassociates604@gmail.com',
    phone: '+91 9769302381',
    phoneHref: '+919769302381',
  },
  {
    name: 'Adv. Beverly Fernandes',
    role: 'Legal Associate',
    email: 'pereiraassociates604@gmail.com',
    phone: '+91 9920844503',
    phoneHref: '+919920844503',
  },
];

export function Contact() {
  return (
    <AppLayout active="Contact">
      <PageHero
        eyebrow="Pereira &amp; Associates · Bandra West"
        title={<>Contact <em>Us</em></>}
        lede="Our office is in Bandra West, Mumbai. Reach our team directly or find us at the address below."
        image="bandra-architecture.jpg"
        alt="Illustrative image of an old Bandra building"
        index="06"
      />
      <div className="p-container">

        <section className="p-section" id="office">
          <p className="p-eyebrow">Office address</p>
          <h2 className="p-section-title">Bandra West, Mumbai</h2>
          <div className="p-office-layout">
            <div className="p-office-address">
              <h2>Visit our office</h2>
              <address>
                604, 6th Floor, Pooja Apartments,<br />
                Behind Parsee Agyari, Chinchpokli Road,<br />
                Off. Hill Road, Bandra West,<br />
                Mumbai 400050, India.
              </address>
              <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--pa-rule)' }}>
                <p style={{ margin: '0 0 6px', fontSize: '13px', color: 'var(--pa-forest)', fontWeight: 600 }}>
                  Adv. Darryl Pereira (Founder &amp; Legal Counsel)
                </p>
                <p style={{ margin: '0 0 6px', fontSize: '13px' }}>
                  Contact: <a className="p-link" href="tel:+919167734342">+91 9167734342</a>
                </p>
                <p style={{ margin: 0, fontSize: '13px' }}>
                  Email: <a className="p-link" href="mailto:darrylpereira@yahoo.com">darrylpereira@yahoo.com</a>
                </p>
              </div>
            </div>
            <div className="p-office-address">
              <h2>Find the address</h2>
              <p className="p-body">View our Bandra office location on Google Maps.</p>
              <a className="p-link" href={mapsHref} target="_blank" rel="noreferrer">
                Open Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="p-section">
          <p className="p-eyebrow">Direct contact</p>
          <h2 className="p-section-title">Contact a member of the team</h2>
          <p className="p-section-intro">For enquiries, please contact our advocates directly.</p>
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
              <p>For associate positions, internships, and research enquiries, please email your curriculum vitae.</p>
            </div>
            <div className="p-careers-actions">
              <a href="mailto:pereirajuniors604@gmail.com?subject=Career%20opportunities%20%2F%20Internship">
                Email: pereirajuniors604@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
