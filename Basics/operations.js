// Here, we will be discussing some basic operations and some confusing operations
let value = 3;
let newValue = -value; 
let a = 52;
let b = 21;
let str1 = "hello";
let str2 = "world";

console.log(newValue);
console.log();
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);
console.log();
console.log(str1 + " " + str2);

// Carefully, observe the conversions here and read the ecma script docs for any confusion 
console.log();
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2");
console.log(1 + 4 + "2");
console.log("1" + 4 + 2);

// Here are some tricky and dirty conversions which are not considered to be a good practice in coding :)
console.log();
console.log(+true);
console.log(+"");

// Lastly, some prefix and postfix operations 
let x = 3;
const y = x++;
let p = 3;
const q = ++p;

console.log();
console.log(`x:${x}, y:${y}`);
console.log(`p:${p}, q:${q}`);