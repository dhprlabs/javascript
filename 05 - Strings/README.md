## Strings

### Overview

- Strings store and represent text.

- Can be **primitive** (string literals, `String()` without `new`) or **String objects** (created with `new String()`).

- **Primitive strings** are immutable.

- When methods are called on primitive strings, JavaScript automatically **wraps them in a String object** (autoboxing).

### Key Points

- String primitives: `"foo"`, `String(123)`, `String(true)`

- String objects: `new String("foo")` → type `"object"`, not `"string"`

- Bracket notation (e.g., `str[0]`) is **read-only** — cannot reassign or delete characters this way.

- String methods are available via `String.prototype`.

- Always prefer **string primitives** over `new String()` for simplicity and performance.

### Example

```js
const strPrim = "foo";
const strObj = new String("foo");

console.log(typeof strPrim); // "string"
console.log(typeof strObj);  // "object"
```