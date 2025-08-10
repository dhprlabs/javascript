## Arrays

### What is an Array?

- Non-primitive datatype in JavaScript.

- Stores multiple values in a single variable.

- Can store different data types in the same array.

- When logged in the console, arrays have two nested prototypes (Array methods and Object prototype).

### Basic Array Properties & Methods

- `length` → returns the total number of elements.

- `includes(value)` → checks if an array contains a given value (returns true/false).

### Adding & Removing Elements

- `push(value)` → adds element(s) to the end of the array.

- `pop()` → removes the last element.

- `unshift(value)` → adds element(s) to the start of the array (less efficient — shifts all elements).

- `shift()` → removes the first element (also shifts elements).

### Slice vs Splice (Common Interview Question)

1. `slice(start, end)`

    - Returns a portion of the array without modifying the original.

    - End index is exclusive.

2. `splice(start, count)`

    - Removes/replaces/adds elements and modifies the original array.

    - Returns the removed elements.

### Combining Arrays

- `push(array)` → adds another array as a single element (nested array).

- `concat(array)` → merges arrays into a new array.

- `Spread syntax ...` → merges arrays in a clean, readable way.

### Flattening Arrays

- `flat(depth)` → flattens nested arrays up to a given depth.

- Use `Infinity` to fully flatten deeply nested arrays.

### Array Type Checking

- `Array.isArray(value)` → checks if a value is an array.

- `Array.from(iterable)` → creates an array from:

    1. Strings (splits into characters)

    2. Array-like objects

- For objects without a length/index, returns an empty array.

- `Array.of(values...)` → creates a new array from given arguments.

### String Conversion

- `join(separator)` → converts array into a string, with optional separator (default: comma ,).

### Performance Tip

- Avoid `shift()` and `unshift()` for large arrays — they shift every element and can be slow.