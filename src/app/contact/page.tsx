"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import dynamic from "next/dynamic";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const LottieAnimation = dynamic(() => import("../../components/lottie2"), {
  ssr: false,
});

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent successfully! I'll get back to you soon.");
    setFormData({ email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Ansh-699",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ansh-tyagi7845/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/Ansh7845",
      color: "hover:text-sky-500",
    },
  ];

  if (!mounted) return null; 

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulse-border {
          0%,100% { border-color: rgb(229, 231, 235); }
          50%     { border-color: rgb(59, 130, 246); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .pulse-border  { animation: pulse-border 2s ease-in-out infinite; }
      `}</style>

      <main className="min-h-screen flex items-center justify-center px-4 py-8 pt-10 mt-10 bg-white dark:bg-darkbg transition-colors">
        <div className="w-full max-w-6xl">
          <section className="glass-effect rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 space-y-8">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 dark:from-gray-100 dark:via-yellow-300 dark:to-pink-500"
                    text="Contact Me"
                  />
                  <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                      I&apos;d love to work with you! Let&apos;s create something amazing together.
                    </p>
                  </BlurFade>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <div className="flex justify-center lg:justify-start space-x-6">
                    {socialLinks.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        className={`icon-bounce p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${s.color}`}
                        aria-label={s.name}
                      >
                        <s.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <form onSubmit={sendEmail} className="space-y-6">
                    {/** Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Your Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@gmail.com"
                          required
                          className="pl-11 h-12 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-colors duration-300 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                    </div>

                    {/** Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Subject
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 w-5 h-5" />
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Let's collaborate!"
                          required
                          className="pl-11 h-12 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-colors duration-300 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                    </div>

                    {/** Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hi!"
                        required
                        className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-colors duration-300 rounded-xl resize-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-500 dark:to-pink-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </BlurFade>
              </div>

              {/* Right */}
              <div className="p-8 lg:p-12 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <div className="text-center space-y-8">
                    <div className="float-animation">
                      <div className="w-48 h-48 mx-auto rounded-full flex items-center justify-center shadow-2xl bg-white dark:bg-gray-800">
                        <LottieAnimation />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Let&apos;s Start a Conversation!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 max-w-sm">
                        I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 text-center">
                      <div className="hover-lift p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                        <div className="text-blue-600 dark:text-blue-400 font-semibold">Response Time</div>
                        <div className="text-gray-600 dark:text-gray-300">Within 24 hours</div>
                      </div>
                      <div className="hover-lift p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                        <div className="text-purple-600 dark:text-purple-400 font-semibold">Availability</div>
                        <div className="text-gray-600 dark:text-gray-300">Open for projects</div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glass-effect {
          background: rgba(20, 20, 20, 0.75);
          border: 1px solid rgba(50, 50, 50, 0.5);
        }
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .icon-bounce {
          transition: all 0.3s ease;
        }
        .icon-bounce:hover {
          transform: scale(1.2) rotate(10deg);
        }
      `}</style>
    </>
  );
}
