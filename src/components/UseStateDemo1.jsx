import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const [load,setLoad]=useState(false);
    let use=()=>{
        setLoad(true );
    }
  return (
    <div>
        <h1>{load==false && "loading....."}</h1>
        <button onClick={use}>click</button>
    </div>
  )
}
