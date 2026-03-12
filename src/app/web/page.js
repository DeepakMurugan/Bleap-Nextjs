import Hero from "../components/web/Hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/web/whychoose";
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
    q: "Why is a professionally developed website important for my business?",
    a: "A professional website improves credibility, user experience, and conversion rates while ensuring your brand stands out in a competitive digital space",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes. Every website we develop is fully responsive and optimized for all screen sizes and devices.",
  },
  {
    q: " Can you redesign my existing website?",
    a: "Absolutely. We specialize in website redesigns that enhance design, performance, and conversion potential without losing existing brand value.",
  },
  {
    q: "Will the website be SEO-friendly?",
    a: " Yes. Our development process follows SEO best practices, ensuring faster load times, clean structure, and search engine visibility.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: " Yes. We provide ongoing maintenance and support to keep your website secure, updated, and performing at its best.",
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
         { text: "Expertise in custom, CMS, and eCommerce development", icon: iconRight },
         { text: "Websites optimized for speed, SEO, and conversions.", icon: iconBottom },
         { text: "Skilled developers with a strong UX and performance focus", icon: iconLeft },
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