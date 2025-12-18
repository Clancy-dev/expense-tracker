"use client"
import React, { useState } from 'react'
import { DailyExpenseData, MonthlyExpenseData } from '@/data'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'
import { DailyExpenseTypes, MonthlyExpenseTypes } from '@/types'
import PopUpMenu from './PopUpMenuMonthly'
import MonthlyExpense from './MonthlyExpense'
import PopUpMenuMonthly from './PopUpMenuMonthly'

export default function MonthlyExpenses({toggleCovered3,coveredIds3}:any) {
    
    const [selectedExpense3, setSelectedExpense3] = useState<MonthlyExpenseTypes | null>(null)
    

  


  return (
    <div className='w-full h-full mt-[18vh] md:mt-[19vh] flex flex-col gap-1 md:px-4  bg-gray-300'>
       
        {
            MonthlyExpenseData.length>0?(
            <div className='w-full min-h-[50%] bg-gray-300 rounded px-4 py-2 flex flex-col gap-2'>

            {
                MonthlyExpenseData.map((expense)=>(
                    <MonthlyExpense key={expense.id} id={expense.id} image={expense.image} title={expense.title} price={expense.price} details={expense.details} checked={coveredIds3.includes(expense.id)} onToggle3={() => toggleCovered3(expense.id)} onOpenDetails3={() => setSelectedExpense3(expense)}/>

                ))
            }

            {selectedExpense3 && (
            <PopUpMenuMonthly expense={selectedExpense3}  onClose={() => setSelectedExpense3(null)}/>)
            }

        </div>):(
            <div className='w-full min-h-[50%] px-4 py-2 flex items-center justify-center gap-2'>
                <BriefcaseBusiness/>
                There are no Monthly Expenses

            </div>

        )
        }
       
        </div>
  )
}

