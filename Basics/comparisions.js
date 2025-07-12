/*
Here, we will study some basic and confusing comparsions.
We will also compare different datatypes to see the result.
Hence, typescript is used to avoid this issues.
*/
console.log("simple comparisions between same datatype");
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 === 1);

/*
Here, when we compare two operands of different datatypes, there are some issues.
Also, the >= and == operators works totally different.
*/
console.log("\nsimple comparisions between different datatype");
console.log("1" == 1);
console.log("1" > 1);
console.log("1" >= 1);
console.log(null == 0);
console.log(null != 0);
console.log(null >= 0);
console.log(null > 0);

/* Let's check the === operator which compares the datatype also. */
console.log("\nsimple comparisions using === operator");
console.log(null === 0);
console.log("1" === 1);
console.log(2 < 1);