"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/scroll/v1.png";

import s2Top from "../../assets/scroll/v2.png";

import s3Top from "../../assets/scroll/v3.png";

import s4Top from "../../assets/scroll/v4.png";

import s5Top from "../../assets/scroll/v5.png";

import s6Top from "../../assets/scroll/v6.png";

const STEPS = [
  {
    leftTitle: "Social Media Video Editing",
    desc:
      "Our social media video edits are optimised for platforms like Instagram, YouTube, LinkedIn, and Facebook. We focus on fast pacing, strong hooks, and platform-friendly formats that increase watch time and engagement.",
    images: { top: s1Top },
  },
  {
    leftTitle: "YouTube Video Editing",
    desc:
      "We edit YouTube videos with storytelling and retention in mind. From intros and transitions to pacing and visual flow, we help creators and brands deliver content viewers want to keep watching.",
    images: { top: s2Top },
  },
  {
    leftTitle: "Reels & Short-Form Video Editing",
    desc:
      "Short videos demand attention fast. We edit reels, shorts, and vertical videos that are visually engaging, trend-aware, and optimised for quick consumption and shareability.",
    images: { top: s3Top },
  },
  {
    leftTitle: "Ad & Campaign Video Editing",
    desc:
      "Our ad video edits are built for performance. We focus on strong openings, clear messaging, and smooth storytelling to support paid campaigns and improve conversion rates.",
    images: { top: s4Top },
  },
  {
    leftTitle: "Motion Graphics ",
    desc:
      "We add motion elements, text animations, transitions, and visual effects where needed, enhancing the video without overwhelming the message.",
    images: { top: s5Top },
  },
  {
    leftTitle: "Promotional Video Editing",
    desc:
      "We edit promotional videos that clearly communicate your value and encourage action. From brand promos to product highlights, our edits are crafted to keep viewers engaged and message-focused.",
    images: { top: s6Top },
  },
];

export default function Videoscroll() {
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
          Our <span className="text-[#ff6a00]">video</span> Services company in Chennai
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