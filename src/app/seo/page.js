import Hero from "../components/seo/hero";

import ClientsMarquee from "../components/common/ClientsMarquee";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import FaqSection from "../components/common/FaqSection";
import LatestBlogsSection from "../components/common/LatestBlogsSection";
import WhyChooseSplit from "../components/seo/whychoose";

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
                  <ClientsMarquee />
                   <CenteredImage  />

 <WhyChooseSplit />


  <WhatSetsUsApart
       title="What"
       highlight="Sets Us Apart"
       centerImage={centerIcon}
       centerAlt="SEO"
       items={[
         { text: "10+ Years of SEO Experience", icon: iconTop },
         { text: "20k+ Keywords Ranked", icon: iconRight },
         { text: "100% transparent reporting & execution", icon: iconBottom },
         { text: "In-depth audience & competitor research", icon: iconLeft },
       ]}
     />

    <SeoScroll5Steps2 />

    
           

          <CenterSector />

                  <CaseStudiesSection />

                 <OtherServicesSlider />

                 <TestimonialsMosaic />

            <LatestBlogsSection />
            <FaqSection items={FAQS} />

    </>
  );
}