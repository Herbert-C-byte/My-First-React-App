import { useState } from 'react'
import Main from './components/main.jsx'
import NavBar from './components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <NavBar />
        <Main />
      </>

  )
}

export default App
