// 1. Global context
console.log("Global context:");
console.log(this); 

// 2. Normal function vs strict mode
function normalFunction() {
    console.log("Normal Function:", this);
}
normalFunction();

"use strict";
function strictFunction() {
    console.log("Strict Function:", this); 
}
strictFunction();

// 3. Object method
const obj = {
    name: "ProficiencyHub",
    printName: function() {
        console.log("Object Method:", this.name);
    }
};
obj.printName();

// 4. Arrow function and this
const arrowObj = {
    name: "Arrow Example",
    show: () => console.log("Arrow Function:", this.name)
};
arrowObj.show(); // undefined

// 5. call()
function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}
const user = { name: "Dhairya" };

console.log("\nUsing call():");
greet.call(user, "Ahmedabad", "India");

// 6. apply()
console.log("\nUsing apply():");
greet.apply(user, ["Ahmedabad", "India"]);

// 7. bind()
console.log("\nUsing bind():");
const boundFunc = greet.bind(user, "Ahmedabad", "India");
boundFunc(); // Can call later

// 8. bind() with setTimeout
console.log("\nbind() with async setTimeout:");
const delayedGreet = greet.bind(user, "Mumbai", "India");
setTimeout(delayedGreet, 1000);

// 9. bind() for event listeners
console.log("\nbind() in object methods:");
const buttonObj = {
    name: "ClickMe",
    click: function() {
        console.log(`Button ${this.name} clicked!`);
    }
};
const buttonClick = buttonObj.click.bind(buttonObj);
buttonClick();

// 10. Polyfill for bind (basic)
console.log("\nPolyfill for bind:");
Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

function introduce(age, country) {
    console.log(`${this.name} is ${age} years old from ${country}`);
}
const introUser = { name: "ProficiencyHub95" };

const customBind = introduce.myBind(introUser, 25);
customBind("India");
