import React from 'react'
import { useParams } from 'react-router-dom'

export const MeterDetailsPage = () => {
  const { meterId } = useParams()

  return <div>MeterDetailsPage {meterId}</div>
}
