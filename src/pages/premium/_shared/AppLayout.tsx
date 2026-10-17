import { type ReactNode, useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import '../_group.css';

export type SitePage = 'Home' | 'About' | 'Expertise' | 'Team' | 'Knowledge' | 'Contact';

const pages: { label: string; page: SitePage }[] = [
  { label: 'Home', page: 'Home' },
  { label: 'About our firm', page: 'About' },
  { label: 'Our practices', page: 'Expertise' },
  { label: 'Team', page: 'Team' },
  { label: 'Knowledge Center', page: 'Knowledge' },
  { label: 'Contact Us', page: 'Contact' },
];

export function pageHref(page: SitePage) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pagePath = page === 'Home' ? '/' : page === 'Knowledge' ? '/knowledge' : `/${page.toLowerCase()}`;
  return `${basePath}${pagePath}` || '/';
}

export function assetHref(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

export function AppLayout({
  active,
  children,
}: {
  active: SitePage;
  children: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.querySelector('.premium-site');
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.rv, main .p-section'));
    root.classList.add('pa-armed');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
    const safety = window.setTimeout(() => items.forEach((el) => el.classList.add('is-in')), 4000);
    return () => { io.disconnect(); window.clearTimeout(safety); };
  }, [active]);

  return (
    <div className="premium-site">
      <div className="p-topline">
        <span>Advocates &amp; Notary · Mumbai</span>
        <span>Principled counsel. Thoughtful practice.</span>
      </div>
      <header className={`p-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <Link className="p-brand" href={pageHref('Home')} aria-label="Pereira & Associates home">
          <span className="p-brand-mark" aria-hidden="true">P&amp;A</span>
          <span>
            <span className="p-brand-name">Pereira &amp; Associates</span>
            <span className="p-brand-sub">Advocates &amp; Notary</span>
          </span>
        </Link>
        <button
          className="p-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav id="primary-navigation" className={`p-nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {pages.map(({ label, page }) => (
            <Link
              key={page}
              href={pageHref(page)}
              aria-current={active === page ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="p-footer">
        <div className="p-footer-brand">
          Pereira &amp; Associates
          <small>Advocates &amp; Notary · Mumbai</small>
        </div>
        <nav className="p-footer-links" aria-label="Footer navigation">
          {pages.slice(1).map(({ label, page }) => (
            <Link key={page} href={pageHref(page)}>{label}</Link>
          ))}
        </nav>
        <a className="p-footer-email" href="mailto:pereiraassociates604@gmail.com">
          pereiraassociates604@gmail.com
        </a>
        <span className="p-footer-copy">© 2026 Pereira &amp; Associates. All rights reserved.</span>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow, title, lede, image, alt, index,
}: {
  eyebrow: string; title: ReactNode; lede: string; image: string; alt: string; index: string;
}) {
  return (
    <header className="pa-phero">
      <img src={assetHref(`images/${image}`)} alt={alt} />
      <span className="pa-phero-num" aria-hidden="true">{index}</span>
      <div className="pa-phero-inner">
        <p className="p-eyebrow pa-rise">{eyebrow}</p>
        <h1 className="pa-rise" style={{ ['--d' as string]: '120ms' }}>{title}</h1>
        <p className="lede pa-rise" style={{ ['--d' as string]: '260ms' }}>{lede}</p>
      </div>
    </header>
  );
}
