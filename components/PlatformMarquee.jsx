'use client';

import { useEffect, useRef } from 'react';
import { initGsap } from '@/lib/gsap';
import { platformList } from '@/components/PlatformIcons';

const items = [...platformList, ...platformList, ...platformList];

export default function PlatformMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const { gsap } = initGsap();
    const width = track.scrollWidth / 3;

    const tween = gsap.to(track, {
      x: -width,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="hairline-t hairline-b py-5 overflow-hidden bg-ink">
      <div ref={trackRef} className="flex w-max gap-12 px-6">
        {items.map((p, i) => (
          <div key={`${p.name}-${i}`} className="flex items-center gap-3 flex-shrink-0">
            <p.Icon className="w-5 h-5" style={{ color: p.color }} />
            <span className="font-display text-sm font-semibold text-paper/40">{p.name}</span>
            <span className="text-mute text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
