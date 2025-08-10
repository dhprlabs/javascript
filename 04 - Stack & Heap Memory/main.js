let oldName = "proficiencyhub";
let newName = oldName;
newName = "proficiencyhub95";

// using primitive datatypes
console.log(oldName);
console.log(newName);

// using non-primitive datatypes
let objOne = {
    name: "object-1",
    type: "parentNode"
}

let objTwo = objOne;
objTwo.name = "object-2";
objTwo.type = "leafNode";

console.log();
console.log(objOne);
console.log(objTwo);