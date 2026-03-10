import Image from "next/image";
import devImg from "../../assets/sections/wds.png";

export default function whychoose() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-15 py-14">
        {/* ✅ Mobile: image on top, Desktop: text left + image right */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* ✅ Image first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-neutral-200">
              <Image
                src={devImg}
                alt="Website development"
                className="h-[220px] w-full object-cover md:h-[260px] lg:h-[280px]"
                priority
              />
            </div>
          </div>

          {/* ✅ Text section */}
          <div className="order-2 lg:order-1">
            <p className="text-[16px] text-neutral-700  font-bold ">Why Choose Us?</p>

            <h2 className="mt-3 text-[26px] md:text-[30px] font-semibold leading-snug text-neutral-900">
              Our{" "}
              <span className="text-[#ff6a00]">
                Website Design Company in Chennai
              </span>
            </h2>

            <p className="mt-4 max-w-[520px] text-[13px] md:text-[14px] leading-6 text-neutral-600">
Our design process focuses on creating intuitive, visually refined websites that feel effortless to navigate while supporting usability, accessibility, and conversion goals. Every design decision is intentional, ensuring your website not only looks polished but also performs effectively.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}