## Strings

- Strings are useful for holding data that can be represented in text form. 

- Strings can be created as primitives, from string literals, or as objects, using the `String()` constructor.

- Remember: When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable. (See `Object.defineProperty()` for more information.)

- String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (that is, called without using the `new` keyword) are primitive strings. 

- In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead.

- There are many methods in the `String` prototype. 

- Do try them `:)`

### Some examples

```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

```js
String.length
String.charAt()
String.charCodeAt()
String.codePointAt()
String.concat()
String.at()
String.[]
String.slice()
String.substring()
String.substr()
String.toUpperCase()
String.toLowerCase()
String.isWellFormed()
String.toWellFormed()
String.trim()
String.trimStart()
String.trimEnd()
String.padStart()
String.padEnd()
String.repeat()
String.replace()
String.replaceAll()
String.split()
```