import './globals.css';

export const metadata = {
  title: 'LiveFusion — Stream Everywhere in One App',
  description: 'Unify Twitch, Kick, YouTube & TikTok. One chat, one dashboard, one go-live button.',
  keywords: 'live streaming, Twitch, Kick, YouTube, TikTok, LiveFusion',
  openGraph: {
    title: 'LiveFusion — Stream Everywhere in One App',
    description: 'Unify Twitch, Kick, YouTube & TikTok in one workspace.',
    type: 'website',
    url: 'https://livefusion.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-void text-paper antialiased min-h-screen grain">
        {children}
      </body>
    </html>
  );
}
