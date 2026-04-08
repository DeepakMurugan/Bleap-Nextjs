"use client";
import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ===== Section-wise images =====
// Replace these with your actual images
import management1 from "../../assets/team/neeraj.jpg";
import management1Hover from "../../assets/team/neeraj2.jpg";

import management2 from "../../assets/team/neelu.jpg";
import management2Hover from "../../assets/team/neelu2.jpg";

import management3 from "../../assets/team/abishai.jpg";
import management3Hover from "../../assets/team/abishai2.jpg";

import management4 from "../../assets/team/giri.jpg";
import management4Hover from "../../assets/team/giri2.jpg";

import social1 from "../../assets/team/av.png";
import social1Hover from "../../assets/team/av.png";

import social2 from "../../assets/team/av.png";
import social2Hover from "../../assets/team/av.png";

import social3 from "../../assets/team/av.png";
import social3Hover from "../../assets/team/av.png";

import social4 from "../../assets/team/av.png";
import social4Hover from "../../assets/team/av.png";

import social5 from "../../assets/team/av.png";
import social5Hover from "../../assets/team/av.png";

import web1 from "../../assets/team/deepak.jpg";
import web1Hover from "../../assets/team/deepak2.jpg";

import web2 from "../../assets/team/sinamuthu.jpg";
import web2Hover from "../../assets/team/sinamuthu2.jpg";

import web3 from "../../assets/team/av.png";
import web3Hover from "../../assets/team/av.png";

import web4 from "../../assets/team/av.png";
import web4Hover from "../../assets/team/av.png";

import web5 from "../../assets/team/vv1.png";
import web5Hover from "../../assets/team/vv2.png";

import seo1 from "../../assets/team/gowtham.jpg";
import seo1Hover from "../../assets/team/gowtham2.jpg";

import seo2 from "../../assets/team/hasumathi.jpg";
import seo2Hover from "../../assets/team/hasumathi2.jpg";

import seo3 from "../../assets/team/saritha.jpg";
import seo3Hover from "../../assets/team/saritha2.jpg";

import seo4 from "../../assets/team/av.png";
import seo4Hover from "../../assets/team/av.png";

import seo5 from "../../assets/team/av.png";
import seo5Hover from "../../assets/team/av.png";

import design1 from "../../assets/team/av.png";
import design1Hover from "../../assets/team/av.png";

import design2 from "../../assets/team/av.png";
import design2Hover from "../../assets/team/av.png";

import design3 from "../../assets/team/abhishek.jpg";
import design3Hover from "../../assets/team/abhishek2.jpg";

import design4 from "../../assets/team/av.png";
import design4Hover from "../../assets/team/av.png";

import video1 from "../../assets/team/av.png";
import video1Hover from "../../assets/team/av.png";

import video2 from "../../assets/team/av.png";
import video2Hover from "../../assets/team/av.png";

