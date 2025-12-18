
import React, { useState } from 'react'

export default function WeeklyTotal({totalWeeklyExpenses,totalWeeklyExpensesPerMonth,coveredWeeklyAmount,weeklyBalance}:any) {

   
  return (
    <div className='w-full h-full flex flex-col gap-1 p-2.5 border-t-2 border-gray-300'>
        <div className='w-full h-[32%]  px-2 md:px-4'>
        <div className='w-full h-full flex  items-center justify-center  rounded'>
            <div className='w-[70%] md:w-[40%] h-full   flex items-center justify-end px-1 font-bold text-gray-800'>
                Total Expense (per week):

            </div>
            
            <div className='w-[40%] h-full flex items-center justify-start font-bold p-1'>
                UGX {totalWeeklyExpenses.toLocaleString()}

            </div>
        
        </div>
        </div>
         <div className='w-full h-[32%]  px-2 md:px-4'>
        <div className='w-full h-full flex bg-white items-center justify-center  rounded'>
            <div className='w-[70%] md:w-[40%] h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Total Expense (per month):

            </div>
            
            <div className='w-[40%] h-full flex items-center justify-start font-bold p-1'>
                UGX {totalWeeklyExpensesPerMonth.toLocaleString()}

            </div>
        
        </div>
        </div>
        <div className='w-full h-[32% px-2 md:px-4'>
            <div className='w-full h-full flex bg-white items-center justify-center   rounded'>
            <div className='w-[70%] md:w-[40%]  h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Covered:

            </div>
            <div className='w-[40%] h-full  flex items-center justify-start font-bold p-1'>
                <span className='text-black'>UGX {coveredWeeklyAmount.toLocaleString()}</span>

            </div>
        
        </div>
        </div>
        <div className='w-full h-[32%] px-2 md:px-4'>
            <div className='w-full h-full flex  rounded bg-white items-center justify-center  '>
            <div className='w-[70%] md:w-[40%] h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Balance:

            </div>
            <div className='w-[40%] h-full  flex items-center justify-start font-bold sm:p-1'>
                <span className={weeklyBalance === 0 ? 'text-black' : 'text-green-600'}>UGX {weeklyBalance.toLocaleString()}</span>

            </div>
        
        </div>
        </div>

        </div>
  
  )
}
