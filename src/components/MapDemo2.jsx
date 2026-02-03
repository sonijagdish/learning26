import React from 'react'

export const MapDemo2 = () => {

    let students=[
        {
            name:"Jay",
            age:21,
            marks:81,
        },
        {
            name:"Pratham",
            age:20,
            marks:82,
        },
        {
            name:"Chirag",
            age:22,
            marks:85,
        },
        {
            name:"sakib",
            age:23,
            marks:39,
        }
        
    ];

  return (
    <div>

        {
            students.map((e)=>{
                return <li> name:{e.name}</li>
            })
        }

    </div>

  )
}
