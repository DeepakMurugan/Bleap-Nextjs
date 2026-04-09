import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

// ✅ Replace these with your real assets (as you said you'll add)
import bleapLogo from "../assets/brand/bleap-footer-logo.png";

import iconX from "../assets/footer/fx.png";
import iconFacebook from "../assets/footer/ff.png";
import iconInstagram from "../assets/footer/fi.png";
import iconLinkedin from "../assets/footer/flin.png";
import iconYoutube from "../assets/footer/fu.png";

// in-house product logos
import productVaru from "../assets/footer/varu-woods.png";
import productErp4 from "../assets/footer/erp4dentist.png";
import productOgv from "../assets/footer/ogv.png";

// partners
import partnerGoogle from "../assets/footer/google.png";
import partnerMeta from "../assets/footer/meta.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-[#FFFFFF] overflow-hidden">
      <div className="mx-auto container px-4 sm:px-6 md:px-8 lg:px-10 pt-10 sm:pt-12 md:pt-14 pb-6 sm:pb-8">
        {/* =========================
            TOP BLOCK (Logo + Top row)
        ========================== */}
        <div className="grid gap-8 sm:gap-9 lg:gap-10 lg:grid-cols-12 items-start">
          {/* Left: Logo + Description */}
          <div className="lg:col-span-4">
            <Image
              src={bleapLogo}
              alt="Bleap"
              width={180}
              height={64}
              className="w-[140px] sm:w-[155px] md:w-[170px] lg:w-[180px] h-auto"
              priority
            />

            <p className="mt-4 sm:mt-5 md:mt-6 text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#FFFFFF] max-w-[520px]">
              Bleap Digital is a results-driven digital marketing agency helping brands grow through design, technology, and data-driven strategies
            </p>
          </div>

          {/* Middle: In-house products */}
          <div className="lg:col-span-4">
            <h3 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
              Our Marquee In-House Products
            </h3>

            {/* <div className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-3 sm:gap-4 flex-wrap">
              <Image
                src={productVaru}
                alt="Varu Woods"
                width={95}
                height={44}
                className="h-auto w-[95px] sm:w-[105px] md:w-[120px]"
              />
              <Image
                src={productErp4}
                alt="ERP4 Dentist"
                width={95}
                height={44}
                className="h-auto w-[95px] sm:w-[105px] md:w-[120px]"
              />
              <Image
                src={productOgv}
                alt="OGV"
                width={90}
                height={44}
                className="h-auto w-[72px] sm:w-[80px] md:w-[90px]"
              />
            </div> */}
            {/* import Link from "next/link";
import Image from "next/image"; */}

<div className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-3 sm:gap-4 flex-wrap">
  
  <Link href="https://varuwoods.com" target="_blank">
    <Image
      src={productVaru}
      alt="Varu Woods"
      width={95}
      height={44}
      className="h-auto w-[95px] sm:w-[105px] md:w-[120px] cursor-pointer"
    />
  </Link>

  <Link href="https://erp4dentist.com" target="_blank">
    <Image
      src={productErp4}
      alt="ERP4 Dentist"
      width={95}
      height={44}
      className="h-auto w-[95px] sm:w-[105px] md:w-[120px] cursor-pointer"
    />
  </Link>

  <Link href="https://dekhoev.com/" target="_blank">
    <Image
      src={productOgv}
      alt="OGV"
      width={90}
      height={44}
      className="h-auto w-[72px] sm:w-[80px] md:w-[90px] cursor-pointer"
    />
  </Link>

