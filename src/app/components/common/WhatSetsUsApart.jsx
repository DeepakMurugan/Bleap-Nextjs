import Image from "next/image";

/*
props:
- title
- highlight
- centerImage
- centerAlt
- items: [
    { text: "10+ Years of SEO Experience", icon: icon1 },
    { text: "20k+ Keywords Ranked", icon: icon2 },
    { text: "100% transparent reporting & execution", icon: icon3 },
    { text: "In-depth audience & competitor research", icon: icon4 },
  ]
*/

export default function WhatSetsUsApart({
  title = "What",
  highlight = "Sets Us Apart",
  centerImage,
  centerAlt = "Center Icon",
  items = [],
}) {
  const safeItems = items.slice(0, 4);

  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-15 py-12">
        {/* Title */}
        <h2 className="text-center text-[20px] md:text-[28px] font-semibold text-neutral-900">
          {title} <span className="text-[#ff6a00]">{highlight}</span>
        </h2>

        {/* ================= Desktop ================= */}
        <div className="relative mt-5 hidden lg:flex min-h-[400px] items-center justify-center">
          {/* outer text cards */}
          {safeItems[0] && (
            <InfoCard className="absolute left-0 top-0 w-[250px]" text={safeItems[0].text} />
          )}

          {safeItems[1] && (
            <InfoCard className="absolute right-0 top-12 w-[250px]" text={safeItems[1].text} />
          )}

          {safeItems[2] && (
            <InfoCard className="absolute right-0 bottom-2 w-[250px]" text={safeItems[2].text} />
          )}

          {safeItems[3] && (
            <InfoCard className="absolute left-0 bottom-10 w-[250px]" text={safeItems[3].text} />
          )}

          {/* circle system */}
          <div className="relative flex h-[320px] w-[320px] items-center justify-center bg-white rounded-full border border-[#dedede] ">
            {/* outer ring */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-[#dedede]" />

            {/* dotted ring */}
            <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-[#ff6a00]" />

            {/* inner ring */}
            <div className="absolute h-[180px] w-[180px] rounded-full border border-[#f0c9ad]" />

            {/* center card */}
            <div className="relative z-10 flex h-[86px] w-[86px]  p-2 items-center justify-center rounded-xl border border-[#f0c9ad] bg-white shadow-sm">
              {centerImage ? (
                <Image
                  src={centerImage}
                  alt={centerAlt}
                  className="h-full w-ful object-contain"
                />
              ) : null}
            </div>

            {/* top icon */}
            {safeItems[0]?.icon && (
              <div className="absolute top-[18px] left-1/2 -translate-x-1/2 rounded-full bg-[#F5F5F7] p-0">
                <Image
                  src={safeItems[0].icon}
                  alt=""
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            )}

            {/* right icon */}
            {safeItems[1]?.icon && (
              <div className="absolute right-[18px] top-1/2 -translate-y-1/2 rounded-full bg-[#F5F5F7] p-0">
                <Image
                  src={safeItems[1].icon}
                  alt=""
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            )}

            {/* bottom icon */}
            {safeItems[2]?.icon && (
              <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 rounded-full bg-[#F5F5F7] p-0">
                <Image
                  src={safeItems[2].icon}
                  alt=""
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            )}

            {/* left icon */}
            {safeItems[3]?.icon && (
              <div className="absolute left-[18px] top-1/2 -translate-y-1/2 rounded-full bg-[#F5F5F7] p-0">
                <Image
                  src={safeItems[3].icon}
                  alt=""
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* ================= Mobile / Tablet ================= */}
        <div className="mt-8 lg:hidden">
          {/* center image first */}
          <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-xl border border-[#f0c9ad] bg-white shadow-sm">
            {centerImage ? (
              <Image
                src={centerImage}
                alt={centerAlt}
                className="h-[40px] w-[40px] object-contain"
              />
            ) : null}
          </div>

          {/* cards one by one */}
          <div className="mt-6 space-y-4">
            {safeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] bg-white px-4 py-4 shadow-sm"
              >
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt=""
                    className="h-[22px] w-[22px] shrink-0 object-contain"
                  />
                ) : null}
                <p className="text-[13px] md:text-[14px] text-[#6f6f6f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ text, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-[#e8e8e8] bg-white px-5 py-4 text-[16px] text-[#666666] shadow-sm ${className}`}
    >
      {text}
    </div>
  );
}