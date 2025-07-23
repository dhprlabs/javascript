// class-based syntax
class User {
    constructor(userName, userPass, userMail) {
        this.userName = userName
        this.userMail = userMail
        this.userPass = userPass
    }

    // _userPass to avoid conflict and race condition
    get userPass() {
        return `qwe${this._userPass}rty`
    }
    set userPass(val) {
        this._userPass = val
    }

    get userMail() {
        return this._userMail.toUpperCase()
    }
    set userMail(val) {
        this._userMail = val
    }
}

const userOne = new User("userOne", "userone@1290", "userone@gmail.com")
console.log(userOne.userPass);
console.log(userOne.userMail);

// function-based syntax
function CreateUser(mail, pass) {
    this._mail = mail
    this._pass = pass

    Object.defineProperty(this, 'mail', {
        get: function () {
            return this._mail.toUpperCase()
        },
        set: function (val) {
            this._mail = val
        }
    })

    Object.defineProperty(this, 'pass', {
        get: function () {
            return `qwe${this._pass}rty`
        },
        set: function (val) {
            this._pass = val
        }
    })
}

const userTwo = new CreateUser("usertwo@gmail.com", "user@1234")
console.log(userTwo.mail);
console.log(userTwo.pass);

// object-based syntax
const Usr = {
    _mail: "userthree@gmail.com",
    _pass: "userthree@9292",

    get mail() {
        return this._mail.toUpperCase()
    },
    set mail(val) {
        this._mail = val
    }
}

const ModUsr = Object.create(Usr)
console.log(ModUsr.mail);