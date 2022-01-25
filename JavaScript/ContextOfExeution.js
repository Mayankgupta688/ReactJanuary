debugger;
var userData = "Mayank Gupta";

function getData() {
    debugger;
    userData = "Anshul Gupta";
    userAge = 1000;
    userNameRandomData = 100;
    console.log(userNameRandomData)
    console.log(this.userData);
}

window.getData();

debugger;
console.log(userAge)

console.log(userData);

// Error, New Variable in Function Scope, 