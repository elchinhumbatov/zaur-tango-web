/* eslint-disable react/no-unescaped-entities */
import CoursesComponent from "@/components/CoursesComponent";

export const metadata = {
  title: "Courses | Zaur Tango",
  description:
    "Explore our range of Argentine tango courses designed to help you connect with yourself and express your freedom through movement.",
};

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="p-4 mx-auto mb-8 text-center w-full md:w-[80%] lg:w-[60%]">
        <h2 className="text-3xl font-medium text-center mb-8">Courses</h2>
        <p className="text-gray-600">
          Many see emotions in tango. Isee a structure that allows emotions to resonate.
          <br />
          Many see freedom. I see a center through which freedom becomes posible.
          <br />
          Many see beauty. I see pattern and order. And all of these is part of my personal philosphy of tango: 
          movement must be proportionate, the center must be stable, energy must be directed.
        </p>
      </div>
      <CoursesComponent />
    </div>
  );
}
