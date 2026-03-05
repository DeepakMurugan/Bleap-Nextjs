"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ✅ replace with your real images (case-sensitive paths) */
import s1Top from "../../assets/blogs/st.png";
import s1Bot from "../../assets/blogs/sb.png";

import s2Top from "../../assets/blogs/st.png";
import s2Bot from "../../assets/blogs/sb.png";

import s3Top from "../../assets/blogs/st.png";
import s3Bot from "../../assets/blogs/st.png";

import s4Top from "../../assets/blogs/st.png";
import s4Bot from "../../assets/blogs/sb.png";

import s5Top from "../../assets/blogs/st.png";
import s5Bot from "../../assets/blogs/sb.png";

const SLIDES = [
  {
    kicker: "Our",
    highlight: "Digital Marketing Services",
    titleTail: "in Chennai",
    leftTitle: "Search Engine Optimisation (SEO)",
    desc:
      "Search has evolved, and so have we. With AEO, semantic search, and voice optimisation leading the way, we design SEO strategies that go past visibility to deliver real ROI. Our goal isn’t just to rank your site; it’s to drive qualified leads, better conversions, and sustainable sales growth.",
    href: "/services/seo",
    images: { top: s1Top, bottom: s1Bot },
  },
  {
    kicker: "",
    
    leftTitle: "Pay Per Click (PPC)",
    desc:
      "We build intent-driven campaigns with tight targeting, clean landing experience, and conversion tracking that helps you scale without wasting spend.",
    href: "/services/ppc",
    images: { top: s2Top, bottom: s2Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Social Media Marketing",
    desc:
      "We create content systems that are consistent, brand-aligned, and performance-backed—so your social presence drives trust and leads.",
    href: "/services/social-media",
    images: { top: s3Top, bottom: s3Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Website Development",
    desc:
      "Fast, responsive, SEO-ready websites built to convert. Clean UI, strong performance, and scalable structure—built for long-term ranking.",
    href: "/services/website-development",
    images: { top: s4Top, bottom: s4Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing",
    desc:
      "Automations, lifecycle flows, and campaign strategy that improves repeat purchase and reactivation—designed for measurable revenue.",
    href: "/services/email-marketing",
    images: { top: s5Top, bottom: s5Bot },
  },
    {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing666",
    desc:
      "Automations, lifecycle flows, and campaign strategy that improves repeat purchase and reactivation—designed for measurable revenue.",
    href: "/services/email-marketing",
    images: { top: s5Top, bottom: s5Bot },
  },
    {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing77",
    desc:
      "Automations, lifecycle flows, and campaign strategy that improves repeat purchase and reactivation—designed for measurable revenue.",
    href: "/services/email-marketing",
    images: { top: s5Top, bottom: s5Bot },
  },
    {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing88",
    desc:
      "Automations, lifecycle flows, and campaign strategy that improves repeat purchase and reactivation—designed for measurable revenue.",
    href: "/services/email-marketing",
    images: { top: s5Top, bottom: s5Bot },
  },
    {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing99",
    desc:
      "Automations, lifecycle flows, and campaign strategy that improves repeat purchase and reactivation—designed for measurable revenue.",
    href: "/services/email-marketing",
    images: { top: s5Top, bottom: s5Bot },
  },
];

export default function DarkServicesScroll5() {
  const slideRefs = useRef([]);
  const scrollRootRef = useRef(null);

  // ✅ reveal animation (up/down)
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
      { root: rootEl, threshold: 0.35 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="mx-auto container px-6 lg:px-10 py-14">
        {/* =======================
            DESKTOP: SNAP SCROLL
           ======================= */}
        <div className="hidden lg:block">
          <div
            ref={scrollRootRef}
            className="h-[78vh] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-2 scrollbar-hide"
          >
            {SLIDES.map((s, idx) => (
              <div
                key={idx}
                ref={(el) => (slideRefs.current[idx] = el)}
                className="slide snap-start min-h-[78vh] flex items-center"
              >
                <div className="grid w-full grid-cols-12 gap-12 items-start">
                  {/* LEFT */}
                  <div className="col-span-6 pt-2">
                    {/* big title like screenshot */}
                    <h2 className="text-[40px] leading-[1.02] font-light">
                      {s.kicker}{" "}
                      <span className="text-[#ff6a00] font-semibold">
                        {s.highlight}
                      </span>{" "}
                      <span className="block">{s.titleTail}</span>
                    </h2>

                    <h3 className="mt-12 text-[26px] font-semibold">
                      {s.leftTitle}
                    </h3>

                    <p className="mt-4 text-[18px] leading-7 text-white/80 max-w-[560px]">
                      {s.desc}
                    </p>

                    {/* button like screenshot */}
                    <div className="mt-7">
                      <Link
                        href={s.href}
                        className="inline-flex items-center justify-center bg-[#ff6a00] px-6 py-3 text-[16px] font-medium
                                   hover:bg-[#ff7d1a] transition"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT IMAGES */}
                  <div className="col-span-6">
                    <div className="overflow-hidden rounded-none bg-black/20 border border-white/10">
                      <Image
                        src={s.images.top}
                        alt={`${s.leftTitle} top`}
                        className="h-[320px] w-full object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="mt-10 overflow-hidden rounded-none bg-black/20 border border-white/10">
                      <Image
                        src={s.images.bottom}
                        alt={`${s.leftTitle} bottom`}
                        className="h-[200px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>

        {/* =======================
            MOBILE/TABLET: SWIPE
           ======================= */}
        <div className="lg:hidden">
          <h2 className="text-center text-[26px] font-light">
            Our{" "}
            <span className="text-[#ff6a00] font-semibold">
              Digital Marketing Services
            </span>{" "}
            in Chennai
          </h2>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {SLIDES.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[92%] sm:w-[72%] rounded-none border border-white/10 bg-black/30"
              >
                <div className="p-5">
                  <div className="overflow-hidden border border-white/10">
                    <Image
                      src={s.images.top}
                      alt={`${s.leftTitle} mobile top`}
                      className="h-[210px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="mt-4 overflow-hidden border border-white/10">
                    <Image
                      src={s.images.bottom}
                      alt={`${s.leftTitle} mobile bottom`}
                      className="h-[150px] w-full object-cover"
                    />
                  </div>

                  <p className="mt-5 text-[18px] font-semibold">
                    {s.leftTitle}
                  </p>

                  <p className="mt-3 text-[14px] leading-6 text-white/75">
                    {s.desc}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={s.href}
                      className="inline-flex items-center justify-center bg-[#ff6a00] px-5 py-2.5 text-[14px] font-medium hover:bg-[#ff7d1a] transition"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <p className="mt-2 text-center text-[12px] text-white/50">
            Swipe to view more →
          </p> */}
        </div>
      </div>

      {/* ✅ reveal animation */}
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

      {/* ✅ hide scrollbar */}
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