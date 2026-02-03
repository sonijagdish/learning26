
import React from 'react'

export const MapDemo8= () => {
    const cars = [
        { id: 1, brand: "Maruti", model: "Swift", year: 2022, fuel: "Petrol", price: 650000, color: "Red" },
        { id: 2, brand: "Hyundai", model: "Creta", year: 2023, fuel: "Diesel", price: 1150000, color: "White" },
        { id: 3, brand: "Tata", model: "Nexon", year: 2021, fuel: "EV", price: 1450000, color: "Blue" },
        { id: 4, brand: "Mahindra", model: "Thar", year: 2022, fuel: "Diesel", price: 1600000, color: "Black" },
        { id: 5, brand: "Kia", model: "Seltos", year: 2023, fuel: "Petrol", price: 1250000, color: "Grey" },
        { id: 6, brand: "Honda", model: "City", year: 2020, fuel: "Petrol", price: 1100000, color: "Silver" },
        { id: 7, brand: "Toyota", model: "Innova", year: 2021, fuel: "Diesel", price: 1900000, color: "White" },
    ];
    return (
        <div>
            <table border={"5px solid black"}>
                <thead>Maruti
                    <tr>
                        <th>ID</th>
                        <th>BRAND</th>
                        <th>MODEL</th>
                        <th>YEAR</th>
                        <th>FUEL</th>
                        <th>PRICE</th>
                        <th>COLOR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((e)=>{
                            return (
                                <tr>
                                    <td style={{backgroundColor:e.id>5?"green":""}}>{e.id}</td>
                                     <td style={{color:e.brand==="Maruti" ? "orange":""}}>{e.brand}</td>
                                      <td>{e.model}</td>
                                       <td style={{color:e.year>2023 ? "yellow":"blue"}}>{e.year}</td>
                                        <td>{e.fuel}</td>
                                        <td>{e.price}</td>
                                         <td>{e.color}</td>
                                          
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
