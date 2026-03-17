"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import s from "./home.module.css";

export default function Header() {
  const images = useMemo(() => ["/img/hero_2.png", "/img/hero.jpg"], []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalMs = 5000; // 3-5 seconds is a good range for a slideshow
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mt-[-64px] gap-18 sm:p-20 overflow-hidden bg-black">
      {images.map((src, index) => (
        <Image
          key={src}
          className={`absolute inset-0 ${s.zoomInOutBox} mt-[64px] transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit: src === '/img/hero.jpg' ? 'cover' : 'contain' }}
          src={src}
          alt="Zaur Tango"
          fill
          priority={index === 0}
        />
      ))}

      <h1 className="text-2xl sm:text-4xl z-10 absolute bottom-0 left-[3%] p-4 w-full">
        Tango is not about steps.
        <br />
        It is about presence, center, and connection.
      </h1>

      <div className="absolute w-screen h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-25" />
    </div>
  );
}
