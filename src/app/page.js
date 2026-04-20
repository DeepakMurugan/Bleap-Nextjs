import HeroMore from "./components/common/HeroMore";
import AboutBanner from "./components/common/AboutBanner";
import ClientsMarquee from "./components/common/ClientsMarquee";
import FaqSection from "./components/common/FaqSection";
import LatestBlogsSection from "./components/common/LatestBlogsSection";
import DarkServicesScroll5 from "./components/common/DarkServicesScroll5";
import PortfolioGrid from "./components/common/PortfolioGrid";
import TestimonialsMosaic from "./components/common/TestimonialsMosaic";
// import PremiumChatbot from "./components/common/PremiumChatbot";


/** @type {import("next").Metadata} */
export const metadata = {
  title: "Digital Marketing Agency in Chennai | SEO, PPC & Branding - BLeap",
  description:
    "BLeap is a leading digital marketing agency in Chennai offering SEO, PPC, social media marketing & branding services to drive traffic, leads & ROI.",
  alternates: {
    canonical: "https://www.bleap.in/",
  },
};

export default function Home() {
  const FAQS = [
    {
      q: "Why should I choose Bleap over other digital marketing agencies in Chennai?",
      a: "We don’t see ourselves as just another agency; we see ourselves as your growth partner. We know what works for local markets and global audiences alike.",
    },
    {
      q: "How soon can I see results from your digital marketing services?",
      a: "It depends on the service. Paid ads (PPC, social ads) can generate results within days, while SEO and organic strategies take a few months but deliver sustainable, long-term growth. We’ll give you a realistic timeline upfront; no false promises.",
    },
    {
      q: "Can Bleap handle both B2B and B2C marketing?",
      a: "Yes. Whether you’re targeting decision-makers in a corporate setting or individual customers on social media, we build campaigns that resonate with your audience and deliver ROI.",
    },
    {
      q: "What if I already have a website or ongoing campaigns?",
      a: "That’s great! We can audit your existing assets, optimise what’s working, and fix what’s not. Many of our clients come to us with campaigns in progress, and we turn them into high-performing growth machines.",
    },
    {
      q: "Is digital marketing suitable for small businesses/startups?",
      a: "Absolutely. In fact, digital marketing is one of the most cost-effective ways for startups and small businesses to grow. We create scalable strategies so you can start lean and expand as you grow.",
    },
  ];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bleap",
    url: "https://www.bleap.in/",
  };

  return (
    <>
      {/* ✅ WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HeroMore />
      <AboutBanner />
      <DarkServicesScroll5 />
      <ClientsMarquee />
      <PortfolioGrid />
                       <TestimonialsMosaic />
      
      <LatestBlogsSection />
      <FaqSection items={FAQS} />
      {/* <PremiumChatbot /> */}
    </>
  );
}