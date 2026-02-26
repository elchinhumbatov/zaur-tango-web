import React from "react";
import SectionTitle from "./title";

export default function HomeAbout() {
  return (
    <section className="mt-10">
      <div className="mx-auto py-10 px-5">
        <SectionTitle
          heading="About Me"
          subheading=""
          url="/about"
          btnTitle="Read more"
        />
        <div>
          <div className="w-full lg:w-1/2 m-auto">
            <p className="text-default-500 leading-8 text-center">
              My school is martial arts. My language is geometry. My foundation
              is the Center. I don’t decorate the moves. I strip them down to
              their essence. I don’t play with emotion. I assemble intention. I
              don’t lose my axis. I build it, step by step. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
