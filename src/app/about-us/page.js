// import AboutPage from "@/components/about/AboutPage";
import AboutPage from "../components/about/AboutPage";
/** @type {import("next").Metadata} */
export const metadata = {
  title: "Bleap – Leading Digital Marketing Agency in Chennai | SEO, PPC, Social Media & More",
  description:
    "Discover Bleap, a results-driven digital marketing agency in Chennai. We offer SEO, PPC, social media marketing, website design, video editing, and creative solutions to boost your brand’s growth, online visibility, and lead generation.",
  alternates: {
    canonical: "https://www.bleap.in/services/seo-service-in-chennai",


  },
};

export default function Page() {
  return <AboutPage />;
}