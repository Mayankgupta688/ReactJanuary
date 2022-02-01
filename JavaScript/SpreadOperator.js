var details = {
    userName: "Mayank",
    userAge: 10,
    userSalary: 30
}

var data = details;

data.userName = "Xyz";

console.log(details.userName);

debugger;

var newObject = {...details};

console.log(details == data); // true

console.log(details == newObject); // false

debugger;


