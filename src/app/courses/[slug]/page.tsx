import React from 'react'
import CourseComponent from '@/components/CourseComponent';

export const generateMetadata = async({params}: {params: Promise<{ slug: string }>}) => {
  const data = await params;
  const str = data.slug;
  return {
    title: str.charAt(0).toUpperCase() + str.slice(1) + ' Course | Zaur Tango',
    description: `Detailed information about the ${str.charAt(0).toUpperCase() + str.slice(1)} course, including curriculum, schedule, and enrollment options.`,
  }
}


export default async function PackageDetails() {
  return (
    <section>
      <CourseComponent />
    </section>
  )
}