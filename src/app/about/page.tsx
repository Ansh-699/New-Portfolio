"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

interface Project {
  title: string;
  description: string;
  img: string;
  technologies: string[];
}

const projectList: Project[] = [
  {
    title: "Medium-blog",
    description: "End-to-end medium-like blog",
    img: "/medium.png",
    technologies: [ "Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL" ],
  },
  {
    title: "Mock Paytm",
    description: "Money transfer system",
    img: "/paytm.jpg",
    technologies: ["Node.js", "Express", "Postgress", "React", "Redux", "Tailwind CSS"],
  },
  {
    title: "Chat system",
    description: "WebSocket chat under development",
    img: "/chat.png",
    technologies: ["Socket.IO", "React", "Node.js", "Redis", "Express", "PostgreSQL"],
  },
  {
    title: "Zerodha E-2-E",
    description: "Learning phase",
    img: "/zerodha.png",
    technologies: ["Next", "Redux", "JavaScript", "Tailwind CSS", "Node.js","Turborepo"],
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
    <div className="min-h-screen py-8 px-4 flex justify-center bg-white dark:bg-black transition-colors pt-10 mt-10">
      <div className="w-full max-w-3xl space-y-6">
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
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden
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

                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium
                                   bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800
                                   text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-gray-600
                                   hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-sm"
                        style={{ animationDelay: `${idx * 100 + techIdx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

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
