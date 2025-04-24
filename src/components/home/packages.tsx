import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import SectionTitle from './title';

const packages = [
  {id: 1, name: "Beginner pack", lessons: 12, price: 49},
  {id: 2, name: "Intermediate pack", lessons: 16, price: 99},
  {id: 3, name: "Advanced pack", lessons: 18, price: 199},
  // {id: 4, name: "Mega all together", lessons: 46, price: 299},
]

export default function Packages() {
  return (
    <section className='py-10 px-5'>
      <div className='container mx-auto'>
        <SectionTitle 
          heading='Packages' 
          subheading='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestias quisquam, blanditiis cum dolores eius a reiciendis dolore fuga laudantium libero. Culpa ab corrupti ipsum.'
          url='/packages'
          btnTitle='See all packages'
        />
        <div className='flex gap-4 flex-wrap justify-center align-center'>
          {packages.map(pack => (
            <div key={pack.id}>
              <Card className="py-4 bg-transparent shadow-none">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{pack.name}</p>
                  <small className="text-default-500">{pack.lessons} Lessons</small>
                  <h4 className="font-bold text-large">{pack.price}$</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-none"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
