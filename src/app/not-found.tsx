import Link from 'next/link'
import { FileX } from 'lucide-react';

 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center'>
      <div className='flex items-center gap-2 mb-4'>
        <FileX size={30} className='inline-block' />
        <h2 className='text-2xl'>404</h2>
      </div>
      <p>Could not find requested resource</p>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}