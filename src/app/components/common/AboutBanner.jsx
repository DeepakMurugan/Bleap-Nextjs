import Image from "next/image";
import Link from "next/link";

// ✅ replace with your real image import
import aboutImg from "../../assets/hero/deep.png";

export default function AboutBanner() {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14 md:py-16">
        {/* Title */}
        <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-[#ff6a00]">
          About Us
        </h2>

        {/* Text */}
        <div className="mx-auto mt-1 max-w-[1100px] text-center">
              <p className="pt-2  pb-3  text-[20px] md:text-[25px] leading-4 md:leading-8 text-[#000000] font-semibold">
          Our Digital Marketing Company In Chennai 
          </p>

          <p className="text-[14px] md:text-[17px] leading-7 md:leading-8 text-neutral-400">
          Every business is unique, and so are its challenges. At Bleap, a leading digital
marketing company in Chennai, we don’t just aim for visibility; we aim for impact. Our campaigns are designed to connect with your audience in
authentic and memorable ways. Whether it’s through powerful SEO, targeted ad campaigns, or content that inspires trust, we focus on delivering results that strengthen your brand and drive business growth.
    </p>
        <p className="text-[14px] md:text-[17px] leading-7 md:leading-8 text-neutral-400">
        When you grow, we grow, and that’s the partnership we believe in.   </p>

        
        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[860px] overflow-hidden rounded-none bg-black">
            <Image
              src={aboutImg}
              alt="About Bleap"
              className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
              priority
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="group relative inline-flex items-center justify-center overflow-hidden
                       rounded-md border border-[#ff6a00] px-10 py-4
                       text-[16px] font-medium text-black"
          >
            {/* hover fill */}
            <span className="absolute inset-0 bg-[#ff6a00] translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10">Know More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}