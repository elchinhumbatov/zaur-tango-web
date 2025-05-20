'use client'
import React from 'react'
import {Card, CardHeader, CardBody, Image, Button} from "@heroui/react";
import SectionTitle from './title';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

const packages = [
  {id: 1, name: "Beginner pack", lessons: 12, price: 49},
  {id: 2, name: "Intermediate pack", lessons: 16, price: 99},
  {id: 3, name: "Advanced pack", lessons: 18, price: 199},
  // {id: 4, name: "Mega all together", lessons: 46, price: 299},
]

export default function HomeCourses() {
  const { user } = useAuthStore();
  const router = useRouter();

  const handleSubscribe = () => {
    if (user) {
      router.push('/checkout');
    } else {
      router.push('/login');
    }
  }

  return (
    <section className='py-10 px-5'>
      <div className='container mx-auto'>
        <SectionTitle 
          heading='Courses' 
          subheading="Hi, I'm Zaur, and I want to take you on a journey-one that goes beyond dance. This is about discovering yourself, your body, and your mind through the art of Argentine tango."
          url='/courses'
          btnTitle='See all courses'
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
                  <div className="flex flex-row items-center justify-between gap-3 mt-4">
                    <Link
                      href={`/courses/${pack.name.toLowerCase().replace(/\s+/g, "-")}`} 
                      className="text-xs uppercase underline underline-offset-[6px] hover:no-underline"
                    >
                      See Details
                    </Link>
                    <Button
                      variant="solid"
                      className="bg-gray-800 text-amber-50 rounded-none"
                      onPress={() => handleSubscribe()}
                    >
                      Subscribe
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
