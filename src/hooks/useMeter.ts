import { COMMON_HEADER } from '../utils/constants'
import { Meter, MeterPostData } from '../utils/types'
import { useAsync } from './useAsync'

export const useMeter = () => {
  const fetchMetersAsync = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/meters`, {
      method: 'GET',
      headers: COMMON_HEADER,
    })
    if (!response.ok) throw new Error('Failed to fetch meters')
    return response.json() as unknown as Meter[]
  }

  const addMeterAsync = async (meter: MeterPostData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/meters`, {
      method: 'POST',
      headers: COMMON_HEADER,
      body: JSON.stringify(meter),
    })
    if (!response.ok) throw new Error('Failed to add meter')
    return response.json()
  }

  const updateMeterAsync = async (id: string, updatedMeter: Partial<MeterPostData>) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/meters/${id}`, {
      method: 'PUT',
      headers: COMMON_HEADER,
      body: JSON.stringify(updatedMeter),
    })
    if (!response.ok) throw new Error('Failed to update meter')
    return response.json()
  }

  const deleteMeterAsync = async (id: string) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/meters/${id}`, {
      method: 'DELETE',
      headers: COMMON_HEADER,
    })
    if (!response.ok) throw new Error('Failed to delete meter')
    return id
  }

  const {
    data: meters,
    isLoading: isFetchingMeters,
    error: fetchMetersError,
    execute: fetchMeters,
  } = useAsync<Meter[]>(fetchMetersAsync)

  const { isLoading: isAddingMeter, error: addMeterError, execute: addMeterWrapper } = useAsync(addMeterAsync)

  const {
    isLoading: isUpdatingMeter,
    error: updateMeterError,
    execute: updateMeterWrapper,
  } = useAsync(updateMeterAsync)

  const {
    isLoading: isDeletingMeter,
    error: deleteMeterError,
    execute: deleteMeterWrapper,
  } = useAsync(deleteMeterAsync)

  const addMeter = (meterData: MeterPostData) => addMeterWrapper(meterData)
  const updateMeter = (id: string, updatedMeter: Partial<MeterPostData>) => updateMeterWrapper(id, updatedMeter)
  const deleteMeter = (id: string) => deleteMeterWrapper(id)

  return {
    meters,
    isFetchingMeters,
    fetchMetersError,
    isAddingMeter,
    addMeterError,
    isUpdatingMeter,
    updateMeterError,
    isDeletingMeter,
    deleteMeterError,
    fetchMeters,
    addMeter,
    updateMeter,
    deleteMeter,
  }
}
