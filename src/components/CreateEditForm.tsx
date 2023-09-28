import React, { useCallback, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import { useMeter } from '../hooks'
import { DEFAULT_METER_POST_DATA } from '../utils/constants'
import { MeterPostData, MeterType } from '../utils/types'
import { isValidMeterPostData, MeterToMeterPostData } from '../utils/utils'
import { AlertMessage } from './AlertMessage'

interface CreateEditFormProps {
  meterId?: string
  isAddingOrUpdating: boolean
  hasAddOrUpdateError: boolean
  onSubmit: (meterPostData: MeterPostData) => void
}

export const CreateEditForm = ({ meterId, onSubmit, isAddingOrUpdating, hasAddOrUpdateError }: CreateEditFormProps) => {
  const {
    meter,
    isFetchingMeter,
    fetchMeterError,

    fetchMeter,
  } = useMeter()

  const [meterData, setMeterData] = useState<MeterPostData>(DEFAULT_METER_POST_DATA)

  const isCreating = !meterId
  const isValidData = isValidMeterPostData(meterData)
  const isLoading = isFetchingMeter || isAddingOrUpdating
  const hasError = !!fetchMeterError || hasAddOrUpdateError

  const fetchMeterData = useCallback(async (id: string) => {
    await fetchMeter(id)

    if (meter) setMeterData(MeterToMeterPostData(meter))
  }, [])

  useEffect(() => {
    if (isCreating) return

    fetchMeterData(meterId)
  }, [])

  const handleChange = (
    fieldName: string,
    e: React.MouseEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (fieldName) {
      case 'api_name':
      case 'display_name': {
        const value: string = (e.target as HTMLInputElement).value.trim()

        if (value !== '') {
          setMeterData({ ...meterData, [fieldName]: value })
        }

        break
      }
      case 'active':
      case 'used_for_billing': {
        const value: boolean = (e.target as HTMLInputElement).checked

        setMeterData({ ...meterData, [fieldName]: value })

        break
      }
      case 'type': {
        const value: MeterType = (e.target as HTMLInputElement).value as MeterType

        setMeterData({ ...meterData, [fieldName]: value })
      }
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isValidData) onSubmit(meterData)
  }

  if (hasError) {
    return <AlertMessage message="There is an error. Please try again." />
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="apiName">API Name</Label>
        <Input
          id="apiName"
          name="apiName"
          placeholder="API Name"
          value={meterData.api_name}
          onChange={e => handleChange('api_name', e)}
          disabled={isLoading}
        />
      </FormGroup>
      <FormGroup>
        <Label for="displayName">Display Name</Label>
        <Input
          id="displayName"
          name="displayName"
          placeholder="Display Name"
          value={meterData.display_name}
          onChange={e => handleChange('display_name', e)}
          disabled={isLoading}
        />
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={!!meterData.active}
          onClick={e => handleChange('active', e)}
          disabled={isLoading}
        />
        <Label check>Active</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={!!meterData.used_for_billing}
          onClick={e => handleChange('used_for_billing', e)}
          disabled={isLoading}
        />
        <Label check>Used For Billing</Label>
      </FormGroup>
      <FormGroup>
        <Label for="type">Meter Type</Label>
        <Input
          id="type"
          name="type"
          type="select"
          value={meterData.type}
          onChange={e => handleChange('type', e)}
          disabled={isLoading}
        >
          {Object.keys(MeterType).map((key: string) => (
            <option key={key}>{MeterType[key as keyof typeof MeterType]}</option>
          ))}
        </Input>
      </FormGroup>
      <Button disabled={isLoading || !isValidData}>{isLoading ? 'Loading' : 'Submit'}</Button>
    </Form>
  )
}
