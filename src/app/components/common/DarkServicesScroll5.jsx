"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ✅ replace with your real images (case-sensitive paths) */import s1Top from "../../assets/blogs/se2.png";
import s1Bot from "../../assets/blogs/se1.png";

import s2Top from "../../assets/blogs/pp1.png";
import s2Bot from "../../assets/blogs/pp2.png";

import s3Top from "../../assets/blogs/wd1.png";
import s3Bot from "../../assets/blogs/wd2.png";

import s4Top from "../../assets/blogs/gr1.png";
import s4Bot from "../../assets/blogs/gr2.png";

import s5Top from "../../assets/blogs/ve1.png";
import s5Bot from "../../assets/blogs/ve2.png";


import s6Top from "../../assets/blogs/wdd1.png";
import s6Bot from "../../assets/blogs/wdd2.png";


import s7Top from "../../assets/blogs/emm1.png";
import s7Bot from "../../assets/blogs/emm2.png";


import s8Top from "../../assets/blogs/smm1.png";
import s8Bot from "../../assets/blogs/seeo.png";

const SLIDES = [
  {
    kicker: "Our",
    highlight: "Digital Marketing Services",
    titleTail: "in Chennai",
    leftTitle: "Search Engine Optimisation (SEO)",
    desc:
      "Search has evolved, and so have we. With AEO, semantic search, and voice optimisation leading the way, as a result-driven digital marketing agency, we design SEO strategies that go past visibility to deliver real ROI. Our goal isn’t just to rank your site; it’s to drive qualified leads, better conversions, and sustainable sales growth",
    href: "/services/seo-service-in-chennai",
    images: { top: s1Top, bottom: s1Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Pay Per Click (PPC)",
    desc:
      "Clicks don’t pay the bills; sales do. At Leapsters, our PPC strategies are built for conversions, not vanity metrics. By using AI-powered targeting, precision bidding, and data-driven optimisation, we ensure every rupee you spend delivers maximum ROI",
    href: "/services/ppc-service-in-chennai",
    images: { top: s2Top, bottom: s2Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Website Development",
    desc:
      "A website should do more than look good; it should perform. Our development team creates sites that are fast, secure, mobile-first, and SEO-ready. Every line of code and every design choice is made to improve user experience, conversions, and business growth.",
    href: "/services/website-development-service-in-chennai",
    images: { top: s3Top, bottom: s3Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Graphic Designing",
    desc:
      "Your audience makes split-second decisions. The right design can make them stop, look, and remember. At Bleap, a creative digital marketing company, we create designs that speak your brand’s language: bold, clear, and unforgettable. Whether it’s social media creatives, brand identity, or campaign graphics, we design to spark attention and build trust.",
    href: "/services/graphic-designing-company-in-chennai",
    images: { top: s4Top, bottom: s4Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Video Editing",
    desc:
      "Attention spans are shorter than ever, which means your videos need to work harder. From reels and ads to corporate brand films, our video editing services turn raw footage into compelling visual stories that capture attention, build recall, and inspire action.",
    href: "/services/video-editing-services-in-chennai",
    images: { top: s5Top, bottom: s5Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Website Design",
    desc:
      "First impressions are made in seconds. That’s why we design websites that aren’t just beautiful, but purposeful. Every layout, interaction, and visual element is crafted to build trust, engage visitors, and move them closer to becoming customers.",
    href: "/services/website-design-service-in-chennai",
    images: { top: s6Top, bottom: s6Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Email Marketing",
    desc:
      "Inbox space is valuable, and every email needs to earn its place. That’s why our digital marketing services design campaigns that connect with your audience on a personal level. We design email strategies that build relationships, nurture trust, and turn one-time buyers into loyal fans.",
    href: "/services/email-marketing-in-chennai",
    images: { top: s7Top, bottom: s7Bot },
  },
  {
    kicker: "",
    highlight: "",
    titleTail: "",
    leftTitle: "Social Media Marketing / Optimization",
    desc:
      "Social media isn’t about chasing likes; it’s about building communities that buy. From content calendars to paid campaigns and analytics, every move is designed to drive engagement, build trust, and deliver measurable growth.",
    href: "/services/social-media-marketing-in-chennai",
    images: { top: s8Top, bottom: s8Bot },
  },
];

export default function DarkServicesScroll5() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        setActiveIndex(0);
        return;
      }

      const progress = Math.min(
        Math.max(-rect.top / totalScrollable, 0),
        1
      );

      const newIndex = Math.min(
        SLIDES.length - 1,
        Math.floor(progress * SLIDES.length)
      );

      setActiveIndex(newIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="mx-auto container px-6 lg:px-10 py-14 md:py-16">
        {/* =======================
            DESKTOP: FULLSCREEN STICKY SCROLL
           ======================= */}
        <div
          ref={sectionRef}
          className="relative hidden lg:block"
          style={{ height: `${SLIDES.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <div className="grid w-full grid-cols-12 gap-12 items-start">
              {/* LEFT */}
              <div className="col-span-6 pt-2">
                <div key={activeIndex} className="desktop-fade">
                  <h2 className="text-[40px] leading-[1.02] font-light min-h-[90px]">
                    {activeSlide.kicker}{" "}
                    <span className="text-[#ff6a00] font-semibold">
                      {activeSlide.highlight}
                    </span>{" "}
                    <span className="block">{activeSlide.titleTail}</span>
                  </h2>

                  <h3 className="mt-12 text-[26px] font-semibold">
                    {activeSlide.leftTitle}
                  </h3>

                  <p className="mt-4 text-[18px] leading-7 text-white/80 max-w-[560px]">
                    {activeSlide.desc}
                  </p>

                  <div className="mt-7">
                    <Link
                      href={activeSlide.href}
                      className="inline-flex items-center justify-center bg-[#ff6a00] px-6 py-3 text-[16px] font-medium hover:bg-[#ff7d1a] transition"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="col-span-6">
                <div key={`${activeIndex}-images`} className="desktop-fade">
                  <div className="overflow-hidden rounded-none bg-black/20 border border-white/10">
                    <Image
                      src={activeSlide.images.top}
                      alt={`${activeSlide.leftTitle} top`}
                      className="h-[320px] w-full object-cover"
                      priority={activeIndex === 0}
                    />
                  </div>

                  <div className="mt-10 overflow-hidden rounded-none bg-black/20 border border-white/10">
                    <Image
                      src={activeSlide.images.bottom}
                      alt={`${activeSlide.leftTitle} bottom`}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* optional slide count */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {SLIDES.map((_, idx) => (
                <span
                  key={idx}
                  className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-[#ff6a00] scale-125"
                      : "bg-white/25"
                  }`}
                />
              ))}
            </div>
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
        </div>
      </div>

      <style jsx>{`
        .desktop-fade {
          animation: fadeUp 0.45s ease;
          will-change: transform, opacity;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

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