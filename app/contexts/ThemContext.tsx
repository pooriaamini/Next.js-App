"use client";

import { createContext , useContext, useState  } from "react";

interface ThemContextType {
    darkMode: boolean;
    toggleDark: () => void;
    toggleLight: () => void;
  }

const ThemContext=createContext<ThemContextType | undefined>(undefined);


function ThemProvider({children}:{  children: React.ReactNode}){

    const [darkMode, setDarkMode] = useState(false);

const toggleDark=()=>{
    setDarkMode(true)
}


const toggleLight=()=>{
    setDarkMode(false)

}


    return(
        <ThemContext.Provider value={{darkMode,toggleDark,toggleLight}}>

            {children}

        </ThemContext.Provider>
    )
}

function useThem(){
    
    const context=useContext(ThemContext)
    if(context===undefined)
        throw new Error("PostContext was used outside of the PostProvider");
    return context;
}
export {ThemProvider,useThem}