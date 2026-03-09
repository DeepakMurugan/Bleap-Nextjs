import Hero from "../components/ppc/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/ppc/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import PpcScroll from "../components/common/PpcScroll";
import CenteredImage from "../components/common/CenteredImage";
import CenterSector from "../components/common/CenterSector";
import OtherServicesSlider from "../components/common/OtherServicesSlider";

import WhatSetsUsApart from "../components/common/WhatSetsUsApart";
import TestimonialsMosaic from "../components/common/TestimonialsMosaic";




import centerIcon from "../assets/blogs/bl.png";
import iconTop from "../assets/blogs/rrrr1.png";
import iconRight from "../assets/blogs/lf.png";
import iconBottom from "../assets/blogs/rrrr1.png";
import iconLeft from "../assets/blogs/rrrr1.png";




export default function page() {


  const FAQS = [
  {
    q: "Is it expensive to promote my business using PPC? ",
    a: " No, PPC is not necessarily expensive; it can only cost a lot when the campaigns are mismanaged. You can monitor your spending and only pay per result, as closely as possible, and with optimization.",
  },
  {
    q: "Will I get reports on campaign performance?",
    a: "Yes. You receive clear, easy-to-understand reports that show spend, clicks, leads, conversions, and ROI. We believe in complete transparency, so you always know what’s working and where improvements are being made.",
  },
  {
    q: "Why do I need to go for PPC Services?",
    a: "PPC provides immediate presence and quantifiable results in contrast to months before getting results. With the management, you are going to get qualified leads to your budget and not the random clicks.",
  },
  {
    q: "Can PPC work alongside SEO and other marketing efforts?",
    a: "Absolutely. PPC complements SEO by delivering immediate visibility while organic strategies build long-term growth. Together, they create a balanced and effective digital marketing ecosystem.",
  },
  {
    q: "Can you do paid advertising for a small business?",
    a: "Yes, small businesses are the greatest benefactors since PPC allows one to begin small with a low budget and then only increase when the results appear. Smart targeting also makes sure that every rupee is used on high-intent prospects.",
  },
];



  return (
    <>
      <Hero />
                  <ClientsMarquee />
                   <CenteredImage  />

 <WhyChooseSplit />


  <WhatSetsUsApart
       title="What"
       highlight="Sets Us Apart"
       centerImage={centerIcon}
       centerAlt="SEO"
       items={[
         { text: "Worked with 100+ brands across multiple industries.    ", icon: iconTop },
         { text: "Proven experience managing small to high-scale ad budgets", icon: iconRight },
         { text: "Achieved up to 60% reduction in wasted ad spend through continuous optimization", icon: iconBottom },
         { text: "In- audience & competitor research", icon: iconLeft },
       ]}
     />
       {/* <AboutPreview />  */}

    <PpcScroll />

      {/* {/* <Services /> */}
      {/* <AboutPreview />  */}
           
             




           {/* < ServiceScrollShowcase /> */}

          {/* <SeoScroll5Steps /> */}
      {/* <Portfolio /> */}
      {/* <ContactCTA /> */}
          <CenterSector />

                  <CaseStudiesSection />

                 <OtherServicesSlider />

                 <TestimonialsMosaic />

            <LatestBlogsSection />
            <FaqSection items={FAQS} />

    </>
  );
}