"use client";
import React, { useState } from "react";

interface Project {
    title: string;
    description: string;
    img: string;
    technologies: string[];
}

const Index = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    const projectList: Project[] = [
        {
            title: "Medium-blog",
            description: "End-to-end medium-like blog",
            img: "https://repository-images.githubusercontent.com/410944720/783ebec4-d13b-4a53-99a6-1e79f824c9c4",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
        },
        {
            title: "Mock Paytm",
            description: "Money transfer system",
            img: "https://coracle-blog-media.s3.eu-central-1.amazonaws.com/2024/04/money_transfer-e1544123010732-scaled.jpg",
            technologies: ["Node.js", "Express", "MongoDB", "React"]
        },
        {
            title: "Chat system",
            description: "WebSocket chat under development",
            img: "https://crocoder7.github.io/assets/images/finalChat.png",
            technologies: ["Socket.IO", "React", "Node.js", "Redis"]
        },
        {
            title: "Zerodha E-2-E",
            description: "Learning phase",
            img: "../../../public/zerodha.png",
            technologies: ["React", "Redux", "JavaScript", "CSS"]
        },
    ];

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

    return (
        <div className="min-h-screen  py-8 px-4 flex justify-center">
            <div className="w-full max-w-3xl space-y-6 animate-fade-in">
                <header className="text-center space-y-2">
                    <h1 className="text-4xl font-bold  bg-clip-text text-transparent animate-scale-in">
                        My Projects
                    </h1>
                    <p className="text-gray-600 animate-fade-in">
                        Showcasing my development journey
                    </p>
                </header>

                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search projects…"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full text-sm p-4 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl 
                                 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none 
                                 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md
                                 focus:bg-white focus:scale-[1.02]"
                    />
                    {filteredProjects.length > 0 && (
                        <div className="absolute top-full w-full bg-white/95 backdrop-blur-sm border border-gray-200 
                                      rounded-xl mt-2 shadow-lg z-10 animate-fade-in overflow-hidden">
                            {filteredProjects.map((p, i) => (
                                <div
                                    key={i}
                                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm 
                                             transition-all duration-200 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-400"
                                >
                                    <span className="font-medium">{p.title}</span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {p.technologies.slice(0, 2).map((tech, idx) => (
                                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projectList.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden 
                                     border border-gray-200 hover:border-blue-300 transition-all duration-500 
                                     hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2 
                                     animate-scale-in cursor-pointer"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-40 object-cover transition-transform duration-700 
                                             group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="p-5 space-y-3">
                                <div className="space-y-2">
                                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 
                                                 transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="inline-flex items-center px-2.5 py-1 text-xs font-medium 
                                                     bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 
                                                     rounded-full border border-blue-200 hover:border-blue-300
                                                     transition-all duration-200 hover:scale-105 hover:shadow-sm"
                                            style={{ animationDelay: `${(idx * 100) + (techIdx * 50)}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full 
                                          opacity-0 group-hover:opacity-100 transition-all duration-300 
                                          animate-pulse"></div>
                        </div>
                    ))}
                </div>
                
                <footer className="text-center pt-8">
                    <p className="text-sm text-gray-500 animate-fade-in">
                        Built with passion and modern technologies
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Index;
