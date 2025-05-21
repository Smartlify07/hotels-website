import { AboutSection } from '@/components/pages/landing/about-section';
import { Faq } from '@/components/pages/landing/faq';
import { Footer } from '@/components/pages/landing/footer';
import { HeroSection } from '@/components/pages/landing/hero';
import { HotelViewSection } from '@/components/pages/landing/hotel-view-section';
import { HotelsListSection } from '@/components/pages/landing/hotels-list-section';
import { Navbar } from '@/components/pages/landing/navbar';
import { Waitlist } from '@/components/pages/landing/waitlist';
export default function LandingPage() {
  return (
    <main className="">
      <div className="hero-bg relative h-svh md:h-screen">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <AboutSection />
      <HotelsListSection />
      <HotelViewSection />
      <Faq />
      <Waitlist />
      <Footer />
    </main>
  );
}
