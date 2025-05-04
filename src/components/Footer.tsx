import { Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className="container mx-auto px-5 pt-20 pb-10">
        <div className="grid grid-cols-12 grid-rows-2 sm:grid-rows-1 gap-8">
          <div className='col-span-6 sm:col-span-4 order-2 sm:order-1 justify-items-center sm:justify-items-start'>
            <p className='mb-2'>CALL US</p>
            <a href='tel:+112312312'>123123123</a>
          </div>

          <div className='col-span-12 sm:col-span-4 order-1 sm:order-2 justify-items-center'>
            <Image src='/img/logo-light.png' alt='logo' width={150} height={50} />
          </div>
          
          <div className='col-span-6 sm:col-span-4 order-3 justify-items-center sm:justify-items-end'>
            <p className='mb-2'>FOLLOW</p>
            <a href='https://www.instagram.com/zaurtango/' target='_blank'>
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  )
}
