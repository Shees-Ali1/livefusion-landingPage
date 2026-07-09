import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlatformMarquee from '@/components/PlatformMarquee';
import Platforms from '@/components/Platforms';
import Features from '@/components/Features';
import GoLive from '@/components/GoLive';
import Analytics from '@/components/Analytics';
import Wishlist from '@/components/Wishlist';
import Pricing from '@/components/Pricing';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformMarquee />
        <Platforms />
        <Features />
        <GoLive />
        <Analytics />
        <Wishlist />
        <Pricing />
        <Download />
        <Footer />
      </main>
    </>
  );
}
