'use client';

import { useRef } from 'react';
import { useGsapHero } from '@/hooks/useGsapReveal';
import HeroStudio from '@/components/HeroStudio';
import { platformList } from '@/components/PlatformIcons';

export default function Hero() {
  const ref = useRef(null);
  useGsapHero(ref);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen section-pad pt-24 pb-14 sm:pt-28 lg:pt-36">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto">
        <div className="max-w-5xl mb-14 lg:mb-24">
          <div data-hero="fade" className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            <span className="live-dot" />
            <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-mute">iOS · Android · Web platform coming soon</span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(2.1rem,10vw,6.4rem)] leading-[0.92] tracking-[-0.05em] text-paper mb-2">
            <span className="reveal-line block overflow-hidden">
              <span data-hero="line">Stream once.</span>
            </span>
            <span className="reveal-line block overflow-hidden">
              <span data-hero="line" className="text-violet">Reach everywhere.</span>
            </span>
          </h1>

          <p data-hero="fade" className="max-w-xl mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-fog leading-relaxed text-balance">
            LiveFusion gives creators one beautiful place to manage chat, control broadcasts, and grow across Twitch, Kick, YouTube, and more.
          </p>

          <div data-hero="fade" className="flex flex-wrap gap-2.5 sm:gap-3 mt-6">
            {platformList.map((p) => (
              <span
                key={p.name}
                className="flex items-center gap-2 px-3 py-1.5 hairline text-[11px] sm:text-xs text-fog bg-panel/60"
              >
                <p.Icon className="w-3.5 h-3.5" style={{ color: p.color }} />
                {p.name}
              </span>
            ))}
          </div>

          <div data-hero="fade" className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
            {['Coming Soon on iOS', 'Android App', 'Web Platform'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-paper/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div data-hero="fade" className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a href="#wishlist" className="btn-primary">Join Wishlist</a>
            <a href="#features" className="btn-ghost">Explore Features</a>
          </div>
        </div>

        <div data-hero="studio" className="will-change-transform">
          <HeroStudio />
        </div>
      </div>
    </section>
  );
}
