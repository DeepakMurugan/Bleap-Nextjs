"use client";

export default function FaqSection({ items = [] }) {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10 pb-20">

        <h2 className="text-center text-[25px] md:text-[28px] font-semibold text-neutral-900">
          Frequently <span className="text-[#ff6a00]"> Asked Questions </span>
        </h2>

        <div className="mt-8 space-y-3">
          {items.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-xl bg-white border border-neutral-200 shadow-sm"
            >
              <div className="px-5 py-4 flex gap-3 items-start">
                
                {/* Number */}
                <span className="text-neutral-500 text-[13px] font-medium pt-[2px]">
                  {idx + 1}.
                </span>

                {/* Question */}
                <span className="flex-1 text-[13px] md:text-[14px] font-semibold text-neutral-800 leading-5">
                  {faq.q}
                </span>

              </div>

              {/* Answer always visible */}
              <div className="px-5 pb-4">
                <div className="pl-5 text-[12px] md:text-[13px] text-neutral-600 leading-5">
                  {faq.a}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}