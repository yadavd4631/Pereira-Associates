import { ArrowRight } from 'lucide-react';
import { AppLayout, pageHref, PageHero } from './_shared/AppLayout';

const milestones = [
  { period: 'July 1992', title: 'Government Law College', detail: 'Adv. Darryl Pereira passed Law at Government Law College.' },
  { period: 'Early practice', title: 'Senior Lawyer’s chambers', detail: 'He was associated with a Senior Lawyer’s chambers for almost 10 years.' },
  { period: 'Panel work', title: 'Ministry of Finance', detail: 'Central Government panel work for real-estate and property issues, including matters in Court.' },
  { period: 'Appointment', title: 'Government of India Notary', detail: 'Adv. Darryl Pereira has been appointed Notary by the Government of India.' },
];

export function About() {
  return (
    <AppLayout active="About">
      <PageHero eyebrow="Pereira &amp; Associates · Bandra West, Mumbai" title={<>About <em>our firm</em></>} lede="A Mumbai legal practice serving people and businesses across corporate, property, arbitration, commercial and testamentary matters." image="legal-study.jpg" alt="Illustrative image of legal books and papers" index="02" />
      <div className="p-container">

        <section className="p-section" aria-labelledby="about-profile">
          <div className="p-home-summary p-about-profile">
            <div>
              <p className="p-eyebrow">Adv. Darryl Pereira</p>
              <h2 className="p-section-title" id="about-profile">A professional practice based on experience and considered counsel.</h2>
              <p className="p-body p-about-experience">34+ years of professional experience</p>
            </div>
            <div>
              <p>Adv. Darryl Pereira passed Law in July 1992 from Government Law College. He thereafter joined the chambers of a Senior Lawyer, with whom he was associated for almost 10 years.</p>
              <p>With more than 34 years of professional experience, his practice spans Corporate, Insolvency and Bankruptcy, Property, Arbitration, Commercial and Testamentary matters. The office is based in Bandra and attends to matters outside Mumbai as well as documentary advisory work. I also have associations in Delhi, Goa, Bangalore, Chennai, Pune, Kolkata &amp; Odisha and Internationally in Dubai, USA, UK, Australia and Singapore.</p>
            </div>
          </div>
        </section>

        <section className="p-section">
          <p className="p-eyebrow">Professional background</p>
          <h2 className="p-section-title">Education, practice and appointments</h2>
          <ol className="p-milestones">
            {milestones.map((item) => (
              <li key={item.title}>
                <span className="p-milestone-time">{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="p-section">
          <p className="p-eyebrow">Appointments and services</p>
          <h2 className="p-section-title">Public responsibilities and notarial services</h2>
          <p className="p-section-intro">Adv. Darryl Pereira is on the Central Government panel through the Ministry of Finance for real-estate and property issues, including matters in Court. He has also been appointed Notary by the Government of India and provides notarial services.</p>
          <div className="p-appointment-list">
            <article>
              <h3>Ministry of Finance</h3>
              <p>Central Government panel work for real-estate and property issues, including Court matters.</p>
            </article>
            <article>
              <h3>Government of India Notary</h3>
              <p>Appointed Notary by the Government of India; notarial services are provided.</p>
            </article>
          </div>
        </section>

        <section className="p-section">
          <div className="p-address-panel">
            <div>
              <p className="p-eyebrow">Our approach</p>
              <h2 className="p-section-title">“Principled, practical and client-focused legal services.”</h2>
              <p className="p-section-intro p-approach-note">Integrity. Excellence. Trust. Diligence. Justice.</p>
            </div>
            <a className="p-button" href={pageHref('Contact')}>Contact Us <ArrowRight size={15} /></a>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
