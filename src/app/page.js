import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import AboutPreview from "./components/home/AboutPreview";
import Portfolio from "./components/home/Portfolio";
import ContactCTA from "./components/home/ContactCTA";
import ClientsMarquee from "./components/common/ClientsMarquee";
import CaseStudiesSection from "./components/common/CaseStudiesSection";
import FaqSection from "./components/common/FaqSection";
import LatestBlogsSection from "./components/common/LatestBlogsSection";
import WhyChooseSplit from "./components/common/WhyChooseSplit";
// import webDevImg from "../assets/sections/webdev.png";

import SeoScroll5Steps from "./components/common/SeoScroll5Steps";
import SeoScroll5Steps2 from "./components/common/SeoScroll5Steps2";


export default function Home() {


  const FAQS = [
  {
    q: "How will SEO directly impact my revenue or lead generation?",
    a: "SEO enhances visibility for high-intent searches, increasing qualified traffic and conversions without raising ad spend.",
  },
  {
    q: "Do I need SEO if my website is already live?",
    a: "Yes. A live website still needs optimization to rank better, load faster, and attract the right audience over time.",
  },
  {
    q: "What are the SEO services you offer?",
    a: "We provide on-page, off-page, technical SEO, Local SEO, content optimization, and e-commerce SEO.",
  },
  {
    q: "Can SEO reduce my dependency on paid ads?",
    a: "Yes. Strong SEO builds consistent organic traffic and reduces cost-per-acquisition over time.",
  },
  {
    q: "What KPIs should my business track to measure SEO success?",
    a: "Track organic traffic, rankings, CTR, leads/sales from organic, and key page performance metrics.",
  },
];



  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
            <ClientsMarquee />
            <WhyChooseSplit />
            <CaseStudiesSection />

           {/* < ServiceScrollShowcase /> */}
          <SeoScroll5Steps />
      <Portfolio />
      <ContactCTA />
            <LatestBlogsSection />
   <SeoScroll5Steps2 />
            <FaqSection items={FAQS} />

    </>
  );
}