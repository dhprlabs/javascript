/*
Here, we will learn about memory control in javascript.
There are mainly two types of memory: stack & heap.
Stack is used for primitive and it gives a copy of the variable not its reference.
Heap is used for non-primitive and it gives the reference of the variable.
Let's try out some examples to understand.
*/
let oldName = "proficiencyhub"
let newName = oldName

newName = "proficiencyhub95"

console.log("using primitive datatypes");
console.log(oldName);
console.log(newName);

let objOne = {
    name: "object-1",
    type: "parentNode"
}

console.log("\nusing non-primitive datatypes");
console.log(objOne);

let objTwo = objOne
objTwo.name = "object-2"
objTwo.type = "leafNode"

console.log(objTwo);