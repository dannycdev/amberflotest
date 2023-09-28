import React, { useEffect } from 'react'

import { AlertMessage, Loading, MeterTable } from '../components'
import { useMeter } from '../hooks'

export const MeterListPage = () => {
  const { meters, fetchMeters, isFetchingMeters, fetchMetersError } = useMeter()

  useEffect(() => {
    fetchMeters()
  }, [])

  if (isFetchingMeters) {
    return <Loading />
  }

  if (fetchMetersError) {
    return <AlertMessage message={fetchMetersError.message} />
  }

  if (!meters || meters?.length === 0) {
    return <div>No content</div>
  }

  return (
    <div>
      <MeterTable meters={meters} />
    </div>
  )
}
