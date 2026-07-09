'use client';

import { useEffect } from 'react';
import { initGsap } from '@/lib/gsap';

export function useGsapReveal(ref, options = {}) {
  const {
    y = 60,
    opacity = 0,
    duration = 1,
    delay = 0,
    stagger = 0,
    start = 'top 85%',
    once = true,
    children = null,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { gsap, ScrollTrigger } = initGsap();
    const targets = children ? el.querySelectorAll(children) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          once,
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ref, y, opacity, duration, delay, stagger, start, once, children]);
}

export function useGsapHero(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { gsap, ScrollTrigger } = initGsap();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('[data-hero="line"]', {
        y: '110%',
        duration: 1.1,
        stagger: 0.12,
      })
        .from(
          '[data-hero="fade"]',
          { y: 30, opacity: 0, duration: 0.8, stagger: 0.08 },
          '-=0.5'
        )
        .from(
          '[data-hero="studio"]',
          { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.4'
        );

      const studio = el.querySelector('[data-hero="studio"]');
      if (studio) {
        gsap.to(studio, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [ref]);
}
