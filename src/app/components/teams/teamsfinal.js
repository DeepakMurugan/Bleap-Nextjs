"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ===== Section-wise images =====

// Management
import management1 from "../../assets/team/neeraj.jpg";
import management1Hover from "../../assets/team/neeraj2.jpg";

import management2 from "../../assets/team/neelu.jpg";
import management2Hover from "../../assets/team/neelu2.jpg";

import management3 from "../../assets/team/abishai.jpg";
import management3Hover from "../../assets/team/abishai2.jpg";

import management4 from "../../assets/team/giri.jpg";
import management4Hover from "../../assets/team/giri2.jpg";

// Social Media
import social1 from "../../assets/team/akhil.jpg";
import social1Hover from "../../assets/team/akhil.jpg";

import social2 from "../../assets/team/prakash.jpg";
import social2Hover from "../../assets/team/prakash2.jpg";

import social3 from "../../assets/team/aedan.jpg";
import social3Hover from "../../assets/team/aedan2.jpg";

// import social4 from "../../assets/team/av.png";
// import social4Hover from "../../assets/team/av.png";

import social5 from "../../assets/team/Preetha.png";
import social5Hover from "../../assets/team/Preetha2.png";

import social6 from "../../assets/team/av.png";
import social6Hover from "../../assets/team/av.png";

import social7 from "../../assets/team/Keerthana.png";
import social7Hover from "../../assets/team/Keerthana2.png";

import social8 from "../../assets/team/Pardhiv.png";
import social8Hover from "../../assets/team/Pardhiv2.png";

import social9 from "../../assets/team/av.png";
import social9Hover from "../../assets/team/av.png";

import social10 from "../../assets/team/av.png";
import social10Hover from "../../assets/team/av.png";

// Web
import web1 from "../../assets/team/deepak.jpg";
import web1Hover from "../../assets/team/deepak2.jpg";

import web2 from "../../assets/team/sinamuthu.jpg";
import web2Hover from "../../assets/team/sinamuthu2.jpg";

import web3 from "../../assets/team/av.png";
import web3Hover from "../../assets/team/av.png";

import web4 from "../../assets/team/Damodaran.png";
import web4Hover from "../../assets/team/Damodaran2.png";

import web5 from "../../assets/team/vijay.png";
import web5Hover from "../../assets/team/vijay2.png";

// SEO
import seo1 from "../../assets/team/gowtham.jpg";
import seo1Hover from "../../assets/team/gowtham2.jpg";

import seo2 from "../../assets/team/hasumathi.jpg";
import seo2Hover from "../../assets/team/hasumathi2.jpg";

import seo3 from "../../assets/team/saritha.jpg";
import seo3Hover from "../../assets/team/saritha2.jpg";

import seo4 from "../../assets/team/ruban.png";
import seo4Hover from "../../assets/team/ruban2.png";

import seo5 from "../../assets/team/kajal.png";
import seo5Hover from "../../assets/team/kajal2.png";

// Design
import design1 from "../../assets/team/av.png";
import design1Hover from "../../assets/team/av.png";

import design2 from "../../assets/team/sanjaiDharshan.jpg";
import design2Hover from "../../assets/team/sanjaiDharshan2.jpg";

import design3 from "../../assets/team/abhishek.jpg";
import design3Hover from "../../assets/team/abhishek2.jpg";

import design4 from "../../assets/team/av.png";
import design4Hover from "../../assets/team/av.png";

import design5 from "../../assets/team/partha.jpg";
import design5Hover from "../../assets/team/partha2.jpg";

// Video
import video1 from "../../assets/team/jayDesai.jpg";
import video1Hover from "../../assets/team/jayDesai2.jpg";

import video2 from "../../assets/team/av.png";
import video2Hover from "../../assets/team/av.png";

import video3 from "../../assets/team/av.png";
import video3Hover from "../../assets/team/av.png";

import video4 from "../../assets/team/av.png";
import video4Hover from "../../assets/team/av.png";

