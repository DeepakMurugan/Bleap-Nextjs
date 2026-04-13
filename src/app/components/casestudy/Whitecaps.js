import Image from "next/image";

import heroChartImg from "../../assets/blogs/nah.png";
import aboutImg from "../../assets/blogs/narab.png";
import uxUiImg from "../../assets/blogs/narc1.png";
import seoImg from "../../assets/blogs/narc2.jpg";
import localSeoImg from "../../assets/blogs/narc3.jpg";
import linkedinImg from "../../assets/blogs/narc4.jpg";
import reviewAvatarImg from "../../assets/blogs/narc5.png";

const metrics = [
  { label: "Clicks", value: "1.3k" },
  { label: "Impressions", value: "20.5k" },
  { label: "CTR", value: "6.34%" },
];

const keywordRows = [
  {
    keyword: "Concrete estimation service",
    page: "Home Page - Estimation Detailing & Virtual Construction",
  },
  {
    keyword: "Rebar Estimating Services",
    page: "Home Page - Estimation Detailing & Virtual Construction",
  },
  {
    keyword: "Stud rail estimation services",
    page: "Service page - Stud Estimation",
  },
  {
    keyword: "Stud rail detailing services",
    page: "Service page - Stud Estimation",
  },
  {
    keyword: "3D Rebar detailing",
    page: "Blog page - 3d Rebar Detailing a Revolutionary Approach to Successful Construction Projects",
  },
  {
    keyword: "Concrete estimating and take-off service",
    page: "Blog - Tips for Concrete Takeoff for Estimators and Contractors.",
  },
];

const solutions = [
  {
    title: "UX/UI & Website Development Improvements",
    image: uxUiImg,
    alt: "UX and website development improvement placeholder",
    body: "We provided strategic design feedback to enhance the website’s user interface and overall usability. The goal was to make the experience smoother for both prospective clients and returning visitors. Clear service flows, mobile responsiveness, and cleaner layouts were introduced to keep users engaged and reduce bounce rates.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: seoImg,
    alt: "SEO dashboard placeholder",
    body: "We began with a detailed SEO audit and quickly implemented key improvements across NaRDil’s service and blog pages. We updated meta tags, enhanced on-page content, fixed broken internal links, optimized URLs, and added schema markup. We also strengthened domain authority through relevant PR placements, forum submissions, and strategic guest posting.",
    boy: "To strengthen NaRDil’s domain authority, we focused on building high-quality backlinks through targeted forum submissions, relevant PR placements, and strategic guest posting on industry-specific websites. These efforts helped establish NaRDil as a trusted voice in their field and improved their ability to rank for high-intent keywords tied directly to their core services.",
 
},
  {
    title: "Local SEO Optimization",
    image: localSeoImg,
    alt: "Local SEO listing placeholder",
    body: "To improve local search visibility, we standardized NaRDil’s NAP details across platforms, submitted the business to reputable directories, and optimized their Google My Business profile with accurate service information, visual assets, and regular updates.",
    boy: " Most importantly, we optimized their Google My Business (GMB) profile by adding accurate business details, showcasing their services, uploading high-quality images, and posting regular updates. These efforts helped NaRDil show up more often in Google Maps and local search results, right when potential clients were looking for construction estimation services nearby.",
  


},
  {
    title: "LinkedIn Management",
    image: linkedinImg,
    alt: "LinkedIn profile placeholder",
    body: "We optimized NaRDil’s LinkedIn presence to strengthen their credibility and connect with the right B2B audience. We refined the company profile with clear, professional branding, updated service descriptions, and keyword-rich content to improve discoverability. To position NaRDil as an industry authority, we also shared targeted content tailored to decision-makers in the construction and estimation space. These efforts helped attract more relevant connections, build trust, and generate new business opportunities through LinkedIn.",
  },
];

