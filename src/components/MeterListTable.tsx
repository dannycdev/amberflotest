import React from 'react'
import { Table } from 'reactstrap'

import { Meter } from '../utils/types'
import { MeterItem } from './MeterItem'

interface MeterListTableProps {
  meters: Meter[]
}

export const MeterListTable = ({ meters }: MeterListTableProps) => {
  return (
    <Table striped>
      <TableHeader />
      <tbody>
        {meters.map((meter, index) => (
          <tr key={meter.id}>
            <td>{index + 1}</td>
            <MeterItem meter={meter} />
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
        <th>No.</th>
        <th>Display Name</th>
        <th>API Name</th>
        <th>Active</th>
        <th>Used For Billing</th>
        <th>Type</th>
      </tr>
    </thead>
  )
}
