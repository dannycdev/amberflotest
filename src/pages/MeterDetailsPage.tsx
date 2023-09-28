import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

import { AlertMessage, Loading, MeterDetailsTable } from '../components'
import { useMeter, useMetersContext } from '../hooks'
import { Meter } from '../utils/types'

export const MeterDetailsPage = () => {
  const { meterId } = useParams()
  const { meters: metersState, setMeters } = useMetersContext()
  const { meters, fetchMeters, isFetchingMeters, fetchMetersError } = useMeter()

  const meter: Meter | undefined = useMemo(
    () => metersState?.find(meter => meter.id === meterId),
    [meterId, metersState]
  )

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

  if (!meter) {
    return <div>No content</div>
  }

  return (
    <>
      <MeterDetailsTable meter={meter} />
      <Link to={`/meters/${meterId}/edit`}>
        <Button>Edit Item</Button>
      </Link>
    </>
  )
}
