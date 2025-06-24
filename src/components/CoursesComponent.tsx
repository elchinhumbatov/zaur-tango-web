'use client';
import React, { useEffect, useState } from "react";
// import {Card, CardHeader, CardBody, Image } from "@heroui/react";
// import Link from "next/link";
// import { useAuthStore } from "@/store/authStore";
// import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CourseSkeleton from "./CourseSkeleton";
import { CourseProps } from "@/app/types";
import CourseCardComponent from "./CourseCardComponent";
// import startCheckout from "@/api/startCheckout";
// import getUserStripeSubscriptions from "@/api/getUserStripeSubscriptions";


export default function CoursesComponent() {
  const [courses, setCourses] = useState([] as CourseProps[]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  // const [subscriptions, setSubscriptions] = useState<object | null>(null);
  // const [loadingCheckoutBtn, setLoadingCheckoutBtn] = useState(false);
  // const { user } = useAuthStore();
  // const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     const unsubscribe = getUserStripeSubscriptions(setSubscriptions);
  //     return () => unsubscribe && unsubscribe();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   console.log(subscriptions?.product.id)
  //   console.log(courses[1]?.id)
  // }, [subscriptions]);

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
        // setCourses(sortedCourses);
      } catch (error) {
        console.error("Error retrieving courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };
    retriveCourses();
  }, []);

  // const handleSubscribe = async (courseId: string) => {
  //   if (user) {
  //     try {
  //       setLoadingCheckoutBtn(true);
  //       await startCheckout(courseId as string);
  //     } catch (error) {
  //       console.log(`An error occurred: ${error}`);
  //     }
  //   } else {
  //     router.push('/login');
  //   }
  // };

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
        // <div key={course.id} className="max-w-[300px]">
        //   <Card className="py-4 bg-transparent shadow-none">
        //     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        //       <p className="text-tiny uppercase font-bold">{course.title}</p>
        //       <small className="text-default-500">{course.videos.length} {course.videos.length == 1 ? 'Lesson' : 'Lessons'}</small>
        //       <h4 className="font-bold text-large">{course.price}$</h4>
        //     </CardHeader>
        //     <CardBody className="overflow-visible py-2">
        //       <Image
        //         alt="Card background"
        //         className="object-cover rounded-none mb-2"
        //         src={course.imagesUrl[0]}
        //         width={270}
        //         height={390}
        //       />
        //       <p className="text-default-500">{course.description.substring(0, 113) + '...'}</p>
        //       <div className="flex flex-row items-center justify-end gap-3 mt-4">
        //         <Link
        //           href={`/courses/${course.url}`}
        //           className="text-xs uppercase underline underline-offset-[6px] hover:no-underline"
        //         >
        //           See Details
        //         </Link>
        //         {/* <Button
        //           variant="solid"
        //           className="bg-gray-800 text-amber-50 rounded-none"
        //           onPress={() => handleSubscribe(course.id)}
        //           disabled={loadingCheckoutBtn}
        //         >
        //           {loadingCheckoutBtn ? <Spinner size='sm' color="default" /> : 'Subscribe'}
        //         </Button> */}
        //       </div>
        //     </CardBody>
        //   </Card>
        // </div>
      ))}
    </div>
  );
}
