"use client"
import React, { useState } from 'react'
import DailyExpense from './WeeklyExpense'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'
import { DailyExpenseTypes, WeeklyExpenseTypes } from '@/types'
import PopUpMenu from './PopUpMenuWeekly'
import PopUpMenuWeekly from './PopUpMenuWeekly'
import WeeklyExpense from './WeeklyExpense'


export default function WeeklyExpenses({WeeklyExpenseData,toggleCovered2,coveredIds2}:{WeeklyExpenseData: WeeklyExpenseTypes[],toggleCovered2: (id: number) => void,coveredIds2: number[];}) {
    
    const [selectedExpense2, setSelectedExpense2] = useState<WeeklyExpenseTypes | null>(null)
    

  return (
    <div className='w-full h-[45vh] mt-[18vh] md:mt-[19vh] p-2 md:px-4 '>
       
        {
            WeeklyExpenseData.length>0?(
            <div className='w-full h-full bg-gray-300 rounded px-4 py-2 flex flex-col gap-2 overflow-y-auto'>

            {
                WeeklyExpenseData.map((expense)=>(
                    <WeeklyExpense key={expense.id} id={expense.id} image={expense.image} title={expense.title} price={expense.price} checked={coveredIds2.includes(expense.id)} onToggle2={() => toggleCovered2(expense.id)} details={expense.details} onOpenDetails2={() => setSelectedExpense2(expense)}/>

                ))
            }

            {selectedExpense2 && (
            <PopUpMenuWeekly expense={selectedExpense2} onClose={() => setSelectedExpense2(null)}/>)
            }

        </div>):(
            <div className='w-full h-[50%]  px-4 py-2 flex items-center justify-center gap-2'>
                <BriefcaseBusiness/>
                There are no Weekly Expenses

            </div>

        )
        }
       
        </div>
  )
}

