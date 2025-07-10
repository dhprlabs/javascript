// do some async tasks like db calls, cryptography, network
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task-1 completed :)");
        resolve() // inorder to connect with then()
    }, 1000)
})

// then() directly points to resolve()
promiseOne.then(() => console.log("promise-1 consumed !!"))

// another way 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task-2 completed :)");
        resolve()
    }, 1000)
})
.then(() => {
    console.log("promise-2 consumed !!");
})

// passing params in resolve 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data of proficiencyhub fetched :)");
        resolve({name: "proficiencyhub95", type: "startup"})
    }, 1000)
})
.then((user) => {
    console.log("resolved the details of user !!");
    console.log(user);
})

// using reject, chaining & finally 
new Promise((resolve, reject) => {
    setTimeout(() => {
        let flag = 0
        if (flag) {
            resolve({password: "proficiency@12345"})
        } else {
            reject("[error]: something went wrong")
        }
    }, 1000)
})
.then((pass) => {
    console.log("got the password !!");
    return pass.password
})
.then((password) => {
    console.log(password);
})
.catch((error) => {
    console.error(error);
})
.finally(() => console.log("promise is not fulfilled :("))

// using async await to handle promise
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let flag = 0
        if (flag) {
            resolve({name: "proficiency hub"}) 
        } else {
            reject("[error]: something went wrong")
        }
    }, 1000)
})

// remember to add try-catch in case of using async await to handle promise
async function handlePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

handlePromise()

// fetch() returns a promise
async function getUsers() {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonData = await users.json()
        console.log(jsonData);
    } catch (error) {
        console.log("[error]:", error);
    }
}

getUsers()

// fetch() with then() and catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    console.log("promised fulfilled !!");
    response.json()
    return response
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})