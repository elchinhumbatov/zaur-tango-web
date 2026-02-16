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
          subheading=''
          url='/courses'
          btnTitle='See all courses'
        />
        <CoursesComponent />
      </div>
    </section>
  )
}
