import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CourseProps } from "@/app/types";
import { Card, CardBody, CardHeader } from "@heroui/react";

export default function CourseCardComponent({
  course,
}: {
  course: CourseProps;
}) {
  return (
    <div className="max-w-[300px]">
      <Link href={`/courses/${course.url}`} className="inline-block">
        <Card className="py-4 bg-transparent shadow-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{course.title}</p>
            <small className="text-default-500">
              {course.videos.length}{" "}
              {course.videos.length == 1 ? "Lesson" : "Lessons"}
            </small>
            <h4 className="font-bold text-large">{course.price}$</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-none mb-2"
              src={course.imagesUrl[0]}
              width={270}
              height={390}
            />
            <p className="text-default-500">
              {course.description.substring(0, 113) + "..."}
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
