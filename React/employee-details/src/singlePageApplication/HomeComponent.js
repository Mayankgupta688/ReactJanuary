import EmployeeList from "../hooks/employeeListing/EmployeeList"

export default function HomeComponent(props) {
    debugger;
    return <div style={{overflowY: "auto"}}><EmployeeList {...props}></EmployeeList></div>
}