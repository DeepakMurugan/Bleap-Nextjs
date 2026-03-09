import Hero from "../components/email/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/email/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import PpcScroll from "../components/common/Emailscroll";
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
    q: "Is email marketing still effective for businesses?",
    a: "Yes. Email marketing continues to deliver one of the highest ROIs among digital marketing channels. With proper targeting and personalization, it drives consistent engagement and conversions.",
  },
  {
    q: "Will I get reports on email campaign performance?",
    a: "Absolutely. We provide clear, easy-to-understand reports covering open rates, clicks, conversions, unsubscribes, and ROI with complete transparency.",
  },
  {
    q: "Why should I choose professional email marketing services?",
    a: " Professional management ensures your emails are well-crafted, compliant, personalized, and optimized, avoiding spam issues and improving overall campaign effectiveness.",
  },
  {
    q: "Can email marketing work alongside SEO and paid ads?",
    a: "Yes. Email marketing complements SEO and PPC by nurturing leads generated from other channels and converting them into long-term customers.",
  },
  {
    q: "Is email marketing suitable for small businesses?",
    a: " Definitely. Email marketing is cost-effective and scalable, allowing small businesses to start small and grow their campaigns as results improve.",
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
         { text: "Worked with 100+ brands across B2B & B2C industries. ", icon: iconTop },
         { text: "Experienced email strategists and copy specialists", icon: iconRight },
         { text: "Proven expertise in automation, segmentation, and lifecycle campaigns.", icon: iconBottom },
         { text: "Achieved up to 45% improvement in open & click-through rates through optimization.", icon: iconLeft },
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