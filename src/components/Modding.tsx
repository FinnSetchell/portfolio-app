"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Modding() {
  const images = [
    "/modding/modding1.png",
    "/modding/modding2.png",
    "/modding/modding3.png",
    "/modding/modding4.png",
    "/modding/modding5.png",
    "/modding/modding6.png",
    "/modding/modding7.png",
  ];

  const [modrinthTotalDownloads, setModrinthTotalDownloads] = useState<number | null>(null);
  const [curseForgeDownloads, setCurseForgeDownloads] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = carousel.offsetWidth / 3;
      if (direction === "next") {
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        if (carousel.scrollLeft === 0) {
          carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("next");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchModrinthTotalDownloads = async () => {
      try {
        const response = await fetch("/api/modrinth-downloads");
        if (!response.ok) {
          throw new Error(`Failed to fetch Modrinth downloads: ${response.statusText}`);
        }
        const data = await response.json();
        setModrinthTotalDownloads(data.totalDownloads);
      } catch (error) {
        console.error("Error fetching Modrinth downloads:", error);
      }
    };

    fetchModrinthTotalDownloads();
  }, []);

  useEffect(() => {
    const fetchCurseForgeDownloads = async () => {
      try {
        const response = await fetch("/api/curseforge-downloads");
        if (!response.ok) {
          throw new Error(`Failed to fetch CurseForge downloads: ${response.statusText}`);
        }
        const data = await response.json();
        setCurseForgeDownloads(data.totalDownloads);
      } catch (error) {
        console.error("Error fetching CurseForge downloads:", error);
      }
    };

    fetchCurseForgeDownloads();
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <section
      style={{ backgroundColor: "var(--secondary)", color: "var(--text)" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          style={{ color: "var(--text)" }}
        >
          Modding
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl" style={{ color: "var(--mutedText)" }}>
          Highlighting my passion for creating Minecraft mods and tools.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-[1200px] mb-8 sm:mb-12 lg:mb-16">
        <div
          ref={carouselRef}
          className="overflow-x-auto flex gap-4 py-4 scrollbar-hidden items-center"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: "calc(100% / 3)",
                maxWidth: "400px",
              }}
            >
              <Image
                src={image}
                alt={`Modding Image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll("prev")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition"
          aria-label="Previous Image"
        >
          &#8249;
        </button>
        <button
          onClick={() => handleScroll("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition"
          aria-label="Next Image"
        >
          &#8250;
        </button>
      </div>

      {/* Download Counters */}
      <div className="flex gap-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            CurseForge
          </h3>
          <p className="text-2xl font-semibold" style={{ color: "var(--mutedText)" }}>
            {curseForgeDownloads !== null && !isNaN(curseForgeDownloads)
              ? `${formatNumber(curseForgeDownloads)} Downloads`
              : "Loading..."}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Modrinth
          </h3>
          <p className="text-2xl font-semibold" style={{ color: "var(--mutedText)" }}>
            {modrinthTotalDownloads !== null && !isNaN(modrinthTotalDownloads)
              ? `${formatNumber(modrinthTotalDownloads)} Downloads`
              : "Loading..."}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[700px] text-left space-y-6 sm:space-y-8 lg:space-y-10">
        <p className="text-lg" style={{ color: "var(--text)" }}>
          I’ve been developing Minecraft mods since I was a teenager, turning what started as a hobby into a full-on venture. Over time, my mods have grown in complexity, scale, and popularity — now totaling over <strong>60 million downloads</strong> across several platforms.
        </p>
        <p className="text-lg" style={{ color: "var(--text)" }}>
          My work focuses on expanding Minecraft’s gameplay with procedural structures, custom items, and gameplay mechanics built for performance, compatibility, and creativity. I take a modular, scalable approach to development — quickly building a base version, then expanding on features.
        </p>
        <p className="text-lg" style={{ color: "var(--text)" }}>
          To support and formalize this work, I’ve established a sole proprietorship business. This allows me to collaborate with other developers, hire creators, and manage publishing through platforms like CurseForge. I also run modded servers, manage communities, and solve the many technical and creative challenges that come with live multiplayer environments.
        </p>
        <p className="text-lg" style={{ color: "var(--text)" }}>
          Whether it’s creating automated tools for mod development, debugging complex mod interactions, or just building something players will love, modding has become both a creative outlet and a serious part of my journey as a developer.
        </p>
      </div>
    </section>
  );
}
