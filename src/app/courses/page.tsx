/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CoursesComponent from "@/components/CoursesComponent";


export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="p-4 mx-auto mb-8 text-center w-full md:w-[80%] lg:w-[60%]">
        <h2 className="text-3xl font-medium text-center mb-8">Courses</h2>
        <p className="text-gray-600">Hi, I'm Zaur, and I want to take you on a journey-one that goes beyond dance. This is about discovering yourself, your body, and your mind through the art of Argentine tango.
  Tango isn't just about steps. It's about feeling free inside and expressing that freedom through movement. It's about building confidence, strength, and creating your inner stability and balance-physically and mentally.
  Over the years, l've developed a unique teaching method that helps you connect with yourself on a deeper level. With every step, you'll learn to move with ease, stand with confidence, and feel truly present in your body.
  So, are you ready to unlock your full potential? <span className="italic"> Join me, and let's dance!</span></p>
      </div>
      
      <CoursesComponent />
    </div>
  );
}
