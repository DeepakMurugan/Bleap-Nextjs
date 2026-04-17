import Image from "next/image";

import heroChartImg from "../../assets/blogs/mh.png";
import result from "../../assets/blogs/k1.png";
import resultss from "../../assets/blogs/k2.png";


import aboutImg from "../../assets/blogs/imh.png";
import uxUiImg from "../../assets/blogs/ff1.png";
import seoImg from "../../assets/blogs/ff2.png";
import localSeoImg from "../../assets/blogs/k4.png";
import localSeoImg2 from "../../assets/blogs/d.jpg";

import linkedinImg from "../../assets/blogs/nh4.png";
import reviewAvatarImg from "../../assets/blogs/k3.png";

import c1 from "../../assets/blogs/ca1.png";
import c2 from "../../assets/blogs/ca2.png";
import c3 from "../../assets/blogs/ca3.png";
import c4 from "../../assets/blogs/ca4.png";

const infoCards = [
  { title: "Client Name", value: "Dr Mehta’s Hospitals", img: c1 },
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
  { label: "Clicks", value: "59.8k" },
  { label: "Impressions", value: "1.71M" },
  { label: "Appointments", value: "1500+" },
];

const challengeCards = [
  {
    title: "Technical SEO gaps.",
    text: "The website had several foundational issues, including unoptimized URLs, missing metadata, and inconsistent keyword targeting across specialties. These factors made it harder for search engines and patients to find the right pages.",
  },
  {
    title: "People Still Google Everything",
    text: "Even if they know your name, most people search for symptoms, treatments, or healthcare services, not your brand directly. If you’re not showing up in those searches, they’ll choose someone who is.",
  },
  {
    title: "Low visibility in local search results.",
    text: "The hospital wasn’t appearing in near me searches or results tied to specific locations. This meant they were missing out on high-intent, local patients looking for care nearby.",
  },
];

const solutionCards = [
  {
    title: "Website & UX/UI Improvements",
    image: uxUiImg,
    body: "We improved the site structure, while also designing a blog page that is easy to navigate and enhances the overall user experience by making information more accessible and engaging.",
  },
  {
    title: "Speciality-wise on-page optimization",
    image: seoImg,
    body: "We started with key departments Cardiology, Paediatrics, Orthopedics, and Obstetrics & Gynaecology, with better headings, meta tags, and patient-focused content.",
  },
];

const strategyCards = [
  {
    title: "Technical SEO Improvements",
    text: "We fixed technical issues, removed duplicate content, added schema, improved page speed, and cleaned up spam links to make the site healthier and easier to rank.",
  },
  {
    title: "Monthly blog strategy",
    text: "Each blog was built around actual patient searches. We created search-friendly blogs that addressed common health questions by speciality. These were designed to answer real patient queries while helping patients to get answers and boosting the brand’s authority.",
  },
  {
    title: "Local SEO targeting",
    text: "Searches like best hospital near me are showing results within a 5km radius of locations. Optimising for local search helps capture high-intent patients in the area and made sure both the Velappanchavadi and Chetpet branches showed up in nearby searches.",
  },
];

const specialtyRows = [
  {
    specialty: "Cardiology",
    topic:
      "Cardiology - Which heart symptoms mean you should seek medical help?",
  },
  {
    specialty: "Pediatric",
    topic: "Pediatric - 17 Immunity-Boosting Foods for Children This Summer",
  },
];

const pageOneKeywords = [
  "Best multispeciality hospital in Chennai",
  "Best hospital in Chennai",
  "Best cardiac hospital in Chennai",
  "Best gynecologist hospital in Chennai",
];

