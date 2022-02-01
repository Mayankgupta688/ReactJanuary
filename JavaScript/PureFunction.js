var name = "mayank";

var sampleObjectOther = {
    name: "Random Name"
}

var sampleObject = {
    name: "Random Name Other"
}

function getData() {
    debugger;
    console.log("Employee name is: " + this.name);
}

getData();
getData.call(sampleObject);
getData.call(sampleObjectOther);

function add(a, b) {
    return a + b
}

console.log(add(1, 1))

// After 100 Execution

console.log(add(1, 1))