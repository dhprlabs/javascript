class User {
    constructor(userName) {
        this.userName = userName
    }

    logUser() {
        console.log(`${this.userName} was created :)`);
    }

    // static methods
    static userCount() { 
        console.log("increasing user count...");
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
trOne.userCount() // not accessible to instances