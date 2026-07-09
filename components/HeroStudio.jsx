'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { initGsap } from '@/lib/gsap';
import { platformList } from '@/components/PlatformIcons';
import BrandLogo from '@/components/BrandLogo';

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'golive', label: 'Go Live' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'chat', label: 'Chat' },
];

const STREAM = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=80&auto=format&fit=crop';

const chats = [
  { user: 'nova_ray', msg: 'clean layout, looks premium', platform: 'Twitch', color: '#9146FF' },
  { user: 'kick_dave', msg: 'send this live to Kick too', platform: 'Kick', color: '#FFFFFF' },
  { user: 'yt_sam', msg: 'YouTube audience is climbing fast', platform: 'YouTube', color: '#FF0000' },
  { user: 'tt_luna', msg: 'clips from this stream will go crazy', platform: 'TikTok', color: '#EE1D52' },
];

function StreamFrame({ compact }) {
  return (
    <div className={`relative overflow-hidden bg-ink ${compact ? 'aspect-video' : 'h-full min-h-[220px]'}`}>
      <Image src={STREAM} alt="" fill className="object-cover opacity-90" sizes="900px" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-void/30" />
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-live/90 text-[10px] font-bold tracking-wider">
          <span className="live-dot scale-75" /> LIVE
        </span>
        <span className="text-[10px] text-paper/70 bg-void/50 px-2 py-0.5">1080p</span>
      </div>
      <div className="absolute top-3 right-3 text-[11px] font-semibold text-paper bg-void/60 px-2 py-0.5">
        24,812
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-sm font-semibold text-paper">LiveFusion Creator Session</p>
        <p className="mt-1 text-[11px] text-paper/65">3 platforms synced in one premium control room</p>
        <div className="flex gap-1.5 mt-2">
          {platformList.map((p) => (
            <p.Icon key={p.name} className="w-3 h-3" style={{ color: p.color }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-12 min-h-[400px]">
      <div className="col-span-12 lg:col-span-8 hairline-r p-3">
        <StreamFrame />
        <div className="grid grid-cols-4 gap-px mt-px bg-line">
          {platformList.map((p) => (
            <div key={p.name} className="bg-panel p-3 flex items-center gap-2">
              <p.Icon className="w-4 h-4" style={{ color: p.color }} />
              <div>
                <p className="text-[10px] text-mute">{p.name}</p>
                <p className="text-sm font-semibold" style={{ color: p.color }}>
                  {['12.4K', '6.1K', '4.2K', '2.1K'][platformList.indexOf(p)]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 flex flex-col">
        <div className="hairline-b px-4 py-3 text-xs text-mute">Unified Chat</div>
        <div className="flex-1 p-3 space-y-3 overflow-hidden">
          {chats.map((c, i) => (
            <div key={i} className="text-xs">
              <span className="font-semibold" style={{ color: c.color }}>{c.user}</span>
              <span className="text-mute ml-2">{c.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoLive() {
  const [live, setLive] = useState(false);
  const [platforms, setPlatforms] = useState({ Twitch: true, Kick: true, YouTube: false, TikTok: true });

  return (
    <div className="grid grid-cols-12 min-h-[400px]">
      <div className="col-span-12 lg:col-span-7 p-3 hairline-r">
        <StreamFrame />
      </div>
      <div className="col-span-12 lg:col-span-5 p-5 flex flex-col gap-4">
        <div>
          <p className="text-[10px] text-mute uppercase tracking-widest mb-2">Title</p>
          <p className="text-sm font-medium hairline px-3 py-2.5 bg-panel">Ranked Grind</p>
        </div>
        <div className="space-y-1">
          {platformList.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setPlatforms((s) => ({ ...s, [p.name]: !s[p.name] }))}
              className="w-full flex items-center justify-between px-3 py-2.5 hairline bg-panel hover:border-line-strong transition-colors"
            >
              <span className="flex items-center gap-2 text-sm" style={{ color: platforms[p.name] ? p.color : '#6B6B76' }}>
                <p.Icon className="w-4 h-4" />
                {p.name}
              </span>
              <span className={`w-2 h-2 rounded-full ${platforms[p.name] ? 'bg-violet' : 'bg-line-strong'}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setLive(!live)}
          className={`mt-auto py-3 text-sm font-semibold tracking-wide transition-colors ${
            live ? 'hairline text-live' : 'bg-paper text-void hover:bg-violet hover:text-white'
          }`}
        >
          {live ? 'End Stream' : 'Go Live'}
        </button>
      </div>
    </div>
  );
}

function Analytics() {
  const bars = [40, 55, 45, 70, 65, 85, 75, 90, 80, 95, 88, 100];
  return (
    <div className="p-5 min-h-[400px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line mb-6">
        {[
          { l: 'Peak', v: '24.8K', c: '#7B6CF6' },
          { l: 'Followers', v: '+1.2K', c: '#53FC18' },
          { l: 'Engage', v: '8.4%', c: '#A78BFA' },
          { l: 'Duration', v: '2h 14m', c: '#E8E8EC' },
        ].map((m) => (
          <div key={m.l} className="bg-panel p-4">
            <p className="text-[10px] text-mute uppercase tracking-wider">{m.l}</p>
            <p className="text-xl font-display font-bold mt-1" style={{ color: m.c }}>{m.v}</p>
          </div>
        ))}
      </div>
      <div className="hairline p-4 bg-panel">
        <p className="text-xs text-mute mb-4">Viewer trend</p>
        <div className="flex items-end gap-1 h-28">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-violet/30 hover:bg-violet transition-colors"
              style={{ height: `${h}%`, opacity: 0.4 + (h / 100) * 0.6 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="min-h-[400px] flex flex-col">
      <div className="hairline-b px-4 py-3 flex justify-between text-xs">
        <span className="text-mute">Unified Chat</span>
        <span className="text-violet">248 online</span>
      </div>
      <div className="flex-1 p-4 space-y-4">
        {[...chats, ...chats].map((c, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-8 h-8 hairline flex items-center justify-center text-[10px] font-bold" style={{ color: c.color }}>
              {c.user[0].toUpperCase()}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: c.color }}>{c.user}</p>
              <p className="text-sm text-fog mt-0.5">{c.msg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 hairline-t">
        <div className="hairline px-4 py-3 text-sm text-mute bg-panel">Send a message...</div>
      </div>
    </div>
  );
}

const views = { dashboard: Dashboard, golive: GoLive, analytics: Analytics, chat: Chat };

export default function HeroStudio() {
  const [tab, setTab] = useState('dashboard');
  const contentRef = useRef(null);
  const View = views[tab];

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const { gsap } = initGsap();
    gsap.fromTo(
      el,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
    );
  }, [tab]);

  return (
    <div className="w-full hairline bg-panel">
      <div className="flex items-center justify-between hairline-b px-4 py-3 bg-ink">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-2">
          <BrandLogo className="w-5 h-5" />
          <span className="text-[10px] text-mute tracking-wider">livefusion.app</span>
        </div>
        <span className="text-[10px] text-violet">● connected</span>
      </div>

      <div className="flex overflow-x-auto hairline-b">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`px-5 py-3 text-xs font-medium tracking-wide whitespace-nowrap transition-colors border-b-2 -mb-px ${
              tab === t.id
                ? 'border-violet text-paper bg-panel'
                : 'border-transparent text-mute hover:text-fog'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div ref={contentRef}>
        <View />
      </div>
    </div>
  );
}
