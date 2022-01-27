export default function EmployeeGenericComponent(props) {
    function getColor() {
        return "blue"
    }
    var borderStyle = "1px solid grey";
    var myStyleObject = {
        color: "red",
        border: "1px solid red",
        padding: "5px"
    }
    return (
        <div style={{border: borderStyle, padding: "10px", margin: "15px"}}>
            <img  style={{color: "grey"}} src={props.avatar} height="200" width="300" alt={props.name}></img>
            <h1 id="header" style={{"color": getColor()}}>Employee Name is: {props.name}</h1>
            <h2 className="my_id_value">Employee Id is {props.id}</h2>
            <h3 style={myStyleObject}>Employee Created On {props.createdAt}</h3>
        </div>
    )
}