import { DailyExpenseData } from '@/data'
import React, { useState } from 'react'

export default function DailyTotal({totalDailyExpenses,totalDailyExpensesPerMonth,coveredAmount,balance}:any) {

   
  return (
    <div className='w-full h-full flex flex-col p-2.5 border-t-2 border-gray-300'>
        <div className='w-full h-[32%]  px-2 md:px-4'>
        <div className='w-full h-full flex  items-center justify-center  rounded'>
            <div className='w-[70%] md:w-[40%] h-full   flex items-center justify-end px-1 font-bold text-gray-800'>
                Total Expense (per day):

            </div>
            
            <div className='w-[40%] h-full flex items-center justify-start font-bold p-1'>
                UGX {totalDailyExpenses.toLocaleString()}

            </div>
        
        </div>
        </div>
         <div className='w-full h-[32%]  px-2 md:px-4'>
        <div className='w-full h-full flex bg-white items-center justify-center  rounded'>
            <div className='w-[70%] md:w-[40%] h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Total Expense (per month):

            </div>
            
            <div className='w-[40%] h-full flex items-center justify-start font-bold p-1'>
                UGX {totalDailyExpensesPerMonth.toLocaleString()}

            </div>
        
        </div>
        </div>
        <div className='w-full h-[32% px-2 md:px-4'>
            <div className='w-full h-full flex bg-white items-center justify-center   rounded'>
            <div className='w-[70%] md:w-[40%]  h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Covered:

            </div>
            <div className='w-[40%] h-full  flex items-center justify-start font-bold p-1'>
                <span className='text-black'>UGX {coveredAmount.toLocaleString()}</span>

            </div>
        
        </div>
        </div>
        <div className='w-full h-[32%] px-2 md:px-4'>
            <div className='w-full h-full flex  rounded bg-white items-center justify-center  '>
            <div className='w-[70%] md:w-[40%] h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                Balance:

            </div>
            <div className='w-[40%] h-full  flex items-center justify-start font-bold sm:p-1'>
                <span className={balance === 0 ? 'text-black' : 'text-green-600'}>UGX {balance.toLocaleString()}</span>

            </div>
        
        </div>
        </div>

        </div>
  
  )
}
