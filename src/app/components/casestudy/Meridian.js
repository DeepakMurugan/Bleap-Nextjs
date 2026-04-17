import Image from "next/image";

import heroChartImg from "../../assets/blogs/mh.png";
import result from "../../assets/blogs/f1.png";

import aboutImg from "../../assets/blogs/ma.png";
import uxUiImg from "../../assets/blogs/ll.png";
import seoImg from "../../assets/blogs/ll2.png";
import localSeoImg from "../../assets/blogs/d.jpg";
import linkedinImg from "../../assets/blogs/f3.png";
import reviewAvatarImg from "../../assets/blogs/f2.png";

import c1 from "../../assets/blogs/ca1.png";
import c2 from "../../assets/blogs/ca2.png";
import c3 from "../../assets/blogs/ca3.png";
import c4 from "../../assets/blogs/ca4.png";

const infoCards = [
  { title: "Client Name", value: "Meridian Hospital", img: c1 },
  {
    title: "Industry",
    value: "Healthcare (Multispeciality Hospital)",
    img: c2,
  },
  { title: "Services", value: "SEO", img: c3 },
  {
    title: "Tools",
    value: "Semrush, Google Analytics, Search Console, AI Tools",
    img: c4,
  },
];

const metrics = [
  { label: "Clicks", value: "13.8 K" },
  { label: "Impressions", value: "1.7M" },
  { label: "Organic Traffic", value: "18,275" },
];

const challengeCards = [
  {
    title: "Technical SEO gaps.",
    text: "The site faced multiple structural SEO gaps, such as poorly optimised URLs, absent meta information, and uneven keyword alignment across service pages. As a result, both search engines and potential patients struggled to discover relevant content efficiently.",
  },
  {
    title: "Low visibility in local search results.",
    text: "Gaps in local SEO meant the hospital was largely absent from proximity based search results, limiting access to patients with a strong intent to find nearby medical care.",
  },
];

const topSolutionCards = [
  {
    title: "Website Structure",
    image: uxUiImg,
    body: "We streamlined the website layout to improve navigation and content flow, ensuring users could quickly find relevant information. The site structure was realigned to be both user-friendly and SEO friendly, helping search engines understand specialty pages better while offering a smoother experience for patients.",
  },
  {
    title: "On-Page Optimization",
    image: seoImg,
    body: "Our efforts centered on Cardiology and Emergency & Trauma Care, optimizing each specialty page with clear headings, improved metadata, and content written from a patient-first perspective. This approach improved visibility for high-intent, specialty-related searches, driving 11.8K in branded traffic and 6.5K in non-branded traffic.",
  },
];

const midStrategyCards = [
  {
    title: "Technical SEO Improvements",
    text: "We addressed core technical issues affecting performance and rankings. This included resolving duplicate content, improving site speed, implementing structured data, and cleaning up low quality links, resulting in a healthier website that search engines could crawl and rank more efficiently.",
  },
  {
    title: "Content Strategy (Blog)",
    text: "We developed content based on real patient search behavior, creating blogs and informational pages tied to Cardiology, Emergency & Trauma Care and Oncology. These addressed common symptoms, concerns, and urgent scenarios, supporting both patient education and improved page one visibility.",
  },
  {
    title: "Local SEO Targeting",
    text: "To capture patients searching for immediate care nearby, we strengthened the hospital’s presence in local search results for Kolathur. By optimizing local signals and location specific content, the hospital began appearing more consistently for near me and emergency related searches.",
  },
];

const specialtyRows = [
  {
    specialty: "Oncology",
    topic: "7 Common Myths about Chemotherapy",
  },
  {
    specialty: "Emergency & trauma Care",
    topic: "Dizziness after a car accident",
  },
];

const resultColumns = [
  {
    title: "Keywords Now ranks on Page 1",
    items: [],
    plain:
      "",
  },
  {
    title: "Brand Authority Keywords",
    items: [
      "Best multispeciality hospital in Chennai",
      "Best hospital in Chennai",
    ],
  },
  {
    title: "Local Intent Keywords",
    items: [
      "Best hospital in North Chennai",
      "Best emergency hospital in Chennai",
    ],
  },
  {
    title: "Specialty-Based Visibility",
    items: [
      "Best radiation oncology hospital in Chennai",
      "Best heart hospital in North Chennai",
    ],
  },
];

