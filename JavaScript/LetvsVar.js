

function getData() {
    console.log(data);
}

function getName() {
    var data = "2";
    data = "3";
    console.log(data);

    function Other() {
        var data = "5";
        console.log(data);
        console.log(data);
    }
}

function blockScoping() {
    let data = "Mayank";

    for(let i = 0; i< 10; i++) {
        console.log(i)
    }

    if(data == "Mayank") {
        let age = 20;
        console.log(age)
    }
}



debugger;

blockScoping();

data = "shdfasdh";

console.log(data)

console.log(data);