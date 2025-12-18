import { DailyExpenseTypes } from '@/types'
import { X } from 'lucide-react';

type PopUpMenuTypes = {
  expense: DailyExpenseTypes
  onClose: () => void
}

export default function PopUpMenuDaily({ expense, onClose }: PopUpMenuTypes) {

    // Getting the monthly daily price
    const monthlyDailyPrice = expense.price*31;

    // toLocaleString() enables us the put the comma

  return (
    <div className='fixed inset-0 bg-black/40 flex items-end justify-center z-50'>

      <div className='w-full h-[50vh] bg-white rounded-t-2xl p-6'>

        {/* Header */}
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>{expense.title}</h2>
          <button onClick={onClose}><X className='cursor-pointer hover:bg-gray-200 w-10 h-10  rounded-full p-1'/></button>
        </div>

        {/* Details */}
        <div className='mt-6 space-y-4'>
          <p>
            <span className='font-semibold'>Daily Expense:</span>{' '}
            UGX {expense.price.toLocaleString()} 
          </p>
           <p>
            <span className='font-semibold'>Monthly Expense:</span>{' '}
            UGX {monthlyDailyPrice.toLocaleString()}
          </p>
           <p>
            <span className='font-semibold'>Details:</span>{' '}
            {expense.details}
          </p>

          {/* <p>
            <span className='font-semibold'>Expense ID:</span>{' '}
            {expense.id}
          </p> */}

        </div>

      </div>
    </div>
  )
}
