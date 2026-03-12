import Hero from "../components/graphic/hero";
// import Services from "../components/home/Services";
// import AboutPreview from "../components/home/AboutPreview";
// import Portfolio from "../components/home/Portfolio";
// import ContactCTA from "../components/home/ContactCTA";
import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/graphic/whychoose";
// import webDevImg from "../assets/sections/webdev.png";

// import SeoScroll5Steps from "../components/common/SeoScroll5Steps";
import SeoScroll5Steps2 from "../components/common/Graphscroll";
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
    q: "  Why is graphic design important for my business?",
    a: " Graphic design helps build brand recognition, improves communication, and creates trust. Professionally designed visuals make your business look credible and help attract and retain customers.",
  },
  {
    q: "Can you design creatives for both digital and print?",
    a: " Yes. We offer complete graphic design solutions for both digital platforms and print media, ensuring consistent branding across all channels.",
  },
  {
    q: "Will the designs match my brand identity?",
    a: " Absolutely. We take time to understand your brand guidelines, target audience, and business objectives before creating any design.",
  },
  {
    q: "How long does it take to complete a graphic design project?",
    a: "Project timelines depend on the scope and complexity of the design. Simple creatives can be delivered quickly, while branding or multi-asset projects may take longer. We always provide clear timelines before starting.",
  },
  {
    q: "Can small businesses benefit from graphic design services?",
    a: "Yes. Strong visual branding helps small businesses compete effectively, build trust, and stand out even with limited marketing budgets.",
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
         { text: "Worked with 100+ brands across diverse industries", icon: iconTop },
         { text: "Strong focus on consistency, usability, and visual storytelling", icon: iconRight },
         { text: "Design solutions aligned with branding and marketing goals", icon: iconBottom },
         { text: "Experienced designers with a deep understanding", icon: iconLeft },
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