export default function MeridianCaseStudy() {
  return (
    <main className="bg-[#f3f3f3] text-[#111111]">
      {/* HERO */}
      <section className="bg-[#050505] px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center text-white">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#FF6D00] sm:text-sm">
              Case Study
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[52px]">
              A Strategic SEO Approach to Building Organic Visibility
              <br className="hidden sm:block" />
              in the Healthcare Industry: A SEO Case Study
            </h1>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {infoCards.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                value={item.value}
                img={item.img}
              />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[18px] border border-white/10 bg-white p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-4">
            <Image
              src={heroChartImg}
              alt="Meridian performance graph"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="border border-[#ead8ca] bg-white px-6 py-5 text-center"
              >
                <div className="text-3xl font-semibold text-[#FF6D00] sm:text-[40px]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[#757575]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CHALLENGES */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6d6d6d]">
                Meridian
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-none text-[#FF6D00] sm:text-[54px]">
                About
                <br />
                the client
              </h2>

              <div className="mt-5 overflow-hidden bg-white shadow-sm">
                <Image
                  src={aboutImg}
                  alt="About Meridian"
                  className="h-[220px] w-full object-cover sm:h-[260px]"
                />
              </div>
            </div>

            <div className="space-y-8 lg:pt-2">
              <div className="space-y-4 text-sm leading-7 text-[#404040]">
                <p>
                  Meridian Hospitals is a super multispeciality healthcare
                  facility based in Kolathur, North Chennai, serving patients
                  across the northern regions of the city. With a large
                  inpatient capacity and a comprehensive range of medical and
                  surgical specialities, the hospital caters to both routine and
                  critical care needs under one roof.
                </p>
                <p>
                  With a strong focus on patient safety, timely diagnosis, and
                  ethical treatment practices, Meridian Hospitals combines
                  advanced medical technology with a compassionate, patient-first
                  approach. Their commitment to quality care has positioned them
                  as a trusted healthcare destination for families in North
                  Chennai seeking both emergency and long-term medical services.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-semibold leading-none text-[#FF6D00] sm:text-[60px] lg:text-[72px]">
                  The Challenges
                </h2>

                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {challengeCards.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-base font-semibold text-[#111111] sm:text-[20px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#404040]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS INTRO */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#FF6D00] sm:text-[50px]">
            Solutions
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-[#404040]">
            <p>
              We executed a targeted SEO strategy focused on improving the online
              visibility of key medical specialties, ensuring the hospital
              appeared prominently when patients searched for specific treatments
              and services. By optimizing specialty pages, aligning content with
              high-intent search queries, and strengthening local SEO signals,
              we helped the hospital achieve consistent page-one rankings across
              multiple priority keywords.
            </p>
            <p>
              Within just 6 months, there was a measurable increase in organic
              traffic driven by specialty-related searches, along with improved
              visibility in local search results. This ensured the hospital was
              not only discoverable for general healthcare queries but highly
              visible when patients were actively looking for specialized care
              nearby. The result was a stronger search presence, higher
              engagement, and increased patient interest across core service
              lines.
            </p>
          </div>
        </div>
      </section>

      {/* BLACK SECTION */}
      <section className="bg-[#050505] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {topSolutionCards.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-2xl font-semibold text-white sm:text-[30px]">
                  {item.title}
                </h3>

                <div className="mx-auto mt-5 max-w-[430px] overflow-hidden border border-white/10 bg-white p-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[170px] w-full object-contain"
                  />
                </div>

                <p className="mx-auto mt-4 max-w-[460px] text-sm leading-7 text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE COLUMNS + TABLE + OFF PAGE */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {midStrategyCards.map((item) => (
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

          <div className="mt-8 overflow-hidden border border-[#dfd7cf] bg-white">
            <div className="grid grid-cols-1 border-b border-[#dfd7cf] bg-[#fbf8f5] text-sm font-semibold text-[#222222] md:grid-cols-[0.38fr_0.62fr]">
              <div className="border-b border-[#dfd7cf] px-4 py-4 md:border-b-0 md:border-r">
                Speciality
              </div>
              <div className="px-4 py-4">Blog Topic</div>
            </div>

            {specialtyRows.map((row, index) => (
              <div
                key={`${row.specialty}-${index}`}
                className="grid grid-cols-1 text-sm md:grid-cols-[0.38fr_0.62fr]"
              >
                <div className="border-b border-[#dfd7cf] px-4 py-4 md:border-r">
                  {row.specialty}
                </div>
                <div className="border-b border-[#dfd7cf] px-4 py-4 text-[#ea8a2c]">
                  {row.topic}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#111111]">
                Off-Page Strategy
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Built brand authority by expanding the hospital’s visibility and
                trust signals across high-quality external channels.
              </p>
            </div>

            <div className="overflow-hidden ">
              <Image
                src={localSeoImg}
                alt="Off page strategy visual"
                className=" h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold text-[#111111] sm:text-[40px]">
            Result
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {resultColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-base font-semibold text-[#111111]">
                  {col.title}
                </h3>

                {col.items.length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[#555555]">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#FF6D00]">▲</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {col.plain}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#555555]">
            These rankings positioned the hospital as a top-of-mind option for
            patients actively searching for emergency care and specialty
            treatment in Chennai.
          </p>

          <div className="mt-6 overflow-hidden rounded-[8px] border border-[#dfd7cf] bg-white p-3 shadow-sm">
            <Image
              src={result}
              alt="Traffic trend graph"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mt-8 overflow-hidden rounded-[8px] border border-[#dfd7cf] bg-white p-3 shadow-sm">
            <h3 className="text-lg font-semibold text-[#111111]">
              Featured in AI Overviews & Snippets
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#555555]">
              Intent focused content is being surfaced in AI summaries and
              Featured Snippets, strengthening search presence and authority.
            </p>

            <div className="mt-4 overflow-hidden">
              <Image
                src={reviewAvatarImg}
                alt="AI overview and snippets"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[8px] border border-[#dfd7cf] bg-white p-3 shadow-sm">
            <h3 className="text-lg font-semibold text-[#111111]">
              Local search visibility
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#555555]">
              Local search visibility improved significantly, helping the
              hospital appear more prominently for patients searching for care in
              the area.
            </p>

            <div className="mt-4 overflow-hidden">
              <Image
                src={linkedinImg}
                alt="Local search visibility"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#f5820d] px-5 py-5 text-white shadow-[0_12px_30px_rgba(245,130,13,0.25)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-semibold leading-tight sm:text-[30px]">
                We’ll study your business and we’ll come back
                <br className="hidden sm:block" />
                with big ideas.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#f5820d] transition hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CASE STUDIES INTRO */}
      <section className="px-4 pb-14 pt-2 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a0a0a0]">
                Case studies
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-[44px]">
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
          width={40}
          height={40}
          className="object-contain"
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