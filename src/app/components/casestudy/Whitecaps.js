import Image from "next/image";

import heroChartImg from "../../assets/blogs/wh.png";
import aboutImg from "../../assets/blogs/hh.png";
import uxUiImg from "../../assets/blogs/waaf.png";
import seoImg from "../../assets/blogs/waa.png";
import seoImg1 from "../../assets/blogs/s11.png";
import seoImg2 from "../../assets/blogs/s22.png";
import cour from "../../assets/blogs/tela.png";
import linkedinImg from "../../assets/blogs/nar.png";
import gsec from "../../assets/blogs/gs.png";
import c1 from "../../assets/blogs/ca1.png";
import c2 from "../../assets/blogs/ca2.png";

import c3 from "../../assets/blogs/ca3.png";
import c4 from "../../assets/blogs/ca4.png";


const infoCards = [
  { title: "Client Name", value: "Whitecaps", img: c1 },
  { title: "Industry", value: "Education & Training Industry", img: c2 },
  { title: "Services", value: "SEO", img: c3 },
  {
    title: "Tools",
    value: "Semrush, Google Analytics, Search Console",
    img: c4,
  },
];

const metrics = [
  { label: "Clicks increased by", value: "53%" },
  { label: "Impressions Boosted by", value: "269%" },
  { label: "New Users Improved by", value: "68.3%" },
];

const challengeCards = [
  {
    title: "Lack of Local Enquiries",
    text: "Despite being well established, Whitecaps struggled to attract local students, resulting in a low number of inquiries and in-person visits to explore their courses.",
  },
  {
    title: "Low Online Visibility",
    text: `The institute was not ranking well for important keywords like "baking courses in Bangalore" or "best baking institute in India", making it hard for potential students to find them online.`,
  },
];

const analysisCards = [
  {
    title: "Keyword Volume",
    text: "We implemented a focused approach to keyword optimization by boosting monthly clicks, ensuring maximum visibility, and targeting the right audience through search engines.",
  },
  {
    title: "Monthly Blog Posts",
    text: "We initially planned to publish blogs per month, focusing on building topical authority. This strategic approach helped improve trust, credibility, and overall organic performance.",
  },
  {
    title: "Guest Posts",
    text: "We successfully contributed guest blogs to relevant platforms, improving visibility, credibility, backlinks, rankings, and overall online presence.",
  },
];

const blogRows = [
  {
    category: "Culinary Guides",
    type: "Informative Guide",
    title:
      "12 Types of Pastry every professional baker must know\nWhat is Fondant Cake and is it worth trying?",
  },
  {
    category: "Culinary Arts",
    type: "Educational Article",
    title: "Importance of baking and pastry in the world of culinary",
  },
  {
    category: "Baking Essentials",
    type: "Usage Guide",
    title:
      "9 Cake Baking Tools: You Must have While Baking\nThe Best Baking Ingredients guide for your expert Kitchen",
  },
  {
    category: "Business & Entrepreneurship",
    type: "How-To-Guide",
    title:
      "Oven to Empire: The Ultimate Guide To How To Start a Baking Business",
  },
];

