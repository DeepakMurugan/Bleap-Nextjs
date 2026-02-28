"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * props:
 *  title: string
 *  steps: Array<{
 *    heading: string,
 *    paragraph: string,
 *    bullets: string[],
 *    images: { top: StaticImageData, bottom: StaticImageData },
 *  }>
 */
export default function ServiceScrollShowcase({ title, steps = [] }) {
  const stepRefs = useRef([]);

  // ✅ Scroll-up animation on view
  useEffect(() => {
    const els = stepRefs.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.25 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps]);

  if (!steps?.length) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-12">
        {/* Title */}
        <h2 className="text-center text-[20px] md:text-[22px] font-semibold text-neutral-900">
          {title}
        </h2>

        {/* ✅ Desktop: each step is one full snap section (NO sticky) */}
        <div className="mt-10 hidden lg:block">
          <div className="h-[78vh] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-1">
            {steps.map((s, idx) => (
              <div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                className="step snap-start min-h-[78vh] flex items-center"
              >
                <div className="grid w-full grid-cols-12 gap-10 items-center">
                  {/* Left content */}
                  <div className="col-span-6">
                    <p className="text-[13px] font-semibold text-neutral-900">
                      {s.heading}
                    </p>

                    <p className="mt-3 text-[13px] leading-6 text-neutral-600 max-w-[520px]">
                      {s.paragraph}
                    </p>

                    <ul className="mt-4 space-y-2 text-[12px] text-neutral-600">
                      {s.bullets?.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right images (change per step, NOT sticky) */}
                  <div className="col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm bg-white">
                      <Image
                        src={s.images.top}
                        alt={`${s.heading} image 1`}
                        className="h-[260px] w-full object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    {/* second image half look */}
                    <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm bg-white">
                      <Image
                        src={s.images.bottom}
                        alt={`${s.heading} image 2`}
                        className="h-[170px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Mobile/Tablet: slider cards (image top) */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[88%] sm:w-[70%] rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.top}
                      alt={`${s.heading} mobile image 1`}
                      className="h-[200px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.bottom}
                      alt={`${s.heading} mobile image 2`}
                      className="h-[140px] w-full object-cover"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-[14px] font-semibold text-neutral-900">
                      {s.heading}
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                      {s.paragraph}
                    </p>

                    <ul className="mt-3 space-y-2 text-[12px] text-neutral-600">
                      {s.bullets?.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[12px] text-neutral-500">
            Swipe to view more →
          </p>
        </div>
      </div>

      {/* ✅ Scroll-up animation CSS */}
      <style jsx>{`
        .step {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}