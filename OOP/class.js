// class came from ES6
class User {
    constructor(userName, userPass, userMail) {
        this.userName = userName
        this.userMail = userMail
        this.userPass = userPass
    }

    encryptPass() {
        return `#*${this.userPass}*#`
    }
}

const userOne = new User("userOne", "userone@1290", "userone@gmail.com")
console.log(userOne);

const passOne = userOne.encryptPass()
console.log(passOne);

// behind the scene
function User(userName, userPass, userMail) {
    this.userName = userName
    this.userMail = userMail
    this.userPass = userPass
}

User.prototype.encryptPass = function () {
    return `#*${this.userPass}*#`
}

const userTwo = new User("userTwo", "usertwo@1290", "usertwo@gmail.com")
console.log(userTwo);

const passTwo = userTwo.encryptPass()
console.log(passTwo);