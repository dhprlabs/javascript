// 1. Functions are Objects
function multiplyByFive(num) {
    return num * 5;
}

// Adding properties to function (since functions are objects too)
multiplyByFive.power = 2;
multiplyByFive.val = 5.0;

console.log("Function as object demo:");
console.log(multiplyByFive(6));      
console.log(multiplyByFive.power);    
console.log(multiplyByFive.val);     
console.log(multiplyByFive.prototype); 

// 2. Importance of 'new' keyword
function createUser(userName, price) {
    this.userName = userName;
    this.price = price;
}

createUser.prototype.printInfo = function () {
    console.log(`User: ${this.userName}, Price: ${this.price}`);
};

console.log("\nnew keyword demo:");

// Without new -> 'this' refers to global object (not recommended)
const instanceOne = createUser("proficiencyhub", "1,955 $");
try {
    instanceOne.printInfo(); 
} catch (e) {
    console.log("Error calling printInfo without new:", e.message);
}

// With new -> 'this' binds correctly
const instanceTwo = new createUser("proficiencyhub", "1955");
instanceTwo.printInfo(); 


// 3. Adding Methods to Object Prototype
Object.prototype.proficiency = function () {
    console.log("got powered up :)");
};

console.log("\nObject prototype demo:");
let heroNames = ["thor", "ironMan", "spiderMan", "captainAmerica"];
let heroPower = {
    thor: "hammer",
    ironMan: "suit",
    spiderMan: "webShooter",
    captainAmerica: "shield",
};

heroNames.proficiency(); 
heroPower.proficiency(); 


// 4. Adding Method to Array Prototype
Array.prototype.heyProf = function () {
    console.log("prof says hello :)");
};

console.log("\nArray prototype demo:");
heroNames.heyProf(); 

try {
    heroPower.heyProf(); 
} catch (e) {
    console.log("Error calling heyProf on object:", e.message);
}


// 5. Prototype Inheritance (Old + Modern syntax)
const User = {
    name: "proficiencyhub95",
    mail: "proficiencyhub@yahoo.co.in",
};

const Teacher = {
    makeVideos: false,
};

const TeachingSupport = {
    isAvailable: false,
};

const TeacherAssistant = {
    makeAssignment: "C++",
    fullTime: true,
    __proto__: Teacher, 
};

// Linking Teacher to User
Teacher.__proto__ = User;

// Modern way of inheritance
Object.setPrototypeOf(TeacherAssistant, TeachingSupport);

console.log("\nPrototype inheritance demo:");
console.log(TeacherAssistant.makeAssignment);
console.log(TeacherAssistant.isAvailable);  
console.log(Teacher.name);                  


// 6. Prototype Chain Example
console.log("\nPrototype chain demo:");
console.log(TeacherAssistant.__proto__);           
console.log(TeacherAssistant.__proto__.__proto__); 
console.log(TeacherAssistant.__proto__.__proto__.__proto__); 


// 7. Arrow Functions vs this in Prototypes
let heroWithPower = {
    spiderMan: "webShooter",
    getSpideyPower: () => {
        console.log(`${this.spiderMan} activated`); 
    },
    getSpideyPowerCorrect: function () {
        console.log(`${this.spiderMan} activated`); 
    },
};

console.log("\nArrow function vs normal function:");
heroWithPower.getSpideyPower();       
heroWithPower.getSpideyPowerCorrect(); 


// 8. Object.create Example
console.log("\nObject.create demo:");
const baseUser = {
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};

const newUser = Object.create(baseUser);
newUser.name = "proficiencyhub";
newUser.greet(); 
