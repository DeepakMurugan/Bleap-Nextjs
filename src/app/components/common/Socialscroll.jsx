"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



import s1Top from "../../assets/scroll/so1.png";

import s2Top from "../../assets/scroll/so2.png";
import s3Top from "../../assets/scroll/so3.png";



import s4Top from "../../assets/scroll/so4.png";

import s5Top from "../../assets/scroll/so5.png";

import s6Top from "../../assets/scroll/so6.png";




const STEPS = [
  {
    leftTitle: "Social Media Strategy & Planning",
    desc:
      "We create custom social media strategies aligned with your business goals. From platform selection to content planning, we ensure every step supports brand growth and audience engagement.",
    images: { top: s1Top },
  },
  {
    leftTitle: "Content Creation & Design",
    desc:
      "Our team develops platform-specific content, including posts, reels, stories, and creatives, designed to attract attention and encourage interaction while maintaining brand consistency.",
    images: { top: s2Top },
  },
  {
    leftTitle: "Social Media Management",
    desc:
      "We handle end-to-end management of your social media accounts, including posting schedules, caption writing, audience interaction, and performance monitoring to keep your brand active and responsive",
    images: { top: s3Top },
  },
  {
    leftTitle: "Paid Social Media Advertising",
    desc:
      "Our paid social campaigns focus on reaching the right audience with precision targeting. We optimize ads to generate leads, website traffic, and conversions while keeping budgets efficient",
    images: { top: s4Top },
  },
  {
    leftTitle: "Community Management",
    desc:
      "Engaging with your audience builds trust. We actively manage comments, messages, and interactions to foster strong relationships and improve brand credibility.",
    images: { top: s5Top },
  },
  {
    leftTitle: "Analytics & Performance Reporting",
    desc:
      "We track key metrics like reach, engagement, clicks, and conversions. Clear reports help you understand what’s working and how your brand is growing across social platforms.",
    images: { top: s6Top },
  },
];

export default function Socialscroll() {
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
          Our <span className="text-[#ff6a00]">social media</span> Services company in Chennai
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