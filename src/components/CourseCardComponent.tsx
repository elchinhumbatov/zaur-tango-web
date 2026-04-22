import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CourseProps } from "@/app/types";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Timestamp } from "firebase/firestore";

export default function CourseCardComponent({
  course,
  subscribedAt = false,
  nextRenewalAt = false,
  cancelAt = null,
}: {
  course: CourseProps;
  subscribedAt?: boolean | Timestamp;
  nextRenewalAt?: boolean | Timestamp;
  cancelAt?: null | Timestamp;
}) {
  let courseUrl;
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  switch (course.status) {
    case "active":
      courseUrl = `/courses/${course.url}`;
      break;
    case "inProgress":
      courseUrl = `#`;
      break;
    default:
      courseUrl = `#`;
      break;
  }

  if (course.status === "deactive") return;

  return (
    <div className="max-w-[300px]">
      <Link href={courseUrl} className="inline-block">
        <Card className="py-4 bg-transparent shadow-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="uppercase">{course.title}</p>
            {subscribedAt && subscribedAt instanceof Timestamp && (
              <p className="text-small">
                Subscribed at{" "}
                {subscribedAt
                  .toDate()
                  .toLocaleDateString("en-GB", options)
                  .replace(/ /g, " ")}
              </p>
            )}
            {!cancelAt &&
              nextRenewalAt &&
              nextRenewalAt instanceof Timestamp && (
                <p className="text-small">
                  Next renewal at{" "}
                  {nextRenewalAt
                    .toDate()
                    .toLocaleDateString("en-GB", options)
                    .replace(/ /g, " ")}
                </p>
              )}
            {cancelAt && cancelAt instanceof Timestamp && (
              <p className="text-small">
                Cancel at{" "}
                {cancelAt
                  .toDate()
                  .toLocaleDateString("en-GB", options)
                  .replace(/ /g, " ")}
              </p>
            )}
            <small className="text-default-500">
              {course.videos.length}{" "}
              {course.videos.length == 1 ? "Lesson" : "Lessons"}
            </small>
            {course.price ? (
              <h4 className="font-bold text-large">
                <span className="line-through text-base text-gray-500">
                  {course?.oldPrice}$
                </span>{" "}
                {course?.price}$<span className="text-xs"> for 60 days</span>
              </h4>
            ) : <h4 className="font-bold text-large">$</h4>}
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="overflow-hidden">
              <Image
                alt="Card background"
                className="object-cover rounded-none mb-2 min-h-[480px] hover:scale-[1.1] duration-700"
                src={course.imagesUrl[0]}
                width={270}
                height={480}
                loading="eager"
              />
            </div>
            <p className="text-default-500">
              {course.description.substring(0, 95) + "..."}
            </p>
            <div className="flex flex-row items-center justify-end gap-3 mt-4">
              <p className="text-xs uppercase underline underline-offset-[6px] hover:no-underline">
                See Details
              </p>
              {/* <Button
                  variant="solid"
                  className="bg-gray-800 text-amber-50 rounded-none"
                  onPress={() => handleSubscribe(course.id)}
                  disabled={loadingCheckoutBtn}
                >
                  {loadingCheckoutBtn ? <Spinner size='sm' color="default" /> : 'Subscribe'}
                </Button> */}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
