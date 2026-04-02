"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/scroll/wd1.png";

import s2Top from "../../assets/scroll/wd2.png";
import s3Top from "../../assets/scroll/wd3.png";



import s4Top from "../../assets/scroll/wd4.png";

import s5Top from "../../assets/scroll/wd5.png";

import s6Top from "../../assets/scroll/wd6.png";
import s7Top from "../../assets/scroll/wd7.png";

import s8Top from "../../assets/scroll/wd8.png";




const STEPS = [
  {
    leftTitle: "Custom Website Design",
    desc:
      "We create original, brand-aligned website designs that reflect your identity while delivering clarity, consistency, and a strong visual narrative across every page.",
    images: { top: s1Top },
  },
  {
    leftTitle: "Responsive Web Design",
    desc:
      "Our designs adapt seamlessly across all devices, ensuring usability, readability, and visual consistency on desktops, tablets, and smartphones.",
    images: { top: s2Top },
  },
  {
    leftTitle: "UI Design",
    desc:
      "We design clean, intuitive user interfaces that make navigation effortless, reduce friction, and guide users naturally toward key actions.",
    images: { top: s3Top },
  },
  {
    leftTitle: "UX Design",
    desc:
      "Through thoughtful user journeys, wireframes, and interaction design, we improve usability and create experiences that feel intuitive and purposeful.",
    images: { top: s4Top },
  },
  {
    leftTitle: "Landing Page Design",
    desc:
      "We design conversion-focused landing pages that align messaging, layout, and CTAs, helping businesses capture leads and drive action efficiently.",
    images: { top: s5Top },
  },
  {
    leftTitle: "Website Redesign",
    desc:
      "If your current website feels outdated or ineffective, we redesign it with modern visuals, improved structure, and better user flow while retaining brand essence.",
    images: { top: s6Top },
  },
   {
    leftTitle: "Design Systems & Style Guides",
    desc:
      "Our work doesn’t stop at launch. We provide ongoing maintenance, updates, and technical support to keep your website secure and running smoothly.",
    images: { top: s7Top },
  },
   {
    leftTitle: "SEO-Friendly Website Development",
    desc:
      "We create scalable design systems that ensure consistency across pages and future updates, supporting long-term brand alignment.",
    images: { top: s8Top },
  },
];

export default function Webdes() {
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
          Our <span className="text-[#ff6a00]">Website Dsign</span> Services company in Chennai
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