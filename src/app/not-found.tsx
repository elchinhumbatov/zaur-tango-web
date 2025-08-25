import Link from 'next/link'
import { TbFaceIdError } from "react-icons/tb";

 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center'>
      <h2 className='text-2xl'><TbFaceIdError size={30} className='inline-block' /> 404</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}