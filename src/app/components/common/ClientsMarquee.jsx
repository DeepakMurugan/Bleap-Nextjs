"use client";

import Image from "next/image";

// ✅ import logos in JS (exactly what you asked)
import meridian from "../../assets/clients/meridian.png";
import petromin from "../../assets/clients/petromin.png";
// import foundtrip from "./assets/clients/foundtrip.png";
import rane from "../../assets/clients/rane.png";
import kris from "../../assets/clients/kris.png";

// Add more imports...

const logos = [
  { src: meridian, alt: "Meridian Hospital" },
  { src: petromin, alt: "Petromin Express" },
//   { src: foundtrip, alt: "Foundtrip" },
  { src: rane, alt: "Rane" },
  { src: kris, alt: "KRIS" },
];

// Duplicate for seamless loop feel
const looped = [...logos, ...logos];

export default function ClientsMarquee() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-10">
        {/* Title */}
        <h2 className="text-center text-[28px] font-semibold text-neutral-900">
          Our <span className="text-[#ff6a00]">Clients</span>
        </h2>

        {/* Marquee wrapper */}
        <div className="mt-6 relative overflow-hidden">
          {/* Gradient fade edges (premium) */}
          <div className="" />
          <div className="" />

          {/* Scrolling track */}
          <div className="marquee flex items-center gap-5">
            {looped.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                className="flex h-[100px] min-w-[200px] items-center justify-center  "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-auto w-[180px] object-cover"
                  priority={idx < 5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        .marquee {
          width: max-content;
          animation: scroll 18s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 16s;
          }
        }
      `}</style>
    </section>
  );
}