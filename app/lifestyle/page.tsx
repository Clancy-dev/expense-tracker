"use client"
import { useLifestyle } from '@/context/LifestyleContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {

  const { setLifestyle, lifestyle } = useLifestyle();
  const router = useRouter();

  const selectLifestyle = (value: "lifestyle1" | "lifestyle2" | "lifestyle3") => {
    setLifestyle(value);
    router.push("/"); // go to dashboard / home
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[10vh] flex items-center justify-center font-bold text-lg">
        Types of Lifestyles
      </div>

      <LifestyleCard
        title="Very hard life"
        active={lifestyle === "lifestyle1"}
        onClick={() => selectLifestyle("lifestyle1")}
        label="Lifestyle 1"
      />

      <LifestyleCard
        title="Medium life"
        active={lifestyle === "lifestyle2"}
        onClick={() => selectLifestyle("lifestyle2")}
        label="Lifestyle 2"
      />

      <LifestyleCard
        title="Kind of good"
        active={lifestyle === "lifestyle3"}
        onClick={() => selectLifestyle("lifestyle3")}
        label="Lifestyle 3"
      />
    </div>
  );
}

function LifestyleCard({
  title,
  label,
  onClick,
  active,
}: {
  title: string;
  label: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <div className="w-full h-[15vh] px-6 py-2 flex flex-col items-center justify-center gap-2">
      <p>{title}</p>
      <button
        onClick={onClick}
        className={`px-6 py-2 w-32 rounded text-white ${
          active ? "bg-green-600" : "bg-gray-400"
        }`}
      >
        {label}
      </button>
    </div>
  );
}