'use client';
import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@heroui/react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CourseSkeleton from "./CourseSkeleton";
import { CourseProps } from "@/app/types";
import useCoursesStore from "@/store/coursesStore";


export default function CoursesComponent() {
  const [courses, setCourses] = useState([] as CourseProps[]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const { user } = useAuthStore();
  const router = useRouter();

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
        const order = ["beginner", "intermediate", "advance"];
        const sortedCourses = coursesData.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

        useCoursesStore.setState({ courses: sortedCourses });
        setCourses(sortedCourses);
      } catch (error) {
        console.error("Error retrieving courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };
    retriveCourses();
  }, []);

  const handleSubscribe = (courseId: string) => {
    if (user) {
      console.log(courseId);
      router.push('/checkout');
    } else {
      router.push('/login');
    }
  };

  if (loadingCourses) {
    return <div className="flex gap-5"><CourseSkeleton /><CourseSkeleton /><CourseSkeleton /></div>;
  }

  return (
    <div className="flex flex-wrap gap-8 m-auto justify-center align-center">
      {courses.map((course) => (
        <div key={course.id} className="max-w-[300px]">
          <Card className="py-4 bg-transparent shadow-none">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{course.title}</p>
              <small className="text-default-500">{course.videos.length} {course.videos.length == 1 ? 'Lesson' : 'Lessons'}</small>
              <h4 className="font-bold text-large">{course.price}$</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-none"
                src={course.imageUrl}
                width={270}
              />
              <p className="text-default-500">{course.description}</p>
              <div className="flex flex-row items-center justify-between gap-3 mt-4">
                <Link
                  href={`/courses/${course.id}`}
                  className="text-xs uppercase underline underline-offset-[6px] hover:no-underline"
                >
                  See Details
                </Link>
                <Button
                  variant="solid"
                  className="bg-gray-800 text-amber-50 rounded-none"
                  onPress={() => handleSubscribe(course.id)}
                >
                  Subscribe
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
