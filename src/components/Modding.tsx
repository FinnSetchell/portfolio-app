"use client";

import { useState, useEffect } from "react";

export default function Modding() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/modding-images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) {
    return null; // Return nothing if images are not loaded yet
  }

  return (
    <section
      id="modding"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Modding
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Highlighting my passion for creating Minecraft mods and tools.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-[400px] mb-8">
        <img
          src={images[currentImage]}
          alt={`Modding Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition"
          aria-label="Previous Image"
        >
          &#8249;
        </button>
        <button
          onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition"
          aria-label="Next Image"
        >
          &#8250;
        </button>
      </div>

      {/* Download Counters */}
      <div className="flex gap-8 mb-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">CurseForge</h3>
          <p className="text-2xl font-semibold text-gray-700">
            {/* Replace with live data */}
            1,234,567 Downloads
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Modrinth</h3>
          <p className="text-2xl font-semibold text-gray-700">
            {/* Replace with live data */}
            567,890 Downloads
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[700px] text-center">
        <p className="text-lg text-gray-700">
          Modding is at the heart of my programming journey. I love creating
          tools and experiences that enhance gameplay and bring new ideas to
          life. From designing intricate systems to optimizing performance, I
          strive to deliver mods that are both functional and fun. Whether it's
          building for CurseForge or Modrinth, I enjoy contributing to the
          Minecraft community and seeing players enjoy my work.
        </p>
      </div>
    </section>
  );
}