const TEAM_SECTIONS = [
  {
    id: "management",
    title: "Management",
    members: [
      {
        id: 1,
        name: "Neeraj Moorjani",
        designation: "Managing Director",
        linkedin: "https://www.linkedin.com/in/neerajmoorjani/",
        image: management1,
        hoverImage: management1Hover,
      },
      {
        id: 2,
        name: "Neelu moorjani",
        designation: "Head of HR",
        linkedin: "https://www.linkedin.com/",
        image: management2,
        hoverImage: management2Hover,
      },
      {
        id: 3,
        name: "Abishai Billigraham",
        designation: "General Manager",
        linkedin: "https://in.linkedin.com/in/abishaibilligraham",
        image: management3,
        hoverImage: management3Hover,
      },
      {
        id: 4,
        name: "Giridharan R",
        designation: "Technical Head",
        linkedin: "https://www.linkedin.com/in/giridharan-r-b683b1b4/",
        image: management4,
        hoverImage: management4Hover,
      },
    ],
  },
  {
    id: "web",
    title: "Website Design & Development",
    members: [
      {
        id: 11,
        name: "Deepak Murugan",
        designation: "Frontend Developer",
        linkedin: "https://www.linkedin.com/in/deepakmurugan4/",
        image: web1,
        hoverImage: web1Hover,
      },
      {
        id: 12,
        name: "Sinnamuthu",
        designation: "Full Stack Developer",
        linkedin: "#",
        image: web2,
        hoverImage: web2Hover,
      },
      {
        id: 13,
        name: "Arun",
        designation: "backend developer",
        linkedin: "#",
        image: web3,
        hoverImage: web3Hover,
      },
      {
        id: 14,
        name: "Damodaran",
        designation: "UI UX Designer",
        linkedin: "#",
        image: web4,
        hoverImage: web4Hover,
      },
      {
        id: 15,
        name: "Vijay",
        designation: "Intern",
        linkedin: "#",
        image: web5,
        hoverImage: web5Hover,
      },
    ],
  },
  
  {
    id: "social-media",
    title: "Social Media",
    members: [
      {
        id: 6,
        name: "Priya N",
        designation: "Social Media Manager",
        linkedin: "#",
        image: social1,
        hoverImage: social1Hover,
      },
      {
        id: 7,
        name: "Divya M",
        designation: "Content Strategist",
        linkedin: "https://www.linkedin.com/",
        image: social2,
        hoverImage: social2Hover,
      },
      {
        id: 8,
        name: "Keerthana",
        designation: "Reels Specialist",
        linkedin: "https://www.linkedin.com/",
        image: social3,
        hoverImage: social3Hover,
      },
      {
        id: 9,
        name: "Aishwarya",
        designation: "Community Executive",
        linkedin: "https://www.linkedin.com/",
        image: social4,
        hoverImage: social4Hover,
      },
      {
        id: 10,
        name: "Monika",
        designation: "Campaign Executive",
        linkedin: "https://www.linkedin.com/",
        image: social5,
        hoverImage: social5Hover,
      },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    members: [
      {
        id: 16,
        name: "Gowtham",
        designation: "SEO Lead",
        linkedin: "#",
        image: seo1,
        hoverImage: seo1Hover,
      },
      {
        id: 17,
        name: "hasumathi",
        designation: "SEO Analyst",
        linkedin: "#",
        image: seo2,
        hoverImage: seo2Hover,
      },
      {
        id: 18,
        name: "saritha",
        designation: "Technical SEO Executive",
        linkedin: "#",
        image: seo3,
        hoverImage: seo3Hover,
      },
      {
        id: 19,
        name: "Ruban",
        designation: "SEO Executive",
        linkedin: "#",
        image: seo4,
        hoverImage: seo4Hover,
      },
      {
        id: 20,
        name: "kajal",
        designation: "SEO Executive",
        linkedin: "#",
        image: seo5,
        hoverImage: seo5Hover,
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    members: [
      {
        id: 21,
        name: "Mani Bro",
        designation: "Graphic Designer",
        linkedin: "#",
        image: design1,
        hoverImage: design1Hover,
      },
      {
        id: 22,
        name: "Sanjai",
        designation: "Brand Designer",
        linkedin: "#",
        image: design2,
        hoverImage: design2Hover,
      },
      {
        id: 23,
        name: "Abishek",
        designation: "Visual Designer",
        linkedin: "#",
        image: design3,
        hoverImage: design3Hover,
      },
      {
        id: 24,
        name: "Siva",
        designation: "Creative Designer",
        linkedin: "#",
        image: design4,
        hoverImage: design4Hover,
      },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    members: [
      {
        id: 25,
        name: "Joseph",
        designation: "Video Editor",
        linkedin: "#",
        image: video1,
        hoverImage: video1Hover,
      },
      {
        id: 26,
        name: "Jai",
        designation: "Motion Graphics Artist",
        linkedin: "#",
        image: video2,
        hoverImage: video2Hover,
      },
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
  const [active, setActive] = useState(false);

  return (
    <article
      className="group h-full"
      onClick={() => setActive((prev) => !prev)}
    >
      <div
        className="
          relative overflow-hidden rounded-[18px] bg-[#1a1a1a]
          h-[360px] w-full
          sm:h-[400px]
          md:h-[380px]
          lg:h-[360px]
          xl:h-[360px]
          cursor-pointer
        "
      >
        {/* Normal image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className={`
            absolute inset-0 object-cover object-center
            transition-all duration-500 ease-out
            ${active ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"}
            md:group-hover:opacity-0 md:group-hover:scale-[1.04]
          `}
        />

        {/* Hover / alternate image */}
        <Image
          src={member.hoverImage || member.image}
          alt={`${member.name} hover`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className={`
            absolute inset-0 object-cover object-center
            transition-all duration-500 ease-out
            ${active ? "opacity-100 scale-100" : "opacity-0 scale-100"}
            md:group-hover:opacity-100
          `}
        />

        {/* Overlay always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100" />

        {/* LinkedIn always visible */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="
            absolute right-3 top-3 z-20
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white text-[#ff7a00] shadow-lg
          "
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin size={16} strokeWidth={2.25} />
        </a>

        {/* Title + designation always visible */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-4 sm:p-5">
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


// function TeamCard({ member, priority = false }) {
//   return (
//     <article className="group h-full">
//       <div
//         className="
//           relative overflow-hidden rounded-[18px] bg-[#1a1a1a]
//           h-[360px] w-full
//           sm:h-[400px]
//           md:h-[380px]
//           lg:h-[360px]
//           xl:h-[360px]
//         "
//       >
//         {/* Normal image */}
//         <Image
//           src={member.image}
//           alt={member.name}
//           fill
//           priority={priority}
//           sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
//           className="
//             absolute inset-0 object-cover object-center
//             transition-all duration-500 ease-out
//             opacity-100 scale-100
//             group-hover:opacity-0 group-hover:scale-[1.04]
//           "
//         />

//         {/* Hover image */}
//         <Image
//           src={member.hoverImage || member.image}
//           alt={`${member.name} hover`}
//           fill
//           sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
//           className="
//             absolute inset-0 object-cover object-center
//             transition-all duration-500 ease-out
//             opacity-0 scale-[1.00]
//             group-hover:opacity-100 group-hover:scale-100
//           "
//         />

//         <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`${member.name} LinkedIn`}
//           className="absolute right-3 top-3 z-20 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#ff7a00] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
//         >
//           <Linkedin size={16} strokeWidth={2.25} />
//         </a>

//         <div className="absolute bottom-0 left-0 z-20 w-full translate-y-5 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
//           <h3 className="text-[16px] font-semibold leading-tight text-white sm:text-[18px]">
//             {member.name}
//           </h3>
//           <p className="mt-1 text-[12px] text-white/80 sm:text-[13px]">
//             {member.designation}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }








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
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1,
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