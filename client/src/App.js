import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, About, Register, ProtectedRoute } from './pages'
import {
  SharedLayout,
  Tickets,
  Administration,
  Dashboard,
} from './pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="tickets" element={<Tickets />}></Route>
          <Route path="administration" element={<Administration />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
