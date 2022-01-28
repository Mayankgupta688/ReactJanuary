




// new Date().getHours()


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

    var style={
        color: "red",
        backgroundColor: "grey"
    }

    return (
        <div style={{margin: "20px"}}>
            <h1>List of Employees in My Company is given:</h1><hr></hr>

            { employeeData.map(function(employee, index) {
                return (
                    <div style={{display: "inline-block"}} key={index}>
                        <EmployeeListing {...employee} employee={employee} {...style}></EmployeeListing>
                    </div>
                )
            })}

        </div>
    )
}

function EmployeeListing(props) {
    debugger;
    return (
        <div style={{display: "inline-block"}}>
            {props.id % 2 === 0 && (
                <div className="card" style={{width: "18rem", display: "inline-block", margin: "10px"}}>
                    <img src={props.avatar} className="card-img-top" alt={props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><b>Employee Id: {props.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <input type="button" className="btn btn-primary" value="Delete" />
                    </div>
            
                </div>
            )}
        </div>
    )
}

function OtherComponent({name, id}) {
    return (
        <div>
            <h4>Name is {name}</h4>
            <h5>User Id is: {id}</h5>
        </div>
    )
}