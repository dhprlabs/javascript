// lexical scoping
function init() {
    let name = "firefox"

    function displayName() {
        console.log(name); 
    }

    displayName()
}

init()

function outer() {
    let userName = "jack"
    console.log(iOne); // can't access the inner variables
    
    function innerOne() {
        let iOne = "one"
        console.log("innerOne", userName);
    }

    function innerTwo() {
        let iTwo = "two"
        console.log("innerTwo", userName);
        console.log("innerTwo", iOne); // can't access sibling
    }

    innerOne()
}

outer()

// closure
function makeFunc() {
    const name = "Mozilla"

    function displayName() {
        console.log(name);
    }

    return displayName // lexical scope will be returned
}

const myFunc = makeFunc()
myFunc()

// real use case of closure
document.getElementById("green").onclick = function() {
    document.body.style.backgroundColor = "green"
}

document.getElementById("orange").onclick = function() {
    document.body.style.backgroundColor = "orange"
}

function changeBg(color) {
    document.body.style.backgroundColor = `${color}`
}

document.getElementById("orange").onclick = changeBg("orange")
document.getElementById("green").onclick = changeBg("green")

function changeBg(color) {
    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("orange").onclick = changeBg("orange")
document.getElementById("green").onclick = changeBg("green")