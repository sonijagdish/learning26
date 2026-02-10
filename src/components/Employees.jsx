import React, { useState } from 'react'
import { EmployeesList } from './EmployeesList';

export const Employees = () => {
   var title="Web Application";
   var desc={
    name:"jagdish",
    age:23,
    roll:12,
   }
  return (
    <div style={{textAlign:"center", color:"red"}}>
        <EmployeesList title={title} description={desc}></EmployeesList>
    </div>
  )
}
