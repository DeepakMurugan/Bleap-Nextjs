"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import teamImg1 from "../../assets/team/t1.png";
import teamImg2 from "../../assets/team/t1.png";
import teamImg3 from "../../assets/team/t1.png";
import teamImg4 from "../../assets/team/t1.png";
import teamImg5 from "../../assets/team/t1.png";

const teamsData = [
  {
    id: 1,
    button: "Management",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
  {
    id: 2,
    button: "Creative Team",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
  {
    id: 3,
    button: "Web Team",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
  {
    id: 4,
    button: "Graphic Team",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
  {
    id: 5,
    button: "SEO Team",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
  {
    id: 6,
    button: "Social Media",
    members: [teamImg1, teamImg2, teamImg3, teamImg4, teamImg5],
  },
];

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function useSectionProgress(ref, onActive) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const start = viewportH;
      const end = -rect.height + viewportH;
      const raw = (start - rect.top) / (start - end);
      const next = clamp(raw, 0, 1);

      setProgress(next);

      if (onActive) {
        const triggerLine = viewportH * 0.45;
        if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
          onActive();
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, onActive]);

  return progress;
}

function TeamCard({ member, alt, priority = false, sizes = "100vw" }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[20px] bg-[#f2f2f2]">
      <Image
        src={member}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover grayscale"
      />
    </div>
  );
}

const DesktopTeamSection = memo(function DesktopTeamSection({
  team,
  index,
  setActiveIndex,
}) {
  const sectionRef = useRef(null);
  const progress = useSectionProgress(sectionRef, () => setActiveIndex(index));

  const config = useMemo(() => {
    const leftMembers = team.members.filter((_, i) => i % 2 === 0);
    const rightMembers = team.members.filter((_, i) => i % 2 !== 0);

    const cardHeight = 430;
    const gap = 28;
    const frameHeight = 620;
    const entrySpace = 180;
    const exitSpace = 180;

    const buildTrackHeight = (count) =>
      entrySpace + exitSpace + count * cardHeight + Math.max(count - 1, 0) * gap;

    const leftTrackHeight = buildTrackHeight(leftMembers.length);
    const rightTrackHeight = buildTrackHeight(rightMembers.length);

    const leftMaxShift = Math.max(leftTrackHeight - frameHeight, 0);
    const rightMaxShift = Math.max(rightTrackHeight - frameHeight, 0);

    return {
      leftMembers,
      rightMembers,
      cardHeight,
      gap,
      frameHeight,
      entrySpace,
      exitSpace,
      leftShift: leftMaxShift * progress,
      rightShift: rightMaxShift * progress,
    };
  }, [team.members, progress]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] xl:h-[170vh]"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="grid grid-cols-2 gap-8 xl:gap-10 w-full">
          {/* Left column */}
          <div
            className="relative overflow-hidden rounded-[24px]"
            style={{ height: `${config.frameHeight}px` }}
          >
            <div
              className="absolute inset-x-0 top-0"
              style={{
                transform: `translateY(-${config.leftShift}px)`,
                willChange: "transform",
              }}
            >
              <div style={{ height: `${config.entrySpace}px` }} />

              {config.leftMembers.map((member, i) => (
                <div
                  key={`left-${team.id}-${i}`}
                  className="w-full"
                  style={{
                    height: `${config.cardHeight}px`,
                    marginBottom:
                      i === config.leftMembers.length - 1 ? 0 : `${config.gap}px`,
                  }}
                >
                  <TeamCard
                    member={member}
                    alt={`${team.button} member ${i + 1}`}
                    priority={team.id === 1 && i === 0}
                    sizes="(min-width: 1280px) 28vw, 32vw"
                  />
                </div>
              ))}

              <div style={{ height: `${config.exitSpace}px` }} />
            </div>
          </div>

          {/* Right column */}
          <div
            className="relative overflow-hidden rounded-[24px] mt-12 xl:mt-16"
            style={{ height: `${config.frameHeight}px` }}
          >
            <div
              className="absolute inset-x-0 top-0"
              style={{
                transform: `translateY(-${config.rightShift}px)`,
                willChange: "transform",
              }}
            >
              <div style={{ height: `${config.entrySpace}px` }} />

              {config.rightMembers.map((member, i) => (
                <div
                  key={`right-${team.id}-${i}`}
                  className="w-full"
                  style={{
                    height: `${config.cardHeight}px`,
                    marginBottom:
                      i === config.rightMembers.length - 1 ? 0 : `${config.gap}px`,
                  }}
                >
                  <TeamCard
                    member={member}
                    alt={`${team.button} member ${i + 1}`}
                    sizes="(min-width: 1280px) 28vw, 32vw"
                  />
                </div>
              ))}

              <div style={{ height: `${config.exitSpace}px` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const MobileTeamSection = memo(function MobileTeamSection({ team }) {
  const sectionRef = useRef(null);
  const progress = useSectionProgress(sectionRef);

  const cardHeight = 360;
  const gap = 20;
  const frameHeight = 500;
  const entrySpace = 120;
  const exitSpace = 120;

  const totalTrackHeight =
    entrySpace +
    exitSpace +
    team.members.length * cardHeight +
    Math.max(team.members.length - 1, 0) * gap;

  const maxShift = Math.max(totalTrackHeight - frameHeight, 0);
  const shift = maxShift * progress;

  return (
    <section ref={sectionRef} className="relative h-[150vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col px-5 sm:px-6 pt-8 pb-8">
        <div className="shrink-0">
          <h2 className="max-w-[240px] font-medium leading-[0.92]">
            <span className="block text-[42px] text-[#6b6b6b] sm:text-[52px]">
              Meet
            </span>
            <span className="mt-1 block text-[46px] text-[#ff6a00] sm:text-[58px]">
              Our Team!
            </span>
          </h2>

          <div className="mt-5 inline-flex min-w-[165px] items-center justify-center rounded-full bg-[#fff2e9] px-6 py-2.5 border border-[#ffd7bf]">
            <span className="text-[15px] font-medium text-[#ff6a00]">
              {team.button}
            </span>
          </div>
        </div>

        <div className="mt-8 flex-1 overflow-hidden rounded-[22px]">
          <div
            className="relative w-full"
            style={{
              transform: `translateY(-${shift}px)`,
              willChange: "transform",
            }}
          >
            <div style={{ height: `${entrySpace}px` }} />

            {team.members.map((member, i) => (
              <div
                key={`${team.id}-${i}`}
                className="w-full"
                style={{
                  height: `${cardHeight}px`,
                  marginBottom: i === team.members.length - 1 ? 0 : `${gap}px`,
                }}
              >
                <TeamCard
                  member={member}
                  alt={`${team.button} member ${i + 1}`}
                  sizes="92vw"
                />
              </div>
            ))}

            <div style={{ height: `${exitSpace}px` }} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default function TeamShowcasePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-white text-[#1c1c1c]">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-12 mx-auto max-w-[1500px] px-6 xl:px-12">
        <div className="col-span-4">
          <div className="sticky top-0 h-screen flex items-start pt-12 xl:pt-16">
            <div className="max-w-[280px]">
              <h2 className="font-medium leading-[0.92]">
                <span className="block text-[62px] text-[#6b6b6b] xl:text-[76px]">
                  Meet
                </span>
                <span className="mt-2 block text-[68px] text-[#ff6a00] xl:text-[84px]">
                  Our Team!
                </span>
              </h2>

              <div className="mt-10 inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#fff2e9] border border-[#ffd7bf] px-8 py-3.5">
                <span className="text-[18px] font-medium text-[#ff6a00] xl:text-[20px]">
                  {teamsData[activeIndex]?.button}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          {teamsData.map((team, index) => (
            <DesktopTeamSection
              key={team.id}
              team={team}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        {teamsData.map((team) => (
          <MobileTeamSection key={team.id} team={team} />
        ))}
      </div>
    </main>
  );
}