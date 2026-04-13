"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // ❌ Disable on homepage
    if (pathname === "/") return;

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      smoothTouch: true,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]);

  return children;
}