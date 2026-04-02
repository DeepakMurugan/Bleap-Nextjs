"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import s1 from "../../assets/case-studies/h1.png";
import s2 from "../../assets/case-studies/h2.png";
import s3 from "../../assets/case-studies/h3.png";
import s4 from "../../assets/case-studies/h4.png";
import s5 from "../../assets/case-studies/h5.png";
import s6 from "../../assets/case-studies/h6.png";
import s7 from "../../assets/case-studies/h7.png";
import s8 from "../../assets/case-studies/h8.png";

const SERVICES = [
  { id: 1, title: "Search Engine Optimization", linkText: "Know More", img: s1, href: "/seo-service-in-chennai" },
  { id: 2, title: "Pay Per Click", linkText: "Know More", img: s2, href: "/ppc-service-in-chennai" },
  { id: 3, title: "Email Marketing", linkText: "Know More", img: s3, href: "/email-marketing-service-in-chennai" },
  { id: 4, title: "Website Development", linkText: "Know More", img: s4, href: "/website-development-service-in-chennai" },
  { id: 5, title: " Website Design ", linkText: "Know More", img: s5, href: "/website-design-service-in-chennai" },
  { id: 6, title: "Graphic Designing", linkText: "Know More", img: s6, href: "/graphic-design-service-in-chennai" },
  { id: 7, title: "Social Media Marketing", linkText: "Know More", img: s7, href: "/social-media-marketing-service-in-chennai" },
  { id: 8, title: "Video Editing ", linkText: "Know More", img: s8, href: "/video-editing-service-in-chennai" },
];

export default function OtherServicesSlider() {
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setPerView(1); // mobile + tablet = one at a time
      } else {
        setPerView(3); // desktop = 3 visible cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = useMemo(() => {
    return Array.from({ length: perView }, (_, i) => {
      return SERVICES[(current + i) % SERVICES.length];
    });
  }, [current, perView]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % SERVICES.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const progressWidth = 100 / SERVICES.length;
  const progressLeft = (current * 100) / SERVICES.length;

  return (
    <section className="bg-[#F5F5F7]">
      {/* <div className="mx-auto container px-6 lg:px-10 py-12"> */}
        <div className="mx-auto container px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-8 lg:py-8">
        <h2 className="text-center text-[30px] font-semibold text-neutral-900">
          Our Other <span className="text-[#ff6a00]">Services</span>
        </h2>

        <div className="mt-8">
          <div
            className={`grid gap-6 ${
              perView === 3 ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {visibleCards.map((service, idx) => (
              <div
                key={`${service.id}-${current}-${idx}`}
                className="rounded-2xl overflow-hidden"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={service.img}
                      alt={service.title}
                      className="w-full h-auto object-contain"
                      priority={idx === 0}
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-medium text-[#000000]">
                    {service.title}
                  </p>

                  <a
                    href={service.href}
                    className="mt-2 inline-flex items-center gap-2 text-[15px] text-[#000000] hover:text-neutral-900"
                  >
                    {service.linkText} <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="h-9 w-9 rounded-md border border-neutral-300 flex items-center justify-center hover:bg-white"
                aria-label="Previous service"
              >
                ←
              </button>

              <button
                onClick={next}
                className="h-9 w-9 rounded-md border border-neutral-300 flex items-center justify-center hover:bg-white"
                aria-label="Next service"
              >
                →
              </button>
            </div>

            <div className="relative h-[2px] flex-1 bg-neutral-300/70 rounded-full overflow-hidden">
              <div
                className="absolute top-0 h-full bg-[#ff6a00] rounded-full transition-all duration-300"
                style={{
                  width: `${progressWidth}%`,
                  left: `${progressLeft}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}