export default function Whitecaps() {
  return (
    <main className="bg-[#f2f2f2] text-[#111111]">
      <section className="bg-[#050505] px-4 pt-10 text-white sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#FF6D00] sm:text-sm">
              SEO Case Study
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[48px]">
              How we Increased 441.4% Organic Traffic for
              <br className="hidden sm:block" />
              Whitecaps: A SEO Case Study
            </h1>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {infoCards.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                value={item.value}
                img={item.img}
              />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl translate-y-8 overflow-hidden">
            <Image
              src={heroChartImg}
              alt="Whitecaps case study hero visual"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-[#e5d7ca] bg-white px-6 py-5 text-center shadow-sm"
              >
                <div className="text-3xl font-semibold text-[#FF6D00] sm:text-[38px]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6a6a6a]">
                    Whitecaps
                  </p>
                  <h2 className="mt-1 text-3xl font-semibold leading-none text-[#FF6D00] sm:text-[50px]">
                    About the
                    <br />
                    client
                  </h2>
                </div>
              </div>

              <div className="mt-5 overflow-hidden bg-white shadow-sm">
                <Image
                  src={aboutImg}
                  alt="About Whitecaps"
                  className="h-[185px] w-full object-cover sm:h-[220px]"
                />
              </div>
            </div>

            <div>
              <p className="text-[16px] leading-7 text-[#444444]">
                Whitecaps, a leading baking institute in Bangalore since 2016,
                is led by expert chefs trained in baking capitals like France
                and Italy. Their courses are designed for everyone, whether
                you’re a beginner exploring baking or an aspiring entrepreneur.
                They have successfully trained over 105+ batches. Whitecaps
                continues to set the benchmark for excellence in baking
                education.
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-none text-[#FF6D00] sm:text-[58px]">
                The Challenges
              </h2>

              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {challengeCards.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-[#111111] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#4b4b4b]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[16px] leading-7 text-[#444444]">
                These challenges made it difficult for Whitecaps to reach their
                target audience and grow their enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#FF6D00] sm:text-[44px]">
            Solutions
          </h2>

          <p className="mt-3 text-[16px] leading-7 text-black/80">
            Bleap Digital SEO team implemented a comprehensive strategy,
            revamping the website with a user-friendly design and targeting
            unique keywords. Additionally, we created a content funnel to
            attract audiences at every stage and optimized the Google Business
            Profile to enhance local search visibility and drive walk-ins.
          </p>

          <p className="mt-2 text-[16px] leading-7 text-black/80">
            Read on to discover how Bleap Digital achieved remarkable growth for
            Whitecaps.
          </p>

          <div className="mt-6 rounded-[4px] bg-white p-2">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden">
                <Image
                  src={seoImg1}
                  alt="SEO screenshot one"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src={seoImg2}
                  alt="SEO screenshot two"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mt-2 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-[42px]">
              Website Content Structure
            </h2>
            <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/80">
              A well-designed page builds trust and credibility. We created
              website pages that detailed the courses offered by Whitecaps,
              clearly outlining what students would learn. This helped potential
              customers easily understand the value that Whitecaps offers.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-center text-2xl font-semibold text-[#FF6D00] sm:text-[32px]">
              Home Page Revamp
            </h3>

            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
              <div className="text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                  Before
                </p>
                <div className="mx-auto max-w-[340px] overflow-hidden border border-white/10 bg-white p-2">
                  <Image
                    src={seoImg}
                    alt="Before home page revamp"
                    className="h-[160px] w-full object-cover"
                  />
                </div>
                <p className="mx-auto mt-3 max-w-[340px] text-sm leading-7 text-white/75">
                  The home page lacked clarity and structure, making it hard for
                  visitors and search engines to understand the core offerings.
                </p>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <span className="text-[28px] font-light text-[#FF6D00]">
                  → → →
                </span>
              </div>

              <div className="text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                  After
                </p>
                <div className="mx-auto max-w-[340px] overflow-hidden border border-white/10 bg-white p-2">
                  <Image
                    src={uxUiImg}
                    alt="After home page revamp"
                    className="h-[160px] w-full object-cover"
                  />
                </div>
                <p className="mx-auto mt-3 max-w-[340px] text-sm leading-7 text-white/75">
                  We revamped the home page by highlighting Whitecaps unique
                  selling points, campus environments, course features, and
                  impressive placement records, ensuring a seamless user
                  experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-[#FF6D00] sm:text-[32px]">
              Course Page Revamp
            </h3>

            <div className="mx-auto mt-5 max-w-[420px] overflow-hidden border border-white/10 bg-white p-2">
              <Image
                src={cour}
                alt="Course page revamp"
                className="h-[180px] w-full object-cover"
              />
            </div>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/75">
              Each course now highlights the exact skills students will master,
              giving them a detailed roadmap of what they’ll achieve. New layout
              ensures all information is easy to find and visually engaging.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#FF6D00] sm:text-[42px]">
              Competitor and Keyword Analysis
            </h2>
            <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-[#4b4b4b]">
              We carefully analyzed competitors to identify gaps and
              opportunities. Targeted keywords with high search volumes were
              strategically incorporated into the website. We boosted visibility
              and successfully attracted more high-quality traffic.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {analysisCards.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold text-[#FF6D00]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden border border-[#e5ddd4] bg-white">
            <div className="grid grid-cols-1 border-b border-[#e5ddd4] bg-[#fbf8f5] text-sm font-semibold text-[#222222] md:grid-cols-[0.24fr_0.24fr_0.52fr]">
              <div className="border-b border-[#e5ddd4] px-4 py-4 md:border-b-0 md:border-r">
                Content Category
              </div>
              <div className="border-b border-[#e5ddd4] px-4 py-4 md:border-b-0 md:border-r">
                Type of article
              </div>
              <div className="px-4 py-4">Blog Title</div>
            </div>

            {blogRows.map((row, index) => (
              <div
                key={`${row.category}-${index}`}
                className="grid grid-cols-1 text-sm md:grid-cols-[0.24fr_0.24fr_0.52fr]"
              >
                <div className="border-b border-[#e5ddd4] px-4 py-4 md:border-r">
                  {row.category}
                </div>
                <div className="border-b border-[#e5ddd4] px-4 py-4 md:border-r">
                  {row.type}
                </div>
                <div className="whitespace-pre-line border-b border-[#e5ddd4] px-4 py-4 text-[#ea8a2c]">
                  {row.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-[#111111] sm:text-[40px]">
            Google Business Profile Optimization
          </h2>
          <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-[#4f4f4f]">
            We regularly updated posts on their Google Business Profile and
            optimized local keywords. This enhanced their local search
            visibility, driving more foot traffic and inquiries.
          </p>

          <h2 className="mt-8 text-3xl font-semibold text-[#FF8224] sm:text-[35px]">
            Results
          </h2>

          <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-[4px] border border-[#e5ddd4] bg-white p-3 shadow-sm">
            <Image
              src={gsec}
              alt="Google business profile section"
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-[#4f4f4f]">
            As a result, Bleapdigital&apos;s SEO team achieved higher visibility
            for their core keywords, securing TOP 3 to TOP 10 positions. This
            improvement in rankings led to a 441.4% increase in organic traffic
            and a significant rise in inquiries, ensuring a steady flow of leads
            and driving substantial growth for Whitecaps.
          </p>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="mt-8 text-2xl font-semibold text-[#111111] sm:text-[34px]">
            Watch our clients says
          </h3>

          <div className="mx-auto mt-5 max-w-3xl overflow-hidden rounded-[4px] bg-[#111111] p-2 shadow-sm">
            <Image
              src={linkedinImg}
              alt="Client testimonial visual"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[4px] bg-[#ff7300] px-5 py-5 text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-semibold leading-tight sm:text-[28px]">
                We’ll study your business and we’ll come back
                <br className="hidden sm:block" />
                with big ideas.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#ff7300] transition hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 pb-14 pt-1 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b0b0b0]">
            Case studies
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#111111] sm:text-[42px]">
                Our Success Speaks
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#5d5d5d]">
                Take a look at how our efforts have helped clients overcome
                obstacles and achieve incredible results.
              </p>
            </div>

            <a
              href="/casestudy"
              className="inline-flex w-fit items-center rounded-full border border-[#d8d8d8] bg-white px-6 py-3 text-sm font-medium text-[#222222] transition hover:bg-[#fafafa]"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, value, img }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
      <div className="mb-4 flex justify-center">
        <Image
          src={img}
          alt={title}
          className="h-10 w-10 object-contain"
        />
      </div>

      <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">
        {title}
      </p>
      <p className="mt-3 text-base font-semibold leading-6 text-white sm:text-lg">
        {value}
      </p>
    </div>
  );
}