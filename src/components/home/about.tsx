import React from 'react'
import SectionTitle from './title'
import Image from 'next/image'

export default function HomeAbout() {
  return (
    <section className='py-10 px-5'>
      <div className='container mx-auto'>
        <SectionTitle
          heading='About us'
          subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
          url='/about'
          btnTitle='Read more'
        />
        <div className='flex gap-4 flex-wrap justify-around items-center'>
          <Image
            alt="About"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={470}
            height={880}
          />
          <div className='w-full md:w-1/4'>
            <p className='text-default-500 leading-8'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus cupiditate quo nihil dolorem adipisci inventore earum, architecto vel unde perferendis quos numquam asperiores quod ad quae, repellendus necessitatibus maiores officiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
