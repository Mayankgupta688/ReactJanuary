// Iterate a list of 100 employees:

// For Loop, foreach, do while, while, switch, recursion, for of  

// Which One to Use ? - Focus on What rather than how.....

var array = [10, 20, 30, 33, 40];

var employeeData = [{
    name: "Mayank",
    age: 40
}, {
    name: "Anshul",
    age: 20
}, {
    name: "Ankit",
    age: 30
}, {
    name: "Meha",
    age: 50
}];

var newArray = employeeData.filter(function(employee) {
    return employee.age > 25
})

var newArray = array.map(function(value) {
    console.log(value);
    return value + 5
});

employeeData[0].age = 100;

employeeData = employeeData.map(function(value) {
    return {
        userName: value.name,
        userAge: value.age + 1,
        salary: 40000
    }
})

// Immutability in Javascript
