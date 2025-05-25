"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import mailAnimation from "../../../public/mail.json";
import Lottie from 'lottie-react';


import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(
      "Your message has been sent successfully! I'll get back to you soon."
    );
    setFormData({ email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Ansh-699", color: "hover:text-gray-900" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
  ];

  return (
    <>
      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-border {
                    0%, 100% { border-color: rgb(229, 231, 235); }
                    50% { border-color: rgb(59, 130, 246); }
                }
                .float-animation { animation: float 6s ease-in-out infinite; }
                .pulse-border { animation: pulse-border 2s ease-in-out infinite; }
                .glass-effect {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
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

      <main className="min-h-screen flex items-center justify-center px-4 py-8 pt-10 mt-10">
        <div className="w-full max-w-6xl">
          <section className="glass-effect rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Contact Form */}
              <div className="p-8 lg:p-12 space-y-8">
                <div className="text-center lg:text-left">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4"
                    text="Contact Me"
                  />
                  <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <p className="text-lg text-gray-600 font-light">
                      I&apos;d love to work with you! Let&apos;s create
                      something amazing together.
                    </p>
                  </BlurFade>
                </div>

                {/* Social Links */}
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <div className="flex justify-center lg:justify-start space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`icon-bounce p-3 rounded-full bg-gray-100 text-gray-600 ${social.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </BlurFade>

                {/* Contact Form */}
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <form onSubmit={sendEmail} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Your Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ansh@gmail.com"
                          className="pl-11 h-12 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Subject
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Let's collaborate!"
                          className="pl-11 h-12 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Tell me about your project or just say hi! I'm excited to hear from you..."
                        className="border-2 hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 rounded-xl resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </BlurFade>
              </div>

              {/* Right Side - Animated Illustration */}
              <div className="p-8 lg:p-12 flex items-center justify-center bg-gray-50">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <div className="text-center space-y-8">
                    <div className="float-animation">
                      <div className="w-48 h-48 mx-auto rounded-full flex items-center justify-center shadow-2xl bg-white">
                        {/* <Mail className="w-24 h-24 text-blue-600" /> */}
       <Lottie animationData={mailAnimation} style={{ width: 350, height: 300 }} />


                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">Let&apos;s Start a Conversation!</h3>
                      <p className="text-gray-600 max-w-sm">
                        I&apos;m always excited to discuss new projects,
                        creative ideas, or opportunities to be part of your
                        vision.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-center">
                      <div className="hover-lift p-4 bg-white rounded-xl shadow-lg">
                        <div className="text-blue-600 font-semibold">
                          Response Time
                        </div>
                        <div className="text-gray-600">Within 24 hours</div>
                      </div>
                      <div className="hover-lift p-4 bg-white rounded-xl shadow-lg">
                        <div className="text-purple-600 font-semibold">
                          Availability
                        </div>
                        <div className="text-gray-600">Open for projects</div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}