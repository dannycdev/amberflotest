import { Meter, MeterPostData } from './types'

export const MeterToMeterPostData = (meter: Meter): MeterPostData => {
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
