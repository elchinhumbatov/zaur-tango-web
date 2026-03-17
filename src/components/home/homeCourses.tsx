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
          subheading='Many see emotions in tango. I see a structure that allows emotions to resonate.
          Many see freedom. I see a center through which freedom becomes posible.
          Many see beauty. I see pattern and order. And all of these is part of my personal philosphy of tango: 
          movement must be proportionate, the center must be stable, energy must be directed.'
          url='/courses'
          btnTitle='See all courses'
        />
        <CoursesComponent />
      </div>
    </section>
  )
}
