"use client";
import React, { useEffect, useState } from "react";

interface EyeProps {
  id: string;
}

const Eye: React.FC<EyeProps> = ({ id }) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

interface PupilPosition {
    x: string
    y: string
}

const handleMouseMove = (event: MouseEvent): void => {
    const eyeElement: HTMLDivElement | null = document.getElementById(id) as HTMLDivElement | null
    if (eyeElement) {
        const rect: DOMRect = eyeElement.getBoundingClientRect()
        const eyeCenterX: number = rect.left + rect.width / 2
        const eyeCenterY: number = rect.top + rect.height / 2

        // Calculate relative position of the cursor within the eye
        const dx: number = event.pageX - eyeCenterX
        const dy: number = event.pageY - eyeCenterY
        const angle: number = Math.atan2(dy, dx)

        // Limit the pupil's movement within the eye
        const maxDistance: number = rect.width / 4 // Maximum radius for the pupil
        const moveX: number = Math.cos(angle) * maxDistance
        const moveY: number = Math.sin(angle) * maxDistance

        setPosition({
            x: `${50 + (moveX / rect.width) * 100}%`,
            y: `${50 + (moveY / rect.height) * 100}%`,
        })
    }
}

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id={id}
      className="relative inline-block h-12 w-10 bg-[#8BC53F] rounded-full overflow-hidden"
    >
      <div
        className="absolute h-5 w-3 bg-black rounded-full"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default Eye;
