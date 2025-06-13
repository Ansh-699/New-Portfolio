"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tailLength: number;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile if width < md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let windowWidth = isMobile ? 200 : window.innerWidth;
    let windowHeight = isMobile ? 200 : window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const numStars = isMobile ? 15 : 60;

    const stars: Star[] = Array.from({ length: numStars }, () => {
      const speed = Math.random() * (isMobile ? 1.0 : 1.5) + 1.0;
      const angle = (3 * Math.PI) / 4; // 135° direction
      const vx = speed * Math.cos(angle);
      const vy = speed * Math.sin(angle);
      const tailLength = Math.random() * (isMobile ? 40 : 70) + (isMobile ? 20 : 40);

      return {
        vx,
        vy,
        tailLength,
        x: windowWidth + Math.random() * windowWidth,
        y: Math.random() * (windowHeight / 2),
      };
    });

    const getGradient = (star: Star) => {
      const tailX = star.x - star.vx * star.tailLength;
      const tailY = star.y - star.vy * star.tailLength;

      const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);

      const startColor =
        resolvedTheme === "dark" ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.7)";
      const endColor =
        resolvedTheme === "dark" ? "rgba(255,255,255,0)" : "rgba(0,0,0,0)";

      gradient.addColorStop(0, startColor);
      gradient.addColorStop(1, endColor);
      return gradient;
    };

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, windowWidth, windowHeight);

      for (const star of stars) {
        ctx.strokeStyle = getGradient(star);
        ctx.lineWidth = isMobile ? 1 : 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - star.vx * star.tailLength,
          star.y - star.vy * star.tailLength
        );
        ctx.stroke();

        star.x += star.vx;
        star.y += star.vy;

        const tailX = star.x - star.vx * star.tailLength;
        const tailY = star.y - star.vy * star.tailLength;

        if (tailX < -100 || tailY > windowHeight + 100) {
          star.x = windowWidth + Math.random() * windowWidth;
          star.y = Math.random() * (windowHeight / 2);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      windowWidth = isMobile ? 200 : window.innerWidth;
      windowHeight = isMobile ? 200 : window.innerHeight;
      canvas.width = windowWidth;
      canvas.height = windowHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, mounted, isMobile]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      id="shooting-stars-canvas"
      className={`pointer-events-none z-[-10] transition-colors fixed ${
        isMobile
          ? "bottom-2 right-2 w-[400px] h-[700px] rounded-lg opacity-70"
          : "top-0 left-0 w-full h-full"
      }`}
    />
  );
}
