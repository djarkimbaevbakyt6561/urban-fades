import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "../../ui/carousel";
import { CarouselCard } from "./CarouselCard";

export interface WorkItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

const workSamples: WorkItem[] = [
  {
    src: "/carousel/image-1.jpg",
    alt: "Mid Skin Fade",
    title: "Mid Skin Fade",
    category: "Fade & Lineup",
    description:
      "Seamless mid-drop fade paired with a crisp razor-sharp perimeter.",
  },
  {
    src: "/carousel/image-2.jpg",
    alt: "Beard Sculpt & Trim",
    title: "Beard Sculpt & Trim",
    category: "Beard Care",
    description:
      "Hot towel conditioning, beard line contouring, and razor shave.",
  },
  {
    src: "/carousel/image-3.jpg",
    alt: "Textured Crop Top",
    title: "Textured Crop Top",
    category: "Modern Style",
    description:
      "High textured top with a clean low taper for low-maintenance style.",
  },
  {
    src: "/carousel/image-4.jpg",
    alt: "Classic Straight Razor Shave",
    title: "Royal Straight Razor",
    category: "Hot Towel Shave",
    description:
      "Traditional hot steam towel service with organic lather oils.",
  },
  {
    src: "/carousel/image-5.jpg",
    alt: "Burst Fade & Design",
    title: "Burst Fade Cut",
    category: "Custom Design",
    description:
      "Custom curved burst fade around the ear with detailed line art.",
  },
  {
    src: "/carousel/image-6.jpg",
    alt: "Executive Side Part",
    title: "Executive Side Part",
    category: "Classic Cut",
    description: "Slick tailored comb-over with a hard-part razor line.",
  },
  {
    src: "/carousel/image-7.jpg",
    alt: "Taper Fade & Waves",
    title: "Low Taper & Waves",
    category: "Taper Fade",
    description: "Subtle neck and temple taper keeping full texture on top.",
  },
  {
    src: "/carousel/image-8.jpg",
    alt: "Full Grooming Package",
    title: "The Urban Transformation",
    category: "Full Package",
    description:
      "Full haircut, complete beard trim, hot towel, and styling touch-up.",
  },
];

export const OurWorkSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-background overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl flex flex-col items-center relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-primary-accent/40 bg-primary-accent/10 px-4 py-1 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-primary-accent" />
            <span className="text-primary-accent font-sans tracking-widest text-xs uppercase font-semibold">
              Craftsmanship Showcase
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold font-sans uppercase tracking-wider text-primary-accent [text-shadow:0_2px_10px_rgba(197,160,89,0.5),0_0_20px_rgba(197,160,89,0.3)]">
            Our Work
          </h2>

          <p className="mt-3 text-foreground/75 font-light text-base max-w-xl mx-auto">
            Take a look at some of our recent precision cuts, custom fades, and
            beard trims.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-6xl relative">
          <div className="w-[92%] mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {workSamples.map((item, index) => (
                  <CarouselCard key={index} item={item} />
                ))}
              </CarouselContent>

              {/* Styled Navigation Buttons */}
              <CarouselPrevious className="border-primary-accent/40 text-primary-accent bg-background/80 hover:bg-primary-accent hover:text-background transition-all -left-8 lg:-left-12 h-11 w-11" />
              <CarouselNext className="border-primary-accent/40 text-primary-accent bg-background/80 hover:bg-primary-accent hover:text-background transition-all -right-8 lg:-right-12 h-11 w-11" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
