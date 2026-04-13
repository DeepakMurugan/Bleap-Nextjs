"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ✅ Replace these imports with your real images */
import s1Top from "../../assets/scroll/wdd1.png";

import s2Top from "../../assets/scroll/wdd2.png";

import s3Top from "../../assets/scroll/wdd3.png";

import s4Top from "../../assets/scroll/wdd4.png";

import s5Top from "../../assets/scroll/wdd5.png";

import s6Top from "../../assets/scroll/wdd6.png";

import s7Top from "../../assets/scroll/wdd7.png";

import s8Top from "../../assets/scroll/wdd8.png";

const STEPS = [
  {
    leftTitle: "Custom Website Development",
    desc:
      "We build tailor-made websites designed specifically for your business needs. From structure to functionality, every element is crafted to reflect your brand and drive user engagement.",
    images: { top: s1Top },
  },
  {
    leftTitle: "Responsive Web Design",
    desc:
      "Our websites adapt seamlessly across mobiles, tablets, and desktops, ensuring a consistent user experience and improved engagement on every device.",
    images: { top: s2Top },
  },
  {
    leftTitle: "CMS Website Development",
    desc:
      "We develop easy-to-manage CMS-based websites that allow you to update content effortlessly while maintaining performance, security, and scalability.",
    images: { top: s3Top },
  },
  {
    leftTitle: "eCommerce Website Development",
    desc:
      "Our eCommerce solutions are built to convert. From intuitive navigation to secure payment gateways, we create online stores that drive sales and enhance customer experience.",
    images: { top: s4Top },
  },
  {
    leftTitle: "Website Redesign & Revamp",
    desc:
      "If your current website feels outdated or underperforming, we redesign it with modern UI, improved UX, faster load times, and better conversion flow.",
    images: { top: s5Top },
  },
  {
    leftTitle: "Website Performance Optimization",
    desc:
      "We optimize site speed, structure, and performance to reduce bounce rates, improve user experience, and boost conversion potential.",
    images: { top: s6Top },
  },
   {
    leftTitle: "Website Maintenance & Support",
    desc:
      "Our work doesn’t stop at launch. We provide ongoing maintenance, updates, and technical support to keep your website secure and running smoothly.",
    images: { top: s7Top },
  },
   {
    leftTitle: "SEO-Friendly Website Development",
    desc:
      "Every website we build follows SEO best practices, ensuring clean code, fast performance, and strong search engine visibility from day one.",
    images: { top: s8Top },
  },
];

export default function Webdevscroll() {
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
          Our <span className="text-[#ff6a00]">Web Dev</span> Services company in Chennai
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