'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  { n: '01', title: 'Set your title', desc: 'Name your stream and pick your category.' },
  { n: '02', title: 'Choose platforms', desc: 'Toggle Twitch, Kick, YouTube, TikTok on or off.' },
  { n: '03', title: 'Hit Go Live', desc: 'Broadcast everywhere simultaneously via RTMP.' },
  { n: '04', title: 'Stay in control', desc: 'Monitor chat and stats without switching apps.' },
];

export default function GoLive() {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGsapReveal(leftRef, { y: 50 });
  useGsapReveal(rightRef, { y: 50, delay: 0.15 });

  return (
    <section id="golive" ref={ref} className="section-gap section-pad hairline-t overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
        <div ref={leftRef}>
          <SectionLabel className="mb-4">Go Live</SectionLabel>
          <h2 className="font-display font-bold text-display-lg text-paper mb-6">
            One tap.<br />Every platform.
          </h2>
          <p className="text-fog text-lg mb-12 max-w-md">
            RTMP multi-broadcast built into the app. No OBS juggling. No missed raids.
          </p>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-6 py-6 hairline-b last:border-0">
                <span className="font-display text-violet font-bold text-sm pt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-paper mb-1">{s.title}</h3>
                  <p className="text-sm text-mute">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="w-full min-w-0">
          <Image
            src="/livefusion-phones.png"
            alt="LiveFusion app on iPhone — dashboard, go live, and analytics"
            width={2048}
            height={2048}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
            className="mx-auto h-auto w-full max-w-full object-contain sm:max-w-xl lg:max-w-2xl lg:ml-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
