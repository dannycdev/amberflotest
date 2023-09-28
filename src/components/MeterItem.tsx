import React from 'react'

import { Meter } from '../utils/types'

interface MeterItemProps {
  meter: Meter
}

export const MeterItem = ({ meter }: MeterItemProps) => {
  const { display_name, api_name, active, used_for_billing, type } = meter

  return (
    <>
      <td>{display_name}</td>
      <td>{api_name}</td>
      <td>{active ? 'Active' : 'Inactive'}</td>
      <td>{used_for_billing ? 'Yes' : 'No'}</td>
      <td>{type}</td>
    </>
  )
}
