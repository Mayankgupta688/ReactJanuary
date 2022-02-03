import Axios from "axios";
import { useState } from "react";
import EmployeeList from "./employeeListing/EmployeeList";

export default function InputFormComponent() {

    var [employeeInfo, setEmployeeInfo] = useState({
        name: "TechnoFunnel",
        id: 101,
        createdAt: "Today",
        avatar: ""
    });

    function updateInputBox(event) {
        debugger;
        // Propert Name to Override
        setEmployeeInfo({
            ...employeeInfo,
            [event.target.id]: event.target.value
        });
    };


    function submitDetails() {
        Axios.post("http://localhost:4000/employees", employeeInfo).then((response) => {
            alert("Employee Added...");
        }, (err) => {
            alert("Adding Data Failed....")
        })
    }

    return (
        <div style={{"margin": "20px"}}>
            <label style={{display: "inline-block", width: "200px"}}>Enter Name:</label>
            <input id="name" type="text" value={employeeInfo.name} onChange={updateInputBox} /><br/><br/>
    
            <label style={{display: "inline-block", width: "200px"}}>Enter Id:</label>
            <input id="id" type="text" value={employeeInfo.id} onChange={updateInputBox} />
            {employeeInfo.id === "" && <label style={{color: "red", marginLeft: "20px"}}>Please Enter Id</label>}<br/><br/>

            <label style={{display: "inline-block", width: "200px"}}>Enter Avatar:</label>
            <input id="avatar" type="text" value={employeeInfo.avatar} onChange={updateInputBox} /><br/><br/>

            <label style={{display: "inline-block", width: "200px"}}>Enter Created At:</label>
            <input id="createdAt" type="text" value={employeeInfo.createdAt} onChange={updateInputBox} /><br/><br/>

            <input type="button" disabled={employeeInfo.id === "" || employeeInfo.name === "" || employeeInfo.avatar === "" || employeeInfo.createdAt === ""} value="Submit" onClick={submitDetails} /><br/><br/>

            <div>
                <h2>Employee List is given Below: </h2>
                <div>
                    <EmployeeList></EmployeeList>
                </div>
            </div>
        </div>

        
    )
}