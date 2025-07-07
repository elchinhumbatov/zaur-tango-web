import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">ABOUT ME</h2>
      <div className="mb-12">
        <div>
          <Image
            src="/img/about_me.jpeg"
            alt="About Me"
            className="w-full md:w-1/2 h-auto float-left mt-2 mb-6 mr-0 md:mr-6"
            width={500}
            height={500}
          />
          <p className="text-gray-600 pb-3 italic">My name is Zaur, and my path to dance was far from easy. Since childhood, I lived with asthma—a condition that limited not only my breathing but also my freedom of movement, my freedom to be myself. While other children played and ran, I struggled with the heavy feeling of shortness of breath, the fear of an attack, and the sense that my body was constantly obeying some invisible barriers. Doctors told me to avoid exertion, to take care of myself, but inside me lived an energy that was bursting to get out, demanding release.</p>
          <p className="text-gray-600 pb-3 italic">That inner, accumulated force led me to martial arts in my teenage years. I chose the path of a warrior, even though I understood the risks to my health. Training became more than just physical exercise—it was a way to take control of my breathing, my body, and my fears. Martial arts taught me discipline, endurance, and inner balance—I began to hear my body, to understand signals that once seemed like incomprehensible noise.</p>
          <p className="text-gray-600 pb-3 italic">At the same time, I delved into the world of engineering—the science of precise systems and laws.</p>
          <p className="text-gray-600 pb-3 italic">This way of thinking took root in me: I began to see myself as a complex but logical system. Breathing, rhythm, coordination, attention—they all became part of one big equation. I realized that the chaos inside can be understood if approached with respect and attention. And in this synthesis of body, spirit, and mind, something new was born.</p>
          <p className="text-gray-600 pb-3 italic">That’s how dance entered my life.</p>
          <p className="text-gray-600 pb-3 italic">Not as a hobby, not as a workout—but as a natural continuation of everything I had lived through. Dance became a space where I didn’t have to fight—I could simply be. Where every movement wasn’t just a gesture, but a revelation. Where I could tell my story—not with words, but with my body. To release, to express, to heal. It was my way of saying &quot;yes&quot; to life, despite everything that had come before.</p>
          <p className="text-gray-600 pb-3 italic">Now, when I teach dance, I don’t just share techniques. I share how fear can be turned into movement, pain into music, and limitations into wings. I teach people to listen to themselves—not the way we’re taught in school, but truly: from within. Because only then does dance come alive. Only then does it become not just a form, but the voice of the soul.</p>
          <p className="text-gray-600 pb-3 italic">My method is based on a deep understanding of psychosomatics: I know how the body speaks to us through tension, tightness, and blocks. And I help people hear those messages. I help them breathe—not just with their lungs, but with their hearts. I help them move—not by the rules, but by their inner rhythm.</p>
          <p className="text-gray-600 pb-3 italic">Dance is not about steps. It’s about the freedom to be yourself. And if even one person, having touched this path, straightens their shoulders, lifts their head, and feels the breath of life open up in their chest—then everything I’ve been through was not in vain.</p>
        </div>
      </div>
    </div>
  );
}
