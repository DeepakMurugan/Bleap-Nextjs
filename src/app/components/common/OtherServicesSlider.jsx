"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// ✅ Replace with your real images
import s1 from "../../assets/case-studies/df.png";
import s2 from "../../assets/case-studies/df2.png";
import s3 from "../../assets/case-studies/df.png";
import s4 from "../../assets/case-studies/df.png";
import s5 from "../../assets/case-studies/df2.png";
import s6 from "../../assets/case-studies/df.png";
import s7 from "../../assets/case-studies/df.png";
import s8 from "../../assets/case-studies/df2.png";
import s9 from "../../assets/case-studies/df.png";

const SERVICES = [
  { id: "seo", title: "Search Engine Optimization", linkText: "Know More", img: s1, href: "/services/seo" },
  { id: "ppc", title: "Pay Per Click", linkText: "Know More", img: s2, href: "/services/ppc" },
  { id: "email", title: "Email Marketing", linkText: "Know More", img: s3, href: "/services/email-marketing" },
  { id: "smm", title: "Social Media Marketing", linkText: "Know More", img: s4, href: "/services/social-media" },
  { id: "webdev", title: "Website Development", linkText: "Know More", img: s5, href: "/services/web-development" },
  { id: "design", title: "Graphic Designing", linkText: "Know More", img: s6, href: "/services/graphic-design" },

  // extra sample duplicates if you want more cards
  { id: "smm-2", title: "Social Media Marketing", linkText: "Know More", img: s7, href: "/services/social-media" },
  { id: "webdev-2", title: "Website Development", linkText: "Know More", img: s8, href: "/services/web-development" },
  { id: "design-2", title: "Graphic Designings", linkText: "Know More", img: s9, href: "/services/graphic-design" },
];

export default function OtherServicesSlider() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  // ✅ responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ last possible start index
  const maxIndex = useMemo(() => Math.max(0, SERVICES.length - perView), [perView]);

  // ✅ clamp if perView changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const prev = () => canPrev && setIndex((v) => v - 1);
  const next = () => canNext && setIndex((v) => v + 1);

  // ✅ PROGRESS INDICATOR (correct behavior)
  // width = visible cards portion, left = movement across remaining track
  const indicatorWidthPct = useMemo(() => {
    return (perView / SERVICES.length) * 100;
  }, [perView]);

  const indicatorLeftPct = useMemo(() => {
    if (maxIndex === 0) return 0;
    const travelSpace = 100 - indicatorWidthPct;
    return (index / maxIndex) * travelSpace;
  }, [index, maxIndex, indicatorWidthPct]);

  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-12">
        {/* Title */}
        <h2 className="text-center text-[30px] font-semibold text-neutral-900">
          Our Other <span className="text-[#ff6a00]">Services</span>
        </h2>

        {/* Slider */}
        <div className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${index * (100 / perView)}%)`,
              width: `${(SERVICES.length * 100) / perView}%`,
            }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="px-3"
                style={{ width: `${100 / SERVICES.length}%` }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <div className="p-4">
                    <div className="overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <p className="mt-4 text-[18px] font-medium text-[#000000]">
                      {s.title}
                    </p>

                    <a
                      href={s.href}
                      className="mt-2 inline-flex items-center gap-2 text-[15px] text-[#000000] hover:text-neutral-900"
                    >
                      {s.linkText} <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls + progress */}
        <div className="mt-6 flex items-center gap-4">
          {/* arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`h-9 w-9 rounded-md border border-neutral-300 flex items-center justify-center
              ${canPrev ? "hover:bg-white" : "opacity-40 cursor-not-allowed"}`}
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={!canNext}
              className={`h-9 w-9 rounded-md border border-neutral-300 flex items-center justify-center
              ${canNext ? "hover:bg-white" : "opacity-40 cursor-not-allowed"}`}
            >
              →
            </button>
          </div>

          {/* track + moving indicator */}
          <div className="relative h-[2px] flex-1 bg-neutral-300/70 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full bg-[#ff6a00] rounded-full transition-all duration-300"
              style={{
                width: `${indicatorWidthPct}%`,
                left: `${indicatorLeftPct}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}