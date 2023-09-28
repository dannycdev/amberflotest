import { useContext } from 'react'

import { MetersContext } from '../context/metersContext'

export const useMetersContext = () => {
  const context = useContext(MetersContext)

  if (!context) {
    throw new Error('Cannot use MetersContext outside of the provider!')
  }

  return context
}
