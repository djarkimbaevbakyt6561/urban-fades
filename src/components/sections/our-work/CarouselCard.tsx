"use client";
import { CarouselItem } from "../../ui/carousel";
import Image from "next/image";
import { WorkItem } from "./OurWorkSection";

export const CarouselCard = ({ item }: { item: WorkItem }) => {
  return (
    <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 p-3">
      <div
        className={`group relative w-full h-120 md:h-150 overflow-hidden border bg-background/60 transition-all duration-500 cursor-pointer ${"border-white/10 hover:border-primary-accent/50 hover:shadow-[0_0_25px_rgba(197,160,89,0.25)] group-active:border-primary-accent/50"}`}
      >
        {/* Background Work Image */}
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover object-center transition-transform duration-700 ease-out select-none ${"md:group-hover:scale-110 group-active:scale-110"}`}
        />

        {/* Gradient Mask for Shadow Effect */}
        <div
          className={`absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${"opacity-10 md:group-hover:opacity-95 group-active:opacity-95"}`}
        />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block rounded-full border border-primary-accent/40 bg-background/80 px-3 py-1 font-sans text-xs tracking-widest text-primary-accent uppercase backdrop-blur-md shadow-md">
            {item.category}
          </span>
        </div>

        {/* Pop-up Text Box on Hover & Tap/Active */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 p-6 transition-transform duration-500 ease-out ${"translate-y-4 md:group-hover:translate-y-0 group-active:translate-y-0"}`}
        >
          {/* Card Title */}
          <h3
            className={`font-sans text-2xl font-bold uppercase tracking-wider transition-colors duration-300 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] ${"text-foreground md:group-hover:text-primary-accent group-active:text-primary-accent"}`}
          >
            {item.title}
          </h3>

          {/* Gold Divider Bar */}
          <div
            className={`h-0.5 bg-primary-accent my-2 transition-all duration-500 ${"w-10 md:group-hover:w-20 group-active:w-20"}`}
          />

          {/* Description Fade-In */}
          <p
            className={`text-sm font-light text-foreground/90 leading-relaxed transition-opacity duration-300 delay-75 ${"opacity-0 md:group-hover:opacity-100 group-active:opacity-100"}`}
          >
            {item.description}
          </p>
        </div>

        {/* Inner Gold Frame Border Highlight */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 pointer-events-none ${"border-primary-accent/0 md:group-hover:border-primary-accent/30 group-active:border-primary-accent/30"}`}
        />
      </div>
    </CarouselItem>
  );
};
