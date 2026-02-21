import React from 'react'

export default function GrandTotal({totalDailyExpensesPerMonth,totalWeeklyExpensesPerMonth,totalMonthlyExpenses,totalThreeMonthsExpenses,grandTotalExpenses,balance,weeklyBalance,monthlyBalance,threeMonthsBalance,grandTotalBalance}:any) {
  return (
    <div className='w-full min-h-[80vh] pb-2 mt-[18vh] md:mt-[19vh] px-2 md:px-6 bg-gray-300'>
            <div className='w-full h-full bg-gray-300 flex flex-col gap-6'>
               <div className='w-full min-h-[50%] bg-gray-300 flex flex-col gap-1'>
                 <div className='w-full h-[8vh] bg-white rounded flex items-center justify-center font-bold text-lg'> Total Expenses </div>
                <div className='w-full h-[7vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2 h-full flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Daily Expenses:
                    </div>
                    <div className='w-[30%] md:w-1/2 h-full flex items-center justify-start px-1 font-bold'>
                    {totalDailyExpensesPerMonth.toLocaleString()}

                    </div>

                </div>
                <div className='w-full h-[7vh] flex bg-white  rounded'>
                    <div className='w-[70%] md:w-1/2 h-full  flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Weekly Expenses:

                    </div>
                    <div className='w-[30%] md:w-1/2 h-full  flex items-center justify-start px-1 font-bold'>
                    {totalWeeklyExpensesPerMonth.toLocaleString()}

                    </div>

                </div>
                <div className='w-full h-[7vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2  h-full flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Monthly Expenses:

                    </div>
                   

                </div>
                
                 <div className='w-full h-[8vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2  flex items-center justify-end px-1 font-bold text-lg'>
                    Grand Total Expenses:

                    </div>
                    <div className='w-[30%] md:w-1/2 flex items-center justify-start px-1 font-bold text-lg '>
                    {grandTotalExpenses.toLocaleString()}

                    </div>

                </div>


               </div>

               <div className='w-full min-h-[50%] bg-gray-300 flex flex-col gap-1'>
                 <div className='w-full h-[8vh] flex bg-white items-center justify-center font-bold text-lg rounded '> Total Balance </div>
                <div className='w-full h-[7vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2 h-full flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Daily Balance:

                    </div>
                    <div className={`${balance===0?"text-black":"text-green-600"} w-[30%] md:w-1/2 h-full flex items-center justify-start px-1 font-bold `}>
                    {balance.toLocaleString()}

                    </div>

                </div>
                <div className='w-full h-[7vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2 h-full flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Weekly Balance:

                    </div>
                    <div className={`${weeklyBalance===0?"text-black":"text-green-600"} w-[30%] md:w-1/2 h-full flex items-center justify-start px-1 font-bold `}>
                    {weeklyBalance.toLocaleString()}

                    </div>

                </div>
                <div className='w-full h-[7vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2 h-full flex items-center justify-end px-1 font-bold text-gray-800'>
                    Total Fixed Monthly Balance:

                    </div>
                    <div className={`${monthlyBalance===0?"text-black":"text-green-600"} w-[30%] md:w-1/2 h-full flex items-center justify-start px-1 font-bold `}>
                    {monthlyBalance.toLocaleString()}

                    </div>

                </div>
                
                 <div className='w-full h-[8vh] flex bg-white rounded'>
                    <div className='w-[70%] md:w-1/2 h-full  flex items-center justify-end px-1 font-bold text-lg '>
                    Grand Total Balance:

                    </div>
                    <div className={`${grandTotalBalance===0?"text-black":"text-green-600"} w-[30%] md:w-1/2 h-full flex items-center justify-start px-1 font-bold `}>
                    {grandTotalBalance.toLocaleString()}

                    </div>

                </div>


               </div>

            </div>
            

    </div>
  )
}
