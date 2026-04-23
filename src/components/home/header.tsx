"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import s from "./home.module.css";

const slides = [
  {
    src: "/img/hero_2.png",
    alt: "Tango background scene 1",
    text: "Tango is not about steps.",
    fit: "object-contain",
  },
  {
    src: "/img/hero.jpg",
    alt: "Tango background scene 2",
    text: "It is about presence, center, and connection.",
    fit: "object-cover",
  },
];

export default function Header2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [activeIndex]);

  useEffect(() => {
    if (prevIndex === null) return;

    const timeoutId = window.setTimeout(() => {
      setPrevIndex(null);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [prevIndex]);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          if (index !== activeIndex && index !== prevIndex) return null;

          const isActive = index === activeIndex;

          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === activeIndex}
              className={`absolute inset-0 ${slide.fit} transition-opacity duration-500 ease-in-out ${s.zoomInOutBox} ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative flex h-full items-end justify-center px-4 pb-8 sm:px-8 sm:pb-10">
        <div className="w-full max-w-5xl px-4 py-4 sm:py-1 text-center z-10">
          <p className="mx-auto max-w-3xl text-2xl font-semibold sm:text-4xl">
            {slides[activeIndex].text}
          </p>
        </div>
      </div>

      <div className="absolute w-screen h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-30" />
    </section>
  );
}
