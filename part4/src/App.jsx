import { useState } from 'react' 
import './App.css'
import Shop from './components/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shop />
    </>
  )
}

export default App
