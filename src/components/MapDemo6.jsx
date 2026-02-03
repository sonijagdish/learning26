import React from 'react'

export const MapDemo6 = () => {
    const users = [
        { id: 1, name: "Aarav Patel", age: 21, city: "Ahmedabad", role: "Student", status: "Active" },
        { id: 2, name: "Riya Sharma", age: 23, city: "Surat", role: "Student", status: "Active" },
        { id: 3, name: "Kunal Mehta", age: 25, city: "Vadodara", role: "Intern", status: "Inactive" },
        { id: 4, name: "Neha Verma", age: 22, city: "Rajkot", role: "Student", status: "Active" },
        { id: 5, name: "Aditya Joshi", age: 26, city: "Gandhinagar", role: "Employee", status: "Active" },
        { id: 6, name: "Pooja Desai", age: 24, city: "Bhavnagar", role: "Intern", status: "Inactive" },

    ];


    return (
        <div>
            <table border={"3px solid red"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CITY</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        users.map((obj) => {
                            return (
                                <tr>
                                    <td style={{ background: obj.id > 4 && "red" }}>{obj.id}</td>
                                    <td style={{ color: obj.name === "Kunal Mehta" ? "red" : "" }}>{obj.name}</td>
                                    <td>{obj.age}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.role}</td>
                                    <td style={{textDecoration:obj.status ==="Active" ? "line-through" : "",color:obj.status === "Active" ? "green":""}}>{obj.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
