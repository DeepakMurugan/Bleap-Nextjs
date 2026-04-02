"use client";

export default function FaqSection({ items = [] }) {
  return (
    <section className="bg-[#F5F5F7]">
      {/* <div className="mx-auto max-w-[900px] px-6 lg:px-10 py-10"> */}
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-10 md:py-10 lg:py-12">

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
                <span className="text-neutral-500 text-[14px] font-medium pt-[2px]">
                  {idx + 1}.
                </span>

                {/* Question */}
                <span className="flex-1 text-[13px] md:text-[15px] font-semibold text-neutral-800 leading-5">
                  {faq.q}
                </span>

              </div>

              {/* Answer always visible */}
              <div className="px-5 pb-4">
                <div className="pl-5 text-[12px] md:text-[14px] text-neutral-600 leading-5">
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