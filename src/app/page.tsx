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
import Lottie from "lottie-react";
import helloAnimation from "../../public/hello-last.json";

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, string> = {
  React: "/react.png",
  TypeScript: "/typescript.png",
  JavaScript: "/next.png",
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
    <main className="flex flex-col min-h-screen space-y-12 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center pt-8">
        <Lottie animationData={helloAnimation} style={{ width: 200, height: 200 }} />
      </div>

     

      <section id="hero" className="mt-0">
        <div className="mx-auto w-full max-w-2xl space-y-1">
          <div className="gap-0 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5 mt-4">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none" yOffset={8} text={`Hi, I'm ${DATA.name}`} />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>
            <div className="pt-10 pl-7">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border p-1">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

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

      <section id="education">
        <div className="mx-auto w-full max-w-3xl flex flex-col gap-y- pt-10 items-start justify-start">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .floating-1 { animation: float1 8s ease-in-out infinite; }
        .floating-2 { animation: float2 10s ease-in-out infinite; }
        .floating-3 { animation: float3 12s ease-in-out infinite; }
        .tech-icon { transition: transform 0.3s ease; }
        .tech-icon:hover { transform: scale(1.1); }
      `}</style>

      {/* Existing skills section left untouched */}
      <section id="skills" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold text-center mb-8">Technologies &amp; Tools 🛠️</h2>
        </BlurFade>

        <section id="all-icons" className="py-8">
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
      </section>
      </section>

      <section id="hackathons">
        <div className="mx-auto w-full max-w-2xl space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I love improving myself.</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am passionate about learning and growth, which has driven me to pursue certifications and attend {DATA.certifications.length}+ hackathons.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
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
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto w-full max-w-2xl grid items-center justify-center gap-4 px-4 text-center md:px-6 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
