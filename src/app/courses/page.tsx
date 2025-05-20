/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

const packages = [
  {
    title: "Package 1",
    description: "Description for Package 1",
    price: "$100",
  },
  {
    title: "Package 2",
    description: "Description for Package 2",
    price: "$200",
  },
  {
    title: "Package 3",
    description: "Description for Package 3",
    price: "$300",
  },
  {
    title: "Package 4",
    description: "Description for Package 4",
    price: "$400",
  },
];

export default function Courses() {
  const { user } = useAuthStore();
  const router = useRouter();

  const handleSubscribe = () => {
    if (user) {
      router.push('/checkout');
    } else {
      router.push('/login');
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="p-4 mx-auto mb-8 text-center w-full md:w-[80%] lg:w-[60%]">
        <h2 className="text-3xl font-medium text-center mb-8">Courses</h2>
        <p className="text-gray-600">Hi, I'm Zaur, and I want to take you on a journey-one that goes beyond dance. This is about discovering yourself, your body, and your mind through the art of Argentine tango.
  Tango isn't just about steps. It's about feeling free inside and expressing that freedom through movement. It's about building confidence, strength, and creating your inner stability and balance-physically and mentally.
  Over the years, l've developed a unique teaching method that helps you connect with yourself on a deeper level. With every step, you'll learn to move with ease, stand with confidence, and feel truly present in your body.
  So, are you ready to unlock your full potential? <span className="italic"> Join me, and let's dance!</span></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="p-4">
            <Image
              src="https://heroui.com/images/hero-card-complete.jpeg"
              alt={pkg.title}
              width={400}
              height={260}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-lg font-bold mb-4">{pkg.price}</p>
            <div className="flex flex-row items-center justify-between gap-3">
              <Link 
                href={`/courses/${pkg.title.toLowerCase().replace(/\s+/g, "-")}`} 
                className="text-xs uppercase underline underline-offset-[6px] hover:no-underline"
              >
                See Details
              </Link>
              <Button
                variant="solid"
                className="bg-gray-600 text-amber-50 rounded-none"
                onPress={() => handleSubscribe()}
              >
                Subscribe
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
