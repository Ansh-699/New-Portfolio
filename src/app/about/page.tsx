"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

interface Project {
  title: string;
  description: string;
  img: string;
  technologies: string[];
  liveDemo?: string;
}

const techIconMap: Record<string, string> = {
  "Next.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
  "TypeScript": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "Tailwind": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "Prisma": "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
  "PostgreSQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  "Postgress": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  "Node.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "Express": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  "React": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "Redux": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "Redis": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  "JavaScript": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "websockets": "https://w7.pngwing.com/pngs/667/16/png-transparent-websocket-hd-logo-thumbnail.png",
  "Turborepo": "https://images.seeklogo.com/logo-png/42/2/turborepo-logo-png_seeklogo-428038.png",
  "Next": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
};


const projectList: Project[] = [
  {
    title: "Medium-blog",
    description: "End-to-end medium-like blog",
    img: "/medium.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    liveDemo: "https://medium-frontend-two.vercel.app/",
  },
  {
    title: "Attendance Dashboard",
    description: "attendance monitor system for ABES engg.. college",
    img: "/attendance.png",
    technologies: ["Node.js", "Express", "Postgress", "React", "Redux", "Tailwind CSS"],
    liveDemo: "https://www.attendanceaims.live/"
  },
  {
    title: "OCT crypto platform",
    description: "crypto dashboard frontend management ",
    img: "/crypto1.png",
    technologies: ["React", "Node.js", "Redis", "PostgreSQL"],
    liveDemo: "https://oct-final.vercel.app/"
  },
  {
    title: "Excalidraw Clone",
    description: "peer to peer drawing app",
    img: "/excalidraw_logo.png",
    technologies: ["Next", "websockets", "JavaScript", "Tailwind CSS", "Node.js", "Turborepo"],
    liveDemo: "https://excalidraw.anshtyagi.me/"
  },
];

const BLUR_FADE_DELAY = 0.04;

const Index = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchTerm(q);
    if (q) {
      setFilteredProjects(
        projectList.filter((p) =>
          p.title.toLowerCase().includes(q.toLowerCase())
        )
      );
    } else {
      setFilteredProjects([]);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen py-8 px-4 flex justify-center bg-white dark:bg-darkbg transition-colors pt-10 mt-10 max-w-3xl mx-auto">
      <div className="w-full max-w-3xl space-y-6 ">
        {/* Header */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="block w-full text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          text="My Projects"
        />

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Showcasing my development journey
          </p>
        </BlurFade>

        {/* Search Input */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="relative group">
            <input
              type="text"
              placeholder="Search projects…"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full text-sm p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl
                         focus:border-blue-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none
                         transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:bg-white dark:focus:bg-gray-800 focus:scale-[1.02]"
            />

            {filteredProjects.length > 0 && (
              <div className="absolute top-full w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl mt-2 shadow-lg z-10 overflow-hidden">
                {filteredProjects.map((p, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer text-sm
                               transition-all duration-200 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-400"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {p.title}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.technologies.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectList.map((project, idx) => (
            <BlurFade key={idx} delay={BLUR_FADE_DELAY * 4 + idx * 0.05}>
              <div
  className="group relative min-h-[400px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden
             border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500
             transition-all duration-500 hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900
             hover:-translate-y-2 cursor-pointer"
  style={{ animationDelay: `${idx * 100}ms` }}
>

                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  width={400}
                  height={160}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-5 space-y-3 pb-16">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
<div className="flex flex-wrap gap-2 items-center">
  {project.technologies.map((tech, techIdx) => (
    <div
      key={techIdx}
      className="flex items-center gap-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 px-2 py-1 rounded-full
                 border border-blue-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500
                 transition-all duration-200 hover:scale-105"
    >
      {techIconMap[tech] ? (
        <img
          src={techIconMap[tech]}
          alt={tech}
          title={tech}
          className="w-4 h-4 object-contain"
        />
      ) : null}
      <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">{tech}</span>
    </div>
  ))}
</div>

                </div>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2
                               bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800
                               text-white px-4 py-2 rounded-lg text-sm font-medium
                               hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900
                               transition-all duration-300 hover:shadow-lg hover:scale-105 group/button"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:rotate-45" />
                    Live Demo
                  </a>
                )}

                <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full
                                opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Footer */}
        <BlurFade delay={BLUR_FADE_DELAY * 5 + projectList.length * 0.05}>
          <footer className="text-center pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with passion and modern technologies
            </p>
          </footer>
        </BlurFade>
      </div>
    </div>
  );
};

export default Index;
