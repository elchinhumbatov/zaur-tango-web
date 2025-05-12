'use client'
import React from 'react'
import Image from 'next/image'
import {Accordion, AccordionItem, Button} from "@heroui/react";


export default function PackageDetails() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

  return (
    <section>
      <div className='container p-5'>
        <h2 className='text-center text-2xl md:text-3xl my-3'>Intermediate Course</h2>
        <div>
          <Image
            src="https://heroui.com/images/hero-card-complete.jpeg"
            alt={'pkg.title'}
            width={900}
            height={260}
            className="w-full object-cover mb-4"
          />
        </div>
        <div className='flex flex-col w-full md:w-3/4 m-auto my-10 gap-8'>
          <p className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nulla magni, repellat commodi vel culpa est quae, cupiditate repudiandae reprehenderit numquam odit rem similique iusto? Reprehenderit adipisci et, reiciendis quam atque suscipit quibusdam maxime sapiente, possimus inventore vitae consequuntur quod facilis corrupti vero ex animi amet perspiciatis. Voluptates, repudiandae cupiditate!</p>
          <Button variant='solid' className='self-end w-[150px] bg-gray-600 text-amber-50 rounded-none'>Subscribe</Button>
        </div>
        <div>
          <h3 className='text-xl mb-3'>Course content</h3>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Introduction">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Partner position">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Feel yourself and your partner as ">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}