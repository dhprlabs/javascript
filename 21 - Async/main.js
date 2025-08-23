// === Timing Functions Demo ===

// A function executed after 3 seconds
const myRank = () => {
    console.log("second");
};

// A function to change heading text after 5 seconds
const changeHeading = () => {
    const h = document.querySelector(".heading");
    h.innerHTML = "At My Best";
};

// Timers
setTimeout(myRank, 3000);
const changingH = setTimeout(changeHeading, 5000);

console.log("first");
console.log("third");

// === Cancel Timeout on Button Click ===
const b = document.querySelector("#btn");
b.addEventListener("click", () => {
    clearTimeout(changingH);
    console.log("stopped changing heading");
});

// === Interval Example ===
const startPrint = (arg) => {
    console.log(arg);
};

const begin = document.querySelector("#start");
const end = document.querySelector("#stop");

let beginPrint; // declare outside to access in both handlers

begin.addEventListener("click", () => {
    beginPrint = setInterval(startPrint, 2000, "under the hood");
});

end.addEventListener("click", () => {
    clearInterval(beginPrint);
    console.log("interval stopped");
});

// === Async / Await Example ===
async function fetchData() {
    console.log("Fetching data...");
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve("Data received after 2 seconds"), 2000)
    );
    console.log(data);
}

fetchData();

// === Promise Example ===
const demoPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved asynchronously"), 3000);
});
