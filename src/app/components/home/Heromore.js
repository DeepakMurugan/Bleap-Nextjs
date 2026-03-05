"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

// ✅ Replace with your own images
import img1 from "../../assets/hero/award1.png";
import img2 from "../../assets/hero/award2.png";
import img3 from "../../assets/hero/award3.png";
import img4 from "../../assets/hero/award3.png";
import img5 from "../../assets/hero/award3.png";
import img6 from "../../assets/hero/award3.png";

export default function Heromore() {
  const heroRef = useRef(null);
  const [parallax, setParallax] = useState(0);

  // ===== Typewriter words (orange part) =====
  const words = useMemo(() => ["Traffic", "Leads", "Sales", "Growth"], []);
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);


  useEffect(() => {
    const full = words[wordIndex];
    const speed = deleting ? 40 : 70;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, typed.length + 1);
        setTyped(next);
        if (next === full) setTimeout(() => setDeleting(true), 900);
      } else {
        const next = full.slice(0, typed.length - 1);
        setTyped(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [typed, deleting, wordIndex, words]);

  // ===== Parallax on scroll (left scroll -> right opposite) =====
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const distance = r.top + r.height / 2 - center; // negative when above center
      // clamp
      const val = Math.max(-220, Math.min(220, distance));
      setParallax(val);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imagesColA = [img1, img2, img3];
  const imagesColB = [img4, img5, img6];

  return (
    <section ref={heroRef} className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div>
            <h1 className="text-[44px] md:text-[56px] font-light leading-[1.05] text-neutral-900">
              More{" "}
              <span className="text-[#ff6a00] font-semibold">
                {typed}
                <span className="ml-1 inline-block w-[10px] translate-y-[2px] animate-pulse text-[#ff6a00]">
                  |
                </span>
              </span>
            </h1>

            <h2 className="mt-4 text-[22px] md:text-[26px] font-medium text-neutral-900">
              Award Winning Digital Marketing <br className="hidden md:block" />
              In Chennai
            </h2>

            <p className="mt-3 text-[14px] md:text-[15px] leading-7 text-neutral-600 max-w-[520px]">
              We connect the dots, you enjoy the growth.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-[520px]">
              <Stat n="10+" label="Years of Expertise" />
              <Stat n="170+" label="Happy Clients" />
              <Stat n="120+" label="Revenue Generated for our clients" />
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#ff6a00] px-6 py-2.5 text-[13px] font-semibold text-[#ff6a00]
                           hover:bg-[#ff6a00] hover:text-white transition"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            {/* Desktop/Tablet: scrolling columns */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {/* Column A (scroll UP) */}
              <div className="hero-col">
                <div
                  className="hero-track hero-up"
                  style={{ transform: `translateY(${parallax * 0.35}px)` }}
                >
                  {[...imagesColA, ...imagesColA].map((im, i) => (
                    <CardImage key={`a-${i}`} src={im} />
                  ))}
                </div>
              </div>

              {/* Column B (scroll DOWN) */}
              <div className="hero-col">
                <div
                  className="hero-track hero-down"
                  style={{ transform: `translateY(${-parallax * 0.35}px)` }}
                >
                  {[...imagesColB, ...imagesColB].map((im, i) => (
                    <CardImage key={`b-${i}`} src={im} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: simple grid (no heavy animation) */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {[...imagesColA, ...imagesColB].slice(0, 4).map((im, i) => (
                <CardImage key={`m-${i}`} src={im} />
              ))}
            </div>

            {/* Fade edges like screenshot */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:block">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#F5F5F7] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F5F5F7] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for smooth continuous scroll */}
      <style jsx>{`
        .hero-col {
          height: 360px;
          overflow: hidden;
          border-radius: 18px;
        }
        .hero-track {
          display: grid;
          gap: 14px;
          will-change: transform;
        }
        .hero-up {
          animation: heroUp 12s linear infinite;
        }
        .hero-down {
          animation: heroDown 12s linear infinite;
        }
        @keyframes heroUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes heroDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-up,
          .hero-down {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div className="relative">
      <p className="text-[#ff6a00] text-[22px] font-semibold">{n}</p>
      <p className="mt-1 text-[12px] text-neutral-700 leading-5">{label}</p>
    </div>
  );
}

function CardImage({ src }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-neutral-200 overflow-hidden">
      <Image src={src} alt="Hero item" className="w-full h-[150px] object-cover" />
    </div>
  );
}