import React, { createContext, ReactNode, useState } from 'react'

import { Meter } from '../utils/types'

interface MetersContextType {
  meters: Meter[] | undefined
  setMeters: (meters: Meter[] | undefined) => void
}

export const MetersContext = createContext<MetersContextType | undefined>(undefined)

interface MetersContextProviderProps {
  children: ReactNode
}

export const MetersContextProvider = ({ children }: MetersContextProviderProps) => {
  const [meters, setMeters] = useState<Meter[] | undefined>(undefined)

  return <MetersContext.Provider value={{ meters, setMeters }}>{children}</MetersContext.Provider>
}
