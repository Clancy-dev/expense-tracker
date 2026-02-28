"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import { expenseDataByLifestyle } from '@/data/expenseData'
import { useLifestyle } from '@/context/LifestyleContext'
import { expenseDataByLifestyle } from '@/data/expenseData'
import SummaryCard from './SummaryCard'
// import SummaryCard from './SummaryCard'

export default function Home() {
  const [coveredIds, setCoveredIds] = useState<number[]>([])
  const [coveredIds2, setCoveredIds2] = useState<number[]>([])
  const [coveredIds3, setCoveredIds3] = useState<number[]>([])
  const [coveredIds4, setCoveredIds4] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState<string>(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("activeTab") || "daily"
  }
  return "daily"
})
  useEffect(() => {
  localStorage.setItem("activeTab", activeTab)
}, [activeTab])

  const { lifestyle } = useLifestyle()
  const lifestyleData = expenseDataByLifestyle[lifestyle]

  const DailyExpenseData = lifestyleData.daily
  const WeeklyExpenseData = lifestyleData.weekly
  const MonthlyExpenseData = lifestyleData.monthly
  

  useEffect(() => {
    setCoveredIds([])
    setCoveredIds2([])
    setCoveredIds3([])
    setCoveredIds4([])
  }, [lifestyle])

  const toggleCovered = (id: number) => {
    setCoveredIds(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id])
  }

  const toggleCovered2 = (id: number) => {
    setCoveredIds2(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id])
  }

  const toggleCovered3 = (id: number) => {
    setCoveredIds3(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id])
  }

  const toggleCovered4 = (id: number) => {
    setCoveredIds4(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id])
  }

  const totalDailyExpenses = DailyExpenseData.reduce((sum, item) => sum + item.price, 0)
  const totalDailyExpensesPerMonth = DailyExpenseData.reduce((sum, item) => sum + item.price * 31, 0)
  const coveredAmount = DailyExpenseData.filter(item => coveredIds.includes(item.id)).reduce((sum, item) => sum + item.price * 31, 0)
  const balance = totalDailyExpensesPerMonth - coveredAmount

  const totalWeeklyExpenses = WeeklyExpenseData.reduce((sum, item) => sum + item.price, 0)
  const totalWeeklyExpensesPerMonth = WeeklyExpenseData.reduce((sum, item) => sum + item.price * 4.4, 0)
  const coveredWeeklyAmount = WeeklyExpenseData.filter(item => coveredIds2.includes(item.id)).reduce((sum, item) => sum + item.price, 0)
  const weeklyBalance = totalWeeklyExpenses - coveredWeeklyAmount

  const totalMonthlyExpenses = MonthlyExpenseData.reduce((sum, item) => sum + item.price, 0)
  const coveredMonthlyAmount = MonthlyExpenseData.filter(item => coveredIds3.includes(item.id)).reduce((sum, item) => sum + item.price, 0)
  const monthlyBalance = totalMonthlyExpenses - coveredMonthlyAmount

  

  const grandTotalExpenses = totalDailyExpensesPerMonth + totalWeeklyExpensesPerMonth + totalMonthlyExpenses 
  const grandTotalBalance = balance + weeklyBalance + monthlyBalance 

  const tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'grand', label: 'Grand Total' },
  ]

  const ExpenseTable = ({ data, coveredIds, onToggle, multiplier }: any) => (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <colgroup>
          <col style={{ width: '80px' }} />
          <col />
          <col style={{ width: '140px' }} />
          <col style={{ width: '160px' }} />
          <col style={{ width: '100px' }} />
        </colgroup>
        <thead>
          <tr className='bg-slate-100 border-b border-slate-200'>
            <th className='px-4 py-3 text-left text-sm font-semibold text-slate-900'>Image</th>
            <th className='px-4 py-3 text-left text-sm font-semibold text-slate-900'>Expense</th>
            <th className='px-4 py-3 text-right text-sm font-semibold text-slate-900'>Price</th>
            <th className='px-4 py-3 text-right text-sm font-semibold text-slate-900'>Monthly</th>
            <th className='px-4 py-3 text-center text-sm font-semibold text-slate-900'>Covered</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-200'>
          {data.map((expense: any) => (
            <tr key={expense.id} className='hover:bg-slate-50 transition-colors'>
              <td className='px-4 py-3'>
                {expense.image ? (
                  <div className='w-12 h-12 relative rounded-lg overflow-hidden bg-slate-100'>
                    <Image
                      src={expense.image}
                      alt={expense.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                ) : (
                  <div className='w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400 text-xs'>N/A</div>
                )}
              </td>
              <td className='px-4 py-3 text-slate-900 font-medium'>{expense.title}</td>
              <td className='px-4 py-3 text-right text-slate-900'>UGX {expense.price.toLocaleString()}</td>
              <td className='px-4 py-3 text-right text-slate-900 font-semibold'>UGX {(expense.price * multiplier).toLocaleString()}</td>
              <td className='px-4 py-3 text-center'>
                <input
                  type='checkbox'
                  checked={coveredIds.includes(expense.id)}
                  onChange={() => onToggle(expense.id)}
                  className='w-5 h-5 cursor-pointer rounded border-slate-300'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      {/* Header */}
      <header className='sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div>
            <h1 className='text-3xl font-bold text-slate-900'>Expense Tracker</h1>
            <p className='text-slate-600 mt-1'>Manage your {lifestyle.replace('lifestyle', 'lifestyle ')} expenses</p>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className='bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex gap-2 overflow-x-auto py-4'>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {activeTab === 'daily' && (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <SummaryCard
                label='Total Daily Expenses (Per Month)'
                amount={totalDailyExpensesPerMonth}
                subtext='31 days projected'
              />
              <SummaryCard
                label='Total Daily Balance (Per Month)'
                amount={balance}
                type={balance > 0 ? 'positive' : balance < 0 ? 'negative' : 'neutral'}
              />
            </div>
            {DailyExpenseData.length > 0 ? (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
                <ExpenseTable
                  data={DailyExpenseData}
                  coveredIds={coveredIds}
                  onToggle={toggleCovered}
                  multiplier={31}
                />
              </div>
            ) : (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500'>
                No daily expenses
              </div>
            )}
          </div>
        )}

        {activeTab === 'weekly' && (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <SummaryCard
                label='Total Weekly Expenses (Per Month)'
                amount={totalWeeklyExpensesPerMonth}
                subtext='4.4 weeks average'
              />
              <SummaryCard
                label='Total Weekly Balance (Per Week)'
                amount={weeklyBalance}
                type={weeklyBalance > 0 ? 'positive' : weeklyBalance < 0 ? 'negative' : 'neutral'}
              />
            </div>
            {WeeklyExpenseData.length > 0 ? (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
                <ExpenseTable
                  data={WeeklyExpenseData}
                  coveredIds={coveredIds2}
                  onToggle={toggleCovered2}
                  multiplier={4.4}
                />
              </div>
            ) : (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500'>
                No weekly expenses
              </div>
            )}
          </div>
        )}

        {activeTab === 'monthly' && (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <SummaryCard
                label='Total Fixed Monthly Expenses'
                amount={totalMonthlyExpenses}
                subtext='Fixed monthly costs'
              />
              <SummaryCard
                label='Total Fixed Monthly Balance'
                amount={monthlyBalance}
                type={monthlyBalance > 0 ? 'positive' : monthlyBalance < 0 ? 'negative' : 'neutral'}
              />
            </div>
            {MonthlyExpenseData.length > 0 ? (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
                <ExpenseTable
                  data={MonthlyExpenseData}
                  coveredIds={coveredIds3}
                  onToggle={toggleCovered3}
                  multiplier={1}
                />
              </div>
            ) : (
              <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500'>
                No monthly expenses
              </div>
            )}
          </div>
        )}

       

        {activeTab === 'grand' && (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <SummaryCard
                label='Grand Total Expenses'
                amount={grandTotalExpenses}
                subtext='All categories combined'
                isGrandTotal
              />
              <SummaryCard
                label='Grand Total Balance'
                amount={grandTotalBalance}
                type={grandTotalBalance > 0 ? 'positive' : grandTotalBalance < 0 ? 'negative' : 'neutral'}
                isGrandTotal
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              <div className='bg-white rounded-xl shadow-sm p-6 border border-slate-200'>
                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Daily</h3>
                <div className='space-y-2'>
                  {DailyExpenseData.map((expense: any) => {
                    const isChecked = coveredIds.includes(expense.id)
                    const amount = isChecked ? (expense.price * 31) : 0
                    return (
                      <div key={expense.id} className='flex justify-between text-sm'>
                        <span className='text-slate-700'>• {expense.title}</span>
                        <span className='font-medium text-slate-900'>UGX {amount.toLocaleString()}</span>
                      </div>
                    )
                  })}
                  <div className='border-t border-slate-200 pt-2 mt-3 flex justify-between font-semibold'>
                    <span className='text-slate-900'>Grand Daily Balance</span>
                    <span className='text-slate-900'>UGX {balance.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-sm p-6 border border-slate-200'>
                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Weekly</h3>
                <div className='space-y-2'>
                  {WeeklyExpenseData.map((expense: any) => {
                    const isChecked = coveredIds2.includes(expense.id)
                    const amount = isChecked ? (expense.price * 4.4) : 0
                    return (
                      <div key={expense.id} className='flex justify-between text-sm'>
                        <span className='text-slate-700'>• {expense.title}</span>
                        <span className='font-medium text-slate-900'>UGX {amount.toLocaleString()}</span>
                      </div>
                    )
                  })}
                  <div className='border-t border-slate-200 pt-2 mt-3 flex justify-between font-semibold'>
                    <span className='text-slate-900'>Grand Weekly Balance</span>
                    <span className='text-slate-900'>UGX {weeklyBalance.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-sm p-6 border border-slate-200'>
                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Monthly</h3>
                <div className='space-y-2'>
                  {MonthlyExpenseData.map((expense: any) => {
                    const isChecked = coveredIds3.includes(expense.id)
                    const amount = isChecked ? expense.price : 0
                    return (
                      <div key={expense.id} className='flex justify-between text-sm'>
                        <span className='text-slate-700'>• {expense.title}</span>
                        <span className='font-medium text-slate-900'>UGX {amount.toLocaleString()}</span>
                      </div>
                    )
                  })}
                  <div className='border-t border-slate-200 pt-2 mt-3 flex justify-between font-semibold'>
                    <span className='text-slate-900'>Grand Monthly Balance</span>
                    <span className='text-slate-900'>UGX {monthlyBalance.toLocaleString()}</span>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        )}
      </main>

      <div className='pb-4' />
    </div>
  )
}
