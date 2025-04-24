import Image from 'next/image'
import React from 'react'
import s from './home.module.css'

export default function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mt-[-64px] gap-18 sm:p-20 overflow-hidden">
      <Image
        className={s.zoomInOutBox}
        src="/img/hero.jpg"
        alt="Zaur Tango"
        // width={800}
        // height={800}
        // layout="cover"
        objectFit="cover"
        fill
        priority={true}
        // placeholder='blur'
        // blurDataURL="/img/z-letter.png"
      />
      <div className='absolute w-screen h-[20vh] bottom-[-5px] bg-gradient-to-b from-transparent to-[var(--background)] bg-opacity-25'></div>
    </div>
  )
}
