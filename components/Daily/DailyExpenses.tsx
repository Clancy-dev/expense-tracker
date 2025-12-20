"use client"
import React, { useState } from 'react'
import DailyExpense from './DailyExpense'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'
import { DailyExpenseTypes } from '@/types'
import PopUpMenu from './PopUpMenuDaily'

export default function DailyExpenses({DailyExpenseData,toggleCovered,coveredIds}:{DailyExpenseData: DailyExpenseTypes[],toggleCovered: (id: number) => void,coveredIds: number[];}) {
    
    const [selectedExpense, setSelectedExpense] = useState<DailyExpenseTypes | null>(null)
    

  


  return (
    <div className='w-full h-[45vh] mt-[18vh]  md:mt-[19vh] p-2 md:px-4'>
       
        {
            DailyExpenseData.length>0?(
            <div className='w-full h-full bg-gray-300 rounded px-4 py-2 flex flex-col gap-2 overflow-y-auto'>

            {
                DailyExpenseData.map((expense)=>(
                    <DailyExpense key={expense.id} id={expense.id} image={expense.image} title={expense.title} price={expense.price} details={expense.details} checked={coveredIds.includes(expense.id)} onToggle={() => toggleCovered(expense.id)} onOpenDetails={() => setSelectedExpense(expense)}/>

                ))
            }

            {selectedExpense && (
            <PopUpMenu expense={selectedExpense}  onClose={() => setSelectedExpense(null)}/>)
            }

        </div>):(
            <div className='w-full min-h-[50%] px-4 py-2 flex items-center justify-center gap-2'>
                <BriefcaseBusiness/>
                There are no Daily Expenses

            </div>

        )
        }
       
        </div>
  )
}

