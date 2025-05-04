import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function Packages() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">PACKAGES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="p-4">
            <Image
              src="https://heroui.com/images/hero-card-complete.jpeg"
              alt={pkg.title}
              width={400}
              height={260}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-lg font-bold mb-4">{pkg.price}</p>
            <div className="flex flex-col gap-3 justify-between">
              <Link href={`/packages/${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  className="rounded-none w-full"
                  // onPress={() => console.log(`Viewing details for ${pkg.title}`)}
                >
                  See Details
                </Button>
              </Link>
              <Button
                className="rounded-none"
                // onPress={() => console.log(`Subscribing to ${pkg.title}`)}
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
