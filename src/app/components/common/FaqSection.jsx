"use client";

import { useState } from "react";

export default function FaqSection({
  title = "Frequently Asked Questions",
  items = [],
}) {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10 py-12">
        {/* Title */}
        <h2 className="text-center text-[20px] md:text-[22px] font-semibold text-neutral-900">
          {title}
        </h2>

        {/* FAQ container */}
        <div className="mt-8 space-y-3">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="rounded-xl bg-white border border-neutral-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 flex gap-3 items-start"
                >
                  {/* Number */}
                  <span className="text-neutral-500 text-[13px]  font-medium pt-[2px]">
                    {idx + 1}.
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-[13px] md:text-[14px] font-semibold text-neutral-800 leading-5">
                    {faq.q}
                  </span>

                  {/* Simple indicator */}
                  <span className="text-neutral-400 text-[18px] leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer (animated height) */}
                <div
                  className={`px-5 pb-1 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-5 pb-2 text-[12px] md:text-[13px] text-neutral-600 leading-5">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}