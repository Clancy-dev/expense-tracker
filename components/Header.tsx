"use client"

import { useMenuPopUp } from '@/context/MenuPopUpProvider';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


export default function Header() {
  const pathname = usePathname();
  const {setOpen} = useMenuPopUp();
  
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
     <header className='w-full h-[10vh] flex py-2 px-6 fixed top-0 items-center justify-between z-50 bg-white border-b border-gray-300'>
        {/* The logo */}
        <div className='w-14 h-14 flex items-center justify-center'>
          <Image src={"/logo.png"} alt="logo image" width={500} height={500}/>
        </div>
        {/* The company name */}
        <div className='w-40 h-20  flex items-center justify-center font-bold'>
          Expense Tracker
        </div>
        {/* The Menu Button */}
        <button onClick={()=>setOpen(true)} className='w-10 h-10 bg-blue-600 md:hidden text-white flex items-center justify-center rounded cursor-pointer'>
          <Menu/>
        </button>


        {/* The navigation bar/nav bar */}
        {/* This navigation bar will only appear only on medium screen upwards, inclusive of the large screen */}
        {/* By default it is hidden */}
        <div className='w-full  h-20 px-4 hidden md:flex items-center justify-between'>
          {
            allLinks.map((singleLink)=>(
               <Link href={singleLink.linkhref} key={singleLink.linkhref} className={`px-4 py-2 ${pathname===singleLink.linkhref?"bg-blue-400 text-white":""} rounded text-black`}>{singleLink.linkname}</Link>
            ))
          }


        </div>

      </header>
  )
}
