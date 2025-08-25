'use client'
import React from 'react'
import SectionTitle from './title';
import CoursesComponent from '../CoursesComponent';


export default function HomeCourses() {
  return (
    <section className='py-10 px-5'>
      <div className='container mx-auto'>
        <SectionTitle 
          heading='Courses' 
          subheading="Hi, I'm Zaur, and I want to take you on a journey-one that goes beyond dance. This is about discovering yourself, your body, and your mind through the art of Argentine tango."
          url='/courses'
          btnTitle='See all courses'
        />
        <CoursesComponent />
      </div>
    </section>
  )
}
