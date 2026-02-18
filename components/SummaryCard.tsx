'use client'
import React from 'react'

interface SummaryCardProps {
  label: string
  amount: number
  type?: 'positive' | 'negative' | 'neutral'
  subtext?: string
  isGrandTotal?: boolean
}

export default function SummaryCard({ label, amount, type = 'neutral', subtext, isGrandTotal }: SummaryCardProps) {
  const textColor = type === 'positive' ? 'text-green-600' : type === 'negative' ? 'text-red-600' : 'text-slate-900'
  const bgColor = isGrandTotal ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200' : 'bg-white border-slate-200'

  return (
    <div className={`rounded-xl shadow-sm border p-6 ${bgColor}`}>
      <p className={`text-sm font-medium ${isGrandTotal ? 'text-blue-700' : 'text-slate-600'} uppercase tracking-wide`}>
        {label}
      </p>
      <div className={`text-3xl sm:text-4xl font-bold ${textColor} mt-2`}>
        {amount.toLocaleString()}
      </div>
      {subtext && (
        <p className='text-xs sm:text-sm text-slate-500 mt-2'>
          {subtext}
        </p>
      )}
    </div>
  )
}
