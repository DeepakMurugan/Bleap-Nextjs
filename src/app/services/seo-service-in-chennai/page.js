import Hero from "../../components/seo/hero";

import ClientsMarquee from "../../components/common/ClientsMarquee";
import CaseStudiesSection from "../../components/common/CaseStudiesSection";
import FaqSection from "../../components/common/FaqSection";
import LatestBlogsSection from "../../components/common/LatestBlogsSection";
import WhyChooseSplit from "../../components/seo/whychoose";

import SeoScroll5Steps2 from "../../components/common/SeoScroll5Steps2";
import CenteredImage from "../../components/common/CenteredImage";
import CenterSector from "../../components/common/CenterSector";
import OtherServicesSlider from "../../components/common/OtherServicesSlider";

import WhatSetsUsApart from "../../components/common/WhatSetsUsApart";
import TestimonialsMosaic from "../../components/common/TestimonialsMosaic";




import centerIcon from "../../assets/blogs/bl.png";
import iconTop from "../../assets/blogs/bt.png";
import iconRight from "../../assets/blogs/br.png";
import iconBottom from "../../assets/blogs/bb.png";
import iconLeft from "../../assets/blogs/bleft.png";


/** @type {import("next").Metadata} */
export const metadata = {
  title: "SEO Services in Chennai | #1 SEO Agency for Traffic & Leads - BLeap",
  description:
  "Boost rankings and leads with BLeap’s SEO services in Chennai. Our experts deliver technical SEO, local SEO, and content strategies to grow your business online.",
  alternates: {
    canonical: "https://www.bleap.in/services/seo-service-in-chennai",
  },
};


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
    a: "Our comprehensive SEO services include upbeat on page and off page optimization, technical SEO, Local SEO, Content Optimization and E-commerce to help generate greater revenue.",
  },
  {
    q: "Can SEO reduce my dependency on paid ads?",
    a: "Yes. Good SEO will help you maintain a steady organic traffic, reduce cost-per-acquisition, and stabilize the flow of leads such that you will not have to depend on PPC to be seen.",
  },
  {
    q: "What KPIs should my business track to measure SEO success?",
    a: "Monitor organic traffic, keywords, and click-through rates, leads/sales made through organic, and page performance. It does not matter the vanity metrics, but revenue-based KPIs do.",
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