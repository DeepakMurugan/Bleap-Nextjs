"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import team1 from "../../assets/team/neeraj.jpg";
import team2 from "../../assets/team/t1.png";
import team3 from "../../assets/team/t1.png";
import team4 from "../../assets/team/t1.png";
import team5 from "../../assets/team/t1.png";
import team6 from "../../assets/team/t1.png";
import team7 from "../../assets/team/t1.png";
import team8 from "../../assets/team/t1.png";

const TEAM_SECTIONS = [
  {
    id: "management",
    title: "Management",
    members: [
      { id: 1, name: "Neeraj Moorjani", designation: "Managing Director", linkedin: "https://www.linkedin.com/in/neerajmoorjani/", image: team1 },
      { id: 2, name: "Neelu moorjani", designation: "Head of HR", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 3, name: "Abishai Billigraham", designation: "General Manager", linkedin: "https://in.linkedin.com/in/abishaibilligraham", image: team3 },
      { id: 4, name: "Giridharan R", designation: "Technical Head", linkedin: "https://www.linkedin.com/in/giridharan-r-b683b1b4/", image: team4 },
   ],
  },
  {
    id: "social-media",
    title: "Social Media",
    members: [
      { id: 6, name: "Priya N", designation: "Social Media Manager", linkedin: "https://www.linkedin.com/", image: team5 },
      { id: 7, name: "Divya M", designation: "Content Strategist", linkedin: "https://www.linkedin.com/", image: team6 },
      { id: 8, name: "Keerthana", designation: "Reels Specialist", linkedin: "https://www.linkedin.com/", image: team7 },
      { id: 9, name: "Aishwarya", designation: "Community Executive", linkedin: "https://www.linkedin.com/", image: team8 },
      { id: 10, name: "Monika", designation: "Campaign Executive", linkedin: "https://www.linkedin.com/", image: team1 },
    ],
  },
  {
    id: "web",
    title: "Website Design & Development",
    members: [
      { id: 11, name: "Deepak Murugan", designation: "Frontend Developer", linkedin: "https://www.linkedin.com/in/deepakmurugan4/", image: team1 },
      { id: 12, name: "Sinnamuthu", designation: "Full Stack Developer", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 13, name: "Arun", designation: "backend developer", linkedin: "https://www.linkedin.com/", image: team3 },
      { id: 14, name: "Damodaran", designation: "UI UX Designer", linkedin: "https://www.linkedin.com/", image: team4 },
      { id: 15, name: "Vijay", designation: "Intern", linkedin: "https://www.linkedin.com/", image: team6 },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    members: [
      { id: 16, name: "Gowtham", designation: "SEO Lead", linkedin: "https://www.linkedin.com/", image: team5 },
      { id: 17, name: "hasumathi", designation: "SEO Analyst", linkedin: "https://www.linkedin.com/", image: team6 },
      { id: 18, name: "saritha ", designation: "Technical SEO Executive", linkedin: "https://www.linkedin.com/", image: team7 },
      { id: 19, name: "Ruban", designation: "SEO Executive", linkedin: "https://www.linkedin.com/", image: team8 },
      { id: 20, name: "kajal", designation: "SEO Executive ", linkedin: "https://www.linkedin.com/", image: team2 },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    members: [
      { id: 21, name: "Mani Bro", designation: "Graphic Designer", linkedin: "https://www.linkedin.com/", image: team1 },
      { id: 22, name: "Sanjai", designation: "Brand Designer", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 23, name: "Abishek", designation: "Visual Designer", linkedin: "https://www.linkedin.com/", image: team3 },
      { id: 24, name: "Siva", designation: "Creative Designer", linkedin: "https://www.linkedin.com/", image: team4 },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    members: [
      { id: 25, name: "Joseph", designation: "Video Editor", linkedin: "https://www.linkedin.com/", image: team5 },
      { id: 26, name: "Jai", designation: "Motion Graphics Artist", linkedin: "https://www.linkedin.com/", image: team6 },
       ],
  },
];

function SectionPill({ title }) {
  return (
    <div className="mb-6 flex justify-center sm:mb-8">
      <div className="rounded-full bg-[#FF6E000D] px-4 py-2 text-center text-sm font-medium text-[#FF6E00] sm:px-6 sm:text-base">
        {title}
      </div>
    </div>
  );
}

function TeamCard({ member, priority = false }) {
  return (
    <article className="group h-full">
      <div className="relative h-[280px] overflow-hidden rounded-[18px] bg-[#1a1a1a] sm:h-[320px] md:h-[340px] lg:h-[360px] xl:h-[380px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#ff7a00] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Linkedin size={16} strokeWidth={2.25} />
        </a>

        <div className="absolute bottom-0 left-0 z-20 w-full translate-y-5 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
          <h3 className="text-[16px] font-semibold leading-tight text-white sm:text-[18px]">
            {member.name}
          </h3>
          <p className="mt-1 text-[12px] text-white/80 sm:text-[13px]">
            {member.designation}
          </p>
        </div>
      </div>
    </article>
  );
}

function TeamSection({ title, members }) {
  return (
    <section className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
      <SectionPill title={title} />

      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopAdditionalSlides={members.length}
          speed={900}
          watchOverflow={false}
          observer={true}
          observeParents={true}
          allowTouchMove={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 1.15,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1.35,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="team-swiper"
        >
          {members.map((member, index) => (
            <SwiperSlide key={member.id} className="h-auto">
              <TeamCard member={member} priority={index < 2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12 xl:px-12">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h1 className="text-[28px] font-bold leading-tight text-[#222] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Meet <span className="text-[#f58220]">Our Team!</span>
          </h1>
        </div>

        {TEAM_SECTIONS.map((section) => (
          <TeamSection
            key={section.id}
            title={section.title}
            members={section.members}
          />
        ))}
      </section>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }

        .team-swiper {
          width: 100%;
          overflow: hidden !important;
        }

        .team-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .team-swiper .swiper-slide {
          height: auto;
        }

        .team-swiper::-webkit-scrollbar,
        .team-swiper .swiper-wrapper::-webkit-scrollbar,
        .team-swiper .swiper-slide::-webkit-scrollbar {
          display: none !important;
        }

        .team-swiper,
        .team-swiper .swiper-wrapper,
        .team-swiper .swiper-slide {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `}</style>
    </main>
  );
}