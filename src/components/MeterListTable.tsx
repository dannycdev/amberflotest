import React from 'react'
import { Button, Table } from 'reactstrap'

import { Meter } from '../utils/types'
import { MeterItem } from './MeterItem'

interface MeterListTableProps {
  meters: Meter[]
  onDelete: (meterId: string) => void
}

export const MeterListTable = ({ meters, onDelete }: MeterListTableProps) => {
  return (
    <Table striped>
      <TableHeader />
      <tbody>
        {meters.map((meter, index) => (
          <tr key={meter.id}>
            <td>{index + 1}</td>
            <MeterItem meter={meter} />
            <td>
              <Button color="danger" onClick={() => onDelete(meter.id)}>
                Delete
              </Button>
            </td>
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
        <th>Action</th>
      </tr>
    </thead>
  )
}
