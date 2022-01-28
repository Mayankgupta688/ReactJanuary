
export default function IterationInReactComponent() {
    var employeeData = [{
        "id":"6",
        "createdAt":"2019-07-09T16:47:50.882Z",
        "name":"Rozella Barton",
        "avatar":"https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg"
    }, {
        "id":"7",
        "createdAt":"2019-07-09T21:38:14.348Z",
        "name":"Ryder Luettgen",
        "avatar":"https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg"
    }, {
        "id":"8",
        "createdAt":"2019-07-09T17:42:53.371Z",
        "name":"Bettie Kris",
        "avatar":"https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg"
    }, {
        "id":"9",
        "createdAt":"2019-07-09T11:19:35.327Z",
        "name":"Ms. Tamara Lockman",
        "avatar":"https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg"
    }, {
        "id":"10",
        "createdAt":"2019-07-10T00:03:10.902Z",
        "name":"Luis Zulauf DVM",
        "avatar":"https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg"
    }]

    var style = {
        color: "green"
    }

    var employeeCopy = JSON.parse(JSON.stringify(employeeData));

    return (


        

        <div style={{margin: "20px"}}>
            <h1>List of Employees in My Company is given:</h1><hr></hr>

            <EmployeeList employeeData={employeeCopy} {...style}></EmployeeList>

        </div>
    )
}

function EmployeeListing(props) {
    return (
        <div className="card" style={{width: "18rem", display: "inline-block", margin: "10px"}}>
            <img src={props.avatar} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 style={{color: props.color}} className="card-title">{props.name}</h5>
                <p className="card-text"><b>Employee Id: {props.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" className="btn btn-primary" value="Delete" />
            </div>
        </div>
    )
}

function EmployeeList(props) {
    return (
        <div>
            { props.employeeData.map(function(employee) {
                return (
                    <div className="card" style={{width: "18rem", display: "inline-block", margin: "10px"}}>
                    <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                    <div className="card-body">
                        <h5 style={{color: props.color}} className="card-title">{employee.name}</h5>
                        <p className="card-text"><b>Employee Id: {employee.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <input type="button" className="btn btn-primary" value="Delete" />
                    </div>
                </div>
                )
            })}
       </div>
    )
}