"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ JS image imports
import healthcareImg from "../../assets/case-studies/healthcare.png";
import educationImg from "../../assets/case-studies/education.png";
import realestateImg from "../../assets/case-studies/realestate.png";

const CASE_STUDIES = [
  {
    title: "Healthcare",
    img: healthcareImg,
    tag: "SEO",
    clientLabel: "Healthcare",
    clientChipBg: "bg-[#22C55E]",
    metric: "Clicks increased by 55%",
    href: "/case-studies/healthcare",
  },
  {
    title: "Education",
    img: educationImg,
    tag: "SEO",
    clientLabel: "Education",
    clientChipBg: "bg-[#3B82F6]",
    metric: "Clicks increased by 53%",
    href: "/case-studies/education",
  },
  {
    title: "Real Estate",
    img: realestateImg,
    tag: "SEO",
    clientLabel: "Real Estate",
    clientChipBg: "bg-[#F97316]",
    metric: "Clicks increased by 52%",
    href: "/case-studies/real-estate",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-12">
        {/* Title */}
        <h2 className="text-center text-[22px] md:text-[24px] font-semibold text-neutral-900">
          Explore Our <span className="text-[#ff6a00]">Case studies</span>
        </h2>

        {/* ✅ Big rounded white container (like screenshot) */}
        <div className="mt-8 ">
          {/* Cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.href}
                className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-4"
              >
                {/* ✅ Image with padding + rounded corners */}
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl bg-[#f6f6f6]">
                    <Image
                      src={cs.img}
                      alt={cs.title}
                      className="h-[340px] w-full object-contain"
                      priority
                    />
                  </div>

                  {/* Purple pill */}
              
                </div>

                {/* ✅ Center aligned body */}
                <div className="pt-5 text-center">
                  {/* Client row */}
                  <div className="flex items-center justify-center gap-2 text-[13px] text-neutral-600">
                    <span className="font-bold text-[18px]  text-[#000000] "  >Client :</span>
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-white text-[15px] font-semibold    ${cs.clientChipBg}`}
                    >
                      {cs.clientLabel}
                    </span>
                  </div>

                  {/* Metric row */}
                  <div className="mt-3 flex items-center justify-center gap-2 text-[16px] text-[#A6A6A6] font-semibold ">
                    <span className="text-[#ff6a00]">↗</span>
                    <span>{cs.metric}</span>
                  </div>

                  {/* ✅ Button exactly like screenshot (center + light fill) */}
                  <div className="mt-5 flex justify-center">
                    <Link
                      href={cs.href}
                      className="inline-flex items-center justify-center rounded-full border border-[#ff6a00] bg-[#f7f7f7] px-8 py-[6px] text-[13px] font-medium text-neutral-700 hover:bg-[#ff6a00] hover:text-white transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}