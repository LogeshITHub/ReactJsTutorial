import { useState } from 'react'  
import Header from './components/Header'          //default export
import Footer from './components/Footer'          //default export
import { Content } from './components/Content'    //named export
import './index.css';

function App() {
  let user ='Logesh'
  return (
    <>
     <Header user={user}/>
     <Content />
     <Footer user={user}/>
    </>
  )
}

export default App
