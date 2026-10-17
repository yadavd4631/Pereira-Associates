import { useEffect, useState } from 'react';
import { Route, Switch } from 'wouter';
import { About } from '@/pages/premium/About';
import { Contact } from '@/pages/premium/Contact';
import { Expertise } from '@/pages/premium/Expertise';
import { Home } from '@/pages/premium/Home';
import { KnowledgeCenter } from '@/pages/premium/KnowledgeCenter';
import { Team } from '@/pages/premium/Team';
import { AppLayout } from '@/pages/premium/_shared/AppLayout';

const pageMetadata = {
  home: {
    title: 'Pereira & Associates',
    description: 'Pereira & Associates is a Mumbai legal practice offering considered counsel across corporate, property, commercial, arbitration and testamentary matters.',
  },
  about: {
    title: 'Pereira & Associates',
    description: 'Learn about Adv. Darryl Pereira, his legal education, professional experience, Central Government panel work and appointment as a Government of India Notary.',
  },
  expertise: {
    title: 'Pereira & Associates',
    description: 'Explore the litigation and non-litigation practice areas of Pereira & Associates, including corporate, property, arbitration and documentation matters.',
  },
  team: {
    title: 'Pereira & Associates',
    description: 'Meet the team at Pereira & Associates, a close-knit legal practice based in Bandra West, Mumbai.',
  },
  knowledge: {
    title: 'Pereira & Associates',
    description: 'Legal presentation decks and briefings from Pereira & Associates across property, corporate, testamentary, and arbitration law.',
  },
  contact: {
    title: 'Pereira & Associates',
    description: 'Find Pereira & Associates at Pooja Apartments in Bandra West, Mumbai, contact the team, or enquire about career and internship opportunities.',
  },
};

function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: 'content', value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '');
        } else {
          element.name = selector.match(/name="([^"]+)"/)?.[1] ?? '';
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [description, title]);
}

function HomePage() {
  usePageMetadata(pageMetadata.home.title, pageMetadata.home.description);
  return <Home />;
}

function AboutPage() {
  usePageMetadata(pageMetadata.about.title, pageMetadata.about.description);
  return <About />;
}

function ExpertisePage() {
  usePageMetadata(pageMetadata.expertise.title, pageMetadata.expertise.description);
  return <Expertise />;
}

function TeamPage() {
  usePageMetadata(pageMetadata.team.title, pageMetadata.team.description);
  return <Team />;
}

function KnowledgePage() {
  usePageMetadata(pageMetadata.knowledge.title, pageMetadata.knowledge.description);
  return <KnowledgeCenter />;
}

function ContactPage() {
  usePageMetadata(pageMetadata.contact.title, pageMetadata.contact.description);
  return <Contact />;
}

function NotFoundPage() {
  usePageMetadata('Pereira & Associates', 'The requested page could not be found.');
  return (
    <AppLayout active="Home">
      <section className="mx-auto max-w-4xl px-7 py-24 text-center">
        <p className="p-eyebrow">404 · Page not found</p>
        <h1 className="p-display mt-5">This page is not available.</h1>
        <a className="p-button mt-8" href="/">Return to the home page</a>
      </section>
    </AppLayout>
  );
}

function Disclaimer() {
  // Notice appears per browser session (when visiting/opening the site),
  // but does not reappear on every click while browsing the site.
  const [accepted, setAccepted] = useState(() => {
    try {
      return window.sessionStorage.getItem('pa-disclaimer-accepted') === 'yes';
    } catch {
      return false;
    }
  });
  const [checked, setChecked] = useState(false);

  const acknowledge = () => {
    if (!checked) return;
    try {
      window.sessionStorage.setItem('pa-disclaimer-accepted', 'yes');
    } catch {
      // continue if storage not available
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="disclaimer-backdrop">
      <section className="disclaimer-dialog" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
        <div className="eyebrow">Before you continue</div>
        <h2 id="disclaimer-title">A note about this website.</h2>
        <div className="disclaimer-copy">
          <p>In accordance with the rules of the Bar Council of India, law firms are prohibited from soliciting work and advertising. By accessing this website, you acknowledge and agree that there has been no advertisement, solicitation, invitation, or inducement from us or any of our members to solicit work through this website. The use of this site does not create a lawyer - client relationship and should not be construed as an invitation to form such a relationship or as legal advice.</p>
          <p>The information on this website is provided for general informational purposes only. We do not guarantee that the content is current, complete, or accurate. We are not responsible for any consequences resulting from actions taken by users based on the information provided on this website.</p>
        </div>
        <label className="disclaimer-ack">
          <input
            data-testid="input-disclaimer-acknowledgement"
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span>I have read and understood the above disclaimer, and wish to enter the website.</span>
        </label>
        <button
          className="enter-button"
          data-testid="button-acknowledge-disclaimer"
          type="button"
          disabled={!checked}
          onClick={acknowledge}
        >
          Acknowledge &amp; enter
        </button>
        <span className="skip-disclaimer">This acknowledgement does not create a lawyer–client relationship.</span>
      </section>
    </div>
  );
}

export default function LiveSite() {
  return (
    <>
      <Disclaimer />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/expertise" component={ExpertisePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/knowledge" component={KnowledgePage} />
        <Route path="/knowledge-center" component={KnowledgePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
