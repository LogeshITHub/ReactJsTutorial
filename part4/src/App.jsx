import { createContext, useState } from 'react' 
import './App.css'
import Shop from './components/Shop'
import Footer from './components/Footer'


//Common Data when export out side of function to access all of us
export let UserContext = createContext()
function App() {
  const [count, setCount] = useState(0)

  const [commondataforuser, setCommonDataForUser] = useState({
    UserName:"Logesh",
    Role :"Dot Net Full Stack Developer",
    Experience : 3
  })

  return (
    <>
      {/* this mean can asscess all the component no need to send props */}
      <UserContext value ={{commondataforuser}}>
        <Shop />
        <Footer />
      </UserContext>
    </>
  )
}

export default App