export default function MehtaCaseStudy() {
  return (
    <main className="bg-white text-[#111111]">
      <section className="bg-[#050505] px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center text-white">
            <h1 className="text-[28px] font-semibold leading-[1.05] sm:text-[38px] lg:text-[52px]">
              How We Increased Organic
              <br className="hidden sm:block" />
              Traffic for A Healthcare Industry: A SEO Case Study
            </h1>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {infoCards.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                value={item.value}
                img={item.img}
              />
            ))}
          </div>

          <div className="mx-auto mt-7 max-w-5xl overflow-hidden rounded-[14px] border border-white/10 bg-white p-2 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-3 lg:rounded-[18px] lg:p-4">
            <Image
              src={heroChartImg}
              alt="SEO performance graph"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="border border-[#ead8ca] bg-white px-4 py-4 text-center sm:px-6"
              >
                <div className="text-[32px] font-semibold leading-none text-[#f5820d] sm:text-[42px]">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6f6f6f] sm:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-4 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#2f9fd8] sm:text-[16px]">
                Dr.Mehta’s Hospitals
              </div>

              <h2 className="text-[42px] font-semibold leading-[0.9] text-[#f5820d] sm:text-[56px] lg:text-[68px]">
                About
                <br />
                the client
              </h2>

              <div className="mt-5 overflow-hidden bg-white shadow-sm">
                <Image
                  src={aboutImg}
                  alt="About the client"
                  className="h-[200px] w-full object-cover sm:h-[250px] lg:h-[220px]"
                />
              </div>
            </div>

            <div>
              <div className="space-y-4 text-sm leading-7 text-[#404040] lg:pt-2">
                <p>
                  Dr. Mehta’s Hospitals is one of Chennai’s leading
                  multispeciality healthcare providers, with a legacy spanning
                  over 90 years. They offer expert care across 50+ specialties
                  and 10 dedicated Centers of Excellence, from Cardiology to
                  Pediatrics and more.
                </p>
                <p>
                  With two modern hospitals located in Chetpet and
                  Velappanchavadi, they have over 400 beds and a clear mission:
                  to put patients first. Their experienced doctors use advanced
                  technology and a patient-first approach to make quality
                  healthcare more affordable, accessible, and reliable for
                  everyone.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-[40px] font-semibold leading-none text-[#f5820d] sm:text-[54px] lg:text-[68px]">
                  The Challenges
                </h2>

                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {challengeCards.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-[20px] font-semibold leading-[1.05] text-[#111111] lg:text-[24px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#4b4b4b]">
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

      <section className="px-4 pb-6 sm:px-6 lg:px-8 lg:pb-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[34px] font-semibold leading-none text-[#f5820d] sm:text-[48px]">
            Solutions
          </h2>

          <p className="mt-4 max-w-6xl text-sm leading-7 text-[#404040]">
            We implemented a phased SEO strategy to help the hospital show up
            where it matters most, when people are actively looking for care.
            Our focus was not only on driving traffic but also on converting
            that traffic into booking appointments. Within 6 months, we achieved
            significant improvements in visibility and engagement, ensuring
            patients didn’t just find the hospital online, but actually took
            the next step to seek care.
          </p>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {solutionCards.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-[22px] font-semibold leading-tight sm:text-[28px]">
                  {item.title}
                </h3>

                <div className="mx-auto mt-5 max-w-[460px] overflow-hidden   p-2 shadow-sm sm:p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[180px] w-full object-contain sm:h-[220px]"
                  />
                </div>

                <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {strategyCards.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-[20px] font-semibold leading-tight text-[#f5820d] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden border border-[#dfd7cf] bg-white">
            <div className="grid grid-cols-1 border-b border-[#dfd7cf] bg-[#fbf8f5] text-sm font-semibold text-[#222222] md:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-[#dfd7cf] px-4 py-4 md:border-b-0 md:border-r">
                Speciality
              </div>
              <div className="px-4 py-4">Blog Topic</div>
            </div>

            {specialtyRows.map((row, index) => (
              <div
                key={`${row.specialty}-${index}`}
                className="grid grid-cols-1 text-sm md:grid-cols-[0.34fr_0.66fr]"
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

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold text-[#111111]">
                Off-Page Strategy
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#555555]">
                Focused on building strong brand authority and presence across
                relevant external channels.
              </p>
            </div>

            <div className="overflow-hidden rounded-[4px]">
              <Image
                src={localSeoImg2}
                alt="Off-page strategy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[34px] font-semibold text-[#111111] sm:text-[44px]">
            Result
          </h2>

          <div className="mt-8">
            <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
              Keywords Now ranks on Page 1
            </h3>
            <ul className="mt-3 space-y-2 text-[13px] leading-6 text-[#555555]">
              {pageOneKeywords.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#f5820d]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
       
            
   
          </div>

<br></br>
             <Image
              src={result}
              alt="Traffic growth"
              className="h-auto w-full object-contain"
            />
           

          <div className="mt-6">
            <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
              Traffic Growth
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#555555]">
              The site saw a 2.3x increase in organic traffic over six months.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-[6px] border border-[#dfd7cf] bg-white p-2 shadow-sm">
            <Image
              src={resultss}
              alt="Traffic growth"
              className="h-auto w-full object-contain"
            />
            <p className="px-2 pb-1 pt-3 text-[13px] leading-6 text-[#333333]">
              These rankings positioned the hospital as a{" "}
              <span className="font-semibold">top-of-mind option</span> for
              patients actively searching for emergency care and specialty
              treatment in Chennai.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
              Featured in AI Overviews & Snippets
            </h3>
            <p className="mt-2 max-w-4xl text-[13px] leading-6 text-[#555555]">
              Our structured, intent-rich content is being pulled into
              AI-generated summaries and Featured Snippets, further boosting
              search visibility and topical authority.
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#dfd7cf] bg-white p-2 shadow-sm">
            <Image
              src={reviewAvatarImg}
              alt="AI Overviews and snippets"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
              Local search visibility
            </h3>
            <p className="mt-2 max-w-4xl text-[13px] leading-6 text-[#555555]">
              We saw increased visibility in local search results, helping the
              hospital appear more prominently for patients actively looking for
              care in the area.
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#dfd7cf] bg-white p-2 shadow-sm">
            <Image
              src={linkedinImg}
              alt="Local search visibility"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
              Appointments Booked via Organic Search
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#555555]">
              Alongside traffic growth, we tracked a direct impact on patient
              conversions. In just one month, organic sessions drove 1,790
              booked appointments, a 319% increase compared to the previous
              month (427). This clearly demonstrates that SEO improvements not
              only brought more visitors but also converted them into real
              patients for the hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[16px] bg-[#f5820d] px-5 py-5 text-white shadow-[0_12px_30px_rgba(245,130,13,0.25)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-semibold leading-tight sm:text-[28px]">
              We’ll study your business and we’ll come back
              <br className="hidden sm:block" />
              with big ideas.
            </p>

            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#f5820d] transition hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a0a0a0]">
                Case studies
              </p>
              <h2 className="mt-2 text-[30px] font-semibold text-[#111111] sm:text-[42px]">
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
              View all case studies
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