import { useState } from 'react'
import MainContent from './components/MainContent.jsx'
import NavBar from './components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <NavBar />
        <MainContent />
      </>

  )
}

export default App
