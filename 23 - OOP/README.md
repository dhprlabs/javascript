# Object-Oriented Programming (OOP)

## **Overview**
JavaScript supports OOP principles like:
- **Classes & Objects**
- **Encapsulation**
- **Inheritance**
- **Polymorphism**
- **Abstraction** (via design patterns and closures)

Modern JS (ES6+) introduces the `class` syntax as syntactic sugar over prototype-based inheritance.

## **1. Classes and Objects**

- A **class** is a blueprint; **objects** are instances.
- Created using the `class` keyword.
- `constructor()` initializes instance properties.
- Methods defined inside class are added to prototype.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const p1 = new Person('Alice', 25);
console.log(p1.greet());
```

## **2. Inheritance**

* `extends` keyword allows one class to inherit another.
* `super()` calls parent constructor.

```js
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        return `${super.greet()} and I am in grade ${this.grade}`;
    }
}

const s1 = new Student('Bob', 20, 'A');
console.log(s1.greet());
```

## **3. Encapsulation with Getters and Setters**

* Getters/setters control access to properties.
* Provide validation or computed properties.

```js
class Car {
    constructor(model) {
        this._model = model; // private-like (by convention with _)
    }

    get model() {
        return this._model.toUpperCase();
    }

    set model(newModel) {
        if(newModel.length > 0) {
            this._model = newModel;
        } else {
            console.log("Invalid model name");
        }
    }
}

const c = new Car("Tesla");
console.log(c.model); // TESLA
c.model = "Audi";
console.log(c.model);
```

## **4. Static Methods**

* Belong to the class itself, not instances.
* Useful for utility/helper methods.

```js
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // 8
```

## **5. Private Fields (#)**

* Introduced in ES2022.
* Truly private (accessible only inside class).

```js
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
```

## **6. Polymorphism (Method Overriding)**

* Subclasses can override parent methods.

```js
class Animal {
    speak() {
        return "Some sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

console.log(new Dog().speak()); // Woof!
```

## **7. Key OOP Interview Questions**

### **Basic:**

1. What is a class in JavaScript? How is it different from function constructors?
2. What is the difference between `__proto__` and `prototype`?
3. How do you define methods inside a class?
4. What are static methods?

### **Intermediate:**

5. What is encapsulation and how is it implemented in JS?
6. Explain `super` keyword and its uses.
7. Difference between method overriding and overloading in JS?
8. What are getters and setters? Why are they useful?

### **Advanced:**

9. How does JavaScript handle inheritance under the hood?
10. What are private class fields (`#`) and how do they differ from `_` prefixed properties?
11. Explain prototype chain and how it relates to OOP in JS.
12. How does polymorphism work in JavaScript?
13. Difference between classical OOP and prototype-based OOP?

## **Key Takeaways**

* JS is prototype-based but ES6 classes provide a cleaner syntax.
* Encapsulation via closures, getters/setters, or private fields.
* Static methods are used for class-level operations.
* Inheritance achieved using `extends` and `super`.