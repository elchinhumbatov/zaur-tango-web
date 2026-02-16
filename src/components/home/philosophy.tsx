import React from "react";
import SectionTitle from "./title";
import Image from "next/image";

export default function HomePhilosophy() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <SectionTitle heading="Philosophy" subheading="I don’t teach steps. I teach the state from which a step becomes
          inevitable. Tango doesn’t begin with figures or with music. It begins
          the moment a person stops clinging to control and takes responsibility
          for their presence. The center is not a technique. It is the ability
          to remain whole while everything is moving. In tango, I don’t give
          support. I create conditions in which you are forced to find it
          yourself. A man in tango doesn’t prove strength. He channels energy so
          that space itself begins to breathe. A woman in tango doesn’t submit.
          She chooses trust because she is grounded in her own axis. I don’t
          correct mistakes. I use them as fuel. The body never lies. When you
          rush ahead of the moment, movement loses its meaning. When the body
          becomes blocked, it is afraid of emptiness. Rushing without a center
          creates chaos. Speed that rises from a strong center creates freedom.
          Tango is not for those who want to look beautiful. Tango is for those
          who have the courage to be precise —in their movement, in their
          choices, and in their lives. I don’t teach what is right. I teach how
          to recognize the exact moment when a decision must be made. Your
          partner is not a support and not someone to blame. Your partner is a
          mirror of how alive you are next to another human being. Tango doesn’t
          heal and it doesn’t comfort. It exposes. It strips the truth bare. And
          if you stay, it means you are ready for what comes next. My role is
          not to hold you or comfort you. My role is to initiate movement within
          you" url="" btnTitle="" />
        <div className="relative h-[100vh] w-full">
          <Image
            alt="About"
            className="object-cover absolute left-0 top-0 w-[100vw] h-[100vh] z-1"
            src="/img/poster_2.webp"
            width={2000}
            height={800}
          />
          <div className="absolute w-full h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-25"></div>
        </div>
      </div>
    </section>
  );
}
