import React, { useState } from 'react'

export default function Header2({setActiveTab,activeTab}:any) {
  
  

  return (
    <div className='w-full min-h-[15vh] bg-white  fixed top-[10vh]'>
        <div className='w-full min-h-[40%] flex items-center justify-center text-2xl font-bold py-4 text-gray-800'>
          Expenses
        </div>
        <div className='w-full h-[60%] px-2 sm:px-4 bg-gray-300'>     
                   <div className='w-full h-full flex gap-2 p-2 bg-gray-200 rounded'>
                     <div onClick={()=>setActiveTab("tab1")} className={`${activeTab==="tab1"?"bg-blue-500 text-gray-50":"bg-gray-400 text-gray-50"} w-1/4 h-full  rounded cursor-pointer flex items-center justify-center text-sm sm:text-md md:text-lg font-bold p-2 gap-1 `}>
                    <span className='hidden sm:block'>Fixed</span> <span>Daily</span>
                    </div>
                    <div onClick={()=>setActiveTab("tab2")} className={`${activeTab==="tab2"?"bg-blue-500 text-gray-50":"bg-gray-400 text-white"} w-1/4 h-full  rounded cursor-pointer flex items-center justify-center text-sm sm:text-md md:text-lg font-bold p-2 gap-1`}>
                    <span className='hidden sm:block'>Fixed</span> <span>Weekly</span>
                    </div>
                    <div onClick={()=>setActiveTab("tab3")} className={`${activeTab==="tab3"?"bg-blue-500 text-gray-50":"bg-gray-400 text-white"} w-1/4 h-full  rounded cursor-pointer flex items-center justify-center  text-sm sm:text-md md:text-lg font-bold p-2 gap-1`}>
                     <span className='hidden sm:block'>Fixed</span> <span>Monthly</span>
                    </div>
                    <div onClick={()=>setActiveTab("tab4")} className={`${activeTab==="tab4"?"bg-blue-500 text-gray-50":"bg-gray-400 text-white"} w-1/4 h-full  rounded cursor-pointer flex items-center justify-center text-sm sm:text-md md:text-lg font-bold p-2 gap-1`}>
                    <span>3</span> <span>Months</span>
                    </div>
                     <div onClick={()=>setActiveTab("tab5")} className={`${activeTab==="tab5"?"bg-blue-500 text-gray-50":"bg-gray-400 text-white"} w-1/4 h-full  rounded cursor-pointer flex items-center justify-center text-sm sm:text-md md:text-lg font-bold p-2 gap-1`}>
                   <span className='hidden sm:block'>Grand</span> <span>Total</span>
                    </div>
        
                   </div>
                 
         </div>

    </div>
  )
}
