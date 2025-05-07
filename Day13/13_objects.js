/*
Here, we will learn more about objects.
This is a single object declaration.
*/
const fb = new Object()

fb.id = "xzj309jd"
fb.name = "mike"
fb.isLoggedIn = false

console.log(fb);

const normUser = {
    email: "norm@gmail.com",
    name: {
        userName: "normwag23",
        fullName: {
            firstName: "norm",
            lastName: "wag"
        }
    }
}

console.log();
console.log(normUser.name.fullName.firstName);
console.log(normUser.name?.fullName.firstName); 

/*
Here, we are merging 2 or more objects.
Also, there are some interesting methods in the objects.
*/
const obj1 = { "1": true, "2": false }
const obj2 = { "3": true, "4": false }
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}

console.log();
console.log(obj3);
console.log(obj4);

console.log();
console.log(Object.keys(fb));
console.log(Object.values(fb));
console.log(Object.entries(fb));
console.log(Object.hasOwnProperty('isLoggedIn'));

