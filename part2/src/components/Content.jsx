//ES7 extension
//shortcut: rafc
// this is named export not default export
 import React, { useState } from 'react'
 import './Content.css';
 
 export const Content = () => {

  const [data,setData]= useState("")
  function Test(data = ""){
    setData(data)
  }
  function Test2(e){
    //console.log(e.target.innerText)    //likes currenclick classs parent class
    setData(e.target.innerText)    
  }

  return (
  <>       
      <button onClick={Test2}> Click Me Call Back Method</button>
      <br/> 
      <button onClick={() => Test()}> Click Me Without Params</button>
      <br/> 
      <button onClick={()=>{Test("With Params")} }> Click Me With Params</button>
       <div>Content {data || ""}</div>   
  </>
  )
 }
 