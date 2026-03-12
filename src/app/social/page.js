import Hero from "../components/social/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/social/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import SeoScroll5Steps2 from "../components/common/Socialscroll";
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
    q: " Which social media platforms do you manage?",
    a: " We manage major platforms, including Instagram, Facebook, LinkedIn, and more, based on where your target audience is most active.",
  },
  {
    q: "How often will you post content on my social media pages?",
    a: "Posting frequency depends on your strategy and goals. We create a consistent posting schedule that balances visibility and engagement.  ",
  },
  {
    q: "Can social media marketing help generate leads?",
    a: "Yes. With the right strategy and targeted ads, social media can drive qualified leads and meaningful customer interactions.",
  },
  {
    q: "How do you measure social media success?",
    a: "We measure success using metrics like engagement rate, reach, follower growth, website traffic, and conversions, depending on campaign objectives.",
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
       { text: "Worked with brands across multiple industries and social platforms", icon: iconTop },
      
       { text: "We track what works, fix what doesn’t, and scale what performs", icon: iconRight },
      
       { text: "Experienced social media specialists", icon: iconBottom },
      

       { text: "Strategy built on insights, testing, and continuous optimisation", icon: iconLeft },
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