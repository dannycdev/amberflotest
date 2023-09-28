import React from 'react'
import { Alert } from 'reactstrap'

interface AlertMessageProps {
  color?: string
  message: string
}

export const AlertMessage = ({ color = 'danger', message }: AlertMessageProps) => {
  return <Alert color={color}>{message}</Alert>
}
