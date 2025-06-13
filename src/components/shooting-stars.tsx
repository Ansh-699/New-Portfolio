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
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setShowStars(window.innerWidth >= 768); // Tailwind's md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted || !showStars || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const numStars = 60;
    const stars: Star[] = Array.from({ length: numStars }, () => {
      const speed = Math.random() * 1.5 + 1.5;
      const angle = (3 * Math.PI) / 4; // top-right to bottom-left
      const vx = speed * Math.cos(angle); // negative
      const vy = speed * Math.sin(angle); // positive
      const tailLength = Math.random() * 70 + 40;

      return {
        vx,
        vy,
        tailLength,
        x: windowWidth + Math.random() * windowWidth, // Start off-screen right
        y: Math.random() * (windowHeight / 3), // top 1/3
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
        ctx.lineWidth = 1.5;
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
          star.y = Math.random() * (windowHeight / 3);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      canvas.width = windowWidth;
      canvas.height = windowHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, mounted, showStars]);

  if (!mounted || !showStars) return null;

  return (
    <canvas
      ref={canvasRef}
      id="shooting-stars-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none transition-colors"
    />
  );
}
