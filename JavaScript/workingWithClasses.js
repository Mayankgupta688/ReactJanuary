// var employeeOne = {
//     name: "Mayank",
//     age: 10,
//     designation: "Developer"
// }

// var employeeTwo = {
//     userName: "Anshul",
//     userAge: 20,
//     userDesignation: "Manager"
// }

// var employeeThree = {
//     empName: "Meha",
//     empAge: 20,
//     empDesignation: "Manager"
// }


// console.log(employeeOne.name);
// console.log(employeeTwo.userName);
// console.log(employeeTwo.empName);
// console.log(employeeTwo.employeeName);



var name = "TechnoFunnel";

class Employee {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    getData() {
        // What is value of "this"
        debugger;
        setTimeout(() => {
            debugger;
            console.log("Employee name is: " + this.name)
        }, 1000) 
    }
}

var employeeOneNew = new Employee("Mayank", 20, 'Developer');
employeeOneNew.getData();

// Mayank - 5
