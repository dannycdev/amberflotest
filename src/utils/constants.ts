import { MeterPostData, MeterType } from './types'

export const COMMON_HEADER = { 'Content-Type': 'application/json', 'API-KEY': process.env.REACT_APP_API_KEY ?? '' }

export const DEFAULT_METER_POST_DATA: MeterPostData = {
  api_name: '',
  display_name: '',
  active: false,
  used_for_billing: false,
  type: MeterType.SUM,
}

export const DEFAULT_METER_IDS = [
  '0839b368-d3d1-41a3-9938-d4c6df8a3d64',
  '1634a14b-ecfa-405c-9113-5f71ae99b97a',
  '3a309982-720c-49b6-a28a-4f5d9d415509',
]
