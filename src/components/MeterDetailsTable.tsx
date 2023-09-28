import React from 'react'
import { Table } from 'reactstrap'

import { Meter } from '../utils/types'
import { generateMeterValueBasedOnKey } from '../utils/utils'

const PROPERTY_NAMES = {
  id: 'ID',
  api_name: 'API Name',
  display_name: 'Display Name',
  active: 'Active',
  used_for_billing: 'Used for Billing',
  type: 'Type',
  created_time: 'Created',
  updated_time: 'Updated',
}

interface MeterDetailsTableProps {
  meter: Meter
}

export const MeterDetailsTable = ({ meter }: MeterDetailsTableProps) => {
  return (
    <Table striped>
      <TableHeader />
      <tbody>
        {Object.keys(PROPERTY_NAMES).map((key: string) => (
          <tr key={key}>
            <td>{PROPERTY_NAMES[key as keyof typeof PROPERTY_NAMES]}</td>
            <td>{generateMeterValueBasedOnKey(meter, key)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
    </thead>
  )
}
