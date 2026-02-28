"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ✅ TEMP: Replace these imports with your real images */
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

/* ✅ Data INSIDE component (as you asked) */
const STEPS = [
  {
    leftTitle: "Technical SEO in Chennai",
    desc:
      "We audit and optimize site speed, crawlability, indexing, mobile usability, and Core Web Vitals to ensure search engines can access and understand your website efficiently. By fixing structural and performance issues, we help your site rank more consistently while delivering a better user experience.",
    bullets: [
      "10+ Years of SEO Experience",
      "Core Web Vitals & page speed improvements",
      "Broken links, redirects & error resolution, & More.",
    ],
    images: { top: s1Top, bottom: s1Bot },
  },
  {
    leftTitle: "On-Page SEO Optimization",
    desc:
      "We optimize your pages for search intent with clean heading structure, metadata, internal links, and semantic improvements so Google clearly understands what each page is about.",
    bullets: ["Metadata + H1/H2 structure", "Internal linking strategy", "Schema basics & content cleanup"],
    images: { top: s2Top, bottom: s2Bot },
  },
  {
    leftTitle: "Content SEO & Topical Authority",
    desc:
      "We build content clusters that rank and convert — mapped to keywords, competitor gaps, and buyer intent. This improves visibility across the funnel, not just one page.",
    bullets: ["Topic clusters & silos", "Content briefs & outlines", "Optimization + updates"],
    images: { top: s3Top, bottom: s3Bot },
  },
  {
    leftTitle: "Local SEO (Google Business)",
    desc:
      "We improve your Maps visibility and local rankings through Google Business optimization, citations, review strategy, and location landing pages.",
    bullets: ["GMB optimization", "Citations & NAP consistency", "Reviews strategy & local pages"],
    images: { top: s4Top, bottom: s4Bot },
  },
  {
    leftTitle: "Authority Building & SEO Growth",
    desc:
      "We strengthen your domain authority with safe off-page work, link cleanup, and brand mention outreach—helping you rank competitively for high-value keywords.",
    bullets: ["Backlink audit & cleanup", "Outreach & mentions", "Authority growth plan"],
    images: { top: s5Top, bottom: s5Bot },
  },
];

export default function SeoScroll5Steps() {
  const slideRefs = useRef([]);

  // ✅ Scroll-up animation when slide enters view
  useEffect(() => {
    const els = slideRefs.current.filter(Boolean);
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
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-10">
        {/* ✅ Title EXACT style */}
        <h2 className="text-center text-[20px] md:text-[22px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">SEO Services</span> company in Chennai
        </h2>

        {/* ✅ Desktop: 5 scroll slides */}
        <div className="mt-8 hidden lg:block">
          <div className="h-[78vh] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-1">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                ref={(el) => (slideRefs.current[idx] = el)}
                className="slide snap-start min-h-[78vh] flex items-center"
              >
                <div className="grid w-full grid-cols-12 gap-10 items-center">
                  {/* LEFT CONTENT */}
                  <div className="col-span-6">
                    <p className="text-[13px] font-semibold text-neutral-900">
                      {s.leftTitle}
                    </p>

                    <p className="mt-3 text-[12px] leading-6 text-neutral-600 max-w-[540px]">
                      {s.desc}
                    </p>

                    <ul className="mt-4 space-y-2 text-[12px] text-neutral-700">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT IMAGES (NOT STICKY, changes per slide) */}
                  <div className="col-span-6">
                    {/* Top image */}
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={s.images.top}
                        alt={`${s.leftTitle} image 1`}
                        className="h-[260px] w-full object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    {/* Bottom image (half visible like screenshot) */}
                    <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={s.images.bottom}
                        alt={`${s.leftTitle} image 2`}
                        className="h-[140px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Mobile/Tablet: slider (image top) */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[92%] sm:w-[70%] rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.top}
                      alt={`${s.leftTitle} mobile image 1`}
                      className="h-[200px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.bottom}
                      alt={`${s.leftTitle} mobile image 2`}
                      className="h-[140px] w-full object-cover"
                    />
                  </div>

                  <p className="mt-5 text-[14px] font-semibold text-neutral-900">
                    {s.leftTitle}
                  </p>
                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                    {s.desc}
                  </p>

                  <ul className="mt-3 space-y-2 text-[12px] text-neutral-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
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
        .slide {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .slide.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}