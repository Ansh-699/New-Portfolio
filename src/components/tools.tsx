<nav className="sticky top-0 z-50 bg-white shadow-md"></nav>
import Lottie from "lottie-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";



const BLUR_FADE_DELAY = 0.04;

const Home = () => {


    const tools = [
        { name: "", className: "1", src: "html.jpeg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "", className: "2", src: "css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "", className: "3", src: "js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "", className: "4", src: "cloudflare.jpg", link: "https://www.cloudflare.com/" },
        { name: "", className: "5", src: "express.webp", link: "https://expressjs.com/" },
        { name: "", className: "6", src: "linux.jpg", link: "https://www.linux.org/" },
        { name: "", className: "7", src: "mongodb.png", link: "https://www.mongodb.com/" },
        { name: "", className: "8", src: "mysql.jpg", link: "https://www.mysql.com/" },
        { name: "", className: "9", src: "gnu-bash.png", link: "https://www.gnu.org/software/bash/" },
        { name: "", className: "10", src: "docker.png", link: "https://www.docker.com/" },
        { name: "", className: "11", src: "react.png", link: "https://reactjs.org/" },
        { name: "", className: "12", src: "git.png", link: "https://git-scm.com/" },
        { name: "", className: "13", src: "tailwind-css.svg", link: "https://tailwindcss.com/" },
        { name: "", className: "14", src: "azure.webp", link: "https://azure.microsoft.com/" },
        { name: "", className: "15", src: "aws.png", link: "https://aws.amazon.com/" },
        { name: "", className: "16", src: "reddis5.jpg", link: "https://redis.io/", customWidth: "w-13" },
    ];

    

    const iconRows = [[3], [4], [5], [tools.length - 12]];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-1 text-black">
            <style>
                {`
                @keyframes float1 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(-5px, -5px);
                    }
                    50% {
                        transform: translate(5px, 0);
                    }
                    75% {
                        transform: translate(0, 5px);
                    }
                }

                @keyframes float2 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(5px, -5px);
                    }
                    50% {
                        transform: translate(0, 5px);
                    }
                    75% {
                        transform: translate(-5px, 0);
                    }
                }

                @keyframes float3 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(0, -5px);
                    }
                    50% {
                        transform: translate(5px, 5px);
                    }
                    75% {
                        transform: translate(-5px, 0);
                    }
                }

                .floating-1 {
                    animation: float1 10s ease-in-out infinite;
                }

                .floating-2 {
                    animation: float2 12s ease-in-out infinite;
                }

                .floating-3 {
                    animation: float3 14s ease-in-out infinite;
                }

                .hover-scale {
                    transition: transform 0.3s ease-in-out;
                }

                .hover-scale:hover {
                    transform: scale(1.1);
                }
                `}
            </style>
           
        

            <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                My Journey in the Last Year
                </h2>
               
              </div>
            </div>
          </BlurFade>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-5xl px-4">
            </div>


            <div className="mt-10 w-full max-w-5xl text-center">

           
               
                <div className="space-y-6">
                    {iconRows.map((rowSize, rowIndex) => (
                        <div className="flex justify-center gap-6" key={rowIndex}>
                            {tools.splice(0, rowSize[0]).map((tool, index) => {
                                const animationClass = `floating-${(index % 3) + 1}`;
                                return (
                                    <a
                                        key={index}
                                        href={tool.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex flex-col items-center hover-scale`}
                                    >
                                        <img
                                            src={tool.src}
                                            alt={tool.name}
                                            className={`transform transition-transform duration-200 ${animationClass} ${
                                                tool.customWidth || "w-16"
                                            } h-16`}
                                        />
                                        <span className="text-sm text-gray-600 mt-2">{tool.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
