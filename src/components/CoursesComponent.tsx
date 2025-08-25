'use client';
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CourseSkeleton from "./CourseSkeleton";
import { CourseProps } from "@/app/types";
import CourseCardComponent from "./CourseCardComponent";


export default function CoursesComponent() {
  const [courses, setCourses] = useState([] as CourseProps[]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    const retriveCourses = async () => {
      try {
        setLoadingCourses(true);
        const coursesCollection = collection(db, "courses");
        const querySnapshot = await getDocs(coursesCollection);
        const coursesData: CourseProps[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<CourseProps, 'id'>),
        }));
        // const order = ["beginner", "intermediate", "advance"];
        // const sortedCourses = coursesData.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

        setCourses(coursesData);
      } catch (error) {
        console.error("Error retrieving courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };
    retriveCourses();
  }, []);

  if (loadingCourses) {
    return <div className="flex gap-5 justify-center"><CourseSkeleton /><CourseSkeleton /><CourseSkeleton /></div>;
  }

  return (
    <div className="flex flex-wrap gap-8 m-auto justify-center align-center">
      {courses.map((course) => (
        <CourseCardComponent
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}