</div>
          </div>

          {/* Right: Partners + Follow */}
          <div className="lg:col-span-4">
            <div className="grid gap-8 sm:gap-9 md:gap-10 sm:grid-cols-2 lg:grid-cols-2">
              {/* Partners */}
              <div>
                <h3 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
                  Our Partners
                </h3>

                <div className="mt-4 sm:mt-5 md:mt-6 flex gap-4 sm:gap-5">
                  <div className="h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] md:h-[74px] md:w-[74px] flex items-center justify-center">
                    <Image
                      src={partnerGoogle}
                      alt="Google Partner"
                      width={52}
                      height={52}
                      className="h-auto w-[56px] sm:w-[62px] md:w-[70px]"
                    />
                  </div>
                  <div className="h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] md:h-[74px] md:w-[74px] flex items-center justify-center">
                    <Image
                      src={partnerMeta}
                      alt="Meta Partner"
                      width={52}
                      height={52}
                      className="h-auto w-[56px] sm:w-[62px] md:w-[70px]"
                    />
                  </div>
                </div>
              </div>

              {/* Follow */}
              <div>
                <h3 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
                  Follow Us On
                </h3>

                <div className="mt-4 sm:mt-5 md:mt-6 flex gap-2 sm:gap-3 flex-wrap">
                  <Link href="https://x.com/DigitalBleap" aria-label="X">
                    <Image
                      src={iconX}
                      alt="X"
                      width={26}
                      height={26}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] object-contain"
                    />
                  </Link>

                  <Link href="https://www.facebook.com/bleap.in/" aria-label="Facebook">
                    <Image
                      src={iconFacebook}
                      alt="Facebook"
                      width={26}
                      height={26}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] object-contain"
                    />
                  </Link>

                  <Link href="https://www.instagram.com/bleapdigital/" aria-label="Instagram">
                    <Image
                      src={iconInstagram}
                      alt="Instagram"
                      width={26}
                      height={26}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] object-contain"
                    />
                  </Link>

                  <Link href="https://www.linkedin.com/company/bleap/" aria-label="LinkedIn">
                    <Image
                      src={iconLinkedin}
                      alt="LinkedIn"
                      width={26}
                      height={26}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] object-contain"
                    />
                  </Link>

                  <Link href="https://www.youtube.com/@bleapdigitalmarketing" aria-label="YouTube">
                    <Image
                      src={iconYoutube}
                      alt="YouTube"
                      width={26}
                      height={26}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            LOWER BLOCK (Links + Services + Locations)
        ========================== */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
              Quick Links
            </h4>
            <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3 text-[15px] sm:text-[16px] text-[#FFFFFF] font-normal">
              <li><Link className="hover:text-[#FF6E00]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/about-us">About Us</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/team">Our Team</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/careers">Careers</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="https://bleap.in/blog/" target="_blank">Blog</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
              Services
            </h4>
            <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3 text-[15px] sm:text-[16px] text-[#FFFFFF] font-normal">
              <li><Link className="hover:text-[#FF6E00]" href="/services/seo-service-in-chennai">Search Engine Optimisation (SEO)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/ppc-service-in-chennai">Pay Per Click (PPC)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/website-design-service-in-chennai">Website Design (UX/UI)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/website-development-service-in-chennai">Website Development</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/graphic-design-service-in-chennai">Graphic Designing</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/video-editing-service-in-chennai">Video Editing</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/social-media-marketing-in-chennai">Social Media Marketing </Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/email-marketing-in-chennai">Email Marketing</Link></li>
            </ul>
          </div>


          {/* Chennai */}
          <div className="lg:col-span-4">
            <h4 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
              Chennai
            </h4>
            <p className="mt-4 sm:mt-5 md:mt-6 text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#FFFFFF]">
              Teynampet <br />
              46/97, Poes Main Road, Teynampet, <br />
              Chennai – 600 018 Tamil Nadu, India.
            </p>

            <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 text-[#FFFFFF]">
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">✉</span>
                <a className="hover:text-[#FF6E00] text-[15px] sm:text-[16px]" href="mailto:info@bleapdigital.com">
                  info@bleapdigital.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="mt-0 text-[#FF6E00]">
                  <Phone size={17} strokeWidth={2} />
                </span>
                <a className="hover:text-[#FF6E00] text-[15px] sm:text-[16px]" href="tel:+919382809420">
                  +91 9382809420
                </a>
              </p>
            </div>
          </div>
          

          {/* Bangalore */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FF6E00] text-[20px] sm:text-[21px] md:text-[22px] font-medium">
              Bangalore
            </h4>
            <p className="mt-4 sm:mt-5 md:mt-6 text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#FFFFFF]">
              Hustlehub Tech Park,
              <br />
              H210 36/5 Somasundarapalya Main Road,
              Adj 27th Main Road, Haralukunte Village,
              Sector 2, HSR Layout, Bengaluru – 560 102,
              <br />
              Karnataka, India
            </p>

            <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 text-[#FFFFFF]">
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">✉</span>
                <a className="hover:text-[#FF6E00] text-[15px] sm:text-[16px]" href="mailto:info@bleapdigital.com">
                  info@bleapdigital.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="mt-0 text-[#FF6E00]">
                  <Phone size={17} strokeWidth={2} />
                </span>
                <a className="hover:text-[#FF6E00] text-[15px] sm:text-[16px]" href="tel:+918762916841">
                 +91 9382809420
                </a>
              </p>
            </div>
          </div>

          



        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="mt-10 sm:mt-12 md:mt-14 border-t border-white/10 pt-5 sm:pt-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#FFFFFF]">
            © 2026 Bleap Digital Marketing Agency Private Limited All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#FFFFFF]">
            <Link className="hover:text-white" href="/write-for-us">Write For Us</Link>
            <span className="text-white/30">|</span>
            <Link className="hover:text-white" href="/terms">Terms &amp; Conditions</Link>
            <span className="text-white/30">|</span>
            <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* subtle gradient feel like design */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.22),transparent_55%)]" />
    </footer>
  );
}