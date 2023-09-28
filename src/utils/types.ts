export interface Meter extends MeterPostData {
  id: string
  updated_time: string
  created_time: string
}

export interface MeterPostData {
  api_name: string
  display_name: string
  active: boolean
  used_for_billing: boolean
  type: MeterType
}

export enum MeterType {
  SUM = 'sum',
  MAX = 'max',
  UNIQUE_COUNT = 'unique_count',
}
