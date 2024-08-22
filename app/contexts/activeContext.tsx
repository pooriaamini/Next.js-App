"use client";

import React, { createContext, useContext, useState } from "react";

interface ActiveContextType {
  isActive: boolean;
  setIsActive: (avtive: boolean) => void;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

function ActiveProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

function useActive() {
  const context = useContext(ActiveContext);

  if (context === undefined)
    throw new Error("ActiveContext was used outside of the ActiveProvider");
  return context;
}

export { ActiveProvider, useActive };
