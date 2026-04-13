// import AboutPage from "@/components/about/AboutPage";
import AboutPage from "../components/about/AboutPage";
import CareersPage from "../components/careers/Careerspage";
/** @type {import("next").Metadata} */
export const metadata = {
  title: "Careers at Bleap – Digital Marketing Jobs & Growth Opportunities in Chennai",
  description:
    "Join Bleap, a leading digital marketing agency in Chennai. Explore careers in SEO, PPC, social media, website design & more with a results‑driven team focused on growth, creativity and impact.",
  alternates: {
    canonical: "https://www.bleap.in/careers",


  },
};

export default function Page() {
  return <CareersPage />;
}