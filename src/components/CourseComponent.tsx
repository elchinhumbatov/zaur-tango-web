"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Button, Spinner } from "@heroui/react";
import { useAuthStore } from "@/store/authStore";
import { useParams, useRouter } from "next/navigation";
import Player from "./Player";
import { CourseProps, StripeSubscription } from "@/app/types";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import s from "./course.module.css";
import startCheckout from "@/api/startCheckout";
import getUserStripeSubscriptions from "@/api/getUserStripeSubscriptions";

export default function CourseComponent() {
  const [courseData, setCourseData] = useState({} as CourseProps | undefined);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingCheckoutBtn, setLoadingCheckoutBtn] = useState(false);
  const [subscriptions, setSubscriptions] =
    useState<Array<StripeSubscription> | null>(null);
  const { user } = useAuthStore();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    // console.log(userData);
    const fetchCourse = async () => {
      try {
        const coursesRef = collection(db, "courses");
        const q = query(coursesRef, where("url", "==", params.slug as string));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            // console.log(doc.data())
            setCourseData({ id: doc.id, ...doc.data() } as CourseProps);
          } else {
            console.log("No such course!");
          }
        });

        // const docRef = doc(db, "courses", params.slug as string);
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //   setCourseData(docSnap.data() as CourseProps);
        // } else {
        //   console.log("No such document!");
        // }
      } catch (error) {
        console.error("Failed to fetch course:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourse();
  }, [params.slug]);

  useEffect(() => {
    if (user) {
      const unsubscribe = getUserStripeSubscriptions(setSubscriptions);
      return () => unsubscribe && unsubscribe();
    }
  }, [user]);

  // useEffect(() => {
  //   console.log(
  //     subscriptions?.some((sub) => sub?.product?.id == courseData?.id)
  //   );
  //   console.log(courseData)
  // }, [subscriptions, courseData]);

  const handleSubscribe = async () => {
    if (user) {
      try {
        setLoadingCheckoutBtn(true);
        await startCheckout(courseData?.priceId as string);
      } catch (error) {
        console.log(`An error occurred: ${error}`);
      }
    } else {
      router.push("/login");
    }
  };

  if (loadingCourses) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <section>
      <div className="container p-5">
        <h2 className="text-center text-2xl md:text-3xl my-3">
          {courseData?.title}
        </h2>
        {courseData?.backgroundUrl ? (
          <div className="w-full mb-4">
            <video width={500} height={300} autoPlay muted loop className="w-full">
              <source src={courseData.backgroundUrl} type="video/mp4" />
            </video>
          </div>
        ) : (
          <>
            <div className="block md:hidden">
              <Image
                src={courseData?.imagesUrl[0] as string}
                alt={courseData?.title as string}
                width={900}
                height={260}
                className="w-full object-cover md:w-[30%] mx-auto mb-4"
              />
            </div>
            <div className="hidden md:flex justify-center gap-4">
              {courseData?.imagesUrl.map((imageUrl, index) => (
                <div key={index} className="w-full md:w-[30%]">
                  <Image
                    src={imageUrl as string}
                    alt={courseData.title}
                    width={900}
                    height={260}
                    className="object-cover mx-auto mb-4"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col w-full md:w-3/4 m-auto my-10 gap-8">
          <p className="italic">{courseData?.description}</p>
          {courseData &&
          !subscriptions?.some((sub) => sub?.product?.id === courseData?.id) ? (
            <Button
              variant="solid"
              onPress={handleSubscribe}
              disabled={loadingCheckoutBtn}
              className="self-end w-[150px] bg-gray-800 text-amber-50 rounded-none"
            >
              {loadingCheckoutBtn ? (
                <Spinner size="sm" color="default" />
              ) : (
                "Subscribe"
              )}
            </Button>
          ) : null}
        </div>
        <div>
          <h3 className="text-xl mb-3">Course content</h3>
          {courseData?.videos ? (
            <Accordion>
              {courseData.videos.map((video, index) => (
                <AccordionItem
                  key={index}
                  aria-label={`Accordion ${index + 1}`}
                  title={video?.title}
                >
                  {courseData &&
                    subscriptions &&
                    subscriptions.some(
                      (sub) => sub?.product?.id == courseData?.id
                    ) && <Player playbackId={video.url} />}
                  <p
                    className={`mb-8 text-gray-600 ${s.accordionItem}`}
                    dangerouslySetInnerHTML={{
                      __html: video?.description || "",
                    }}
                  ></p>
                  {/* <p>Duration: {video?.duration} minutes</p> */}
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p>No videos available for this course.</p>
          )}
        </div>
      </div>
    </section>
  );
}
