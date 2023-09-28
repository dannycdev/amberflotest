import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CreateEditForm } from '../components'
import { useMeter } from '../hooks'
import { MeterPostData } from '../utils/types'

export const MeterCreateEditPage = () => {
  const navigate = useNavigate()

  const { meterId } = useParams()
  const { addMeter, updateMeter, isAddingMeter, addMeterError, isUpdatingMeter, updateMeterError } = useMeter()

  const isUpdating = !!meterId
  const isAddingOrUpdating = isAddingMeter || isUpdatingMeter
  const hasAddOrUpdateError = !!addMeterError || !!updateMeterError

  const onSubmit = async (meterPostData: MeterPostData) => {
    if (isUpdating) {
      await updateMeter(meterId, meterPostData)
    } else {
      await addMeter(meterPostData)
    }

    navigate('/')
  }

  return (
    <CreateEditForm
      meterId={meterId}
      onSubmit={onSubmit}
      isAddingOrUpdating={isAddingOrUpdating}
      hasAddOrUpdateError={hasAddOrUpdateError}
    />
  )
}
