"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/scroll/se1.png";

import s2Top from "../../assets/scroll/se2.png";

import s3Top from "../../assets/scroll/se3.png";

import s4Top from "../../assets/scroll/se4.png";

import s5Top from "../../assets/scroll/se5.png";

import s6Top from "../../assets/scroll/se6.png";

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
    images: { top: s1Top},
  },
  {
    leftTitle: "On Page SEO in Chennai",
    desc:
      "We optimize keywords, page structure, internal linking, metadata, and content relevance to improve rankings and engagement. Every page is refined to attract the right audience, communicate value clearly, and convert organic visitors into leads or customers.",
    bullets: [
      "Keyword & content optimization",
      "Internal linking & page structure improvements",
      "Meta tags, headings & on-page SEO fixes, & More.",
    ],
    images: { top: s2Top },
  },
  {
    leftTitle: "Off-Page SEO in Chennai",
    desc:
      "Off-page SEO builds authority and trust beyond your website. Through ethical link-building, brand mentions, and credibility signals, we strengthen your domain’s reputation across the web. This improves your ability to rank for competitive keywords while supporting long-term ranking stability.",
    bullets: [
      "High-quality backlink acquisition & outreach",
      "Authority building through relevant publications",
      "Brand mentions & online reputation management, & More.",
    ],
    images: { top: s3Top },
  },
  {
    leftTitle: "Content Optimization in Chennai",
    desc:
      "Content performs best when it answers user intent clearly and completely. We optimize existing content by improving structure, keyword alignment, clarity, and depth, ensuring every page adds value for users and search engines. The result is higher engagement, improved rankings, and stronger organic performance.",
    bullets: [
      "Content structure for better scannability",
      "Keyword relevance aligned with search intent",
      "Depth and completeness to match top-ranking pages, & More.",
    ],
    images: { top: s4Top },
  },
  {
    leftTitle: "Local SEO Services in Chennai",
    desc:
      "Local SEO helps your business get discovered by customers searching nearby. We optimize your Google Business Profile, local citations, and location-based keywords to improve visibility in map results and local searches. This drives more relevant enquiries and footfall from your target service areas.",
    bullets: [
      "Google Business Profile optimization",
      "Local citations & NAP consistency",
      "Location-based keyword optimization, & More.",
    ],
    images: { top: s5Top },
  },
  {
    leftTitle: "Ecommerce SEO Services in Chennai",
    desc:
      "Ecommerce SEO requires precision and scalability. We optimize product pages, category structures, site architecture, and technical elements to help your products rank for high-intent buyer searches. Our focus is on increasing qualified traffic, improving conversions, and driving sustainable revenue through organic search.",
    bullets: [
      "Product & category page optimization",
      "SEO-friendly URLs & site architecture",
      "E-commerce technical & schema optimization, & More.",
    ],
    images: { top: s6Top },
  },
];

export default function SeoScroll5Steps2() {
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

      // how much user has scrolled inside this section
      const scrollYInside = window.scrollY - sectionTop;

      // only calculate when section is in range
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight - viewportHeight) {
        const totalScrollable = sectionHeight - viewportHeight;
        const progress = Math.max(0, Math.min(scrollYInside / totalScrollable, 1));
        const index = Math.min(
          STEPS.length - 1,
          Math.floor(progress * STEPS.length)
        );
        setActiveStep(index);
      } else if (window.scrollY < sectionTop) {
        setActiveStep(0);
      } else if (window.scrollY > sectionTop + sectionHeight - viewportHeight) {
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

  const current = STEPS[activeStep];

  return (
    <section ref={sectionRef} className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-5 py-6">
        <h2 className="text-center text-[25px] md:text-[30px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">SEO Services</span> company in Chennai
        </h2>

        {/* DESKTOP */}
        <div
          className="relative mt-8 hidden lg:block"
          style={{ height: `${STEPS.length * 100}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center">
            <div className="grid w-full grid-cols-12 gap-10 items-center">
              {/* Left */}
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

                <p className="text-[28px] font-semibold leading-[1.25] text-[#000000]">
                  {current.leftTitle}
                </p>

                <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#666666]">
                  {current.desc}
                </p>

                <ul className="mt-6 space-y-3 text-[16px] text-[#555555]">
                  {current.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[8px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#F37022]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div
                key={`image-${activeStep}`}
                className="col-span-6 transition-all duration-500 ease-out"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <Image
                    src={current.images.top}
                    alt={`${current.leftTitle} top image`}
                    className="h-[300px] w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-6 overflow-hidden">
                  {/* <Image
                    src={current.images.bottom}
                    alt={`${current.leftTitle} bottom image`}
                    className="h-[180px] w-full object-cover"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-8 lg:hidden w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[92%] sm:w-[70%] rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 ">
                    <Image
                      src={s.images.top}
                      alt={`${s.leftTitle} mobile top`}
                      className="h-[200px] w-full object-cover"
                      priority={idx === 0}
                    />
                  </div>

                  {/* <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={s.images.bottom}
                      alt={`${s.leftTitle} mobile bottom`}
                      className="h-[140px] w-full object-cover"
                    />
                  </div> */}

                  <p className="mt-5 text-[15px] font-semibold text-neutral-900">
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