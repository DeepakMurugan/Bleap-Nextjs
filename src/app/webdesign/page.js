import Hero from "../components/webdesign/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/webdesign/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import SeoScroll5Steps2 from "../components/common/SeoScroll5Steps2";
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
    q: " Why is professional website design important for my business?",
    a: "Professional design improves credibility, usability, and engagement, helping users trust your brand and interact with your website more effectively.",
  },
  {
    q: "Will my website design be mobile-friendly?",
    a: "  Yes. Every design we create is fully responsive and optimized for usability across all devices and screen sizes.",
  },
  {
    q: "Do you redesign existing websites?",
    a: " Absolutely. We specialize in redesigning websites to improve visual appeal, usability, and overall user experience.",
  },
  {
    q: "How do design and conversion work together?",
    a: "Good design reduces friction, improves clarity, and guides users toward action, directly influencing conversion rates and engagement.",
  },
  {
    q: "Can the design align with my existing brand identity?",
    a: "  Yes. We ensure every design aligns with your brand guidelines while enhancing visual consistency and usability.",
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
         { text: "Delivered 200+ websites across multiple industries", icon: iconTop },
         { text: "Focus on clarity, hierarchy, and usability, not visual clutter", icon: iconRight },
         { text: "Design-led approach backed by UX research and user behavior analysis", icon: iconBottom },
         { text: "Proven experience designing websites across multiple industries and business models", icon: iconLeft },
       ]}
     />
       {/* <AboutPreview />  */}

    <SeoScroll5Steps2 />

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