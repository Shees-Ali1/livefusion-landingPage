'use client';

import { useEffect, useState } from 'react';
import BrandLogo from '@/components/BrandLogo';

const links = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'Features', href: '#features' },
  { label: 'Go Live', href: '#golive' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 section-pad transition-all duration-300 ${
        scrolled
          ? 'bg-void/88 backdrop-blur-xl hairline-b py-3 sm:py-4'
          : 'bg-void/72 backdrop-blur-md py-3 sm:py-4 lg:py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <BrandLogo className="h-10 w-10 sm:h-11 sm:w-11" showWordmark />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fog hover:text-paper transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#wishlist" className="btn-primary text-xs">
            Join Wishlist
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-fog hover:text-paper p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path d="M0 1h22M0 7h22M0 13h14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-4 pb-4 hairline-t pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-fog hover:text-paper">
              {l.label}
            </a>
          ))}
          <a href="#wishlist" className="btn-primary text-center text-xs" onClick={() => setOpen(false)}>
            Join Wishlist
          </a>
        </div>
      )}
    </header>
  );
}
