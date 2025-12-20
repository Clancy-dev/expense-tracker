"use client"
import React, { useState } from 'react'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'
import { DailyExpenseTypes, MonthlyExpenseTypes } from '@/types'
import MonthlyExpense from './MonthlyExpense'
import PopUpMenuMonthly from './PopUpMenuMonthly'

export default function MonthlyExpenses({MonthlyExpenseData,toggleCovered3,coveredIds3}:{MonthlyExpenseData: MonthlyExpenseTypes[],toggleCovered3: (id: number) => void,coveredIds3: number[];}) {
    
    const [selectedExpense3, setSelectedExpense3] = useState<MonthlyExpenseTypes | null>(null)
    

  


  return (
    <div className='w-full h-[45vh] mt-[18vh] md:mt-[19vh] p-2 md:px-4  '>
        
       
        {
            MonthlyExpenseData.length>0?(
            <div className='w-full h-full bg-gray-300 rounded px-4 py-2 flex flex-col gap-2 overflow-y-auto '>

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

