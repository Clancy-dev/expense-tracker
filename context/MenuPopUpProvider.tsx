"use client"
import React, { createContext, useContext, useState } from 'react'

type MenuPopUpContextTypes = {
  open:boolean,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

//i now create the context
//By default the context is not there that is why we put null
const MenuPopUpContext = createContext<MenuPopUpContextTypes | null>(null);

export default function MenuPopUpProvider({children}:{children:React.ReactNode}) {
    const [open,setOpen] = useState<boolean>(false);

  return (
    <MenuPopUpContext.Provider value={{open,setOpen}}>
      {children}
    </MenuPopUpContext.Provider>
  )
}

export function useMenuPopUp(){
  const context = useContext(MenuPopUpContext);
  if(!context){
    throw new Error("useMenuPopUp must be used inside the MenuPopUpProvider");
  }
  return context;
}
