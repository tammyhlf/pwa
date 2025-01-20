import React, { useEffect } from 'react'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skeleions from './pages/skeleions'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'skeleions',
    element: <Skeleions />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
