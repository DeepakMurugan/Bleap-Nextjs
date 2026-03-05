"use client";

import Image from "next/image";
import Link from "next/link";

/* ✅ Replace with your real portfolio images (JS import) */
import p1 from "../../assets/blogs/c1.png";
import p2 from "../../assets/blogs/c2.png";
import p3 from "../../assets/blogs/c3.png";

const PORTFOLIO = [
  {
    title: "Sundaram Motors -  Marcdez benz",
    chips: ["Website Revamp", "SEO", "Google Business Profile Optimization"],
    img: p1,
    href: "/case-studies/meridian",
  },
  {
    title: "Whitecaps",
    chips: ["Website", "Branding"],
    img: p2,
    href: "/case-studies/project-two",
  },
  {
    title: "Meridian",
    chips: ["Performance", "SEO"],
    img: p3,
    href: "/case-studies/project-three",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-1">
        {/* Title */}
        <h2 className="text-center text-[25px] md:text-[28px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">Portfolio</span>
        </h2>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block"
              aria-label={item.title}
            >
              <div className="relative overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  className="h-[220px] w-full object-cover sm:h-[240px] lg:h-[350px]"
                  priority={false}
                />

                {/* Hover Overlay (like your 2nd image) */}
                <div
                  className="absolute inset-0 bg-black/0 opacity-0 transition-all duration-300
                             group-hover:bg-black/55 group-hover:opacity-100"
                >
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    {/* Top Title */}
                    <p className="text-[14px] font-semibold text-white/90">
                      {item.title}
                    </p>

                    {/* Bottom chips + view */}
                    <div className="flex items-end justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {item.chips.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-white/30 bg-white/10 px-3 py-1
                                       text-[11px] font-medium text-white/90 backdrop-blur"
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      <span className="text-[12px] font-medium text-white/90 inline-flex items-center gap-2">
                        View <span className="text-[14px]">↗</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Desktop look like your 1st image (plain image only) */}
              {/* Overlay appears only on hover, so default stays clean */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}