// checking wheather function is object & has prototype 
function multiplyByFive(num) {
    return num * 5
}

multiplyByFive.power = 2
multiplyByFive.val = 5.0

console.log(multiplyByFive(6));
console.log(multiplyByFive.power);
console.log(multiplyByFive.val);
console.log(multiplyByFive.prototype);

// importance of new 
function createUser(userName, price) {
    this.userName = userName
    this.price = price
}

createUser.prototype.printInfo = function () {
    console.log(this.userName);
    console.log(this.price);
}

// as the new keyword is not used, instance does not know about new method
const instanceOne = createUser("proficiencyhub", "1,955 $")
instanceOne.printInfo()

const instanceTwo = new createUser("proficiencyhub", "1955")
instanceTwo.printInfo()
