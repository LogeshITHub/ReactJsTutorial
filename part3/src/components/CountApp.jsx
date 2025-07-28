import React, { useState } from 'react'

const CountApp = () => {

  function  SampleData(){
      console.log(100)
      return 100;
  }
  const [sample,setSample]= useState(()=>{return SampleData()});

  const [count,setCount]= useState(0);


  function  Increase(){
      // i click event this increase 1 by 1 not 2 add
      //setCount(count+1);  0+1
      //setCount(count+1);  0+1

       // i click event this increase 2 add this is best practice to handle data
      setCount((previouscount)=>{return previouscount+1})  //0+1
      setCount((previouscount)=>{return previouscount+1})  //1+1
  }
  function  Decrease(){
    setCount((previouscount)=>{return previouscount-1})
  }

  return (
    <>
      <div>CountApp Current count {count} - {sample} </div>
      <button onClick={Increase}>Increase</button>
      <br/>
      <button onClick={Decrease}>Decrease</button>
    </>
  )
}

export default CountApp