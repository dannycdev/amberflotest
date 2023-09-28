import React from 'react'
import { Spinner } from 'reactstrap'

export const Loading = () => {
  return (
    <Spinner
      color="primary"
      style={{
        height: '3rem',
        width: '3rem',
      }}
    >
      Loading...
    </Spinner>
  )
}
