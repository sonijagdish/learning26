import React from "react";

export const MapDemo5 = () => {
  const energyData = [
    {
      year: 1960,
      total: 41.5,
      coal: 26.1,
      petroleum: 36.0,
      gas: 34.0,
      other: 3.9,
    },
    {
      year: 1970,
      total: 62.1,
      coal: 23.5,
      petroleum: 32.9,
      gas: 38.9,
      other: 4.7,
    },
    {
      year: 1980,
      total: 64.8,
      coal: 28.7,
      petroleum: 28.2,
      gas: 34.2,
      other: 8.9,
    },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Table 3. Energy production by major source from 1960 to 1980¹
      </h3>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", margin: "auto" }}
      >
        <thead>
          <tr>
            <th rowSpan={2}>Year</th>
            <th rowSpan={2}>
              Total production <br />(quad Btu)
            </th>
            <th colSpan={5}>Percent production</th>
          </tr>
          <tr>
            <th>Coal</th>
            <th>Petroleum</th>
            <th>Natural gas</th>
            <th>Other²</th>
            
          </tr>
        </thead>

        <tbody>
          {energyData.map((item) => (
            <tr>
              <td>{item.year}</td>
              <td>{item.total}</td>
              <td>{item.coal}</td>
              <td>{item.petroleum}</td>
              <td>{item.gas}</td>
              <td>{item.other}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};
