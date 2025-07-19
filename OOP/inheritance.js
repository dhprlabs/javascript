class User {
    constructor(userName) {
        this.userName = userName
    }

    logUser() {
        console.log(`${this.userName} was created :)`);
    }
}

class Teacher extends User {
    constructor(userName, userMail, userPass, subject) {
        super(userName)
        this.userMail = userMail
        this.userPass = userPass
        this.subject = subject
    }

    Subject() {
        super.logUser()
        console.log(`${this.userName} teaches ${this.subject}`);
    }
}

const trOne = new Teacher("trOne", "trone@gmail.com", "trone@12321", "physics")
trOne.Subject()

// checking some stuff
console.log(trOne === Teacher);
console.log(trOne instanceof Teacher);
console.log(trOne instanceof User);
