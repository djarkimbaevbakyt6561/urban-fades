import { Sparkles } from "lucide-react";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "Haircuts & Styling",
    items: [
      {
        name: "Urban Signature Cut",
        price: "$45",
        description:
          "Precision haircut, steam hot towel finish, neck shave & custom style.",
        popular: true,
      },
      {
        name: "Master Fade",
        price: "$40",
        description:
          "Skin fade, drop fade, or taper with crisp razor perimeter alignment.",
      },
      {
        name: "Buzz Cut & Lineup",
        price: "$30",
        description:
          "Single guard length all over finished with sharp razor edge-up.",
      },
      {
        name: "Young Gentleman",
        price: "$30",
        description: "Clean haircut and style for clients 12 and under.",
      },
    ],
  },
  {
    title: "Beard & Shaving",
    items: [
      {
        name: "Royal Hot Towel Shave",
        price: "$35",
        description:
          "Straight razor head or face shave with pre-shave oils & cold towel finish.",
        popular: true,
      },
      {
        name: "Beard Sculpting & Trim",
        price: "$25",
        description:
          "Detailed shape-up, length trim, cheek & neck line razor clean-up.",
      },
      {
        name: "Haircut & Beard Combo",
        price: "$65",
        description:
          "Full signature haircut paired with complete beard grooming service.",
      },
      {
        name: "Lineup & Neck Clean-up",
        price: "$20",
        description:
          "Crisp razor edging along the hairline, sideburns, and neckline.",
      },
    ],
  },
];

export const PriceListSection = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-background">
      {/* Background Gold Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary-accent/40 bg-primary-accent/10 px-4 py-1 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary-accent" />
            <span className="text-primary-accent font-sans tracking-widest text-xs uppercase font-semibold">
              Grooming Services
            </span>
          </div>

          {/* Working Luxury Gold Text-Shadow */}
          <h2 className="text-5xl sm:text-6xl font-bold font-sans uppercase tracking-wider text-primary-accent [text-shadow:0_2px_10px_rgba(197,160,89,0.5),0_0_20px_rgba(197,160,89,0.3)]">
            Price List
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {services.map((category, idx) => (
            <div
              key={idx}
              className="bg-background/60 backdrop-blur-md border border-white/10 p-8 shadow-2xl flex flex-col justify-between hover:border-primary-accent/40 transition-all duration-300"
            >
              <div>
                <h3 className="text-3xl font-sans uppercase tracking-wider text-foreground mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="w-2 h-2 rounded-full bg-primary-accent" />
                </h3>

                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-center gap-2 font-sans text-2xl uppercase tracking-wide font-medium text-foreground group-hover:text-primary-accent transition-colors">
                          <span>{item.name}</span>
                          {item.popular && (
                            <span className="text-[10px] bg-primary-accent/20 border border-primary-accent/40 text-primary-accent px-2 py-0.5 rounded font-mono tracking-normal uppercase">
                              Popular
                            </span>
                          )}
                        </div>

                        {/* Dotted Leader Line */}
                        <div className="flex-1 border-b border-dotted border-white/20 mx-2 self-center mb-1 group-hover:border-primary-accent/40 transition-colors" />

                        {/* Glowing Price */}
                        <div className="font-sans text-2xl font-bold text-primary-accent [text-shadow:0_0_10px_rgba(197,160,89,0.4)]">
                          {item.price}
                        </div>
                      </div>

                      <p className="text-sm text-foreground/60 font-light mt-1 max-w-md">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured VIP Package Banner */}
        <div className="w-full bg-linear-to-r from-primary-accent/10 via-primary-accent/20 to-primary-accent/10 border border-primary-accent/40 p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-primary-accent font-sans text-xs tracking-widest uppercase font-bold">
              ★ Premium All-In-One Service
            </span>
            <h3 className="text-4xl font-sans uppercase tracking-wide font-bold text-foreground">
              The Executive VIP Experience
            </h3>
            <p className="text-foreground/80 font-light text-sm max-w-xl">
              Includes Signature Cut, Royal Hot Towel Shave, Scalp Massage,
              Facial Treatment, and Complimentary Beverage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <div className="text-center md:text-right">
              <span className="text-xs text-foreground/60 uppercase tracking-widest block font-sans">
                Full Package
              </span>
              <span className="text-5xl font-sans font-bold text-primary-accent [text-shadow:0_0_15px_rgba(197,160,89,0.6)]">
                $95
              </span>
            </div>
            <button className="bg-primary-accent text-background font-sans tracking-widest uppercase font-bold text-lg px-8 py-3.5 border-2 border-primary-accent hover:bg-transparent hover:text-primary-accent transition-all cursor-pointer shadow-lg">
              Book Executive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
