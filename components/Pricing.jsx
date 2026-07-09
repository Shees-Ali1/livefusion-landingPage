'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const plans = [
  {
    name: 'Free',
    price: '£0',
    period: 'forever',
    features: ['2 platforms', 'Live chat', 'Basic analytics', 'Push alerts'],
  },
  {
    name: 'Pro',
    price: '£4.99',
    period: '/ month',
    featured: true,
    features: ['All 4 platforms', 'Multi-preview', 'Advanced analytics', 'Edge alerts', 'Priority support'],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  useGsapReveal(ref, { children: '[data-reveal]', stagger: 0.15 });

  return (
    <section id="pricing" ref={ref} className="section-gap section-pad hairline-t bg-ink">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Pricing</SectionLabel>
          <h2 className="font-display font-bold text-display-lg text-paper">Simple pricing.</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-reveal
              className={`p-8 lg:p-10 ${plan.featured ? 'bg-panel' : 'bg-void'}`}
            >
              {plan.featured && (
                <span className="text-[10px] tracking-widest uppercase text-violet font-semibold">Popular</span>
              )}
              <h3 className="font-display text-2xl font-bold text-paper mt-2">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="font-display text-4xl font-bold text-paper">{plan.price}</span>
                <span className="text-mute text-sm ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-fog flex items-center gap-3">
                    <span className="w-1 h-1 bg-violet rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#wishlist"
                className={`block text-center py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-paper text-void hover:bg-violet hover:text-white'
                    : 'hairline text-paper hover:border-line-strong'
                }`}
              >
                Join Wishlist
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
