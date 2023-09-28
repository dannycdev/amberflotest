import React from 'react'
import { useParams } from 'react-router-dom'

export const MeterCreateEditPage = () => {
  const { meterId } = useParams()

  return <div>MeterCreateEditPage {meterId}</div>
}
