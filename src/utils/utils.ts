import { Meter, MeterPostData } from './types'

export const getMeterPostDataFromMeter = (meter: Meter): MeterPostData => {
  const { api_name, display_name, active, used_for_billing, type } = meter

  return {
    api_name,
    display_name,
    active,
    used_for_billing,
    type,
  }
}

export const isValidMeterPostData = (meterPostData: MeterPostData): boolean => {
  if (meterPostData.api_name === '') return false
  if (meterPostData.display_name === '') return false

  return true
}

export const generateMeterValueBasedOnKey = (meter: Meter, key: string) => {
  const value: string | boolean = meter[key as keyof typeof meter]

  if (key === 'active') {
    return value === true ? 'Active' : 'Inactive'
  }

  if (key === 'used_for_billing') {
    return value === true ? 'Yes' : 'No'
  }

  return value
}
