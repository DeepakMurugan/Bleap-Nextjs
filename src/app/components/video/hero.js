import Image from "next/image";
import devImg from "../../assets/sections/vv.png";

export default function hero() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-16">
        
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* ✅ Image (mobile top, desktop right) */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={devImg}
                alt="Website development"
                className="w-full h-[240px] md:h-[280px] lg:h-[320px] object-cover"
                priority
              />
            </div>
          </div>

          {/* ✅ Text Section */}
          <div className="order-2 lg:order-1">
            
            {/* Top small tagline */}
            <p className="text-[18px] font-medium text-[#000000]">
Frames into stories! Views into attention!           </p>

            {/* Main heading */}
            <h1 className="mt-3 text-[28px] md:text-[30px] lg:text-[30px] font-semibold leading-tight text-neutral-900">
              Best{" "}
              <span className="text-[#ff6a00]">
         Video Editing Services
              </span>{" "}
               <br className="hidden md:block" />
              in Chennai
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[16px] md:text-[15px] leading-7 text-neutral-600">
          We help brands transform raw footage into polished, engaging videos that communicate clearly and leave a lasting impact. Our editing focuses on flow, clarity, and storytelling, so every second counts.
       </p>

            {/* ✅ Gradient Button */}
         <div className="mt-6">
  <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#FF3D31] to-[#FF00B2]">
    <a
      href="/contact"
      className="inline-flex items-center justify-center rounded-full px-6 py-2 text-[14px] font-semibold text-black bg-white transition-all duration-300"
    >
      Get a Quote
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}                                               