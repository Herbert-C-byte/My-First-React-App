import { useState } from 'react'
import './index.css'
import globe from '/public/globe.png'


function Header() {
    return (
        <header className='header'>
            <img src={globe} alt="Globe Logo" />
            <h1>My Travel Journal</h1>
      </header>
    )
}

export default Header