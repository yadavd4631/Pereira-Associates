import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { AppLayout, assetHref, pageHref } from './_shared/AppLayout';

const areas = [
  'Company law',
  'Insolvency & bankruptcy',
  'Corporate & commercial',
  'Real estate',
  'Succession & testamentary matters',
  'Arbitration',
  'Co-operative housing societies',
  'Property documentation',
  'Wills & family arrangements',
  'Sale deeds & agreements',
  'Society forms & legal opinions',
];

const initials = ['DP', 'RP', 'NMK', 'BF', 'LC', 'BP'];
const virtues = ['Integrity', 'Excellence', 'Trust', 'Diligence', 'Justice'];
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });

export function Home() {
  return (
    <AppLayout active="Home">
      <section className="pa-hero" aria-labelledby="home-title">
        <img
          src={assetHref('images/premium-legal-library.jpg')}
          alt="AI-generated illustration of an empty wood-panelled legal library with tall bookshelves, arched windows and a desk with a brass lamp"
        />
        <div className="pa-seal" aria-hidden="true">
          <svg viewBox="0 0 150 150">
            <defs><path id="pa-circle" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" /></defs>
            <circle cx="75" cy="75" r="72" fill="none" stroke="rgba(201,164,106,.5)" />
            <circle cx="75" cy="75" r="44" fill="none" stroke="rgba(201,164,106,.3)" />
            <text fill="#c9a46a" fontSize="10" letterSpacing="3.2"><textPath href="#pa-circle">ADVOCATES &amp; NOTARY · BANDRA WEST · MUMBAI ·</textPath></text>
          </svg>
          <b>P&amp;A</b>
        </div>
        <div className="pa-hero-inner">
          <p className="p-eyebrow pa-rise" style={{ color: 'var(--pa-brass)' }}>Bandra West · Mumbai</p>
          <h1 id="home-title" className="pa-rise" style={d(120)}>Clarity in counsel. <em>Steadfast in principle.</em></h1>
          <p className="lede pa-rise" style={d(260)}>Thoughtful legal guidance for people and businesses navigating complex matters.</p>
          <div className="pa-hero-actions pa-rise" style={d(400)}>
            <a className="pa-btn-brass" href={pageHref('Expertise')} data-testid="link-hero-expertise">View areas of practice <ArrowRight size={16} /></a>
            <a className="pa-ghost" href={pageHref('About')} data-testid="link-hero-about">About our firm <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="pa-proof" aria-label="Practice details">
        <p className="rv">Legal counsel shaped by experience, grounded in trust.</p>
        <div className="rv" style={d(100)}><strong>34+ years</strong><span>of professional experience</span></div>
        <div className="rv" style={d(200)}><strong>Bombay High Court</strong></div>
        <div className="rv" style={d(300)}><strong>Government of India</strong><span>appointed Notary</span></div>
      </section>

      <section className="pa-wrap pa-split" aria-labelledby="home-firm-heading">
        <div className="pa-frame rv">
          <div className="img">
            <img src={assetHref('images/legal-study.jpg')} alt="Illustrative image of legal books and papers" />
          </div>
          <div className="pa-note">Care across the full life of a matter.</div>
        </div>
        <div className="pa-copy rv" style={d(150)}>
          <p className="p-eyebrow">The practice</p>
          <h2 className="p-display" id="home-firm-heading">Experience, with attention to <em>the matter at hand.</em></h2>
          <p>Adv. Darryl Pereira passed his Law in July 1992 from Government Law College and was associated with a Senior Lawyer’s chambers for almost 10 years.</p>
          <p>With more than 34 years of professional experience, his practice spans corporate, property, arbitration, commercial and testamentary matters. Based in Bandra, the practice also attends to matters outside Mumbai and documentary advisory work.</p>
          <a className="p-link" href={pageHref('About')}>Read about the firm <ArrowRight size={15} /></a>
          <div className="pa-since">
            <div><strong>1992</strong><span>Government Law College</span></div>
            <div><strong>34+</strong><span>years of professional experience</span></div>
          </div>
        </div>
      </section>

      <section className="pa-areas" aria-labelledby="home-areas-heading">
        <div className="pa-wrap">
          <div className="pa-areas-head rv">
            <div>
              <p className="p-eyebrow">Areas of work</p>
              <h2 className="p-display" id="home-areas-heading">Our <em>practices</em></h2>
            </div>
            <a className="pa-round" href={pageHref('Expertise')} aria-label="Explore all areas of practice"><ArrowUpRight size={22} /></a>
          </div>
          <div className="pa-area-grid">
            {areas.map((area, i) => (
              <a key={area} className="pa-area rv" style={d((i % 3) * 90)} href={pageHref('Expertise')} data-testid={`link-area-${i}`}>
                <span>{String(i + 1).padStart(2, '0')}</span><b>{area}</b><ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pa-values">
        <div className="img">
          <img src={assetHref('images/bandra-architecture.jpg')} alt="Illustrative image of an old Bandra building" />
        </div>
        <div className="copy rv">
          <p className="p-eyebrow" style={{ color: 'var(--pa-brass)' }}>Our approach</p>
          <blockquote>“Principled, practical and client-focused legal services.”</blockquote>
          <ul className="pa-virtues">{virtues.map((v) => <li key={v}>{v}</li>)}</ul>
          <a className="pa-ghost" href={pageHref('About')}>Read about our approach <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="pa-wrap pa-people" style={{ gridTemplateColumns: '1fr' }}>
        <div className="rv">
          <p className="p-eyebrow">The Team</p>
          <p className="p-body" style={{ fontSize: '18px', lineHeight: 1.7, maxWidth: '720px', margin: '14px 0 24px' }}>
            Working together from our Bandra office, our team brings care and attention to every instruction.
          </p>
          <div className="pa-initials" aria-hidden="true">{initials.map((i) => <span key={i}>{i}</span>)}</div>
        </div>
      </section>

      <section className="pa-visit">
        <div className="rv">
          <p className="p-eyebrow">Our office · Bandra West</p>
          <h2>Find our <em>office.</em></h2>
          <a className="pa-btn-brass" href={pageHref('Contact')} data-testid="link-home-contact"><MapPin size={15} /> Contact Us</a>
        </div>
        <address className="rv" style={d(150)}>604, 6th Floor, Pooja Apartments,<br />Behind Parsee Agyari, Chinchpokli Road,<br />Off. Hill Road, Bandra West,<br />Mumbai 400050, India.</address>
      </section>
    </AppLayout>
  );
}
