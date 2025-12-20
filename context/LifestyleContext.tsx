"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

export type LifestyleType = "lifestyle1" | "lifestyle2" | "lifestyle3";

type LifestyleContextType = {
  lifestyle: LifestyleType;
  setLifestyle: (lifestyle: LifestyleType) => void;
};

const LifestyleContext = createContext<LifestyleContextType | null>(null);

export function LifestyleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lifestyle, setLifestyle] = useState<LifestyleType>("lifestyle1");

  // Persist lifestyle (VERY IMPORTANT)
  useEffect(() => {
    const savedLifestyle = localStorage.getItem("lifestyle") as LifestyleType;
    if (savedLifestyle) {
      setLifestyle(savedLifestyle);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lifestyle", lifestyle);
  }, [lifestyle]);

  return (
    <LifestyleContext.Provider value={{ lifestyle, setLifestyle }}>
      {children}
    </LifestyleContext.Provider>
  );
}

export function useLifestyle() {
  const context = useContext(LifestyleContext);
  if (!context) {
    throw new Error("useLifestyle must be used inside LifestyleProvider");
  }
  return context;
}
