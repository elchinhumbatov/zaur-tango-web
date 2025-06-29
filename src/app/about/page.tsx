import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">ABOUT ME</h2>
      <div className="mb-12">
        <div>
          <Image
            src="/img/about_me_cropped.jpeg"
            alt="About Me"
            className="w-full md:w-1/2 h-auto float-left mt-2 mb-6 mr-0 md:mr-6"
            width={500}
            height={500}
          />
          {/* <h3 className="text-2xl font-semibold mb-4">My Story</h3> */}
          <p className="text-gray-600 pb-3 italic">My name is Zaur, and my journey to dance was far from easy. Since childhood, I have lived with asthma — a condition that limited not only my breathing but also my freedom of movement and freedom to be myself. While other children played and ran, I faced the heavy feeling of breathlessness, the fear of an attack, and the sense that my body was constantly controlled by some invisible barriers. Doctors told me to avoid physical exertion and take care of myself, but inside me lived an energy that was bursting to be released.</p>
          <p className="text-gray-600 pb-3 italic">This inner accumulated strength led me to martial arts in my teenage years. I chose the path of a warrior, even though I understood the health risks. Training became more than just physical exercise — it was a way to take control of my breathing, my body, and my fears. Martial arts taught me discipline, endurance, and inner balance — I began to listen to my body and understand signals that once seemed like indecipherable noise.</p>
          <p className="text-gray-600 pb-3 italic">At the same time, I immersed myself in the world of engineering — the science of precise systems and laws. This analytical approach helped me rethink what was happening inside me. I began to see movement as a set of interconnected processes — breathing, muscles, balance, and rhythm. Perceiving the body as a system rather than just a random collection of parts was an important step toward harmony. It allowed me to realize that the state of mind and body are closely connected, and working on one without the other is impossible.</p>
          <p className="text-gray-600 pb-3 italic">Dance entered my life as a natural synthesis of everything I had experienced: control of breath, physical strength, precise engineering thinking, and inner freedom. In dance, I found a space where I could not just move but also express my story, breaking free from limitations that once seemed inevitable. Dance became a form of healing and deep self-expression for me.</p>
          <p className="text-gray-600 pb-3 italic">Today, when I teach dance, I pass on not just techniques and steps. I share a life experience — the experience of interacting with oneself on a deep level — when body and spirit work as one, when fears transform into strength, and limitations become starting points for growth. My method is built on an understanding of psychosomatic processes — I help each person find their rhythm, open their breath, and learn to listen to themselves. Just as dance once helped me find freedom, now it helps others open up and feel life to the fullest.</p>
        </div>
      </div>
    </div>
  );
}
