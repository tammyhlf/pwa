import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <Link className="App-link" to={'about'}>
          About
        </Link>
      </header>
    </div>
  )
}

export default Home
