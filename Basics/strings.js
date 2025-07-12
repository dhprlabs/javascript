/*
Here, we will learn about some basic and important string freatures & operations.
Also, some useful string practices used in today's development.
*/
let channelName = "proficiencyhub95"
let repoCnt = 5

console.log("not preferable");
console.log("hey my channel name is : " + channelName + " and my repo count is : " + repoCnt);
console.log("\npreferable");
console.log(`hey my channel name is : ${channelName} and my repo count is : ${repoCnt}`);

/*
Another way of declaring a string.
Run this on the web console to get a good idea.
Check out the mdn docs for more information.
*/
let playerState = new String('moving')
let newOne = "   steady   "
let newStr = "le-mans-2025"

console.log("\nanother way of creating string");
console.log(playerState.__proto__);
console.log(playerState[0]);
console.log(playerState.length);
console.log(playerState.toUpperCase());
console.log(playerState.substring(0, 3));
console.log(playerState.slice(-1));

console.log("\nsome more operations");
console.log(newOne.trim());
console.log(newStr.split('-'));