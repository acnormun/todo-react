import { useState } from 'react'
import { Header } from './components/Header'
import { Tab } from './components/Tab'
import {Task} from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Tab/>
      <Task/>
    </>
  )
}

export default App
