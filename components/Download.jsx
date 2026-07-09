'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const launchPlatforms = [
  { name: 'iOS', detail: 'Coming soon' },
  { name: 'Android', detail: 'Coming soon' },
  { name: 'Web', detail: 'Platform access' },
];

export default function Download() {
  const ref = useRef(null);
  useGsapReveal(ref, { y: 40 });

  return (
    <section id="download" ref={ref} className="py-16 sm:py-24 lg:py-32 section-pad hairline-t">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="font-display font-bold text-2xl sm:text-display-lg text-paper mb-3 sm:mb-6">
          Coming soon on every screen.
        </h2>
        <p className="text-fog text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
          Get launch access for iOS, Android, and web.
        </p>

        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {launchPlatforms.map((platform) => (
            <span
              key={platform.name}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs text-paper/80"
            >
              <span className="font-semibold text-paper">{platform.name}</span>
              <span className="mx-1.5 text-paper/30">·</span>
              <span className="uppercase tracking-[0.12em] text-paper/45">{platform.detail}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a href="#wishlist" className="btn-primary w-full sm:w-auto text-center">
            Join Wishlist
          </a>
          <div className="flex w-full sm:w-auto gap-2 sm:gap-3">
            <a href="#wishlist" className="btn-ghost flex-1 sm:flex-none gap-2 px-4 py-3 text-xs sm:text-sm">
              <svg viewBox="0 0 814 1000" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden>
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-157.7-111.6l-.9-.9c-29.2-38.9-112-154.4-112-266.7 0-186.5 120-284.7 237.5-284.7 60.8 0 111.7 40.8 147.4 40.8 33.8 0 89-43.2 159.1-43.2zm-160-140.4c-.9 0-1.8.1-2.7.2C587.7 204.2 536 256 536 298.7c0 2.6.1 5.2.5 7.8h10.7c44.5 0 91.1-30.1 113.3-72.7 14.1-27.4 22.5-58.5 22.5-90.1 0-1.3 0-2.6-.1-3.9-.5-.1-1.1-.2-1.7-.2z"/>
              </svg>
              App Store
            </a>
            <a href="#wishlist" className="btn-ghost flex-1 sm:flex-none gap-2 px-4 py-3 text-xs sm:text-sm">
              <svg viewBox="0 0 512 512" className="w-4 h-4 shrink-0" fill="none" aria-hidden>
                <path d="M48 59.5L272 256 48 452.5C41 444.5 37 433 37 420V92C37 79 41 67.5 48 59.5Z" fill="#4285F4"/>
                <path d="M340 186L82 34C91 28.5 102 26 113 29L384 186H340Z" fill="#34A853"/>
                <path d="M340 326H384L113 483C102 486 91 483.5 82 478L340 326Z" fill="#FBBC05"/>
                <path d="M427 216C443 225 455 240 455 256C455 272 443 287 427 296L384 320L340 256L384 192L427 216Z" fill="#EA4335"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
