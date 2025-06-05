"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { useAuthStore } from "@/store/authStore";
import { useParams, useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import Player from "./Player";
import { CourseProps } from "@/app/types";
import useCoursesStore from "@/store/coursesStore";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import s from "./course.module.css";

export default function CourseComponent() {
  const [courseData, setCourseData] = useState({} as CourseProps | undefined);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const { user, userData } = useAuthStore();
  const router = useRouter();
  const params = useParams();
  const { getCourse } = useCoursesStore();
  const secretKey = Buffer.from(
    process.env.NEXT_PUBLIC_MUX_SIGNING_PRIVATE_KEY || "",
    "base64"
  ).toString("ascii");

  useEffect(() => {
    // console.log(user)
    // console.log(user.subscriptions)
    const fetchCourse = async () => {
      try {
        const course = await getCourse(params?.slug as string);
        if (course) {
          setCourseData(course);
        } else {
          const docRef = doc(db, "courses", params.slug as string);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCourseData(docSnap.data() as CourseProps);
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Failed to fetch course:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourse();
  }, [params.slug]);

  const handleTokenGeneration = (url: string) => {
    return jwt.sign(
      {
        sub: url,
        aud: "v",
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        kid: process.env.NEXT_PUBLIC_MUX_SIGNING_KEY_ID,
      },
      secretKey,
      { algorithm: "RS256" }
    );
  };

  const handleSubscribe = () => {
    if (user) {
      router.push("/checkout");
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
        <div>
          <Image
            src={courseData?.imageUrl as string}
            alt={"pkg.title"}
            width={900}
            height={260}
            className="w-full object-cover mb-4"
          />
        </div>
        <div className="flex flex-col w-full md:w-3/4 m-auto my-10 gap-8">
          <p className="italic">{courseData?.description}</p>
          <Button
            variant="solid"
            onPress={handleSubscribe}
            className="self-end w-[150px] bg-gray-600 text-amber-50 rounded-none"
          >
            Subscribe
          </Button>
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
                  {/* <p>{video?.description}</p> */}
                  <p
                    className={`mb-8 text-gray-600 ${s.accordionItem}`}
                    dangerouslySetInnerHTML={{
                      __html: video?.description || "",
                    }}
                  ></p>
                  {/* <p>Duration: {video?.duration} minutes</p> */}
                  {user && userData && userData?.subscriptions && (
                    <Player
                      token={handleTokenGeneration(video.url)}
                      playbackId={video.url}
                    />
                  )}
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
