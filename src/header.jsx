import { useState } from 'react'
import './App.css'


function Header() {
    return (
        <header>
        <img src="./icons8-react-50.png" alt="React Logo" width="40px" />
        <nav>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
    )
}

export default Header