import React, { useEffect } from 'react'

import { AlertMessage, Loading, MeterListTable } from '../components'
import { useMeter, useMetersContext } from '../hooks'

export const MeterListPage = () => {
  const { meters: metersState, setMeters } = useMetersContext()
  const { meters, fetchMeters, isFetchingMeters, fetchMetersError } = useMeter()

  useEffect(() => {
    if (metersState) return

    fetchMeters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!meters) return

    setMeters([...meters])
  }, [meters, setMeters])

  if (isFetchingMeters) {
    return <Loading />
  }

  if (fetchMetersError) {
    return <AlertMessage message={fetchMetersError.message} />
  }

  if (!metersState || metersState?.length === 0) {
    return <div>No content</div>
  }

  return (
    <div>
      <MeterListTable meters={metersState} />
    </div>
  )
}
