import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Install from './Install1'

function Home() {
  

  return (
    <div className="App">
      <h1>FUNCTION LIST</h1>
      <Install />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        
      </header> */}
      <Link className="App-link" to={'about'}>
        About
      </Link>
    </div>
  )
}

export default Home
