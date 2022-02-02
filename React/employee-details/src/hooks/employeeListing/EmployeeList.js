import Axios from "axios";
import { useState, useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

export default function EmployeeList() {

    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }, []);

    function deleteEmployeeCode(employeeId) {
        alert("Request for Deleting Employee: " + employeeId);
        Axios.delete("http://localhost:4000/employees/" + employeeId).then(() => {
            alert("Employee with Id " + employeeId + " deleted...")

            Axios.get("http://localhost:4000/employees").then((response) => {
                setEmployeeList(response.data)
            })

        })
    }
    
    return (
        <div>
            <h1>The Updated list of employee is given below:</h1>
            <div>
                {employeeList.map((employee) => {
                    return (
                        <EmployeeDetails {...employee} deleteEmployeeCode={deleteEmployeeCode}></EmployeeDetails>
                    )
                })}
            </div>
        </div>
    )
}