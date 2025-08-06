let channelName = "proficiencyhub95"
let repoCnt = 5

console.log("not preferable");
console.log("hey my channel name is : " + channelName + " and my repo count is : " + repoCnt);
console.log("\npreferable");
console.log(`hey my channel name is : ${channelName} and my repo count is : ${repoCnt}`);

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

const areEqual = (str1, str2, locale = "en-US") => {
    str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
}

areEqual("ß", "ss", "de"); 
areEqual("ı", "I", "tr"); 