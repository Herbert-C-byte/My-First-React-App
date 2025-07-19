import { useState } from 'react'
/* import MainContent from './components/MainContent.jsx' */
import Header from './header.jsx'
import Entry from './components/Entry.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header />
        <Entry />
      </>

  )
}

export default App
