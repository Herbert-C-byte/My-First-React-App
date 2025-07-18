import { useState } from 'react'
import './App.css'


function Header() {
    return (
        <header className='header'>
        <img src="./icons8-react-50.png" className='nav-logo' alt="React Logo" />
        <nav>
            <ul className='nav-list'>
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
      </header>
    )
}

export default Header