//ES7 extension
//shortcut: rafc
// this is named export not default export
 import React, { useState } from 'react'
 import './Content.css';
import CountApp from './CountApp';
 
 export const Content = () => {

  //let setData="Sample"
  const [Data,setData]= useState("")
  function Test(data = ""){
    setData("Test")
  }
  function Test2(e){
    //console.log(e.target.innerText)    //likes currenclick classs parent class
    setData("Test2")
  }

  return (
  <>       
      <button onClick={Test2}> Click Me Call Back Method</button>
      <br/> 
      <button onClick={() => Test()}> Click Me Without Params</button>
      <br/> 
      <button onClick={()=>{Test("With Params")} }> Click Me With Params</button>
       <div>Content {Data || ""}</div>   
       <CountApp/>
  </>
  )
 }
 