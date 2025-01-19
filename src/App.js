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
  useEffect(() => {
    const root = document.getElementById('root');
    root.style.visibility = 'hidden';
    setTimeout(() => {
      root.style.visibility = 'visible';
    }, 0);
  }, []);

  return <RouterProvider router={router} />
}

export default App