import video5 from "../../assets/team/av.png";
import video5Hover from "../../assets/team/av.png";

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
        name: "Neelu Moorjani",
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
        designation: "Front End Developer",
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
        designation: "Backend Developer",
        linkedin: "#",
        image: web3,
        hoverImage: web3Hover,
      },
      {
        id: 14,
        name: "Damodaran",
        designation: "UI/UX Designer",
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
    id: "graphic-design",
    title: "Graphic Design",
    members: [
       {
        id: 35,
        name: "Partha Sarathy",
        designation: "Design Head",
        linkedin: "#",
        image: design5,
        hoverImage: design5Hover,
      },
      {
        id: 21,
        name: "Mani",
        designation: "Graphic Designer",
        linkedin: "#",
        image: design1,
        hoverImage: design1Hover,
      },
      {
        id: 22,
        name: "Sanjai Dharshan R",
        designation: "Graphic Designer",
        linkedin: "https://www.linkedin.com/in/sanjai-dharshan/",
        image: design2,
        hoverImage: design2Hover,
      },
      {
        id: 23,
        name: "Abishek M",
        designation: "Jr. Graphic Designer",
        linkedin: "#",
        image: design3,
        hoverImage: design3Hover,
      },
      {
        id: 24,
        name: "Siva",
        designation: "Graphic Designer",
        linkedin: "#",
        image: design4,
        hoverImage: design4Hover,
      },
    ],
  },

  {
    id: "social-media",
    title: "Social Media",
    members: [
      {
        id: 6,
        name: "Akhil Shekar",
        designation: "Campign Manager - Meta",
        linkedin: "#",
        image: social1,
        hoverImage: social1Hover,
      },
      {
        id: 7,
        name: "Prakash",
        designation: "Social Media Executive",
        linkedin: "https://www.linkedin.com/in/prakash-s-dm17/",
        image: social2,
        hoverImage: social2Hover,
      },
      {
        id: 8,
        name: "Aedan Kyle",
        designation: "Social Media Executive",
        linkedin: "#",
        image: social3,
        hoverImage: social3Hover,
      },
    //   {
    //     id: 9,
    //     name: "Sakti Devi Bavatarini M",
    //     designation: "Social Media Executive",
    //     linkedin: "#",
    //     image: social4,
    //     hoverImage: social4Hover,
    //   },
      {
        id: 10,
        name: "Preetha Saravanane",
        designation: "Social Media Executive",
        linkedin: "https://www.linkedin.com/in/preetha-saravanane/",
        image: social5,
        hoverImage: social5Hover,
      },
      {
        id: 27,
        name: "Harini D",
        designation: "Sr. Social Media & Ads executive",
        linkedin: "#",
        image: social6,
        hoverImage: social6Hover,
      },
      {
        id: 28,
        name: "Keerthana",
        designation: "Sr.Executive - Social Media & Meta Ads",
        linkedin: "#",
        image: social7,
        hoverImage: social7Hover,
      },
      {
        id: 29,
        name: "N Pardhiv",
        designation: "Social Media Intern",
        linkedin: "#",
        image: social8,
        hoverImage: social8Hover,
      },
    //   {
    //     id: 30,
    //     name: "Meena",
    //     designation: "Influencer Manager",
    //     linkedin: "#",
    //     image: social9,
    //     hoverImage: social9Hover,
    //   },
    //   {
    //     id: 31,
    //     name: "Karthik",
    //     designation: "Performance Marketer",
    //     linkedin: "#",
    //     image: social10,
    //     hoverImage: social10Hover,
    //   },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    members: [
      {
        id: 16,
        name: "Gowtham",
        designation: "SEO Analyst",
        linkedin: "https://www.linkedin.com/in/gowtham-krishna-dm/",
        image: seo1,
        hoverImage: seo1Hover,
      },
      {
        id: 17,
        name: "Hasumathi",
        designation: "SEO Executive",
        linkedin: "https://www.linkedin.com/in/hasumathi-s/",
        image: seo2,
        hoverImage: seo2Hover,
      },
      {
        id: 18,
        name: "Saritha",
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
        name: "Kajal",
        designation: "SEO Executive",
        linkedin: "#",
        image: seo5,
        hoverImage: seo5Hover,
      },
    ],
  },
 
  {
    id: "video-editing",
    title: "Video Editing",
    members: [
      {
        id: 25,
        name: "Jay Desai",
        designation: "Video Editor",
        linkedin: "#",
        image: video1,
        hoverImage: video1Hover,
      },
      {
        id: 26,
        name: "Joseph",
        designation: "Video Editor",
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

  const hasValidLinkedIn =
    member.linkedin &&
    member.linkedin !== "#" &&
    member.linkedin.trim() !== "";

  return (
    <article
      className="group h-full"
      onClick={() => setActive((prev) => !prev)}
    >
      <div
        className="
          relative h-[360px] w-full cursor-pointer overflow-hidden rounded-[18px] bg-[#1a1a1a]
          sm:h-[400px]
          md:h-[380px]
          lg:h-[360px]
          xl:h-[360px]
        "
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className={`
            absolute inset-0 object-cover object-center
            transition-all duration-500 ease-out
            ${active ? "scale-[1.04] opacity-0" : "scale-100 opacity-100"}
            md:group-hover:scale-[1.04] md:group-hover:opacity-0
          `}
        />

        <Image
          src={member.hoverImage || member.image}
          alt={`${member.name} hover`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className={`
            absolute inset-0 object-cover object-center
            transition-all duration-500 ease-out
            ${active ? "scale-100 opacity-100" : "scale-100 opacity-0"}
            md:group-hover:opacity-100
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {hasValidLinkedIn ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="
              absolute right-3 top-3 z-20
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white text-[#ff7a00] shadow-lg
              transition-transform duration-300 hover:scale-105
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={16} strokeWidth={2.25} />
          </a>
        ) : (
          <div
            className="
              absolute right-3 top-3 z-20
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white/90 text-[#ff7a00] shadow-lg
              opacity-70
            "
            aria-hidden="true"
          >
            <Linkedin size={16} strokeWidth={2.25} />
          </div>
        )}

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

function TeamSection({ title, members }) {
  return (
    <section className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
      <SectionPill title={title} />

      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={members.length > 4}
          loopAdditionalSlides={members.length}
          speed={900}
          watchOverflow={true}
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