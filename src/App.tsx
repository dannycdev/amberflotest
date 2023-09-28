import './App.css'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'
import { MeterCreateEditPage, MeterDetailsPage, MeterListPage, NotFoundPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MeterListPage />} />
        <Route path="meters">
          <Route path="create" element={<MeterCreateEditPage />} />
          <Route path=":meterId" element={<MeterDetailsPage />} />
          <Route path=":meterId/edit" element={<MeterCreateEditPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
