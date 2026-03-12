"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/blogs/st.png";
import s1Bot from "../../assets/blogs/sb.png";

import s2Top from "../../assets/blogs/st.png";
import s2Bot from "../../assets/blogs/sb.png";

import s3Top from "../../assets/blogs/st.png";
import s3Bot from "../../assets/blogs/sb.png";

import s4Top from "../../assets/blogs/st.png";
import s4Bot from "../../assets/blogs/sb.png";

import s5Top from "../../assets/blogs/st.png";
import s5Bot from "../../assets/blogs/sb.png";

import s6Top from "../../assets/blogs/st.png";
import s6Bot from "../../assets/blogs/sb.png";



const STEPS = [
  {
    leftTitle: "Social Media Strategy & Planning",
    desc:
      "We create custom social media strategies aligned with your business goals. From platform selection to content planning, we ensure every step supports brand growth and audience engagement.",
    images: { top: s1Top, bottom: s1Bot },
  },
  {
    leftTitle: "Content Creation & Design",
    desc:
      " Our team develops platform-specific content, including posts, reels, stories, and creatives, designed to attract attention and encourage interaction while maintaining brand consistency.",
    images: { top: s2Top, bottom: s2Bot },
  },
  {
    leftTitle: "Social Media Management",
    desc:
      "We handle end-to-end management of your social media accounts, including posting schedules, caption writing, audience interaction, and performance monitoring to keep your brand active and responsive",
    images: { top: s3Top, bottom: s3Bot },
  },
  {
    leftTitle: "Paid Social Media Advertising",
    desc:
      "Our paid social campaigns focus on reaching the right audience with precision targeting. We optimize ads to generate leads, website traffic, and conversions while keeping budgets efficient.",
    images: { top: s4Top, bottom: s4Bot },
  },
  {
    leftTitle: "Community Management",
    desc:
      "Engaging with your audience builds trust. We actively manage comments, messages, and interactions to foster strong relationships and improve brand credibility.",
    images: { top: s5Top, bottom: s5Bot },
  },
  {
    leftTitle: "Analytics & Performance Reporting",
    desc:
      "We track key metrics like reach, engagement, clicks, and conversions. Clear reports help you understand what’s working and how your brand is growing across social platforms.",
    images: { top: s6Top, bottom: s6Bot },
  },
  
];

export default function Socialscroll() {
  const slideRefs = useRef([]);
  const scrollRootRef = useRef(null);

  useEffect(() => {
    const rootEl = scrollRootRef.current;
    const els = slideRefs.current.filter(Boolean);

    if (!rootEl || !els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: rootEl,
        threshold: 0.35,
      }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-5">
        <h2 className="text-center text-[20px] font-semibold text-neutral-900 md:text-[30px]">
          Our <span className="text-[#ff6a00]">Social Media Marketing </span> company in Chennai
        </h2>

        {/* Desktop */}
        <div className="mt-8 hidden lg:block">
          <div
            ref={scrollRootRef}
            className="scrollbar-hide h-[78vh] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-2"
          >
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => (slideRefs.current[idx] = el)}
                className="slide flex min-h-[78vh] snap-start items-center"
              >
                <div className="grid w-full grid-cols-12 items-start gap-10">
                  <div className="col-span-6 pt-2">
                    <h3 className="text-[24px] font-semibold text-black">
                      {step.leftTitle}
                    </h3>

                    <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#888888]">
                      {step.desc}
                    </p>
                  </div>

                  <div className="col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={step.images.top}
                        alt={`${step.leftTitle} top image`}
                        className="h-[280px] w-full object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={step.images.bottom}
                        alt={`${step.leftTitle} bottom image`}
                        className="h-[160px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-8 w-full overflow-hidden lg:hidden">
          <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="w-[92%] shrink-0 snap-start rounded-2xl border border-neutral-200 bg-white shadow-sm sm:w-[70%]"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={step.images.top}
                      alt={`${step.leftTitle} mobile top`}
                      className="h-[200px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={step.images.bottom}
                      alt={`${step.leftTitle} mobile bottom`}
                      className="h-[140px] w-full object-cover"
                    />
                  </div>

                  <p className="mt-5 text-[14px] font-semibold text-neutral-900">
                    {step.leftTitle}
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                    {step.desc}
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

      <style jsx>{`
        .slide {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 450ms ease, transform 450ms ease;
        }

        .slide.is-visible {
          opacity: 1;
          transform: translateY(0);
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
