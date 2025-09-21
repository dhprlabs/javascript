// 1. Basic promise
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task-1 completed :)");
        resolve();
    }, 1000);
});
promiseOne.then(() => console.log("Promise-1 consumed !!"));

// 2. Inline promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task-2 completed :)");
        resolve();
    }, 1000);
}).then(() => console.log("Promise-2 consumed !!"));

// 3. Passing data
new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "proficiencyhub95", type: "startup" });
    }, 1000);
}).then((user) => {
    console.log("Resolved user details:");
    console.log(user);
});

// 4. Using reject, chaining & finally
new Promise((resolve, reject) => {
    setTimeout(() => {
        let flag = 0;
        if (flag) resolve({ password: "proficiency@12345" });
        else reject("[error]: something went wrong");
    }, 1000);
})
.then((data) => {
    console.log("Got the password !!");
    return data.password;
})
.then((password) => console.log(password))
.catch((error) => console.error(error))
.finally(() => console.log("Promise execution ended"));

// 5. Async / await with try-catch
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let flag = 0;
        if (flag) resolve({ name: "proficiency hub" });
        else reject("[error]: something went wrong");
    }, 1000);
});

async function handlePromise() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
handlePromise();

// 6. Fetch API with async/await
async function getUsers() {
    try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await users.json();
        console.log("Users fetched with async/await:", jsonData);
    } catch (error) {
        console.log("[error]:", error);
    }
}
getUsers();

// 7. Fetch API with then() / catch()
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    console.log("Promise fulfilled with fetch!!");
    return response.json();
})
.then((data) => console.log("Users fetched with then/catch:", data))
.catch((error) => console.error(error));

// 8. Promise.all and Promise.race
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "Two"));

Promise.all([p1, p2])
.then((values) => console.log("Promise.all values:", values));

Promise.race([p1, p2])
.then((value) => console.log("Promise.race winner:", value));
