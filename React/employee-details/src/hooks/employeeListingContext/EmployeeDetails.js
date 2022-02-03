
import { useContext } from "react";
import AppContext from "./AppContext";

export default function EmployeeDetails() {
    var contextData = useContext(AppContext)
    return (
        <div className="card" style={{width: "18rem", display: "inline-block", margin: "10px"}}>
            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={contextData.employee.name} />
            <div className="card-body">
                <h5 className="card-title">{contextData.employee.name}</h5>
                <p className="card-text"><b>Employee Id: {contextData.employee.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" className="btn btn-primary" value="Delete" onClick={() => contextData.deleteEmployeeCode(contextData.employee.id)} />
            </div>
        </div>
    )
}