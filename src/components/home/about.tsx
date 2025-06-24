import React from "react";
import SectionTitle from "./title";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="mt-10">
      <div className="relative h-[100vh] w-full">
        <div className='absolute z-10 w-screen h-[20vh] top-0 bg-gradient-to-b from-[var(--background)] to-transparent bg-opacity-25'></div>
        <Image
          alt="About"
          className="object-cover absolute left-0 top-0 w-[100vw] h-[100vh] z-1"
          src="/img/tree.jpg"
          width={5000}
          height={800}
        />
        <div className='absolute w-screen h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-25'></div>
      </div>
      <div className="mx-auto py-10 px-5">
        <SectionTitle
          heading="About Me"
          subheading="My name is Zaur, and my journey to dance was far from easy."
          url="/about"
          btnTitle="Read more"
        />
        <div>
          <div className="w-full lg:w-1/2 m-auto">
            <p className="text-default-500 leading-8">
              When I teach dance, I pass on not just techniques and steps. I
              share a life experience — the experience of interacting with
              oneself on a deep level — when body and spirit work as one, when
              fears transform into strength, and limitations become starting
              points for growth. My method is built on an understanding of
              psychosomatic processes — I help each person find their rhythm,
              open their breath, and learn to listen to themselves. Just as
              dance once helped me find freedom, now it helps others open up and
              feel life to the fullest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
