export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-mute ${className}`}>
      {children}
    </p>
  );
}
