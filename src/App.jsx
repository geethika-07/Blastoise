import logo from '../assets/blastoise_logo.png'
import './App.css'
import { useState } from 'react'

function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="navbar-left">
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
        
        <div className="navbar-center">
          <img src={logo} alt="Blastoise Logo" className="logo" />
          <span className="app-name">Blastoise</span>
        </div>
        
        
      </header>

      <div className="main-content">
        <h2>Welcome to Blastoise</h2>
        <p>A "Binge Optimizer" - User inputs how much free time they have, and they get optimal combination of unwatched TV episodes, anime or movies</p>
      </div>
    </div>
  )
}

export default App
