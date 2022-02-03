import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import { useState, useEffect } from "react";
import Axios from "axios";
import EmployeeDetails from "../hooks/employeeListing/EmployeeDetails";

export default function SinglePageApplication() {
    return (
        <BrowserRouter>
            <div style={{padding: "20px", margin: "20px"}}>
                <HeaderComponent></HeaderComponent>
                <ContentComponent></ContentComponent>
                <FooterComponent></FooterComponent>
            </div>
        </BrowserRouter>
    )
}

function HeaderComponent() {
    return (
        <nav>
            <Link style={{marginRight: "10px"}} to="/home">Home</Link>
            <Link style={{marginRight: "10px"}} to="/help">Help</Link>
            <Link style={{marginRight: "10px"}} to="/about">About</Link><br/><br/>
        </nav>
    )
}

function ContentComponent() {
    return (
        <div style={{height: "800px", width: "100%", border: "1px solid red", padding: "20px", overflow: "auto"}}>
            <h1>This is Content Component</h1><hr/>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/home" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/employee/:id" component={EmployeeDetailsSingle}></Route>
        </div>
    )
}

function FooterComponent() {
    return <h1>This is Footer Component</h1>
}

function EmployeeDetailsSingle(props) {

    useEffect(() => {
        Axios.get("http://localhost:4000/employees/" + props.match.params.id).then((response) => {
            setEmployeeeDetails(response.data);
        })
    }, [])
    var [employeeDetails, setEmployeeeDetails] = useState({});

    return <EmployeeDetails {...employeeDetails}></EmployeeDetails>
}


function HelpComponent() {
    return <h2>This is Help Component</h2>
}

function AboutComponent() {
    return <h2>This is About Component</h2>
}