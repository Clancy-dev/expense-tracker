"use client"
import React, { useEffect, useState } from 'react'
import DailyExpenses from './Daily/DailyExpenses'
import PopUpMenu from './Daily/PopUpMenuDaily'
import { DailyExpenseTypes } from '@/types'
import DailyTotal from './Daily/DailyTotal'
import { expenseDataByLifestyle } from '@/data'
import Header2 from './Header2'
import Header from './Header'
import WeeklyExpenses from './Weekly/WeeklyExpenses'
import WeeklyTotal from './Weekly/WeeklyTotal'
import MonthlyExpenses from './Monthly/MonthlyExpenses'
import MonthlyTotal from './Monthly/MonthlyTotal'
import ThreeMonthsTotal from './Three Months/ThreeMonthsTotal'
import ThreeMonthsExpenses from './Three Months/ThreeMonthsExpenses'
import GrandTotal from './Grand Total/GrandTotal'
import { useLifestyle } from '@/context/LifestyleContext'


export default function Home() {
   const [coveredIds, setCoveredIds] = useState<number[]>([])
   const [coveredIds2, setCoveredIds2] = useState<number[]>([])
   const [coveredIds3, setCoveredIds3] = useState<number[]>([])
   const [coveredIds4, setCoveredIds4] = useState<number[]>([])
   const [activeTab,setActiveTab] = useState<string>("tab1");

   const { lifestyle } = useLifestyle();

   const lifestyleData = expenseDataByLifestyle[lifestyle];

   const DailyExpenseData = lifestyleData.daily;
   const WeeklyExpenseData = lifestyleData.weekly;
   const MonthlyExpenseData = lifestyleData.monthly;
   const ThreeMonthsExpenseData = lifestyleData.threeMonths;

   useEffect(() => {
  setCoveredIds([]);
  setCoveredIds2([]);
  setCoveredIds3([]);
  setCoveredIds4([]);
}, [lifestyle]);
   


  /*********************
   * Daily
   */
   const toggleCovered = (id: number) => {
       setCoveredIds(prev =>
         prev.includes(id)
           ? prev.filter(itemId => itemId !== id)
           : [...prev, id]
       )
     }
     const totalDailyExpenses = DailyExpenseData.reduce(
         (sum, item) => sum + item.price,
         0
       )
       const totalDailyExpensesPerMonth = DailyExpenseData.reduce(
         (sum, item) => sum + item.price*31,
         0
       )
       const coveredAmount = DailyExpenseData
      .filter(item => coveredIds.includes(item.id))
      .reduce((sum, item) => sum + item.price*31, 0)

      const balance = totalDailyExpensesPerMonth - coveredAmount

      /*********************
       * Weekly
      */
      const toggleCovered2 = (id: number) => {
       setCoveredIds2(prev =>
         prev.includes(id)
           ? prev.filter(itemId => itemId !== id)
           : [...prev, id]
       )
     }

     const totalWeeklyExpenses = WeeklyExpenseData.reduce(
         (sum, item) => sum + item.price,
         0
       )

    const totalWeeklyExpensesPerMonth = WeeklyExpenseData.reduce(
         (sum, item) => sum + item.price*4.4,
         0
       )

    const coveredWeeklyAmount = WeeklyExpenseData
    .filter(item => coveredIds2.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0)

    const weeklyBalance = totalWeeklyExpenses - coveredWeeklyAmount


     /*********************
       * Monthly
      */
      const toggleCovered3 = (id: number) => {
       setCoveredIds3(prev =>
         prev.includes(id)
           ? prev.filter(itemId => itemId !== id)
           : [...prev, id]
       )
     }

     const totalMonthlyExpenses = MonthlyExpenseData.reduce(
         (sum, item) => sum + item.price,
         0
       )

    const coveredMonthlyAmount = MonthlyExpenseData
    .filter(item => coveredIds3.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0)

    const monthlyBalance = totalMonthlyExpenses - coveredMonthlyAmount


    
      /*********************
       * Three Months
      */
      const toggleCovered4 = (id: number) => {
       setCoveredIds4(prev =>
         prev.includes(id)
           ? prev.filter(itemId => itemId !== id)
           : [...prev, id]
       )
     }

     const totalThreeMonthsExpenses = ThreeMonthsExpenseData.reduce(
         (sum, item) => sum + item.price,
         0
       )

    const coveredThreeMonthsAmount = ThreeMonthsExpenseData
    .filter(item => coveredIds4.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0)

    const threeMonthsBalance = totalThreeMonthsExpenses - coveredThreeMonthsAmount;


    // Grand Total Expenses
    const grandTotalExpenses = totalDailyExpensesPerMonth + totalWeeklyExpensesPerMonth + totalMonthlyExpenses + totalThreeMonthsExpenses;

    //Grand Total Balance
    const grandTotalBalance =  balance + weeklyBalance + monthlyBalance + threeMonthsBalance;



  return (
     <div className='w-full h-full relative bg-gray-300 pt-1'>
      {/* header 2 */}
      <Header2 setActiveTab={setActiveTab} activeTab={activeTab}/>

      {/* Tabs Body */}
      {
        activeTab==="tab1" && (
           <DailyExpenses DailyExpenseData={DailyExpenseData} toggleCovered={toggleCovered} coveredIds={coveredIds} />
        )
      }

      {
        activeTab==="tab2" && (
           <WeeklyExpenses WeeklyExpenseData={WeeklyExpenseData} toggleCovered2={toggleCovered2} coveredIds2={coveredIds2} />
        )
      }

       {
        activeTab==="tab3" && (
           <MonthlyExpenses MonthlyExpenseData={MonthlyExpenseData} toggleCovered3={toggleCovered3} coveredIds3={coveredIds3} />
        )
      }

       {
        activeTab==="tab4" && (
           <ThreeMonthsExpenses ThreeMonthsExpenseData={ThreeMonthsExpenseData} toggleCovered4={toggleCovered4} coveredIds4={coveredIds4} />
        )
      }

        {
        activeTab==="tab5" && (
           <GrandTotal totalDailyExpensesPerMonth={totalDailyExpensesPerMonth} totalWeeklyExpensesPerMonth={totalWeeklyExpensesPerMonth} totalMonthlyExpenses={totalMonthlyExpenses} totalThreeMonthsExpenses={totalThreeMonthsExpenses} grandTotalExpenses={grandTotalExpenses} balance={balance} weeklyBalance={weeklyBalance} monthlyBalance={monthlyBalance} threeMonthsBalance={threeMonthsBalance} grandTotalBalance={grandTotalBalance}/>
        )
      }
        

         
        

        {
          activeTab==="tab5"?"":(

            <div className='w-full h-[25%] bg-white shadow-md fixed bottom-0'>
          {
            activeTab==="tab1" &&(
              <DailyTotal totalDailyExpenses={totalDailyExpenses} totalDailyExpensesPerMonth={totalDailyExpensesPerMonth} coveredAmount={coveredAmount} balance={balance}/>
            )
          }

           {
            activeTab==="tab2" &&(
              <WeeklyTotal totalWeeklyExpenses={totalWeeklyExpenses} totalWeeklyExpensesPerMonth={totalWeeklyExpensesPerMonth} coveredWeeklyAmount={coveredWeeklyAmount} weeklyBalance={weeklyBalance}/>
            )
          }

          {
            activeTab==="tab3" &&(
              <MonthlyTotal totalMonthlyExpenses={totalMonthlyExpenses}  coveredMonthlyAmount={coveredMonthlyAmount} monthlyBalance={monthlyBalance}/>
            )
          }

          {
            activeTab==="tab4" &&(
              <ThreeMonthsTotal totalThreeMonthsExpenses={totalThreeMonthsExpenses}  coveredThreeMonthsAmount={coveredThreeMonthsAmount} threeMonthsBalance={threeMonthsBalance}/>
            )
          }
          

        </div>
          )
        }



      </div>
  )
}
