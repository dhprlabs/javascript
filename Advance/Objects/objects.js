const mathDes = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(mathDes);

// try to change PI value
Math.PI = 5
console.log(Math.PI);

// see how we can change any property like PI
const OpenLib = {
    robotName: "Proficiency",
    robotStrength: "Manipulator",
    dof: 9,

    getRobotLogs: () => {
        console.log(this.robotName);
        console.log(this.robotStrength);
    }
} 

// suppose we want to make dof immutable
const openDes = Object.getOwnPropertyDescriptor(OpenLib, "dof")
console.log(openDes);

Object.defineProperty(OpenLib, "dof", {
    writable: false,
    enumerable: false
})

// try to iterate the OpenLib object
for (let [k, v] of Object.entries(OpenLib)) {
    if (typeof v !== 'function') { // avoid printing function
        console.log(`${k}: ${v}`);
    }
}