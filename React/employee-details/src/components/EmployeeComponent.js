import "../styles/EmployeeComponent.css";

export default function EmployeeComponent() {

    function getColor() {
        return "blue"
    }
    
    var borderStyle = "1px solid grey";

    var myStyleObject = {
        color: "red",
        border: "1px solid red",
        padding: "5px"
    }

    var employee = {
        name: "Mayank Gupta",
        id: 1,
        avatar: "https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg",
        createdAt: "Today"
    }

    return (
        <div style={{border: borderStyle, padding: "10px", margin: "15px"}}>
            <img  style={{color: "grey"}} src={employee.avatar} height="200" width="300" alt={employee.name}></img>
            <h1 id="header" style={{"color": getColor()}}>Employee Name is: {employee.name}</h1>
            <h2 className="my_id_value">Employee Id is {employee.id}</h2>
            <h3 style={myStyleObject}>Employee Created On {employee.createdAt}</h3>
        </div>
    )
}