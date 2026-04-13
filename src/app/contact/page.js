import ContactPageClient from "../components/contact/ContactPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Contact BLeap | Digital Marketing Agency in Chennai",
  description:
    "Get in touch with BLeap, a trusted digital marketing agency in Chennai. Contact us for SEO, PPC, social media marketing, website design, and creative solutions to grow your business online.",
  alternates: {
    canonical: "https://www.bleap.in/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}