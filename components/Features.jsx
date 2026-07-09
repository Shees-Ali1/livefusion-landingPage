'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const features = [
  { n: '01', title: 'Live Chat', desc: 'Every message from Twitch, Kick, YouTube and TikTok in one feed.' },
  { n: '02', title: 'Multi-Broadcast', desc: 'Go live on Twitch, Kick, YouTube and TikTok with a single tap.' },
  { n: '03', title: 'Live Analytics', desc: 'Viewers, followers, and engagement across all platforms at once.' },
  { n: '04', title: 'Edge Alerts', desc: 'Screen-edge notifications for raids, subs, and gifts.' },
  { n: '05', title: 'Multi-Preview', desc: 'Watch three streams side by side without leaving the app.' },
  { n: '06', title: 'Secure OAuth', desc: 'Platform logins handled safely. Your tokens stay yours.' },
];

export default function Features() {
  const ref = useRef(null);
  useGsapReveal(ref, { children: '[data-reveal]', stagger: 0.08, y: 40 });

  return (
    <section id="features" ref={ref} className="section-gap section-pad hairline-t bg-ink">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel className="mb-4">Features</SectionLabel>
        <h2 className="font-display font-bold text-display-lg text-paper mb-16 max-w-3xl">
          Built for creators who refuse to compromise.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {features.map((f) => (
            <div
              key={f.n}
              data-reveal
              className="bg-void p-8 lg:p-10 group hover:bg-panel transition-colors duration-500"
            >
              <span className="font-display text-sm text-violet font-bold">{f.n}</span>
              <h3 className="font-display text-xl font-bold text-paper mt-4 mb-3">{f.title}</h3>
              <p className="text-sm text-mute leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
