import Image from 'next/image';

export default function BrandLogo({ className = 'w-8 h-8', showWordmark = false }) {
  const logo = (
    <div className={`relative shrink-0 overflow-hidden ${className}`} aria-hidden>
      <Image
        src="/lf-logo.png"
        alt=""
        fill
        sizes="64px"
        className="object-contain drop-shadow-[0_0_18px_rgba(197,107,255,0.28)]"
        priority
      />
    </div>
  );

  if (!showWordmark) {
    return logo;
  }

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {logo}
      <div className="leading-none">
        <div className="font-display text-base sm:text-lg font-bold tracking-tight text-paper [text-shadow:0_0_16px_rgba(197,107,255,0.32)]">
          Live<span className="text-[#C56BFF]">Fusion</span>
        </div>
        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-paper/45">
          Stream Once. Reach Everywhere.
        </div>
      </div>
    </div>
  );
}
