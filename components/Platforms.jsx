'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { platformList } from '@/components/PlatformIcons';

const details = [
  'Live chat synced in real time',
  'Raid and sub alerts',
  'Low-latency stream relay',
  'Gift and comment tracking',
];

export default function Platforms() {
  const ref = useRef(null);
  useGsapReveal(ref, { children: '[data-reveal]', stagger: 0.1 });

  return (
    <section id="platforms" ref={ref} className="section-gap section-pad hairline-t">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
          <div>
            <SectionLabel className="mb-4">Platforms</SectionLabel>
            <h2 className="font-display font-bold text-display-lg text-paper">
              Four streams.<br />One surface.
            </h2>
          </div>
          <p className="text-fog text-lg leading-relaxed max-w-md">
            Stop alt-tabbing. LiveFusion pulls every platform into a single, focused workspace built for creators who move fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {platformList.map((p, i) => (
            <div
              key={p.name}
              data-reveal
              className="bg-panel p-6 lg:p-8 group hover:bg-ink transition-colors duration-500"
            >
              <p.Icon className="w-6 h-6 mb-6" style={{ color: p.color }} />
              <h3 className="font-display text-xl font-bold mb-2" style={{ color: p.color }}>
                {p.name}
              </h3>
              <p className="text-sm text-mute leading-relaxed">{details[i]}</p>
              <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700 bg-accent-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
