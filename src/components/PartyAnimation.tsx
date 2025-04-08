"use client";

import React, { useEffect, useRef } from "react";

const PartyAnimation: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff9900", "#ff66cc"];
    const particles: { x: number; y: number; dx: number; dy: number; size: number; color: string }[] = [];
    const maxParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before each frame
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    const initializeParticles = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle());
      }
    };

    resizeCanvas();
    initializeParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
};

export default PartyAnimation;
