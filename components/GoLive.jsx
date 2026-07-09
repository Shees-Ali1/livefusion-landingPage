'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { initGsap } from '@/lib/gsap';
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
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useGsapReveal(leftRef, { y: 50 });

  useEffect(() => {
    const wrap = imageWrapRef.current;
    const img = imageRef.current;
    const glow = glowRef.current;
    if (!wrap || !img) return;

    const { gsap } = initGsap();

    const ctx = gsap.context(() => {
      gsap.set(img, { opacity: 0, y: 80, scale: 0.88, rotateY: -8, transformPerspective: 1200 });
      if (glow) gsap.set(glow, { opacity: 0, scale: 0.7 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: 'top 82%',
          once: true,
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power4.out' },
      });

      tl.to(img, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 1.4,
      });

      if (glow) {
        tl.to(
          glow,
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          '-=1.1'
        );
      }

      gsap.to(img, {
        y: -14,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });

      gsap.to(wrap, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

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
            {steps.map((s) => (
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

        <div ref={imageWrapRef} className="relative w-full min-w-0 [perspective:1200px]">
          <div
            ref={glowRef}
            className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(123,108,246,0.22)_0%,transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div ref={imageRef} className="relative z-10 will-change-transform">
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
      </div>
    </section>
  );
}
