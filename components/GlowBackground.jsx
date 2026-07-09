'use client';

import { motion } from 'framer-motion';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 glow-mesh" />
      <div className="absolute inset-0 glow-grid opacity-40" />

      <motion.div
        className="glow-orb glow-orb-purple glow-orb-animate-1"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="glow-orb glow-orb-pink glow-orb-animate-2"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="glow-orb glow-orb-blue glow-orb-animate-3"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0C0E_70%)]" />
    </div>
  );
}
