import React, { useState } from 'react'

export const FunctionDemo1 = () => {
    const [count,setCount]=useState(0);
    let fun=()=>{
        setCount(count+1);
        console.log("hello",count);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Count:{count}</h1>
        <button onClick={fun}>+1</button>
        </div>
  )
}
