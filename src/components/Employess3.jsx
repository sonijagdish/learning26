import React from 'react'
import { Employess4 } from './Employess4'
export const Employess3 = () => {

    let student={
        name:"jagdish",
        age:23,
        roll:2201651039,
    }
    let description="Hello mr";
    let info=[
        {
            name:"Sakib",
            age:23,
            roll:23016,
        },
    ];
  return (
    <div>
        
        <Employess4 student={student} description={description} info={info}></Employess4>
    </div>
  )
}
