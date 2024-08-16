"use client";

import { createContext , useContext, useState  } from "react";

interface ModeContextType {
    darkMode: boolean;
    toggleDark: () => void;
    toggleLight: () => void;
  }

const ModeContext=createContext<ModeContextType | undefined>(undefined);


function ModeProvider({children}:{  children: React.ReactNode}){

    const [darkMode, setDarkMode] = useState(false);

const toggleDark=()=>{
    setDarkMode(true)
}

const toggleLight=()=>{
    setDarkMode(false)

}


    return(
        <ModeContext.Provider value={{darkMode,toggleDark,toggleLight}}>

            {children}

        </ModeContext.Provider>
    )
}

function useDark(){
    const context=useContext(ModeContext)
    if(context===undefined)
        throw new Error("PostContext was used outside of the PostProvider");
    return context;
}
export {ModeProvider,useDark}