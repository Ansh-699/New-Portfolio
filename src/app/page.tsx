"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("../components/lottie"), {
  ssr: false,
});

const LottieAnimation2 = dynamic(() => import("../components/lottie3"), {
  ssr: false,
});

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, string> = {
  React: "/react.png",
  TypeScript: "/typescript.png",
  JavaScript: "/js.png",
  Cloudflare: "/cloudflare.jpg",
  Git: "/git.png",
  Docker: "/docker.png",
  AWS: "/aws.png",
  MongoDB: "/mongodb.png",
  Azure: "/azure.webp",
  Linux: "/gnu-bash.png",
  Redis: "/reddis5.jpg",
  "Next.js": "/next.png",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen space-y-7 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Hero Lottie */}
      <div className="w-full flex justify-center pt-8">
        <LottieAnimation />
      </div>

      {/* Hero Section */}
      <section id="hero" className="mt-0">
        <div className="mx-auto w-full max-w-2xl space-y-0">
          <div className="flex justify-between gap-0">
            <div className="flex flex-col flex-1 space-y-1.5 mt-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-3xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <div className="pt-10 pl-7">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border p-1">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <LottieAnimation2 />
                  {/* <AvatarFallback>{DATA.initials}
                    
                  </AvatarFallback> */}
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="mx-auto w-full max-w-2xl flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="mx-auto w-full max-w-3xl flex flex-col gap-y-2 pt-10">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((edu, id) => (
            <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <ResumeCard
                href={edu.href}
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={`${edu.start} - ${edu.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold text-center mb-8">
            Technologies &amp; Tools 🛠️
          </h2>
        </BlurFade>
        <div className="py-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {Object.entries(iconMap).map(([tech, src], idx) => {
              const floatClass = `floating-${(idx % 3) + 1}`;
              return (
                <div
                  key={tech}
                  className={`tech-icon ${floatClass} flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-lg cursor-pointer`}
                >
                  <div className="relative w-12 h-12 mb-2">
                    <Image src={src} alt={tech} fill sizes="48px" className="object-contain" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section id="hackathons">
        <div className="mx-auto w-full max-w-2xl space-y-12 py-2">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Roadmap</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am passionate about learning and have completed {DATA.certifications.length} hackathons.
              </p>
            </div>
          </BlurFade>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.certifications.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Button Section */}
      <section id="contact">
        <div className="mx-auto w-full max-w-2xl flex items-center justify-center px-4 py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="relative inline-flex group">
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px
                  bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]
                  rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              />
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white
                  transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                aria-label="Contact Me"
              >
                Contact Me
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Float animations & tech-icon hover */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(3deg); }
        }
        .floating-1 { animation: float1 8s ease-in-out infinite; }
        .floating-2 { animation: float2 10s ease-in-out infinite; }
        .floating-3 { animation: float3 12s ease-in-out infinite; }
        .tech-icon { transition: transform 0.3s ease; }
        .tech-icon:hover { transform: scale(1.9); }
      `}</style>

      {/* Neon button tilt animation */}
      <style jsx>{`
        @keyframes tilt {
          0%   { transform: rotate(0deg) translateX(0); }
          50%  { transform: rotate(5deg) translateX(2px); }
          100% { transform: rotate(10deg) translateX(0); }
        }
        .animate-tilt { animation: tilt 5s linear infinite; }
      `}</style>
    </main>
  );
}
