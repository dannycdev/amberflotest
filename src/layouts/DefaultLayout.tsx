import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Footer, Header } from '../components'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Container className="main">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
