import { MeterPostData, MeterType } from './types'

export const COMMON_HEADER = { 'Content-Type': 'application/json', 'API-KEY': process.env.REACT_APP_API_KEY ?? '' }

export const DEFAULT_METER_POST_DATA: MeterPostData = {
  api_name: '',
  display_name: '',
  active: false,
  used_for_billing: false,
  type: MeterType.SUM,
}
