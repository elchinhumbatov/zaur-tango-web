import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">ABOUT ME</h2>
      <div className="text-center mb-12">
        <p className="text-lg">
          Welcome to my page! I am passionate about sharing my journey and
          experiences with you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="https://heroui.com/images/hero-card-complete.jpeg"
            alt="Description"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p>
            I started my journey with a passion for creativity and a drive to
            make a difference. Over the years, I have honed my skills and
            embraced challenges to grow both personally and professionally.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0 order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
          <p>
            I specialize in creating meaningful experiences through my work.
            Whether it&apos;s through design, development, or storytelling, I strive
            to leave a lasting impact.
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
          <Image
            src="https://heroui.com/images/hero-card-complete.jpeg"
            alt="Description"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
