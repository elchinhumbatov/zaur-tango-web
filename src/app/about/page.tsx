/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Me | Zaur Tango",
  description:
    "Learn more about Zaur's journey from overcoming asthma to embracing dance as a form of self-expression and healing.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">ABOUT ME</h2>
      <div className="mb-12">
        <div>
          <Image
            src="/img/about_me.jpeg"
            alt="About Me image 1"
            className="w-full md:w-1/2 lg:w-1/3 h-auto float-left mt-2 mb-6 mr-0 md:mr-6"
            width={500}
            height={500}
          />
          <h4 className="my-3 text-2xl">My Path</h4>
          <p>
            I grew up in a body that gave me no chance to be weak. Asthma is a
            ruthless teacher. It teaches you early what fear is, what
            helplessness feels like, and the real price of every breath. As a
            child I learned lessons most people only face as adults: how to
            stand when you can’t breathe. How to move when the body says “stop.”
            How to live when circumstances insist that your path has already
            been decided for you. I never trusted predictions. And I never
            believed in limits. I learned to verify everything myself. That is
            how I entered martial arts. Not for self-expression. Not to look
            strong. I went there to stop being a hostage to my own body. And I
            succeeded. On the mat I understood something for the first time:
            strength is not muscle. Strength is THE AXIS. THE CENTER. If you
            have a strong axis, you stand. If you don’t, it's all worthless.
            Martial arts didn’t teach me how to win. They taught me how to
            control chaos. The chaos of the body. The chaos of fear. The chaos
            of raw energy. They taught me that a strike is geometry. Breath is
            strategy. And movement is the result of an internal decision made
            long before the body actually makes the move. <br /> Engineering
            came later, and quickly became my second nature. Systems. Laws.
            Structures. A world that doesn’t tolerate “approximately” and has no
            respect for “almost.” I recognized the same truth there that I had
            once discovered in my own body: nothing is random, nothing is
            chaotic, nothing breaks without a cause. A human being is also a
            system. Logical. Precise. Real. Understand the principle, and
            everything can change. Find the Center, and you can change yourself.
            <br /> When dance entered my life, I already knew this: beauty
            without structure is emptiness. Emotion without axis is weakness.
            Freedom without Center is an illusion. That’s why tango was never “a
            dance” for me. It is an agreement between two forces. A collision of
            energies that must find a single trajectory for movement to exist at
            all. Argentine tango is a system. A temporary ceasefire between two
            centers. And if one of them loses its axis, everything collapses.
            Giros, ochos, boleos, sacadas are not decorations. They are tests.
            Tests of stability. Of honesty in movement. Of the ability to hold
            direction without dissolving into someone else’s impulse. Many
            dancers become soft. Too emotional. Too airy. I am not one of them.
          </p>
          {/* <p className="text-gray-600 pb-3 italic">My name is Zaur, and my path to dance was far from easy. Since childhood, I lived with asthma—a condition that limited not only my breathing but also my freedom of movement, my freedom to be myself. While other children played and ran, I struggled with the heavy feeling of shortness of breath, the fear of an attack, and the sense that my body was constantly obeying some invisible barriers. Doctors told me to avoid exertion, to take care of myself, but inside me lived an energy that was bursting to get out, demanding release.</p>
          <p className="text-gray-600 pb-3 italic">That inner, accumulated force led me to martial arts in my teenage years. I chose the path of a warrior, even though I understood the risks to my health. Training became more than just physical exercise—it was a way to take control of my breathing, my body, and my fears. Martial arts taught me discipline, endurance, and inner balance—I began to hear my body, to understand signals that once seemed like incomprehensible noise.</p>
          <p className="text-gray-600 pb-3 italic">At the same time, I delved into the world of engineering—the science of precise systems and laws.</p>
          <p className="text-gray-600 pb-3 italic">This way of thinking took root in me: I began to see myself as a complex but logical system. Breathing, rhythm, coordination, attention—they all became part of one big equation. I realized that the chaos inside can be understood if approached with respect and attention. And in this synthesis of body, spirit, and mind, something new was born.</p>
          <p className="text-gray-600 pb-3 italic">That’s how dance entered my life.</p>
          <p className="text-gray-600 pb-3 italic">Not as a hobby, not as a workout—but as a natural continuation of everything I had lived through. Dance became a space where I didn’t have to fight—I could simply be. Where every movement wasn’t just a gesture, but a revelation. Where I could tell my story—not with words, but with my body. To release, to express, to heal. It was my way of saying &quot;yes&quot; to life, despite everything that had come before.</p>
          <p className="text-gray-600 pb-3 italic">Now, when I teach dance, I don’t just share techniques. I share how fear can be turned into movement, pain into music, and limitations into wings. I teach people to listen to themselves—not the way we’re taught in school, but truly: from within. Because only then does dance come alive. Only then does it become not just a form, but the voice of the soul.</p>
          <p className="text-gray-600 pb-3 italic">My method is based on a deep understanding of psychosomatics: I know how the body speaks to us through tension, tightness, and blocks. And I help people hear those messages. I help them breathe—not just with their lungs, but with their hearts. I help them move—not by the rules, but by their inner rhythm.</p>
          <p className="text-gray-600 pb-3 italic">Dance is not about steps. It’s about the freedom to be yourself. And if even one person, having touched this path, straightens their shoulders, lifts their head, and feels the breath of life open up in their chest—then everything I’ve been through was not in vain.</p> */}
        </div>
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
          <div>
            <h4 className="my-3 text-2xl">My Method</h4>
            <p>
              My school is martial arts. My language is geometry. My foundation
              is the Center. I don’t decorate the moves. I strip them down to
              their essence. I don’t play with emotion. I assemble intention. I
              don’t lose my axis. I build it, step by step. <br /> Today I teach
              tango the same way I once learned how to breathe. Hard. Precise.
              Honest. I don’t sell the illusion of freedom. I guide people
              towards their own Center. Freedom grows from there on its own. I
              teach how to distribute energy so it doesn’t destroy the body. I
              teach how to listen to impulse without becoming its slave. I teach
              breath control the same way I once learned to control my own — at
              the edge, where there is no room for chance. Because dance is not
              about steps. It is about the ability to remain yourself when
              another person enters your space. It is about holding your world
              and entering someone else’s without losing your axis. <br /> If
              even one person, after passing through my method, feels strength
              assembling within their body, fear turning into impulse, chaos
              submitting to structure, breath becoming a weapon — then
              everything I went through was worth it. Your inner CENTER is not a
              gift. Your inner CENTER is a choice. And I am here to teach that
              choice.
            </p>
          </div>
          <Image
            src="/img/about_me_2.jpg"
            alt="About Me image 2"
            className="w-full md:w-1/2 lg:w-1/3 h-auto mt-6 md:mt-0"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
