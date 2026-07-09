'use client';

import { useRef, useEffect } from 'react';
import { initGsap } from '@/lib/gsap';
import SectionLabel from '@/components/ui/SectionLabel';

const metrics = [
  { label: 'Peak viewers', value: 24812 },
  { label: 'New followers', value: 1247 },
  { label: 'Engagement', value: 8.4, suffix: '%' },
  { label: 'Stream hours', value: 2.24, suffix: 'h' },
];

export default function Analytics() {
  const ref = useRef(null);
  const barsRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = initGsap();

    const ctx = gsap.context(() => {
      gsap.from('[data-analytics="metric"]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      });

      if (barsRef.current) {
        const bars = barsRef.current.querySelectorAll('[data-bar]');
        gsap.from(bars, {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 0.6,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: { trigger: barsRef.current, start: 'top 85%', once: true },
        });
      }

      gsap.utils.toArray('[data-count]').forEach((node) => {
        const end = parseFloat(node.dataset.count);
        const suffix = node.dataset.suffix || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: node, start: 'top 85%', once: true },
          onUpdate: () => {
            node.textContent =
              suffix === '%' || suffix === 'h'
                ? obj.val.toFixed(suffix === 'h' ? 1 : 1) + suffix
                : Math.floor(obj.val).toLocaleString() + suffix;
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const bars = [35, 50, 42, 68, 58, 82, 72, 88, 76, 95, 85, 100];

  return (
    <section id="analytics" ref={ref} className="section-gap section-pad hairline-t bg-ink">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionLabel className="mb-4">Analytics</SectionLabel>
            <h2 className="font-display font-bold text-display-lg text-paper mb-6">
              Numbers that<br />actually matter.
            </h2>
            <p className="text-fog text-lg max-w-md">
              Real-time metrics across every connected platform. No spreadsheets. No guesswork.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line">
            {metrics.map((m) => (
              <div key={m.label} data-analytics="metric" className="bg-panel p-6">
                <p className="text-[10px] text-mute uppercase tracking-wider mb-2">{m.label}</p>
                <p
                  className="font-display text-3xl font-bold text-violet"
                  data-count={m.value}
                  data-suffix={m.suffix || ''}
                >
                  0
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={barsRef} className="mt-16 hairline p-6 bg-panel">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-mute">Average viewers — last 12 streams</p>
            <p className="text-xs text-violet font-semibold">+18% week over week</p>
          </div>
          <div className="flex items-end gap-1 h-32">
            {bars.map((h, i) => (
              <div
                key={i}
                data-bar
                className="flex-1 bg-violet"
                style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
