"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ArrowRight, Menu, X, ChevronRight } from "lucide-react";



import award1 from "../../assets/hero/award1.png";
import award2 from "../../assets/hero/aw2.png";
import award3 from "../../assets/hero/aw1.png";
import award4 from "../../assets/hero/aw3.png";
import award5 from "../../assets/hero/aw4.png";
import award6 from "../../assets/hero/a3.png";

export default function HeroMore() {
  const words = useMemo(() => ["Leads", "Traffic", "Sales", "Growth"], []);
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWi((v) => (v + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, [words.length]);

  const colA = [award1, award2, award3];
  const colB = [award4, award5, award6];

  return (
    <section className="bg-[#F5F5F7]">
      {/* ✅ bigger overall height + tighter right side */}
      {/* <div className="mx-auto container px-6 lg:px-10 py-14"> */}
        <div className="mx-auto container px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[54px] md:text-[70px] font-light leading-[1.02] text-neutral-900">
              More{" "}
              <span className="text-[#ff6a00] font-semibold">{words[wi]}</span>
            </h1>

            <h2 className="mt-4 text-[25px] md:text-[27px] font-medium text-neutral-900 leading-snug">
              Award Winning Digital Marketing <br className="hidden md:block" />
              In Chennai
            </h2>

            <p className="mt-3 text-[13px] md:text-[18px] leading-6 text-[#000000] max-w-[520px]">
              We connect the dots, you enjoy the growth.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-7 max-w-[520px] ">
              <Stat n="10+" label="Years of Expertise" />
              <Stat n="170+" label="Happy Clients" />
              <Stat n="120Cr+" label="Revenue Generated for our clients" />
            </div>

           
            {/* 🔥 Premium CTA Button */}
<div className="mt-6">
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-1 border-[#ff6a00] px-5 py-2 text-lg font-normal text-[#ff6a00] transition-all duration-300"
  >
    {/* Text */}
    <span className="relative z-8 flex items-center gap-3 transition-all duration-300 group-hover:text-white">
      Get a Quote
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6a00] text-white text-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#ff6a00] group-hover:translate-x-1">
                  <ArrowRight size={18} />

      </span>
    </span>

    {/* Hover Fill Animation */}
    <span className="absolute inset-0 bg-[#ff6a00] translate-x-[-100%] transition-transform duration-200 ease-out group-hover:translate-x-0"></span>
  </a>
</div>




          </div>


          <div className="relative hidden lg:block">
            <div className="h-[450px] md:h-[480px] lg:h-[480px] lg:w-[500px] overflow-hidden object-contain ">
              <div className="grid grid-cols-2 gap-5  object-contain">

                {/* Column A: auto scroll up, pause on hover */}
                <AutoScrollCol direction="up" images={colA} />

                {/* Column B: auto scroll down, pause on hover */}
                <AutoScrollCol direction="down" images={colB} />
              </div>
            </div>

            {/* fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#F5F5F7] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F5F5F7] to-transparent" />
          </div>

          {/* ✅ Mobile/Tablet: horizontal scroll under text */}
          <div className="lg:hidden">
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
         {[award1, award2, award3, award4, award5, award6].map((im, i) => (
      <div
        key={i}
        className="snap-start flex-shrink-0 w-[75%] sm:w-[55%] md:w-[40%] rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm"
      >
        <Image
          src={im}
          alt="hero"
          className="w-full h-full  object-contain"
          
        />
      </div>
    ))}

            </div>
          </div>
        </div>
      </div>

      {/* ✅ hide scrollbar (mobile horizontal) */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <p className="text-[#ff6a00] text-[25px] font-semibold">{n}</p>
      <p className="mt-1 text-[16px] text-[#000000] leading-5">{label}</p>
    </div>
  );
}

function AutoScrollCol({ direction = "up", images }) {
  // duplicate for infinite loop
  const list = [...images, ...images];

  return (
    <div className="h-full overflow-hidden rounded-2xl">
      <div
        className={`grid gap-5 will-change-transform ${
          direction === "up" ? "auto-up" : "auto-down"
        } hover:[animation-play-state:paused]`}
      >
        {list.map((src, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm"
          >
            <Image
              src={src}
              alt="award"
              className="w-full h-[200px] lg:h-full object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .auto-up {
          animation: up 10s linear infinite;
        }
        .auto-down {
          animation: down 10s linear infinite;
        }
        @keyframes up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .auto-up,
          .auto-down {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}