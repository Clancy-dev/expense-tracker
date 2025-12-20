import { MonthlyExpenseTypes } from '@/types'
import { Check, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type AdditionalMonthlyExpenseTypes = MonthlyExpenseTypes & {
  checked: boolean
  onToggle3: () => void
  onOpenDetails3: () => void
}

export default function MonthlyExpense({id,image,price,details,title,checked,onToggle3,onOpenDetails3}:AdditionalMonthlyExpenseTypes) {
  


  return (
    <div className='max-w-full h-14 bg-white flex rounded shrink-0'>
        {/* Expense Image */}
        <div className='w-[15%] md:w-[5%] h-14 flex items-center p-1 '>
            <Image src={image} alt='lunch-image' width={100} height={100} className='w-full h-full rounded object-cover'/>        
        </div>

        {/* Expense Name */}
        <div className='md:w-[85%] w-[55%] min-h-full flex items-center md:px-6 px-4 font-bold'>
           {title}

        </div>
        {/* View Details */}
        <div className='w-10% md:w-[5%]  min-h-full p-2 flex items-center justify-center'>
            <MoreVertical className='cursor-pointer' onClick={onOpenDetails3}/>
        </div>
        {/* Tick */}
        <div className='w-[20%]  md:w-[5%] h-full p-2 flex items-center justify-center '>
            <div onClick={onToggle3} className={`w-8 h-8 border-4 rounded cursor-pointer flex items-center justify-center
            ${checked ? 'border-green-500 bg-green-500' : 'border-gray-300'}
          `}
        >
          {checked && <Check className='text-white' />}
        </div>
        </div>

    </div>
  )
}
