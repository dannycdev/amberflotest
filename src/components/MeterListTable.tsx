import React, { useMemo, useState } from 'react'
import { Button, Table } from 'reactstrap'

import { Meter } from '../utils/types'
import { MeterItem } from './MeterItem'

const DEFAULT_SORT_KEY = 'display_name'
const DEFAULT_ASCENDING = true

const STRING_COLUMN_KEYS = ['display_name', 'api_name', 'type']

interface MeterListTableProps {
  meters: Meter[]
  onDelete: (meterId: string) => void
}

export const MeterListTable = ({ meters, onDelete }: MeterListTableProps) => {
  const [sortConfig, setSortConfig] = useState({
    key: DEFAULT_SORT_KEY,
    ascending: DEFAULT_ASCENDING,
  })

  const sortedMeters = useMemo(() => {
    const { key, ascending } = sortConfig

    return meters.sort((a, b) => {
      const valueA = a[key as keyof Meter]
      const valueB = b[key as keyof Meter]

      if (STRING_COLUMN_KEYS.includes(key)) {
        return ascending
          ? (valueA as string).localeCompare(valueB as string)
          : (valueB as string).localeCompare(valueA as string)
      }

      return ascending ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA)
    })
  }, [meters, sortConfig])

  const onSort = (newSortKey: string) => {
    const newSortConfig =
      sortConfig.key === newSortKey
        ? { key: newSortKey, ascending: !sortConfig.ascending }
        : { key: newSortKey, ascending: true }

    setSortConfig(newSortConfig)
  }

  return (
    <Table striped>
      <TableHeader onSort={onSort} sortConfig={sortConfig} />
      <tbody>
        {sortedMeters.map((meter, index) => (
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

interface TableHeaderProps {
  onSort: (sortKey: string) => void
  sortConfig: {
    key: string
    ascending: boolean
  }
}

const TableHeader = ({ onSort, sortConfig }: TableHeaderProps) => {
  const renderSortIndicator = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.ascending ? ' ^' : ' v'
    }
    return null
  }

  return (
    <thead>
      <tr>
        <th>No.</th>
        <SortableHeader onSort={() => onSort('display_name')}>
          Display Name{renderSortIndicator('display_name')}
        </SortableHeader>
        <SortableHeader onSort={() => onSort('api_name')}>API Name{renderSortIndicator('api_name')}</SortableHeader>
        <SortableHeader onSort={() => onSort('active')}>Active{renderSortIndicator('active')}</SortableHeader>
        <SortableHeader onSort={() => onSort('used_for_billing')}>
          Used For Billing{renderSortIndicator('used_for_billing')}
        </SortableHeader>
        <SortableHeader onSort={() => onSort('type')}>Type{renderSortIndicator('type')}</SortableHeader>
        <th>Action</th>
      </tr>
    </thead>
  )
}

interface SortableHeaderProps {
  onSort: () => void
  children: React.ReactNode
}

const SortableHeader = ({ onSort, children }: SortableHeaderProps) => (
  <th className="sortable" onClick={onSort}>
    {children}
  </th>
)
