import leftImg from "../../assets/case-studies/df.png";
import topRightImg from "../../assets/case-studies/df.png";
import bottomRightImg from "../../assets/case-studies/df.png";
import smallCenterImg from "../../assets/case-studies/df.png";

export default function AboutAgencySection() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="relative min-h-[700px] xl:min-h-[760px]">
          {/* Left image */}
          <img
            src={leftImg}
            alt="Digital marketing strategy"
            className="hidden lg:block absolute left-0 top-[180px] w-[220px] xl:w-[280px] rounded-[28px] object-cover"
          />

          {/* Top right image */}
          <img
            src={topRightImg}
            alt="Marketing team meeting"
            className="hidden lg:block absolute right-0 top-0 w-[210px] xl:w-[260px] rounded-[28px] object-cover"
          />

          {/* Bottom right image */}
          <img
            src={bottomRightImg}
            alt="Digital marketing team workspace"
            className="hidden lg:block absolute right-0 bottom-[40px] w-[170px] xl:w-[210px] rounded-[28px] object-cover"
          />

          {/* Small floating image */}
          <img
            src={smallCenterImg}
            alt="Team discussion"
            className="hidden lg:block absolute left-[230px] xl:left-[300px] bottom-[10px] w-[120px] xl:w-[160px] rounded-[24px] object-cover"
          />

          {/* Main content */}
          <div className="max-w-[760px] mx-auto text-center flex flex-col items-center justify-center pt-6 lg:pt-24">
            <h2 className="text-[30px] leading-[1.15] sm:text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] text-[#6B6B6B]">
              Chennai&apos;s High-Performing
            </h2>

            <h3 className="mt-1 text-[30px] leading-[1.15] sm:text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.03em] text-[#FF7A1A]">
              Digital Marketing Agency
            </h3>

            <p className="mt-8 sm:mt-10 max-w-[760px] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.55] text-[#5F5F5F] px-2">
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
            <img
              src={leftImg}
              alt="Digital marketing strategy"
              className="w-full h-[180px] sm:h-[220px] rounded-[22px] object-cover"
            />
            <img
              src={topRightImg}
              alt="Marketing team meeting"
              className="w-full h-[180px] sm:h-[220px] rounded-[22px] object-cover"
            />
            <img
              src={smallCenterImg}
              alt="Team discussion"
              className="w-full h-[150px] sm:h-[190px] rounded-[22px] object-cover"
            />
            <img
              src={bottomRightImg}
              alt="Digital marketing team workspace"
              className="w-full h-[150px] sm:h-[190px] rounded-[22px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
  
}

