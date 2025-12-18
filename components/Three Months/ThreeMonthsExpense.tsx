import { MonthlyExpenseTypes, ThreeMonthsExpenseTypes } from '@/types'
import { Check, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type AdditionalThreeMonthsExpenseTypes = ThreeMonthsExpenseTypes & {
  checked: boolean
  onToggle4: () => void
  onOpenDetails4: () => void
}

export default function ThreeMonthsExpense({id,image,price,details,title,checked,onToggle4,onOpenDetails4}:AdditionalThreeMonthsExpenseTypes) {
  


  return (
    <div className='max-w-full h-[25%] bg-white flex rounded'>
        {/* Expense Image */}
        <div className='max-w-[15%] md:max-w-[5%] h-full flex items-center p-1 '>
            <Image src={image} alt='lunch-image' width={500} height={500} className='max-w-full h-full rounded object-cover'/>        
        </div>

        {/* Expense Name */}
        <div className='md:w-[85%] w-[55%] min-h-full flex items-center md:px-6 px-4 font-bold'>
           {title}

        </div>
        {/* View Details */}
        <div className='w-10% md:w-[5%]  min-h-full p-2 flex items-center justify-center'>
            <MoreVertical className='cursor-pointer' onClick={onOpenDetails4}/>
        </div>
        {/* Tick */}
        <div className='w-[20%]  md:w-[5%] h-full p-2 flex items-center justify-center '>
            <div onClick={onToggle4} className={`w-8 h-8 border-4 rounded cursor-pointer flex items-center justify-center
            ${checked ? 'border-green-500 bg-green-500' : 'border-gray-300'}
          `}
        >
          {checked && <Check className='text-white' />}
        </div>
        </div>

    </div>
  )
}
