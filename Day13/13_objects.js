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