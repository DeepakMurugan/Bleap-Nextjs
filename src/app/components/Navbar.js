"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../assets/bleap-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F5F5F7] sticky top-0 z-50">
      <div className="container flex items-center justify-around py-3">
        
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Bleap Logo" width={120} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-[#666666] font-normal">
          <Link className="hover:text-[#FF6E00] transition-colors" href="/">Home</Link>
          <Link className="hover:text-[#FF6E00] transition-colors" href="/about">About Us</Link>
          <Link className="hover:text-[#FF6E00] transition-colors" href="/services">Services</Link>
          <Link className="hover:text-[#FF6E00] transition-colors" href="/web">Web</Link>
          <Link className="hover:text-[#FF6E00] transition-colors" href="/careers">Careers</Link>
          <Link className="hover:text-[#FF6E00] transition-colors" href="https://bleap.in/blog" target="_blank">Blog</Link>
        </nav>

        {/* Contact Button */}
     <div className="hidden lg:block">
  <Link
    href="/contact"
    className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white"
  >
    Contact Us →
  </Link>
</div>

            
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 p-6 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/web">web</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}