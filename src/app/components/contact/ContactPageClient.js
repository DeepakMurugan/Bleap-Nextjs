"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Phone } from "lucide-react";

import iconX from "../../assets/footer/fx.png";
import iconFacebook from "../../assets/footer/ff.png";
import iconInstagram from "../../assets/footer/fi.png";
import iconLinkedin from "../../assets/footer/flin.png";
import iconYoutube from "../../assets/footer/fu.png";

export default function ContactPageClient() {
  const offices = [
    {
      city: "Bangalore",
      company: "Hustlehub Tech Park,",
      address: [
        "H210 36/5 Somasundarapalya Main Road,",
        "Adj 27th Main Road, Haralukunte Village,",
        "Sector 2, HSR Layout, Bengaluru – 560 102,",
        "Karnataka, India",
      ],
      email: "info@bleapdigital.com",
      phone: "+91 9382809420",
    },
    {
      city: "Chennai",
      company: "Teynampet",
      address: [
        "46/97, Poes Main Road, Teynampet,",
        "Chennai – 600 018,",
        "Tamil Nadu, India",
      ],
      email: "info@bleap.in",
      phone: "+91 9382809420",
    },
    {
      city: "Mumbai",
      company: "9, Prem Kiran,",
      address: [
        "Plot 195 Sher-e-Punjab CHS, Mahakali Caves",
        " Rd Andheri East, Mumbai - 400 093,",
        "Maharashtra, India,",
      ],
      email: "info@bleapdigital.com",
      phone: "+91 9382809420",
    },
    {
      city: "Pune",
      company: "Pune",
      address: [
        "B2/7, Tridal Nagar",
        "Shastri Nagar, Yerwada, Pune - 411 006,",
        "Maharashtra, India",
      ],
      email: "info@bleapdigital.com",
      phone: "+91 93828 09420",
    },
    {
      city: "Noida",
      company: "Anugreh",
      address: [
        "A 24 Sector 53 Noida Gautam Budh Nagar,",
        "Noida - 201 307 Uttar Pradesh, India",
      ],
      email: "info@bleapdigital.com",
      phone: "+91 93828 09420",
    },
    {
      city: "USA",
      company: "USA",
      address: [
        "9123",
        "Bottlebrush lane, Irving, TX 75063, United States",
      ],
      email: "info@bleapdigital.com",
      phone: "+91 93828 09420",
    },
  ];

  const socialIcons = [
    { href: "https://x.com/bleapdigital", label: "X", icon: iconX },
    { href: "https://www.facebook.com/bleapdigital", label: "Facebook", icon: iconFacebook },
    { href: "https://www.instagram.com/bleapdigital", label: "Instagram", icon: iconInstagram },
    { href: "https://www.linkedin.com/company/bleapdigital", label: "LinkedIn", icon: iconLinkedin },
    { href: "https://www.youtube.com/@bleapdigital", label: "YouTube", icon: iconYoutube },
  ];

  useEffect(() => {
    const createHubspotForm = () => {
      if (
        typeof window !== "undefined" &&
        window.hbspt &&
        document.getElementById("hubspot-form") &&
        !document.querySelector("#hubspot-form iframe")
      ) {
        window.hbspt.forms.create({
          portalId: "19955746",
          formId: "cded1f5c-6c17-48be-a8fd-f0d8085c69c6",
          region: "na1",
          target: "#hubspot-form",
        });
      }
    };

    const interval = setInterval(() => {
      if (window.hbspt) {
        createHubspotForm();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFFFFF] min-h-screen py-10 sm:py-10 md:py-14 lg:py-12">
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <h1 className="text-center text-[#f97316] text-[30px] sm:text-[40px] lg:text-[50px] font-medium leading-none">
          Contact <span className="text-[#4b4b4b] font-normal">us</span>
        </h1>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
          <div className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[260px]">
            <h2 className="text-[#f97316] text-[24px] sm:text-[28px] font-medium leading-[1.2]">
              We’d love to hear from you
            </h2>

            <div className="mt-8 space-y-6 text-[#6b6b6b]">
              <div className="flex items-start gap-3">
                <span className="mt-0 text-[#f97316] text-lg">✉</span>
                <a
                  href="mailto:info@bleap.in"
                  className="text-[16px] sm:text-[20px] break-all hover:text-[#f97316] transition-colors"
                >
                  info@bleap.in
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#f97316]">
                  <Phone size={17} strokeWidth={2} />
                </span>

                <div className="space-y-2 text-[14px] sm:text-[16px]">
                  <a
                    href="tel:+919382809420"
                    className="block hover:text-[#f97316] transition-colors"
                  >
                    +91 93828 09420
                  </a>
                  <a
                    href="tel:+914448545327"
                    className="block hover:text-[#f97316] transition-colors"
                  >
                    +91 44 4854 5327
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[#f97316] text-[18px] sm:text-[16px] font-medium">
                  Follow Us On
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                  {socialIcons.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={30}
                        height={30}
                        className="h-8 w-8 sm:h-6 sm:w-6 md:h-6 md:w-6 object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[640px]">
            <div className="rounded-[10px] border border-[#dddddd] bg-transparent p-5 sm:p-6 lg:p-7">
              <h3 className="text-[#f97316] text-[22px] sm:text-[22px] font-medium">
                Business Enquiries
              </h3>

              <div className="mt-5">
                <div id="hubspot-form" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
          {offices.map((office, index) => (
            <div key={index}>
              <h4 className="text-[#f97316] text-[18px] sm:text-[22px] font-medium">
                {office.city}
              </h4>

              <div className="mt-3 text-[#666666] text-[15px] sm:text-[16px] leading-[1.8]">
                <p className="font-medium">{office.company}</p>

                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}

                <div className="mt-3 space-y-2">
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-start gap-2 break-all hover:text-[#f97316] transition-colors"
                  >
                    <span className="text-[#f97316] text-[16px] mt-[1px]">✉</span>
                    <span>{office.email}</span>
                  </a>

                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-2 hover:text-[#f97316] transition-colors"
                  >
                    <span className="mt-1 text-[#f97316]">
                      <Phone size={17} strokeWidth={2} />
                    </span>

                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}