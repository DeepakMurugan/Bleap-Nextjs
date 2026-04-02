"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";



import "swiper/css";

// Replace these with your real images
import team1 from "../../assets/team/t1.png";
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
      { id: 1, name: "Arun Kumar", designation: "Founder & CEO", linkedin: "https://www.linkedin.com/", image: team1 },
      { id: 2, name: "Rahul Dev", designation: "Director", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 3, name: "Vignesh S", designation: "Operations Head", linkedin: "https://www.linkedin.com/", image: team3 },
      { id: 4, name: "Karthik R", designation: "Strategy Lead", linkedin: "https://www.linkedin.com/", image: team4 },
      { id: 5, name: "Suresh M", designation: "Business Head", linkedin: "https://www.linkedin.com/", image: team5 },
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
      { id: 11, name: "Deepak", designation: "Frontend Developer", linkedin: "https://www.linkedin.com/", image: team1 },
      { id: 12, name: "Sanjay", designation: "UI Developer", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 13, name: "Nivetha", designation: "UX Designer", linkedin: "https://www.linkedin.com/", image: team3 },
      { id: 14, name: "Harish", designation: "Backend Developer", linkedin: "https://www.linkedin.com/", image: team4 },
      { id: 15, name: "Prakash", designation: "Full Stack Developer", linkedin: "https://www.linkedin.com/", image: team6 },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    members: [
      { id: 16, name: "Sathish", designation: "SEO Lead", linkedin: "https://www.linkedin.com/", image: team5 },
      { id: 17, name: "Nandhini", designation: "SEO Analyst", linkedin: "https://www.linkedin.com/", image: team6 },
      { id: 18, name: "Rohit", designation: "Technical SEO Executive", linkedin: "https://www.linkedin.com/", image: team7 },
      { id: 19, name: "Vivek", designation: "Content SEO Specialist", linkedin: "https://www.linkedin.com/", image: team8 },
      { id: 20, name: "Arjun", designation: "SEO Strategist", linkedin: "https://www.linkedin.com/", image: team2 },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    members: [
      { id: 21, name: "Monisha", designation: "Graphic Designer", linkedin: "https://www.linkedin.com/", image: team1 },
      { id: 22, name: "Aravind", designation: "Brand Designer", linkedin: "https://www.linkedin.com/", image: team2 },
      { id: 23, name: "Jeeva", designation: "Visual Designer", linkedin: "https://www.linkedin.com/", image: team3 },
      { id: 24, name: "Saranya", designation: "Creative Designer", linkedin: "https://www.linkedin.com/", image: team4 },
      { id: 25, name: "Rakesh", designation: "Illustrator", linkedin: "https://www.linkedin.com/", image: team7 },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    members: [
      { id: 26, name: "Praveen", designation: "Video Editor", linkedin: "https://www.linkedin.com/", image: team5 },
      { id: 27, name: "Ajay", designation: "Motion Graphics Artist", linkedin: "https://www.linkedin.com/", image: team6 },
      { id: 28, name: "Kishore", designation: "Video Producer", linkedin: "https://www.linkedin.com/", image: team7 },
      { id: 29, name: "Shalini", designation: "Post Production Executive", linkedin: "https://www.linkedin.com/", image: team8 },
      { id: 30, name: "Vasu", designation: "Video Content Editor", linkedin: "https://www.linkedin.com/", image: team3 },
    ],
  },
];

function SectionPill({ title }) {
  return (
    <div className="mb-6 flex justify-center sm:mb-8">
      <div className="rounded-full bg-[#FF6E000D] px-5 py-2 text-center text-[18px] font-medium text-[#FF6E00]  sm:px-7 sm:py-2.5 sm:text-[16px]">
        {title}
      </div>
    </div>
  );
}

function TeamCard({ member, priority = false }) {
  return (
    <article className="group h-full">
      <div className="relative h-[320px] overflow-hidden rounded-[18px] bg-[#1a1a1a] sm:h-[360px] lg:h-[380px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 92vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
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
  const shouldLoop = members.length > 4;

  return (
    <section className="mb-14 sm:mb-16 md:mb-20">
      <SectionPill title={title} />

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          loop={shouldLoop}
          speed={850}
          grabCursor
          watchOverflow
          observer
          observeParents
          spaceBetween={16}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1.15,
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
          className="team-swiper no-scrollbar"
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
    <main className=" bg-white">
      <section className=" container px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="mb-8 text-center sm:mb-10">
          <h1 className="text-[30px] font-bold leading-tight text-[#222] sm:text-[38px] md:text-[42px]">
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
        .team-swiper {
          overflow: visible;
        }

        .team-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .team-swiper .swiper-slide {
          height: auto;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none!important;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none!important;
        }

        @media (max-width: 767px) {
          .team-swiper {
            overflow: hidden!important;
          }
        }
      `}</style>
    </main>
  );
}