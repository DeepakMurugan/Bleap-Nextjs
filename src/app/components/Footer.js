import Link from "next/link";
import Image from "next/image";

// ✅ Replace these with your real assets (as you said you'll add)
import bleapLogo from "../assets/brand/bleap-footer-logo.png";

// in-house product logos
import productVaru from "../assets/footer/varu-woods.png";
import productErp4 from "../assets/footer/erp4dentist.png";
import productOgv from "../assets/footer/ogv.png";

// partners
import partnerGoogle from "../assets/footer/google.png";
import partnerMeta from "../assets/footer/meta.png";

export default function Footer() {
  return (
      <footer className="bg-[#000000] text-[#FFFFFF]">
      <div className="mx-auto container px-6 lg:px-10 pt-14 pb-8">
        {/* =========================
            TOP BLOCK (Logo + Top row)
        ========================== */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left: Logo + Description */}
          <div className="lg:col-span-4">
            <Image
              src={bleapLogo}
              alt="Bleap"
              width={220}
              height={80}
              className="w-[200px] h-auto"
              priority
            />

            <p className="mt-6 text-[16px] leading-7 text-[#FFFFFF] max-w-[520px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          {/* Middle: In-house products */}
          <div className="lg:col-span-4">
            <h3 className="text-[#FF6E00] text-[22px] font-medium">
              Our Marquee In-House Products
            </h3>

            <div className="mt-6 flex flex items-center gap-4">
              <Image src={productVaru} alt="Varu Woods" width={95} height={44} className="h-auto w-[120px] " />
              <Image src={productErp4} alt="ERP4 Dentist" width={95} height={44} className="h-auto w-[120px]" />
              <Image src={productOgv} alt="OGV" width={90} height={44} className="h-auto w-[90px]" />
            </div>
          </div>

          {/* Right: Partners + Follow */}
          <div className="lg:col-span-4">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
              {/* Partners */}
              <div>
                <h3 className="text-[#FF6E00] text-[22px] font-medium">
                  Our Partners
                </h3>

                <div className="mt-6 flex gap-5">
                  <div className="h-[74px] w-[74px]  flex items-center justify-center">
                    <Image src={partnerGoogle} alt="Google Partner" width={52} height={52} className="h-auto w-[70px]" />
                  </div>
                  <div className="h-[74px] w-[74px] flex items-center justify-center">
                    <Image src={partnerMeta} alt="Meta Partner" width={52} height={52} className="h-auto w-[70px]" />
                  </div>
                </div>
              </div>

              {/* Follow */}
              <div>
                <h3 className="text-[#FF6E00] text-[22px] font-medium">
                  Follow Us On
                </h3>

                <div className="mt-6 flex  gap-2 bot">
                  <SocialIcon href="#" label="X">X</SocialIcon>
                  <SocialIcon href="#" label="Facebook">f</SocialIcon>
                  <SocialIcon href="#" label="Instagram">⌁</SocialIcon>
                  <SocialIcon href="#" label="LinkedIn">in</SocialIcon>
                  <SocialIcon href="#" label="YouTube">▶</SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            LOWER BLOCK (Links + Services + Locations)
        ========================== */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#FF6E00] text-[22px] font-medium">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-[16px] text-[#FFFFFF] font-normal">
              <li><Link className="hover:text-[#FF6E00]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/about">About Us</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/team">Our Team</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/careers">Careers</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="https://blog.yourdomain.com" target="_blank">Blog</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FF6E00] text-[22px] font-medium">Services</h4>
            <ul className="mt-6 space-y-3 text-[16px] text-[#FFFFFF] font-normal">
              <li><Link className="hover:text-[#FF6E00]" href="/services/seo">Search Engine Optimisation (SEO)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/ppc">Pay Per Click (PPC)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/ui-ux">Website Design (UX/UI)</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/web-development">Website Development</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/graphic-design">Graphic Designing</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/video-editing">Video Editing</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/social-media">Social Media Marketing / Optimization</Link></li>
              <li><Link className="hover:text-[#FF6E00]" href="/services/email-marketing">Email Marketing</Link></li>
            </ul>
          </div>

          {/* Bangalore */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FF6E00] text-[22px] font-medium">Bangalore</h4>
            <p className="mt-6 text-[16px] leading-7 text-[#FFFFFF] ">
              Hustlehub Tech Park, <br />
              H210 36/5 Somasundarapalya Main Road, 
              Adj 27th Main Road, Haralukunte Village,
              Sector 2, HSR Layout, Bengaluru – 560 102, <br />
              Karnataka, India
            </p>

            <div className="mt-6 space-y-4 text-[18px] text-[#FFFFFF] ">
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">✉</span>
                <a className="hover:text-[#FF6E00] text-[16px] " href="mailto:info@bleapdigital.com">info@bleapdigital.com</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">📞</span>
                <a className="hover:text-[#FF6E00] text-[16px] " href="tel:+918762916841">+91 8762916841</a>
              </p>
            </div>
          </div>

          {/* Chennai */}
          <div className="lg:col-span-4">
            <h4 className="text-[#FF6E00] text-[22px] font-medium">Chennai</h4>
            <p className="mt-6 text-[16px] leading-7 text-[#FFFFFF] ">
              Teynampet <br />
              46/97, Poes Main Road, Teynampet, <br />
              Chennai – 600 018 Tamil Nadu, India.
            </p>

            <div className="mt-6 space-y-4 text-[18px] text-[#FFFFFF]">
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">✉</span>
                <a className="hover:text-[#FF6E00] text-[16px]" href="mailto:info@bleap.in">info@bleap.in</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#FF6E00]">📞</span>
                <a className="hover:text-[#FF6E00] text-[16px]" href="tel:+919382809420">+91 9382809420</a>
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[16px] text-[#FFFFFF]">
            © 2026 Bleap Digital Marketing Private Limited All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[16px] text-[#FFFFFF]">
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

function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="h-11 w-11 rounded-full bg-white flex items-center justify-center text-black text-[16px] font-semibold hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}