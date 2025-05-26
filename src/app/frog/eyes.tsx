"use client";
import React, { useEffect, useState } from "react";

interface EyeProps {
  id: string;
}

const Eye: React.FC<EyeProps> = ({ id }) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  // common logic to update pupil position given an (dx, dy) offset
  const updatePosition = (dx: number, dy: number, rect: DOMRect) => {
    const angle = Math.atan2(dy, dx);
    const maxDistance = rect.width / 4; // radius pupil can move
    const moveX = Math.cos(angle) * maxDistance;
    const moveY = Math.sin(angle) * maxDistance;

    setPosition({
      x: `${50 + (moveX / rect.width) * 100}%`,
      y: `${50 + (moveY / rect.height) * 100}%`,
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      const eyeEl = document.getElementById(id);
      if (!eyeEl) return;
      const rect = eyeEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      updatePosition(event.pageX - centerX, event.pageY - centerY, rect);
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      const eyeEl = document.getElementById(id);
      if (!eyeEl) return;
      const rect = eyeEl.getBoundingClientRect();

      // gamma: left-to-right tilt, beta: front-to-back tilt
      const gamma = e.gamma ?? 0; // [-90,90]
      const beta = e.beta ?? 0;   // [-180,180]

      // Normalize and clamp angles to [-30, 30]
      const clampedX = Math.max(-30, Math.min(30, gamma));
      const clampedY = Math.max(-30, Math.min(30, beta));

      // Map tilt to pixel offsets
      const factor = rect.width / 60; // so ±30° → ±rect.width/2
      updatePosition(clampedX * factor, clampedY * factor, rect);
    };

    // Desktop: mouse
    window.addEventListener("mousemove", handleMouseMove);
    // Mobile: gyroscope
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [id]);

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
      />
    </div>
  );
};

export default Eye;
