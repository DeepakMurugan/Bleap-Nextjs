"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ✅ Replace with your image
import centerImg from "../../assets/sections/sectors.png";

export default function CenterSector() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F5F7] pt-10 ">
      <div className="mx-auto container px-6 lg:px-10">
        <div
          ref={ref}
          className={` flex justify-center transition-all duration-500 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src={centerImg}
            alt="Section Image"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
}