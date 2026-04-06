"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import s from "./home.module.css";

export default function Header() {
  const images = useMemo(() => ["/img/hero_2.png", "/img/hero.jpg"], []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mt-[-64px] gap-18 sm:p-20 overflow-hidden bg-black">
      {images.map((src, index) => (
        <Image
          key={src}
          className={`
            absolute inset-0 mt-[64px] transition-opacity duration-[2000ms] ease-in-out
            ${s.zoomInOutBox}
            ${src === '/img/hero.jpg' ? 'object-cover' : 'object-contain p-[50px]'} 
            ${index === activeIndex ? "opacity-100" : "opacity-0"}
          `}
          src={src}
          alt="Zaur Tango"
          fill
          priority={index === 0}
        />
      ))}

      <h1 className="text-3xl sm:text-4xl z-10 absolute bottom-0 p-4 w-full text-center">
        Tango is not about steps.
        {/* <br /> */}
        {/* It is about presence, center, and connection. */}
      </h1>

      <div className="absolute w-screen h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-25" />
    </div>
  );
}
