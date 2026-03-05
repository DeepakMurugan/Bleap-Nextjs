"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    bullets: [
      "Metadata + H1/H2 structure",
      "Internal linking strategy",
      "Schema basics & content cleanup",
    ],
    images: { top: s2Top, bottom: s2Bot },
  },
  {
    leftTitle: "Content SEO & Topical Authority",
    desc:
      "We build content clusters that rank and convert — mapped to keywords, competitor gaps, and buyer intent. This improves visibility across the funnel, not just one page.",
    bullets: [
      "Topic clusters & silos",
      "Content briefs & outlines",
      "Optimization + updates",
    ],
    images: { top: s3Top, bottom: s3Bot },
  },
  {
    leftTitle: "Local SEO (Google Business)",
    desc:
      "We improve your Maps visibility and local rankings through Google Business optimization, citations, review strategy, and location landing pages.",
    bullets: [
      "GMB optimization",
      "Citations & NAP consistency",
      "Reviews strategy & local pages",
    ],
    images: { top: s4Top, bottom: s4Bot },
  },
  {
    leftTitle: "Authority Building & SEO Growth",
    desc:
      "We strengthen your domain authority with safe off-page work, link cleanup, and brand mention outreach—helping you rank competitively for high-value keywords.",
    bullets: [
      "Backlink audit & cleanup",
      "Outreach & mentions",
      "Authority growth plan",
    ],
    images: { top: s5Top, bottom: s5Bot },
  },
];

export default function SeoScroll5Steps2() {
  const slideRefs = useRef([]);
  const scrollRootRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ full-section scroll lock (desktop only)
  const [lockScroll, setLockScroll] = useState(false);

  // ✅ Reveal animation: add when visible, remove when not (works up & down)
  useEffect(() => {
    const rootEl = scrollRootRef.current;
    const els = slideRefs.current.filter(Boolean);
    if (!rootEl || !els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
          else e.target.classList.remove("is-visible");
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

  // ✅ Desktop: use mouse wheel to scroll THIS section fully (5 snaps), then release to page
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const scroller = scrollRootRef.current;
    if (!sectionEl || !scroller) return;

    const isDesktop = () => window.innerWidth >= 1024;

    const inViewportEnough = () => {
      const r = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const mid = r.top + r.height / 2;
      return mid > 0.15 * vh && mid < 0.85 * vh;
    };

    const canScrollInside = (deltaY) => {
      const atTop = scroller.scrollTop <= 0;
      const atBottom =
        scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;

      if (deltaY < 0 && atTop) return false;
      if (deltaY > 0 && atBottom) return false;
      return true;
    };

    const onWheel = (e) => {
      if (!isDesktop()) return;
      if (!inViewportEnough()) return;

      if (canScrollInside(e.deltaY)) {
        e.preventDefault();
        scroller.scrollBy({ top: e.deltaY, behavior: "smooth" });
        setLockScroll(true);
      } else {
        setLockScroll(false);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // ✅ When locked, prevent body scrolling (desktop)
  useEffect(() => {
    if (!lockScroll) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lockScroll]);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-5 py-10">
        {/* Title */}
        <h2 className="text-center text-[20px] md:text-[22px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">SEO Services</span> company in
          Chennai
        </h2>

        {/* =======================
            DESKTOP (78vh SNAP SCROLL)
           ======================= */}
        <div className="mt-8 hidden lg:block">
          <div
            ref={scrollRootRef}
            className="h-[78vh] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-1 scrollbar-hide"
          >
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                ref={(el) => (slideRefs.current[idx] = el)}
                className="slide snap-start min-h-[78vh] flex items-center"
              >
                <div className="grid w-full grid-cols-12 gap-10 items-start">
                  {/* Left */}
                  <div className="col-span-6">
                    <p className="text-[20px] font-semibold text-[#000000]">
                      {s.leftTitle}
                    </p>

                    <p className="mt-3 text-[17px] leading-6 text-[#888888] max-w-[560px]">
                      {s.desc}
                    </p>

                    <ul className="mt-4 space-y-2 text-[17px] text-[#888888]">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[5px] h-3 w-3 rounded-full bg-[#F37022]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right images */}
                  <div className="col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={s.images.top}
                        alt={`${s.leftTitle} top image`}
                        className="h-[260px] w-full object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={s.images.bottom}
                        alt={`${s.leftTitle} bottom image`}
                        className="h-[140px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================
            MOBILE/TABLET (SLIDER)
           ======================= */}
        <div className="mt-8 lg:hidden w-full overflow-hidden">
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

                  <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.bottom}
                      alt={`${s.leftTitle} mobile bottom`}
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

      {/* ✅ Reveal animation */}
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

      {/* ✅ Hide scrollbar */}
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