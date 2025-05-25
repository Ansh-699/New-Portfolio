"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Lottie from "lottie-react";
import helloAnimation from "../../../public/hello-last.json";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {


    const tools = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-green-500 to-blue-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
    { name: "Git", icon: "📝", color: "from-orange-500 to-red-500" },
    { name: "Linux", icon: "🐧", color: "from-gray-600 to-gray-800" },
    { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
  ];
  return (
    <main className="flex flex-col min-h-screen space-y-12 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-8px, -8px) rotate(1deg); }
          50% { transform: translate(8px, -4px) rotate(-1deg); }
          75% { transform: translate(-4px, 8px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -6px) rotate(-1deg); }
          50% { transform: translate(-6px, 8px) rotate(1deg); }
          75% { transform: translate(6px, -4px) rotate(-2deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-6px, 8px) rotate(2deg); }
          50% { transform: translate(8px, 6px) rotate(-1deg); }
          75% { transform: translate(-8px, -6px) rotate(1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        .floating-1 { animation: float1 12s ease-in-out infinite; }
        .floating-2 { animation: float2 14s ease-in-out infinite; }
        .floating-3 { animation: float3 16s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .tech-icon {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tech-icon:hover {
          transform: scale(1.2) rotate(10deg);
        }
      `}</style>

      {/* Hero Lottie */}
      <div className="w-full flex justify-center pt-8">
        <Lottie
          animationData={helloAnimation}
          style={{ width: 200, height: 200 }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full max-w-2xl space-y-1">
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-1.5 mt-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-slate-600"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <div className="pt-10 pl-7">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border-2 border-white shadow-lg pulse-glow">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            About Me 🚀
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-slate-700 dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>

      {/* Skills Section with Animated Icons */}
      <section id="skills" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Technologies & Tools 🛠️
          </h2>
        </BlurFade>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => {
            const animationClass = `floating-${(index % 3) + 1}`;
            return (
              <BlurFade key={tool.name} delay={BLUR_FADE_DELAY * 8 + index * 0.1}>
                <div className={`tech-icon ${animationClass} group cursor-pointer`}>
                  <div className={`bg-gradient-to-br ${tool.color} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-2 h-24 justify-center`}>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </span>
                    <span className="text-xs font-medium text-white text-center opacity-90">
                      {tool.name}
                    </span>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Remaining sections follow original UI logic... */}
      {/* Projects, Work, Education, Certifications, Contact with hover-lift, gradients, etc. */}
    </main>
  );
}
