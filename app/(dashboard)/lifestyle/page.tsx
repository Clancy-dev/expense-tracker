"use client"
import { useLifestyle } from '@/context/LifestyleContext';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LifestylePage() {
  const { setLifestyle, lifestyle } = useLifestyle();
  const router = useRouter();

  const selectLifestyle = (value: "lifestyle1" | "lifestyle2" | "lifestyle3") => {
    setLifestyle(value);
    router.push("/");
  };

  const lifestyles = [
    {
      id: "lifestyle1",
      title: "Very Hard Life",
      description: "Essential expenses and minimal spending",
      icon: "💪",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200"
    },
    {
      id: "lifestyle2",
      title: "Medium Life",
      description: "Balanced expenses with some comforts",
      icon: "⚖️",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-200"
    },
    {
      id: "lifestyle3",
      title: "Good Life",
      description: "Comfortable expenses with enjoyment",
      icon: "🌟",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200"
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className='sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <h1 className='text-4xl font-bold text-slate-900'>Choose Your Lifestyle</h1>
          <p className='text-slate-600 mt-2'>Select the lifestyle that best fits your expense budget</p>
        </div>
      </header>

      {/* Content */}
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {lifestyles.map((item) => (
            <LifestyleCard
              key={item.id}
              {...item}
              active={lifestyle === item.id}
              onClick={() => selectLifestyle(item.id as "lifestyle1" | "lifestyle2" | "lifestyle3")}
            />
          ))}
        </div>

        {/* Current Selection Info */}
        <div className='mt-12 bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
          <p className='text-slate-700'>
            <span className='font-semibold text-slate-900'>Currently selected:</span> {' '}
            {lifestyles.find(l => l.id === lifestyle)?.title}
          </p>
        </div>
      </main>
    </div>
  );
}

function LifestyleCard({
  id,
  title,
  description,
  icon,
  color,
  borderColor,
  onClick,
  active,
}: {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
        active ? 'ring-2 ring-offset-2 ring-slate-400 shadow-lg' : 'shadow-md hover:shadow-xl'
      }`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-15 transition-opacity`}></div>

      {/* Card Content */}
      <div className={`relative bg-white border-2 ${borderColor} rounded-2xl p-8 text-center ${active ? 'border-slate-400' : ''}`}>
        {/* Icon */}
        <div className='text-6xl mb-4'>{icon}</div>

        {/* Title */}
        <h3 className='text-2xl font-bold text-slate-900 mb-2'>{title}</h3>

        {/* Description */}
        <p className='text-slate-600 mb-6 text-sm'>{description}</p>

        {/* Button */}
        <div className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
          active
            ? `bg-gradient-to-r ${color}`
            : 'bg-slate-300 hover:bg-slate-400'
        }`}>
          {active ? 'Currently Selected' : 'Select Lifestyle'}
        </div>

        {/* Active Indicator */}
        {active && (
          <div className='absolute top-4 right-4 bg-green-500 text-white rounded-full p-2'>
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}
