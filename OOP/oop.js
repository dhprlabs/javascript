const user = {
    userName: "proficiencyhub95",
    age: "20",
    isSignedUp: true,

    getUserDetails: function () {
        console.log(this); // it will print the whole object context
        console.log("printed user detailed successfully :)");
    }
}

console.log(user.userName);
console.log(user.getUserDetails());

// as there is nothing in global context hence {}
// but in web console there are many things so it prints window object
console.log(this); 

function UserDetails(userName, userCount, loggedIn) {
    this.userName = userName
    this.userCount = userCount
    this.loggedIn = loggedIn

    return this // returns the object & it is implicit
}

// without using new the values will be overwritten
const usrOne = UserDetails("james", 11, false)
const usrTwo = UserDetails("bran", 8, true)
console.log(usrOne);
console.log(usrTwo);

// new is used for constructor function
// creates new instances of each object
const usrThree = new UserDetails("james", 11, false)
const usrFour = new UserDetails("bran", 8, true)
console.log(usrThree);
console.log(usrFour);

// try the constructor property which is reference to itself
console.log(usrThree.constructor);
