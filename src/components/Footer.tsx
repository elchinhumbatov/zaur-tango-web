import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className="container mx-auto px-5 pt-20 pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-10">
          <div className='order-3 sm:order-1 text-center sm:text-left flex flex-col gap-2'>
            {/* <p className='mb-2'>CALL US</p>
            <a href='tel:+971543962051'>+971 54 396 2051</a> */}
            <Link href='/terms' className='underline'>Terms and Conditions</Link>
            <Link href='/privacy-policy' className='underline'>Privacy Policy</Link>
          </div>

          <div className='order-1 sm:order-2'>
            <Image src='/img/logo-light.png' alt='logo' width={150} height={50} />
          </div>
          
          <div className='order-2 text-center sm:text-left'>
            <p className='mb-2'>FOLLOW</p>
            <div className='flex gap-1'>
              <a href='https://www.instagram.com/zaurtango/' target='_blank'>
                <Instagram />
              </a>
              &
              <a href='https://www.instagram.com/zaur.mamedov.902/' target='_blank'>
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  )
}
