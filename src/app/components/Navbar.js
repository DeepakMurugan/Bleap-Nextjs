"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/bleap-logo.png";

const servicesMenu = [
  { label: "Web", href: "/web" },
  { label: "Social", href: "/social" },
  { label: "Graphic", href: "/graphic" },
  { label: "Web Design", href: "/web-design" },
  { label: "SEO", href: "/seo" },
   { label: "Email Marketing", href: "/emailmarketint" },
  { label: "Video Marketing", href: "/video" },
  { label: "PPC", href: "/ppc" },
 
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F2F2F4] border-b border-black/10">
      <div className="mx-auto flex h-[92px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Bleap Logo"
            width={150}
            height={55}
            priority
            className="h-auto w-[100px] sm:w-[120px] lg:w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-12 text-[18px] font-normal text-[#6D6D6D]">
          <Link
            href="/"
            className="text-[#FF6A00] transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-[#FF6A00]"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 transition-colors duration-300 hover:text-[#FF6A00]">
              <span>Services</span>
              <ChevronDown size={18} className="mt-[2px]" />
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 mt-4 w-[230px] -translate-x-1/2 rounded-2xl border border-[#E8E8E8] bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="flex flex-col">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-[16px] text-[#666666] transition-all duration-200 hover:bg-[#FFF4EC] hover:text-[#FF6A00]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/team"
            className="transition-colors duration-300 hover:text-[#FF6A00]"
          >
            Team
          </Link>

          <Link
            href="/careers"
            className="transition-colors duration-300 hover:text-[#FF6A00]"
          >
            Careers
          </Link>

          <Link
            href="https://bleap.in/blog"
            target="_blank"
            className="transition-colors duration-300 hover:text-[#FF6A00]"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 rounded-full border border-[#FF6A00] px-7 py-3 text-[18px] font-normal text-[#FF6A00] transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
          >
            <span>Contact Us</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6A00] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#FF6A00]">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex items-center justify-center text-[#444] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[700px] border-t border-black/10" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5 sm:px-8">
          <div className="flex flex-col text-[16px] text-[#555555]">
            <Link
              href="/"
              className="border-b border-[#EFEFEF] py-4 text-[#FF6A00]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="border-b border-[#EFEFEF] py-4"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-[#EFEFEF] py-4">
              <button
                className="flex w-full items-center justify-between"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-[400px] pt-3" : "max-h-0"
                }`}
              >
                <div className="flex flex-col rounded-2xl bg-[#F8F8F8] p-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-[#666666] hover:bg-white hover:text-[#FF6A00]"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/team"
              className="border-b border-[#EFEFEF] py-4"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>

            <Link
              href="/careers"
              className="border-b border-[#EFEFEF] py-4"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>

            <Link
              href="https://bleap.in/blog"
              target="_blank"
              className="border-b border-[#EFEFEF] py-4"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center gap-3 rounded-full border border-[#FF6A00] px-6 py-3 text-center text-[16px] text-[#FF6A00] transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}