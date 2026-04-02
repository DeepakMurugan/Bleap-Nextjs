"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/scroll/g1.png";

import s2Top from "../../assets/scroll/g2.png";
import s3Top from "../../assets/scroll/g3.png";



import s4Top from "../../assets/scroll/g4.png";

import s5Top from "../../assets/scroll/g5.png";

import s6Top from "../../assets/scroll/g6.png";




const STEPS = [
  {
    leftTitle: "Brand Identity Design",
    desc:
      "Your brand identity is more than just a logo, it’s how your business is perceived. We design cohesive brand assets including logos, color palettes, typography, and brand guidelines that create a strong and lasting impression across all platforms.",
    images: { top: s1Top },
  },
  {
    leftTitle: "Logo Design",
    desc:
      "We design unique and memorable logos that reflect your brand personality and values. Our logo designs are versatile, scalable, and crafted to work seamlessly across digital, print, and marketing materials.",
    images: { top: s2Top },
  },
  {
    leftTitle: "Social Media Creatives",
    desc:
      "Our social media designs are created to stop the scroll and spark engagement. From post creatives to ad visuals, we design content that aligns with your brand tone while driving likes, shares, and conversions.",
    images: { top: s3Top },
  },
  {
    leftTitle: "Marketing & Advertising Creatives",
    desc:
      "Whether it’s banners, posters, brochures, or ad creatives, we design marketing materials that communicate your message clearly and persuasively, helping you generate leads and improve campaign performance.",
    images: { top: s4Top },
  },
  {
    leftTitle: "Website & UI Graphics",
    desc:
      "We design intuitive and visually appealing website graphics that enhance user experience. Our designs focus on clarity, consistency, and usability to ensure visitors stay longer and take action.",
    images: { top: s5Top },
  },
  {
    leftTitle: "Presentation & Corporate Designs",
    desc:
      "IWe create clean, professional presentation designs for pitch decks, corporate profiles, and internal communications, helping you present ideas confidently and convincingly.",
    images: { top: s6Top },
  },
];

export default function Graphscroll() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollYInside = window.scrollY - sectionTop;
      const totalScrollable = Math.max(sectionHeight - viewportHeight, 1);

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <= sectionTop + sectionHeight - viewportHeight
      ) {
        const progress = Math.max(
          0,
          Math.min(scrollYInside / totalScrollable, 0.9999)
        );

        const index = Math.min(
          STEPS.length - 1,
          Math.floor(progress * STEPS.length)
        );

        setActiveStep(index);
      } else if (window.scrollY < sectionTop) {
        setActiveStep(0);
      } else {
        setActiveStep(STEPS.length - 1);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-5 pt-4 pb-2">
        <h2 className="text-center text-[28px] md:text-[30px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">grapgic design</span> Services company in Chennai
        </h2>

        {/* DESKTOP */}
       <div
          className="relative mt-3 hidden lg:block"
          style={{ height: `${STEPS.length * 48}vh` }}
        >
          <div className="sticky top-[72px] flex min-h-[calc(100vh-72px)] items-center">
            <div className="grid w-full grid-cols-12 gap-10 items-start">
              {/* LEFT */}
              <div
                key={`text-${activeStep}`}
                className="col-span-6 transition-all duration-500 ease-out"
              >
                <div className="mb-6 flex gap-2">
                  {STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? "w-10 bg-[#F37022]"
                          : "w-4 bg-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="relative min-h-[270px]">
                  {STEPS.map((step, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        i === activeStep
                          ? "opacity-100 translate-y-0"
                          : "pointer-events-none opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-[28px] font-semibold leading-[1.25] text-[#000000]">
                        {step.leftTitle}
                      </p>

                      <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#666666]">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-span-6 pt-3">
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  {STEPS.map((step, i) => (
                    <Image
                      key={i}
                      src={step.images.top}
                      alt={step.leftTitle}
                      priority={i === 0}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                        i === activeStep
                          ? "opacity-100 translate-y-0 scale-100"
                          : "pointer-events-none opacity-0 translate-y-4 scale-[1.02]"
                      }`}
                    />
                  ))}
                </div>

                {/* keep this only if needed later */}
                {/* <div className="relative mt-5 h-[170px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  {STEPS.map((step, i) => (
                    <Image
                      key={i}
                      src={step.images.bottom}
                      alt={`${step.leftTitle} bottom`}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                        i === activeStep
                          ? "opacity-100 translate-y-0 scale-100"
                          : "pointer-events-none opacity-0 translate-y-4 scale-[1.02]"
                      }`}
                    />
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-6 lg:hidden w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[92%] sm:w-[70%] rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.top}
                      alt={`${s.leftTitle} mobile top`}
                      className="h-[200px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  <p className="mt-5 text-[15px] font-semibold text-neutral-900">
                    {s.leftTitle}
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[12px] text-neutral-500">
            Swipe to view more →
          </p>
        </div>
      </div>

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