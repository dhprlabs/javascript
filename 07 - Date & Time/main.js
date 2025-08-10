let dt = new Date();
let newDt = new Date(2027, 6, 27, 11, 11, 34);
let anotherDt = new Date("2025-03-20");
let timeStamp = Date.now();

console.log(dt);
console.log(dt.toString());
console.log(dt.toDateString());
console.log(dt.toISOString());
console.log(dt.toJSON());
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleString());
console.log();
console.log(newDt.toDateString());
console.log(newDt.toLocaleString());
console.log();
console.log(timeStamp);
console.log(anotherDt.getTime());
console.log(timeStamp - anotherDt);