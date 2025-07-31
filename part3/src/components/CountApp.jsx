import React, { useState } from 'react'

const CountApp = () => {
  const [sample,setSample]= useState(()=>{return SampleData()});

  const [count,setCount]= useState(0);
  
  let message;

  function  SampleData(){
      console.log(100)
      return 100;
  }

  //#region SwithchCase

  const [state,setState]= useState("Success");
  function  SuccessState(){      
      return (
       <>
          <h1>Success 👍</h1>
       </> 
      )
  }
  function  FailureState(){      
      return (
       <>
       <h1>Failure 🤦‍♂️</h1>          
       </> 
      )
  }
  function  ErrorState(){      
      return (
       <>
        <h1>Error 👎</h1>                    
       </> 
      )
  }
  let displayState=()=>{
    switch(state){
        case "Success":return <SuccessState/>;    
        break;
        case "Failure":return <FailureState/> ;
        break;
        case "Error":return <ErrorState/> ;
        break;
    }
  }
  //#endregion

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

  if(count >= 0 &&count<10 ){
      message=(
        <>
        It's Starting Position Click to Start
        </>
      )
  }
  else if(count>=10 &&count<20){
      message=(
        <>
          Achieve the 10%
        </>
      )
  }
  else if(count>=20 && count<25){
      message=(
        <>
          Achieve the 20%
        </>
      )
  }
  else{
    message=(
        <>
          Achieve more than the 25%
        </>
      )
  }

  return (
    <>
      <div>CountApp Current count {count} - {sample} </div>
      <button onClick={Increase}>Increase</button>
      <br/>
      <button onClick={Decrease}>Decrease</button>

        <p>You click button can lock Gift 🎉 {count}</p>

        {/* ternary conditional */}
        {count <= 20 ?
        <>                            
          {count >= 5? (<p>Click button unlock 10% offers</p>):(<p>Click button unlock 5% offers</p>) }          
        </>
        :
        <>
            {/* logical */}    
            {count >=25 && (<p>you have unlock 25% offers , you are click master</p>)}  
        </>
        }
        {message}
        {displayState()}
    </>
  )
}

export default CountApp