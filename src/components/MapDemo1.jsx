import React from 'react'

export const MapDemo1 = () => {

    let fruits=["Apple","Banana","Grapes","Orange","Guava"];
    
  return (
    <div style={{textAlign:'center'}}   >
        <h1>MapDemo1</h1>
        {
            fruits.map((e)=>{
                return (
                    <h1>{e}</h1>
                )
            })
        }
        </div>
  )
}
