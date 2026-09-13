import { Phone } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Barber tools background"
          fill
          className="object-cover object-center scale-105"
          priority
        />

        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-background/40 to-background z-10 pointer-events-none" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-background/50 backdrop-blur-md p-8 lg:p-12 border border-white/10 shadow-2xl">
          {/* Left Column: Text & CTAs */}
          <div className="text-left md:text-center lg:text-left lg:max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-primary-accent/40 bg-primary-accent/10 px-4 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
              <span className="text-primary-accent font-sans tracking-widest text-sm uppercase">
                Walk-Ins Welcome &bull; Open Daily
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-wide leading-none mb-6">
              Precision Cuts <br />
              <span className="text-primary-accent">Master Fades</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-foreground/85 font-light max-w-lg mb-8 leading-relaxed">
              Experience premium barbershop craft. Classic straight-razor
              shaves, beard trims, and modern styled fades tailored to keep you
              looking sharp.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary-accent text-background border-2 border-primary-accent px-8 py-3.5 font-sans text-xl tracking-widest uppercase font-bold hover:bg-transparent hover:text-primary-accent transition-all cursor-pointer">
                Book Appointment
              </button>
              <a
                href="tel:14144553949"
                className="border-2 border-white/20 hover:border-foreground px-8 py-3.5 font-sans text-xl tracking-widest uppercase font-medium transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-primary-accent" />
                (414) 455-3949
              </a>
            </div>
          </div>

          {/* Right Column: Styled Tools Image Frame */}
          <div className="relative w-full lg:w-1/2 h-full flex justify-center items-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-primary-accent/15  blur-2xl opacity-70 pointer-events-none" />

            {/* Main Image Wrapper */}
            <div className="relative w-full max-w-none md:max-w-md aspect-square overflow-hidden border border-white/15 shadow-2xl group">
              <Image
                src="/tools.png"
                alt="Barbershop Tools"
                fill
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Inner Shadows & Vignette Effects */}
              {/* Left-side fade (blends seamlessly with text side) */}
              <div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-background/30 z-10 pointer-events-none" />

              {/* Bottom-to-top dark fade */}
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-background/20 z-10 pointer-events-none" />

              {/* Radial edge vignette for inner depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(18,18,18,0.85)_100%)] z-10 pointer-events-none" />

              {/* Subtle Gold Frame Accent Overlay */}
              <div className="absolute inset-0 border border-primary-accent/20 pointer-events-none z-20 group-hover:border-primary-accent/40 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
