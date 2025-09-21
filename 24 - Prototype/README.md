# Prototypes 

## 1. What are Prototypes?
- In JavaScript, **every object has an internal link** (called `[[Prototype]]`) that points to another object.  
- This forms the **prototype chain** which is used for property/method lookup.  
- Functions and objects in JS are special:  
  - **Functions** are objects too → they have properties and prototypes.  
  - **Objects** can inherit properties and methods from other objects via prototypes.

## 2. Functions as Objects
Functions are objects in JS and can have properties:

```js
function multiplyByFive(num) {
    return num * 5;
}

multiplyByFive.power = 2;
multiplyByFive.val = 5.0;

console.log(multiplyByFive(6));     // 30
console.log(multiplyByFive.power);  // 2
console.log(multiplyByFive.val);    // 5
console.log(multiplyByFive.prototype); // {}
````

Here, `multiplyByFive.prototype` is created automatically because it’s a function.

## 3. Importance of `new` Keyword

* When using `new`, JavaScript creates a new object, sets its prototype, and binds `this` inside the constructor.

```js
function createUser(userName, price) {
    this.userName = userName;
    this.price = price;
}

createUser.prototype.printInfo = function () {
    console.log(this.userName, this.price);
};

const noNew = createUser("proficiencyhub", "1,955 $");
// ❌ Error: printInfo is undefined

const withNew = new createUser("proficiencyhub", "1955");
withNew.printInfo(); // ✅ Works
```

## 4. Prototypes on Objects & Arrays

You can extend **Object.prototype** or **Array.prototype**, but **avoid modifying built-in prototypes in production**.

```js
Object.prototype.proficiency = function () {
    console.log("got powered up :)");
};

Array.prototype.heyProf = function () {
    console.log("prof says hello :)");
};

["thor", "ironMan"].heyProf(); // prof says hello :)
({ name: "IronMan" }).proficiency(); // got powered up :)
```

> Adding methods to `Object.prototype` makes them available everywhere (which may cause unexpected behavior).

## 5. Prototype Inheritance

We can link objects together to form an inheritance chain.

```js
const User = { name: "proficiencyhub95", mail: "proficiencyhub@yahoo.co.in" };
const Teacher = { makeVideos: false };
const TeachingSupport = { isAvailable: false };
const TeacherAssistant = { makeAssignment: "C++", fullTime: true, __proto__: Teacher };

Teacher.__proto__ = User;
Object.setPrototypeOf(TeacherAssistant, TeachingSupport);
```

* `TeacherAssistant` inherits from `TeachingSupport`.
* `Teacher` inherits from `User`.

## 6. Prototype Chain

When accessing a property:

1. JS checks the object itself.
2. If not found, it looks in the `__proto__` (prototype).
3. Continues until it reaches `null`.

```js
console.log(TeacherAssistant.makeAssignment); 
console.log(TeacherAssistant.isAvailable);  
```

## 7. Arrow Functions & `this` in Prototypes

Arrow functions **don’t bind their own `this`**.

```js
let heroPower = {
    spiderMan: "webShooter",
    getSpideyPower: () => {
        console.log(`${this.spiderMan} activated`); // ❌ undefined
    }
};

heroPower.getSpideyPower();
```

## 8. Interview-Level Questions

### Basic

1. What is a prototype in JavaScript?
2. Difference between `__proto__` and `prototype`?
3. Why do functions in JS have a `prototype` property?
4. What is the prototype chain?

### Intermediate

5. What happens when you use the `new` keyword in JS?
6. What are the risks of modifying built-in prototypes?
7. How does method lookup work in the prototype chain?
8. Why don’t arrow functions work well with prototypes?

### Advanced

9. Explain `Object.create()` vs `Object.setPrototypeOf()`.
10. How are prototypes used in ES6 `class` syntax internally?
11. What’s the difference between classical inheritance and prototypal inheritance?
12. Can you implement inheritance without `class` or `extends` in JS?

## 9. Key Takeaways

* Every JS object has a prototype.
* Functions have both properties and a prototype object.
* `new` creates an instance and links it to a prototype.
* Avoid extending built-in prototypes in real projects.
* Prototype chain = object → prototype → prototype → ... → null.
