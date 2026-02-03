import React from "react";


import flower1 from "../assets/images/flower1.jpeg";
import flower2 from "../assets/images/flowe2.jpeg";
import flower3 from "../assets/images/flower3.jpeg";

const MapDemo9 = () => {
  const flowers = [
    { id: 1, name: "Rose", image: flower1 },
    { id: 2, name: "Sunflower", image: flower2 },
    { id: 3, name: "Lotus", image: flower3 },
  ];

  return (
    <div>
      <h2>Flower Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
          </tr>
        </thead>

        <tbody>
          {flowers.map((f) => (
            <tr>
              <td>{f.id}</td>
              <td>{f.name}</td>
              <td>
                <img
                  src={f.image}
                  alt={f.name}
                  width="100"
                  height="70"
                  style={{ borderRadius: "8px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MapDemo9;
