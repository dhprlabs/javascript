/*
- Here, we will learn about arrow functions and 'this' keyword.
- We use 'this' keyword to refer the current context.
*/
const user = {
    username: "proficiencyhub95",
    websiteName: "https://proficiencyhub.com",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to ${this.websiteName}`);
        console.log();
        console.log(this);
        console.log();
    }
}

user.welcomeMessage()
user.username = "spacesurfer"
user.welcomeMessage()

/*
- Note that here the result is empty object.
- When we will execute the same command in console, then it will print the window object.
*/
console.log(`result of normal 'this' keyword : ${this}`);

/*
- Let's now see about use of 'this' keyword in a function.
- Also, we can use the variables in the block using 'this' keyword in objects only.
*/
function myJob() {
    let user = "gemini"

    console.log();
    console.log(this);

    console.log();
    console.log(`using 'this' keyword in function : ${this.user}`);
}

myJob()

/*
- Now, let's declare an arrow function.
- Let's see what do we get in output for 'this' keyword.
- Then we will see about some more functionalities.
*/
const myUser = () => {
    let user = "gemini"
    
    console.log();
    console.log(this);

    console.log();
    console.log(`using 'this' keyword in arrow function : ${this.user}`);
}

myUser()

/*
This all works the same.
Also, arrow functions are basically one liners used more in loops.
They are widely used in react also.
*/
const one = (n1, n2) => { return n1 + n2 }
const two = (n1, n2) => n1 + n2
const three = (n1, n2) => (n1 + n2)

console.log();
console.log(one(3, 4));
console.log(two(3, 4));
console.log(three(3, 4));

const four = () => ( { name: "jaden", color: "red" } )

console.log();
console.log(four());