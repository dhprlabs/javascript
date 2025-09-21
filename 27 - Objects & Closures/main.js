// property descriptor of Math.PI
const mathDes = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Math.PI Descriptor:", mathDes);

// Trying to change PI value (immutable)
Math.PI = 5;
console.log("Math.PI after change attempt:", Math.PI);

// Object Example
const OpenLib = {
    robotName: "Proficiency",
    robotStrength: "Manipulator",
    dof: 9,

    getRobotLogs: function () {
        console.log(this.robotName);
        console.log(this.robotStrength);
    }
};

// Descriptor of dof
const openDes = Object.getOwnPropertyDescriptor(OpenLib, "dof");
console.log("OpenLib.dof Descriptor:", openDes);

// Make dof immutable and non-enumerable
Object.defineProperty(OpenLib, "dof", {
    writable: false,
    enumerable: false
});

// Try to iterate over OpenLib
console.log("Iterating OpenLib:");
for (let [k, v] of Object.entries(OpenLib)) {
    if (typeof v !== "function") {
        console.log(`${k}: ${v}`);
    }
}

// Lexical Scoping
function init() {
    let name = "firefox";

    function displayName() {
        console.log(name); 
    }

    displayName();
}
init();

// Nested functions
function outer() {
    let userName = "jack";

    function innerOne() {
        let iOne = "one";
        console.log("innerOne:", userName);
    }

    function innerTwo() {
        let iTwo = "two";
        console.log("innerTwo:", userName);
        // console.log("innerTwo:", iOne); 
    }

    innerOne();
    innerTwo();
}
outer();

// Closure Example
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); 

// Real use case: change background
function changeBg(color) {
    return function () {
        document.body.style.backgroundColor = color;
    };
}

// Attach in browser (works in HTML environment)
// document.getElementById("orange").onclick = changeBg("orange");
// document.getElementById("green").onclick = changeBg("green");