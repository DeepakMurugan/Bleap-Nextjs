import Hero from "../components/video/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/video/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import SeoScroll5Steps2 from "../components/common/Videoscroll";
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
    q: " What types of videos do you edit?",
    a: " We edit promotional videos, social media content, corporate videos, YouTube videos, ads, reels, and short-form content based on your requirements.",
  },
  {
    q: "Can you edit videos for different platforms?",
    a: "Yes. We tailor video formats, durations, and styles based on platform requirements and audience behaviour. ",
  },
  {
    q: " Will the editing match my brand style?",
    a: "Absolutely. We follow your brand guidelines, tone, and visual preferences to ensure consistency across all video content.",
  },
  {
    q: "How long does it take to deliver an edited video?",
    a: "Timelines depend on video length and complexity. We provide clear delivery schedules before starting and stick to agreed timelines",
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
       { text: "Experience editing videos for brands across diverse industries", icon: iconTop },
      
       { text: "Editing styles tailored to brand tone, platform, and audience", icon: iconRight },
      
       { text: "Strong focus on story flow, pacing, and visual consistency", icon: iconBottom },
      

       { text: "Skilled editors with a deep understanding of digital and social video formats", icon: iconLeft },
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