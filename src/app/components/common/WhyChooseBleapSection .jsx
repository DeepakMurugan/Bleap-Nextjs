"use client";

import { useState } from "react";
import Image from "next/image";

import topRightImg from "../../assets/case-studies/cc1.png";
import bottomLeftImg from "../../assets/case-studies/cc2.png";

const valuesData = [
  {
    title: "#Passion",
    description:
      "We love what we do, and it shows in our work. Passion drives us to create bold ideas, push boundaries, and bring energy to digital work.",
  },
  {
    title: "#Thinking",
    description:
      "Strategic thinking is at the core of everything we do. We combine insight, data, and creativity to craft marketing strategies that move brands forward.",
  },
  {
    title: "#Storytelling",
    description:
      "Powerful brands are built on powerful stories. We shape narratives that resonate deeply and connect your audience with purpose.",
  },
  {
    title: "#Innovation",
    description:
      "The digital landscape evolves every day. Our approach embraces innovation, technique, and creativity to unlock new opportunities for growth.",
  },
  {
    title: "#Result",
    description:
      "We measure success by impact. Our focus is always on simple, meaningful results that drive real business growth.",
  },
];

export default function WhyChooseBleapSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#ffffff]  md:pb-20">
      <div className="max-w-[1280px] mx-auto px-4  pb-5  sm:px-6 lg:px-8 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] leading-[1.2] font-medium text-[#4B4B4B] max-w-[650px]">
              We Provide Expert Services in{" "}
              <span className="text-[#FF6A17]">Digital Marketing</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#666666] max-w-[620px]">
              We are a highly result-driven digital marketing consultant in
              Chennai dedicated to building truly user-centric for a resounding
              success. As one of the top digital marketing agencies in Chennai,
              our team balances all of the big picture. We are a group of
              digital marketing experts that take our client business extremely
              seriously as we do and work tirelessly to provide clear,
              surprising, and exceptional results.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[360px] h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden">
              <Image
                src={topRightImg}
                alt="Digital marketing team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle Hover Section */}
       {/* Middle Hover Section */}
<div className="mt-14 md:mt-16">
  <div className="container mx-auto">
    <div className="border-t border-[#F0B18C]">
      {valuesData.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.title}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className="border-b border-[#F0B18C] cursor-pointer"
          >
            <div
              className={`rounded-[6px] px-4 md:px-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "bg-[#FF6A17] py-5 md:py-5"
                  : "bg-transparent py-5 md:py-5"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 items-start">
                <h3
                  className={`font-medium transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "text-white text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1]"
                      : "text-[#FF6A17] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1]"
                  }`}
                >
                  {item.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "max-h-[200px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }`}
                >
                  <p className="text-white text-[16px] sm:text-[17px] leading-[1.3] pt-1 md:pt-0 max-w-[640px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

        {/* Bottom Section */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-[420px] h-[230px] sm:h-[260px] md:h-[280px] rounded-[10px] overflow-hidden">
              <Image
                src={bottomLeftImg}
                alt="Why choose Bleap"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#4B4B4B] leading-[1.2]">
              Why Choose <span className="text-[#FF6A17]">Bleap Digital</span>
            </h3>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#666666]">
            We are a team of experienced in digital marketing, business-minded individuals who understand that your business’s ultimate objective is to drive sales while establishing and growing your brand.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#666666]">
              Digital marketing has taken the world by storm and B2B agencies are the ones who are profiting from this trend the most. B2B agencies in Chennai have gained a lot of popularity from their clients and has played a vital role in helping their clients achieve success. They have helped their clients in improving online presence, increase sales and in making it easier to reach out to new customers. These agencies have achieved great heights and have been instrumental in boosting the profit of their client’s business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}