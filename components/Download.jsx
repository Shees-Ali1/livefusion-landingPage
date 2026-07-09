'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import BrandLogo from '@/components/BrandLogo';

const launchPlatforms = [
  { name: 'iOS', detail: 'Coming soon', color: 'text-paper' },
  { name: 'Android', detail: 'Coming soon', color: 'text-paper' },
  { name: 'Web', detail: 'Platform access', color: 'text-[#C56BFF]' },
];

export default function Download() {
  const ref = useRef(null);
  useGsapReveal(ref, { y: 50 });

  return (
    <section id="download" ref={ref} className="section-gap section-pad hairline-t">
      <div className="max-w-[1600px] mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <BrandLogo className="w-16 h-16" showWordmark />
        </div>
        <h2 className="font-display font-bold text-display-lg text-paper mb-6">
          Coming soon on every screen.
        </h2>
        <p className="text-fog mb-10 max-w-md mx-auto">
          Join the wishlist to get launch access for iOS, Android, and the LiveFusion web platform.
        </p>
        <div className="mb-10 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {launchPlatforms.map((platform) => (
            <div key={platform.name} className="hairline bg-panel/70 px-5 py-5 text-left">
              <div className={`text-sm font-semibold ${platform.color}`}>{platform.name}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-paper/45">{platform.detail}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="#wishlist" className="btn-ghost gap-3">
            <svg viewBox="0 0 814 1000" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-157.7-111.6l-.9-.9c-29.2-38.9-112-154.4-112-266.7 0-186.5 120-284.7 237.5-284.7 60.8 0 111.7 40.8 147.4 40.8 33.8 0 89-43.2 159.1-43.2zm-160-140.4c-.9 0-1.8.1-2.7.2C587.7 204.2 536 256 536 298.7c0 2.6.1 5.2.5 7.8h10.7c44.5 0 91.1-30.1 113.3-72.7 14.1-27.4 22.5-58.5 22.5-90.1 0-1.3 0-2.6-.1-3.9-.5-.1-1.1-.2-1.7-.2z"/>
            </svg>
            App Store
          </a>
          <a href="#wishlist" className="btn-ghost gap-3">
            <svg viewBox="0 0 512 512" className="w-5 h-5" fill="none" aria-hidden>
              <path d="M48 59.5L272 256 48 452.5C41 444.5 37 433 37 420V92C37 79 41 67.5 48 59.5Z" fill="#4285F4"/>
              <path d="M340 186L82 34C91 28.5 102 26 113 29L384 186H340Z" fill="#34A853"/>
              <path d="M340 326H384L113 483C102 486 91 483.5 82 478L340 326Z" fill="#FBBC05"/>
              <path d="M427 216C443 225 455 240 455 256C455 272 443 287 427 296L384 320L340 256L384 192L427 216Z" fill="#EA4335"/>
            </svg>
            Google Play
          </a>
        </div>
        <a href="#wishlist" className="btn-primary">Join Wishlist</a>
      </div>
    </section>
  );
}
