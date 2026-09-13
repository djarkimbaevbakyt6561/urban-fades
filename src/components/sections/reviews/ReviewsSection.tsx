import { Star, Quote, Sparkles } from "lucide-react";

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Mike Luedtke",
    text: "Today was my first time being here. I was instantly taken as a walk in and treated with respect and asked very specific questions about what I wanted. The barber was meticulous in his work and made me feel like I belonged in the shop.",
  },
  {
    name: "Maurice Sheppard",
    text: "Omar always hooks me and my kids up with the cleanest fades and sharpest cuts. Hands down, the best barber I’ve ever had! His attention to detail and precision is on another level. His skills are rare, and you won’t find many barbers who can match it.",
  },
  {
    name: "Chaz",
    text: "As a first-time customer, I had a truly great experience here. Omar is exceptional – he made me feel completely comfortable. I'm also thrilled with the results; my haircut and beard trim turned out flawlessly!",
  },
  {
    name: "Amanda Dixon",
    text: "Will is an amazing barber and always takes great care of us.",
  },
  {
    name: "Caleb Marks",
    text: "Excellent Barbershop!! Highly Recommend!! Omar is a skilled professional!",
  },
  {
    name: "David Henriksen",
    text: "We have been to Urban Fades before. We went today, and I can't stress how fantastic my son's hair looks. Shout out to Edgar!! He took his time and it shows. We will be requesting him from now on. Thank you so much. Highly recommend this place. We drive over 30 minutes, and it is worth it.",
  },
  {
    name: "Alex Ford",
    text: "Great service.. Omar was my barber, I walked out of the shop feeling brand new. I would recommend to anyone looking for a great haircut.",
  },
  {
    name: "Raul Gonzalez",
    text: "First time visiting Urban Fades Barbershop was a great experience, very nice and clean , great environment, state of the art equipment , the owner was very friendly, I would recommend all my fellow friends and family to chose Urban Fades as they’re new barbershop from now on, most definitely will continue to return.",
  },
  {
    name: "heysus699",
    text: "Great quality service and a very welcoming environment. I would definitely recommend friends and family to come to this barber shop !!",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-background overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary-accent/40 bg-primary-accent/10 px-4 py-1 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-primary-accent" />
            <span className="text-primary-accent font-sans tracking-widest text-xs uppercase font-semibold">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold font-sans uppercase tracking-wider text-primary-accent [text-shadow:0_2px_10px_rgba(197,160,89,0.5),0_0_20px_rgba(197,160,89,0.3)]">
            What Clients Say
          </h2>

          <p className="mt-3 text-foreground/75 font-light text-base max-w-md mx-auto">
            Real experiences from clients who trust us with their everyday
            style.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-background/60 backdrop-blur-md border border-white/10 p-7 shadow-2xl flex flex-col justify-between hover:border-primary-accent/50 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-300"
            >
              {/* Top Row: Avatar Initial, Name & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary-accent/15 border border-primary-accent/40 flex items-center justify-center font-sans font-bold text-primary-accent text-xl uppercase">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-lg uppercase tracking-wide text-foreground group-hover:text-primary-accent transition-colors">
                        {review.name}
                      </h3>
                      {/* 5-Star Rating */}
                      <div className="flex gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary-accent text-primary-accent drop-shadow-[0_0_4px_rgba(197,160,89,0.5)]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-7 h-7 text-primary-accent/20 group-hover:text-primary-accent/40 transition-colors shrink-0" />
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 font-light text-sm leading-relaxed mt-2">
                  {review.text}
                </p>
              </div>

              {/* Card Accent Border */}
              <div className="w-full h-0.5 bg-linear-to-r from-transparent via-primary-accent/30 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
