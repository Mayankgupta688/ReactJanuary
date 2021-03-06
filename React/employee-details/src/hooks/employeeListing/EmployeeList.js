import Axios from "axios";
import { useState, useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

export default function EmployeeList(props) {
    debugger;

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
        <>
            <>
                <>
                    <h1>The Updated list of employee is given below:</h1>
                    <>
                        {employeeList.map((employee) => {
                            return (
                                <EmployeeDetails key={employee.id} {...props} {...employee} deleteEmployeeCode={deleteEmployeeCode}></EmployeeDetails>
                            )
                        })}
                    </>
                </>
            </>
        </>
    )
}