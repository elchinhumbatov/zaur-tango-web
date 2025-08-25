// import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function SectionTitle({
  heading,
  subheading,
  url,
  btnTitle,
  target = ''
}: {
  heading: string;
  subheading: string;
  url: string;
  btnTitle: string;
  target?: string;
}) {
  return (
    <>
      <div className="text-center my-9 width-full lg:w-1/2 mx-auto">
        <h2 className="text-4xl">{heading}</h2>
        <p className="my-3 text-default-500">{subheading}</p>
        {url && ( <Link href={url} className="text-xs uppercase underline underline-offset-[6px] hover:no-underline" target={target}>
            {btnTitle}
        </Link> )}
      </div>
    </>
  );
}
