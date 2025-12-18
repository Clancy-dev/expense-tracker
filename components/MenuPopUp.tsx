"use client"

import { useMenuPopUp } from '@/context/MenuPopUpProvider';
import { X } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MenuPopUp() {
  const pathname = usePathname();
  const {open,setOpen} = useMenuPopUp();
  if(!open) return null;

  const allLinks = [
    {
      linkhref:"/",
      linkname:"Expense"
    },
    {
      linkhref:"/income",
      linkname:"Income"
    },
    {
      linkhref:"/goals",
      linkname:"Goals"
    },
    {
      linkhref:"/lifestyle",
      linkname:"Lifestyle"
    },
    {
      linkhref:"/accounts",
      linkname:"Accounts"
    },

  ]
  return (
    <div className='w-full h-screen fixed top-0 z-60'>
        {/* i want to give it a header which wants to look like original header */}
        <header className='w-full h-[10vh] py-2 px-6 flex items-center justify-end'>
            {/* i want to make the close button, X button */}
        <button onClick={()=>setOpen(false)} className='w-10 h-10 bg-blue-600 md:hidden text-white flex items-center justify-center rounded cursor-pointer'>
          <X/>
        </button>
        </header>
        {/* The body of the pop up */}
        <div className='w-full h-[90vh] bg-gray-100 px-6 py-2 flex items-start justify-start flex-col gap-2'>

          {
            allLinks.map((singleLink)=>(
               <Link onClick={()=>setOpen(false)} href={singleLink.linkhref} key={singleLink.linkhref} className={`px-4 py-2 ${pathname===singleLink.linkhref?"bg-blue-400 w-full text-white hover:bg-blue-400":""} rounded text-black border-b-2 border-b-blue-400 w-full hover:bg-blue-200`}>{singleLink.linkname}</Link>
            ))
          }

        </div>

      
    </div>
  )
}
