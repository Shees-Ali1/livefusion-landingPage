import { platformList } from '@/components/PlatformIcons';

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'Go Live', href: '#golive' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'Wishlist', href: '#wishlist' },
    { label: 'Contact', href: 'mailto:hello@livefusion.app' },
  ],
};

export default function Footer() {
  return (
    <footer className="hairline-t section-pad py-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-display text-xl font-bold mb-4">
              <span className="text-paper">Live</span>
              <span className="text-violet">Fusion</span>
            </p>
            <p className="text-sm text-mute max-w-xs leading-relaxed">
              One app for Twitch, Kick, YouTube & TikTok. Built for creators who stream everywhere.
            </p>
            <div className="flex gap-3 mt-6">
              {platformList.map((p) => (
                <div key={p.name} className="hairline p-2" title={p.name}>
                  <p.Icon className="w-4 h-4" style={{ color: p.color }} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-[10px] tracking-widest uppercase text-mute mb-4">{cat}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-fog hover:text-paper transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        <div className="hairline-t pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-mute">
          <p>© {new Date().getFullYear()} LiveFusion</p>
          <a href="mailto:hello@livefusion.app" className="hover:text-fog transition-colors">
            hello@livefusion.app
          </a>
        </div>
      </div>
    </footer>
  );
}
