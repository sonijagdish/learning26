import React from 'react';

export const Employees5 = (props) => {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h1>{props.student.age}</h1>
      <h1>{props.student.roll}</h1>

      <hr />

      <ul>
        {
          props.information.map((arr) => {
            return (
              <li>
                
                {arr.name} <br /> {arr.age} <br /> {arr.roll}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
