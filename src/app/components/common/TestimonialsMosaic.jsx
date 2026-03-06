"use client";

import Image from "next/image";
import { useMemo } from "react";

/* ✅ Replace these with your real images */
import person1 from "../../assets/testimonials/t1.png";
import person2 from "../../assets/testimonials/t2.png";
import person3 from "../../assets/testimonials/t3.png";
import person4 from "../../assets/testimonials/t1.png";
import person5 from "../../assets/testimonials/t2.png";
import person6 from "../../assets/testimonials/t3.png";
import centerImg from "../../assets/testimonials/tc.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Daniel felt like working with a creative partner, not just a designer. He brought clarity and elegance to our digital presence.",
    name: "Marcus Allen",
    role: "CEO at Wellnest",
    avatar: person1,
    type: "card",
  },
  {
    id: 2,
    quote:
      "Professional, thoughtful, and fast. Our new website is not only beautiful but has increased engagement by over 40%.",
    name: "Kevin Yates",
    role: "Director at Elevate Legal",
    avatar: person2,
    type: "card",
  },
  {
    id: 3,
    quote:
      "We needed a quick turnaround, and Daniel delivered a Framer site that was not only fast but visually stunning. Highly recommend.",
    name: "Jenna Morales",
    role: "Design Lead at LaunchNest",
    avatar: person3,
    type: "card",
  },
  {
    id: 4,
    quote:
      "Daniel made the entire process feel effortless. He listened, adapted, and delivered a site that completely exceeded our expectations.",
    name: "Sophie Allen",
    role: "Founder at Bloom Studio",
    avatar: centerImg,
    type: "featured",
  },
  {
    id: 5,
    quote:
      "He just gets it. Daniel has an instinct for what a brand needs, even when you’re still figuring it out yourself.",
    name: "Lucia Romero",
    role: "Founder at Supply Co.",
    avatar: person4,
    type: "card",
  },
  {
    id: 6,
    quote:
      "His attention to detail is unmatched. Our mobile app now feels intuitive and premium—our users noticed the difference right away.",
    name: "Theo Barnes",
    role: "Product Manager at Driftly",
    avatar: person5,
    type: "card",
  },
  {
    id: 7,
    quote:
      "Daniel took our messy vision and turned it into something polished, clear, and effective. He truly understands design with purpose.",
    name: "Priya Nair",
    role: "Co-Founder at Kinfolk Goods",
    avatar: person6,
    type: "card",
  },
];

export default function TestimonialsMosaic() {
  const leftCards = useMemo(
    () => [testimonials[0], testimonials[2], testimonials[5]],
    []
  );
  const rightCards = useMemo(
    () => [testimonials[1], testimonials[4], testimonials[6]],
    []
  );
  const featured = testimonials[3];

  return (
    
    <section className="bg-[#F4F4F4]">
         <h2 className="text-center text-[25px] md:text-[28px] font-semibold text-neutral-900">
          Client <span className="text-[#ff6a00]">Testimonials</span>
        </h2>
		
      <div className="mx-auto max-w-[1000px] px-6 lg:px-15 py-14">
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex items-center justify-center">
            
          <div className="grid grid-cols-[1fr_280px_1fr] items-center gap-4">
            {/* Left Column */}
            <div className="h-[700px] w-[260px] overflow-hidden rounded-[25px]">
              <div className="grid gap-4 auto-up hover:[animation-play-state:paused]">
                {[...leftCards, ...leftCards].map((item, i) => (
                  <TestimonialCard key={`left-${item.id}-${i}`} item={item} />
                ))}
              </div>
            </div>

            {/* Center Featured */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[28px] bg-white/20 blur-xl opacity-30" />
              <div className="relative overflow-hidden rounded-[28px] bg-[#F37022] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="p-3">
                  <div className="overflow-hidden rounded-[22px]">
                    <Image
                      src={featured.avatar}
                      alt={featured.name}
                      className="h-[180px] w-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <p className="text-[15px] leading-6 text-white">
                    “{featured.quote}”
                  </p>

                  <div className="mt-5 text-[12px] text-white/90">
                    <span className="font-medium">{featured.name}</span>
                    <span className="mx-2">•</span>
                    <span>{featured.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="h-[700px] w-[260px] overflow-hidden rounded-[28px]">
              <div className="grid gap-4 auto-down hover:[animation-play-state:paused]">
                {[...rightCards, ...rightCards].map((item, i) => (
                  <TestimonialCard key={`right-${item.id}-${i}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-3">
            {testimonials.map((item) =>
              item.type === "featured" ? (
                <div
                  key={item.id}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] rounded-[28px] bg-[#F37022]"
                >
                  <div className="p-3">
                    <div className="overflow-hidden rounded-[22px]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="h-[180px] w-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <p className="text-[15px] leading-6 text-white">
                      “{item.quote}”
                    </p>

                    <div className="mt-5 text-[12px] text-white/90">
                      <span className="font-medium">{item.name}</span>
                      <span className="mx-2">•</span>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%]"
                >
                  <TestimonialCard item={item} />
                </div>
              )
            )}
          </div>

          {/* <p className="mt-3 text-center text-[12px] text-white/50">
            Swipe to view more →
          </p> */}
        </div>
      </div>

      <style jsx>{`
        .auto-up {
          animation: up 14s linear infinite;
        }
        .auto-down {
          animation: down 14s linear infinite;
        }

        @keyframes up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="relative rounded-[25px] bg-[#ffffff] px-5 pb-5 pt-16 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="absolute right-4 top-4 h-10 w-10 overflow-hidden rounded-xl shadow-md">
        <Image
          src={item.avatar}
          alt={item.name}
          className="h-full w-[150px] object-cover"
        />
      </div>

      <p className="text-[15px] leading-6 text-black">
        “{item.quote}”
      </p>

      <div className="mt-5 text-[12px] text-black/60">
        <span className="font-medium text-black/80">{item.name}</span>
        <span className="mx-2">•</span>
        <span>{item.role}</span>
      </div>
    </div>
  );
}