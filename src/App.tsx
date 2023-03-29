import { useState } from 'react'
import { Header } from './components/Header'
import { Tab } from './components/Tab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Tab/>
    </>
  )
}

export default App