export default function Whitecaps() {
  return (
    <main className="bg-[#f3f3f3] text-[#111111]">
      <section className="bg-[#050505] px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="mx-auto container">
          <div className="mx-auto max-w-6xl text-center text-white">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#FF6D00] sm:text-sm">
              Case Study
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[52px]">
              How We Increased Organic <br className="hidden sm:block" />
              Traffic for NaRDiL
            </h1>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <InfoCard title="Client Name" value="NaRDiL Enterprise" />
            <InfoCard
              title="Industry"
              value="Estimation Detailing & Virtual Construction (B2B Services)"
            />
            <InfoCard
              title="Services"
              value="SEO & Social Media Management"
            />
            <InfoCard
              title="Tools"
              value="Semrush, Google Analytics & Search Console"
            />
          </div>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-5">
            <Image
              src={heroChartImg}
              alt="Performance chart placeholder"
              className="h-auto w-full rounded-[20px] object-contain"
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

      <section className="px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6D00]">
              NaRDiL
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-none text-[#FF6D00] sm:text-[54px]">
              About the <br /> Client
            </h2>
            <div className="mt-6 overflow-hidden rounded-[22px] bg-white shadow-sm">
              <Image
                src={aboutImg}
                alt="About client placeholder"
                className="h-[220px] w-full object-cover sm:h-[260px]"
              />
            </div>
          </div>

          <div className="space-y-8 lg:pt-6">
            <div>
              <p className="text-sm leading-7 text-[#404040]">
                NaRDiL Enterprise has been a trusted name in US construction support services since 2005. Known for its expertise in Estimation, Detailing, BIM, and Virtual Construction, the company has consistently delivered reliable and high-quality solutions. NaRDiL’s commitment to professionalism, client satisfaction, and employee well-being sets it apart as a leader in the industry.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-none text-[#FF6D00] sm:text-[60px] lg:text-[72px]">
                The Challenges
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#404040]">
                NaRDiL’s strong industry reputation laid a solid foundation for digital growth, yet there were key opportunities to better align their online presence with their expertise. The website required user experience enhancements to improve navigation and engagement. It also faced mobile responsive issues that hindered accessibility across devices. Additionally, content across key pages had not yet been fully optimized to target high-value, industry-specific keywords.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#FF6D00] sm:text-[56px]">
              Solutions
            </h2>
          </div>

          <div className="mt-10 space-y-10 lg:space-y-12">
            {solutions.map((item, index) => (
              <div key={item.title} className="text-center">
                <h3 className="text-2xl font-semibold sm:text-[34px]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-white/80">
                  {item.body}
                </p>

                <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-[18px] border border-white/10  p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-3">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className={`h-auto w-full  object-contain ${index === 0 ? "max-h-[420px]" : "max-h-[500px]"}`}
                  />
                </div>
                  <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-white/80">
                  {item.boy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-[#111111] sm:text-[40px]">
              What Our Client Says
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#575757]">
              Within just a few months of implementing the changes, NaRDiL saw a significant boost in both search rankings and user engagement. Several key pages achieved first-page rankings for highly relevant, industry-specific keywords, helping the brand connect more effectively with its target audience online.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[20px] border border-[#d7d7d7] bg-white shadow-sm">
            <div className="grid grid-cols-1 border-b border-[#d7d7d7] bg-[#f8f8f8] text-sm font-semibold text-[#222222] sm:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-[#d7d7d7] px-4 py-4 sm:border-b-0 sm:border-r">Keyword</div>
              <div className="px-4 py-4">Page</div>
            </div>

            {keywordRows.map((row, index) => (
              <div
                key={`${row.keyword}-${index}`}
                className="grid grid-cols-1 text-sm text-[#333333] sm:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="border-b border-[#d7d7d7] px-4 py-4 sm:border-r">
                  {row.keyword}
                </div>
                <div className="border-b border-[#d7d7d7] px-4 py-4 text-[#ea8a2c]">
                  {row.page}
                </div>
              </div>
            ))}
          </div>
  <div className="mx-auto mt-12  max-w-4xl overflow-hidden rounded-[20px]   sm:p-5">
            <Image
              src={reviewAvatarImg}
              alt="Performance chart placeholder"
              className="h-auto w-full rounded-[20px] object-cover"
              priority
            />
          </div>
          {/* <div className="mx-auto mt-10 max-w-4xl rounded-[20px] border border-[#d8d8d8] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex shrink-0 items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-[#f6f6f6]">
                  <Image
                    src={reviewAvatarImg}
                    alt="Client review avatar placeholder"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#222222]">
                    NaRDiL Enterprise
                  </div>
                  <div className="text-xs text-[#7a7a7a]">1 review · 0 photos · 15 weeks ago</div>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#454545]">
                We’ve been working with Bleap for social media marketing, SEO, and website development, and it’s been a great experience. Their efforts have really helped boost our online presence, and we’re seeing steady, promising results. The team is responsive, professional, and easy to work with. They understand our goals and make sure our brand reaches the right audience. Plus, the improvements they made to our mobile site have made a real difference in user experience. Overall, we’re happy with their services and excited to see even more growth with their support. Highly recommend!
              </p>
            </div>
          </div> */}



        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#f5820d] px-5 py-5 text-white shadow-[0_12px_30px_rgba(245,130,13,0.25)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-semibold leading-tight sm:text-[30px]">
                We’ll study your business and we’ll come back with big ideas
              </p>
              <p className="mt-2 text-sm text-white/90">Contact us today</p>
            </div>
            <button className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#f5820d] transition hover:opacity-90">
             <a
             href="/contact"
             className="text-sm font-semibold text-[#f5820d] transition hover:opacity-90" >
             Contact Us
            </a>
            </button>
          </div>
        </div>
      </section>

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
                Take a look at how our efforts have helped clients overcome obstacles and achieve incredible results.
              </p>
            </div>

            <button className="inline-flex w-fit items-center rounded-full border border-[#d8d8d8] bg-white px-6 py-3 text-sm font-medium text-[#222222] transition hover:bg-[#fafafa]">
              <a href="/casestudy">
               View All Case Studies
                </a>  
            
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">
        {title}
      </p>
      <p className="mt-3 text-base font-semibold leading-6 text-white sm:text-lg">
        {value}
      </p>
    </div>
  );
}
