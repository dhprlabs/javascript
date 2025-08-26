// === Classes & Objects ===
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name}, age ${this.age}`;
    }
}

const p1 = new Person("Alice", 25);
console.log(p1.greet());

// === Inheritance ===
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        return `${super.greet()} and I'm in grade ${this.grade}`;
    }
}

const s1 = new Student("Bob", 20, "A");
console.log(s1.greet());

// === Getter & Setter ===
class Car {
    constructor(model) {
        this._model = model;
    }

    get model() {
        return this._model.toUpperCase();
    }

    set model(newModel) {
        if (newModel.length > 0) {
            this._model = newModel;
        } else {
            console.log("Invalid model name");
        }
    }
}

const c1 = new Car("Tesla");
console.log(c1.model); // TESLA
c1.model = "Audi";
console.log(c1.model);

// === Static Methods ===
class MathUtil {
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtil.multiply(3, 4));

// === Private Fields (#) ===
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
acc.deposit(500);
console.log(acc.getBalance()); // 500

// === Polymorphism (Overriding) ===
class Animal {
    speak() {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

console.log(new Dog().speak());
