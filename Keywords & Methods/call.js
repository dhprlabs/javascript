function setUser(username) {
    // making complex db calls
    this.username = username
    console.log("call successful :)");
}

function createUser(username, email, password) {
    // it will call the function, execute and delete the context
    setUser(username)
    
    // it will preserve the context
    // passing this as optional argument so other function uses it
    setUser.call(this, username)

    this.email = email
    this.password = password
}

const newUser = new createUser("proficiencyhub", "prof@mail.com", "proh@1223")
console.log(newUser);