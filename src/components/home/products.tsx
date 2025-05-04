import React from "react";
import {Card, CardHeader, Image, CardBody} from "@heroui/react";

import SectionTitle from "./title";


export default function HomeProducts() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <SectionTitle
          heading="Products"
          subheading="Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          url="https://www.instagram.com/zaurtango/"
          btnTitle="Check out &#8599;"
          target="_blank"
        />
        <div className="grid grid-cols-12 gap-2">
          <Card className="rounded-none col-span-12 md:col-span-4 lg:col-span-3 bg-transparent shadow-none">
            <CardHeader className="overflow-visible py-2">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-none"
                src="https://heroui.com/images/hero-card-complete.jpeg"
              />
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">New dress</p>
              <small className="text-default-500">99$</small>
              {/* <h4 className="font-bold text-large">test</h4> */}
            </CardBody>
          </Card>
          <Card className="rounded-none col-span-12 md:col-span-4 lg:col-span-3 bg-transparent shadow-none">
            <CardHeader className="overflow-visible py-2">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-none"
                src="https://heroui.com/images/hero-card-complete.jpeg"
              />
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">New dress</p>
              <small className="text-default-500">99$</small>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
