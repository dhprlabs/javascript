/*
Here, we will learn about objects in javascript.
Basically there are singleton and normal objects.
Also, there are 2 methods of accessing elements in objects.
*/
const myObj = {
    name: "proficiency hub",
    age: 19,
    isLoggedIn: true,
    mail: "proficiencyhub@gmail.com",
    lastSession: ["monday", "saturday"],
    "field": "robotics"
}

console.log(myObj["lastSession"])
console.log(myObj.name)
console.log(myObj["field"])

/*
There is an interview question in which we are told to add a symbol as key in the object.
Also, there is a concept called freezing the object.
*/
const mySym = Symbol("moving")

const anotherObj = {
    name: "proficiency hub",
    mySym: "moving",
    [mySym]: "moving",
    age: 19,

}

console.log()
console.log(anotherObj["mySym"])
console.log(anotherObj[mySym])
console.log()
console.log(typeof anotherObj["mySym"])
console.log(typeof anotherObj[mySym])

anotherObj.age = 13
console.log()
console.log(anotherObj["age"])

Object.freeze(anotherObj)

anotherObj.age = 14
console.log(anotherObj["age"])

/*
Let's see how do we add functions to our objects.
We will see the use of 'this' operator which references the current object.
*/
const tempObj = {
    name: "mike",
    age: 10,
    isLoggedIn: true
}

tempObj.greetingOne = function() {
    console.log("hey, there")
}

tempObj.greetingTwo = function() {
    console.log(`hey, ${this.name}`)
}

console.log()
console.log(tempObj.greetingOne)
console.log(tempObj.greetingOne())
console.log()
console.log(tempObj.greetingTwo)
console.log(tempObj.greetingTwo())

/*
Here, we will learn more on objects.
First, we will see some of the previous concepts in detail.
*/
const facebookUser = {
    username: "user95",
    personal: {
        firstName: "mark",
        lastName: "cuban"
    }
}

console.log(`firstName: ${facebookUser.personal.firstName}, lastName: ${facebookUser.personal.lastName}`);
console.log(`firstName: ${facebookUser.personal?.firstName}, lastName: ${facebookUser.personal?.lastName}`);

const newUser = new Object()

newUser.name = "proficiencyhub"
newUser.age = 19

console.log();
console.log(newUser);

/*
How to merge two or more objects.
Different objects methods.
*/
const obj1 = { 1: "value1", 2: "value2" }
const obj2 = { 3: "value3", 4: "value4" }
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}

console.log();
console.log(obj3);
console.log(obj4);

console.log();
console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty('1'));
console.log(obj1.hasOwnProperty('5'));