/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        ink: '#0C0C0F',
        panel: '#111114',
        line: 'rgba(255,255,255,0.06)',
        'line-strong': 'rgba(255,255,255,0.12)',
        mute: '#6B6B76',
        fog: '#9898A4',
        paper: '#E8E8EC',
        violet: '#7B6CF6',
        'violet-dim': '#5A4FD4',
        live: '#FF3B3B',
        twitch: '#9146FF',
        kick: '#53FC18',
        youtube: '#FF0000',
        tiktok: '#EE1D52',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,12vw,9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem,6vw,5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        'accent-bar': 'linear-gradient(90deg, #7B6CF6 0%, #A78BFA 50%, #7B6CF6 100%)',
        'fade-up': 'linear-gradient(180deg, transparent 0%, #050505 100%)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-live': 'pulse-live 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-live': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
};
