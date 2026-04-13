import Image from "next/image";
import leftImg from "../../assets/case-studies/b11.png";
import topRightImg from "../../assets/case-studies/b22.png";
import bottomRightImg from "../../assets/case-studies/b33.png";
import smallCenterImg from "../../assets/case-studies/b22.png";
import aboutImg from "../../assets/case-studies/digi.png"; // change path
import WhyChooseBleapSection from "../common/WhyChooseBleapSection ";


/** @type {import("next").Metadata} */
export const metadata = {
  title: "About BLeap | Digital Marketing Agency in Chennai",
  description:
    "Learn about BLeap, a Chennai-based digital marketing agency delivering SEO, PPC, social media marketing, and creative solutions to drive real business growth and measurable results.",
  alternates: {
    canonical: "https://www.bleap.in/about-us",
  },
};








export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-10">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-[11px] sm:text-xs font-medium text-[#F97316] bg-[#FFF1E8] px-3 py-1 rounded-full">
            About Bleap
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-6">
            <h1 className="text-[30px] sm:text-[35px] md:text-[45px] leading-[1.12] font-semibold tracking-[-0.02em] text-[#5C5C5C] max-w-[650px]">
              Our Bleap Digital Marketing Company in{" "}
              <span className="text-[#FF6A17]">Chennai</span>
            </h1>
          </div>

          <div className="lg:col-span-6 lg:pt-0">
            <p className="text-[16px] sm:text-[16px] leading-[1.75] text-[#222222] max-w-[500px] lg:ml-auto">
              BLeap is one of the best digital marketing company in Chennai. We
              understand what it&apos;s like to be in your shoes. BLeap is a
              complete Google collaborator and leading digital marketing
              consultant in Chennai that wants to work with you and your
              marketing teams to build a potent mix of digital marketing
              strategies, creative ideas, and technology-focused bespoke
              solutions.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="overflow-hidden rounded-[18px] md:rounded-[22px]">
            <Image
              src={aboutImg}
              alt="Digital marketing team brainstorming"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover"
              priority
            />
          </div>
        </div>
      </section>


       <section className="bg-white overflow-hidden">
            {/* <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-10 md:py-20 lg:py-25"> */}
             <div className="container mx-auto px-4 sm:px-4 md:px-10 lg:px-16 py-8 sm:py-10 md:py-16 lg:pt-[100px]">
             
              <div className="relative min-h-[600px] xl:min-h-[600px]">
                {/* Left image */}
                <Image
                  src={leftImg}
                  alt="Digital marketing strategy"
                          className="hidden lg:block absolute left-0 top-[-100px] w-[220px] xl:w-[200px] rounded-[28px] object-cover"

                />
      
                {/* Top right image */}
                <Image
                  src={topRightImg}
                  alt="Marketing team meeting"
                  className="hidden lg:block absolute right-0 top-0 w-[210px] xl:w-[200px] rounded-[28px] object-cover"
                />
      
                {/* Bottom right image */}
                <Image
                  src={bottomRightImg}
                  alt="Digital marketing team workspace"
                  className="hidden lg:block absolute right-0 bottom-[40px] w-[170px] xl:w-[160px] rounded-[28px] object-cover"
                />
      
                {/* Small floating image */}
                <Image
                  src={smallCenterImg}
                  alt="Team discussion"
                  className="hidden lg:block absolute left-[20px]  bottom-[100px] w-[120px] xl:w-[130px] rounded-[24px] object-cover"
                />
      
                {/* Main content */}
                <div className="max-w-[760px] mx-auto text-center flex flex-col items-center justify-center sm:pt-1 lg:pt-24">
                  <h2 className="text-[30px] leading-[1.15] sm:text-[40px] md:text-[52px] lg:text-[40px] font-semibold tracking-[-0.03em] text-[#6B6B6B]">
                    Chennai&apos;s High-Performing
                  </h2>
      
                  <h3 className="mt-1 text-[30px] leading-[1.15] sm:text-[40px] md:text-[52px] lg:text-[40px] font-semibold tracking-[-0.03em] text-[#FF7A1A]">
                    Digital Marketing Agency
                  </h3>
      
                  <p className="mt-8 sm:mt-10  text-[16px] sm:text-[18px] md:text-[19px] leading-[1.55] text-[#5F5F5F] px-2">
                    Innovative brands need the development of innovative marketing
                    strategies. Data serves as the fuel for our imagination and
                    technique. We are your partner at every stage of the process, and
                    we do this via communication, honesty, and feedback. Our
                    leadership team has a combined total of over 8+ years of
                    expertise in consumer marketing, advertising, branding, and the
                    digital marketing agency in Bangalore.
                  </p>
                </div>
      
                {/* Mobile / tablet images */}
                <div className="lg:hidden mt-12 grid grid-cols-2 gap-4 sm:gap-6">
                  <Image
                    src={leftImg}
                    alt="Digital marketing strategy"
                    className="w-full h-[180px] sm:h-[220px] rounded-[22px] object-cover"
                  />
                  <Image
                    src={topRightImg}
                    alt="Marketing team meeting"
                    className="w-full h-[180px] sm:h-[220px] rounded-[22px] object-cover"
                  />
                  <Image
                    src={smallCenterImg}
                    alt="Team discussion"
                    className="w-full h-[150px] sm:h-[190px] rounded-[22px] object-cover"
                  />
                  <Image
                    src={bottomRightImg}
                    alt="Digital marketing team workspace"
                    className="w-full h-[150px] sm:h-[190px] rounded-[22px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
      <WhyChooseBleapSection />


    </div>



  );


}