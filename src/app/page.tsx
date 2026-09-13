import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { OurWorkSection } from "../components/sections/our-work/OurWorkSection";
import { HeroSection } from "../components/sections/hero/HeroSection";
import { PriceListSection } from "../components/sections/price-list/PriceListSection";
import { ReviewsSection } from "../components/sections/reviews/ReviewsSection";
export default function Home() {
  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      {/* Header */}
      <header className="mx-auto max-w-7xl flex items-center w-full justify-between px-6 py-4 relative z-20">
        <a
          href="tel:14144553949"
          className="hidden md:flex items-center gap-2.5 border-2 border-foreground/20 hover:border-primary-accent px-6 py-2.5 font-sans tracking-widest text-lg uppercase transition-all"
        >
          <Phone className="w-5 h-5 text-primary-accent" />
          <span>(414) 455-3949</span>
        </a>

        <Image
          src="/logo.png"
          alt="Urban Fades Barbershop"
          width={425}
          height={266}
          className="h-18 md:h-24 w-auto object-contain"
          priority
        />

        <div>
          <button className="text-primary-accent border-primary-accent border-2 px-8 py-2.5 font-sans font-medium tracking-widest text-lg uppercase hover:bg-primary-accent hover:text-background transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <HeroSection />
        <OurWorkSection />
        <PriceListSection />
        <ReviewsSection />
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl w-full px-6 py-8">
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground/75">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary-accent shrink-0" />
            <span>10:00 AM – 6:00 PM</span>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=7625+W+Greenfield+Ave,+West+Allis,+WI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:*:text-primary-accent transition-all"
          >
            <MapPin className="w-5 h-5 text-primary-accent shrink-0" />
            <span>7625 W Greenfield Ave, West Allis, WI</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
