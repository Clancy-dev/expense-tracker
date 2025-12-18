"use client"
import React, { useState } from 'react'
import { DailyExpenseData, MonthlyExpenseData, ThreeMonthsExpenseData } from '@/data'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'
import { DailyExpenseTypes, MonthlyExpenseTypes, ThreeMonthsExpenseTypes } from '@/types'
import ThreeMonthsExpense from './ThreeMonthsExpense'
import PopUpMenuThreeMonths from './PopUpMenuThreeMonths'


export default function ThreeMonthsExpenses({toggleCovered4,coveredIds4}:any) {
    
    const [selectedExpense4, setSelectedExpense4] = useState<ThreeMonthsExpenseTypes | null>(null)
    

  


  return (
    <div className='w-full h-full mt-[18vh] md:mt-[19vh] flex flex-col gap-1 md:px-4  bg-gray-300'>
       
        {
            ThreeMonthsExpenseData.length>0?(
            <div className='w-full min-h-[50%] bg-gray-300 rounded px-4 py-2 flex flex-col gap-2'>

            {
                ThreeMonthsExpenseData.map((expense)=>(
                    <ThreeMonthsExpense key={expense.id} id={expense.id} image={expense.image} title={expense.title} price={expense.price} details={expense.details} checked={coveredIds4.includes(expense.id)} onToggle4={() => toggleCovered4(expense.id)} onOpenDetails4={() => setSelectedExpense4(expense)}/>

                ))
            }

            {selectedExpense4 && (
            <PopUpMenuThreeMonths expense={selectedExpense4}  onClose={() => setSelectedExpense4(null)}/>)
            }

        </div>):(
            <div className='w-full min-h-[50%]  px-4 py-2 flex items-center justify-center gap-2'>
                <BriefcaseBusiness/>
                There are no Three Months Expenses

            </div>

        )
        }
       
        </div>
  )
}

