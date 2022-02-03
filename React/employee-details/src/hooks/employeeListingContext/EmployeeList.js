import Axios from "axios";
import { useState, useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

import AppContext from "./AppContext";

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
            <div>
                {employeeList.map((employee) => {
                    return (
                        <AppContext.Provider value={{employee: employee, deleteEmployeeCode: deleteEmployeeCode}}>
                            <EmployeeDetails></EmployeeDetails>
                        </AppContext.Provider>
                    )
                })}
            </div>
        </div>
    )
}