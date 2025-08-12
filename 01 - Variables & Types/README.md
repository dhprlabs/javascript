# Variables & Data Types

## Variable Declarations

JavaScript provides three keywords to declare variables:

- **`let`** → Block scoped, re-assignable
- **`const`** → Block scoped, not re-assignable
- **`var`** → Function scoped (avoid using)

**Best Practice:** 
Prefer using `let` and `const` over `var` to avoid scope-related issues.

### Why Avoid `var`?

- **Scope Problem:** `var` has **function scope** instead of **block scope**.
- Variables declared with `var` can be **accessed outside the block** they were declared in.
- Can lead to **unintended behavior** in loops and conditionals.

Example:
```javascript
if (true) {
    var x = 10;
}
console.log(x); // 10 — Accessible outside the block (Problematic)
```

## Data Types in JavaScript
- JavaScript data types are categorized into primitive and non-primitive.

- Primitive Types (Stored in Stack, Immutable)

1. `String`
2. `Number`
3. `Boolean`
4. `Symbol`
5. `BigInt`
6. `Null`
7. `Undefined`

**Notes:**
- Immutable → Value cannot be changed in place.

- Copied by value → Changing one variable does not affect the other.

Example:
```javascript
Copy
Edit
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)
```

## Non-Primitive Types (Stored in Heap, Mutable)

1. `Array`
2. `Object`
3. `Function`

**Notes:**
- Mutable → Can be modified after creation.

- Copied by reference → Changing one affects all references.

Example:
```javascript
Copy
Edit
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // "Doe" (changed)
```

## Key Notes
- All non-primitive data types have a type of "object" (except functions, which return "function" in typeof).

- **Use:**

    - `const` → For values that won’t be reassigned.
    - `let` → For values that will change.
    - Avoid `var` → To prevent scope-related bugs.

## Common Interview Questions
- What is the difference between `let`, `const`, and `var`?

- Why is `var` considered bad practice?

- How are primitive and non-primitive data types stored in memory?

- What is the difference between "copied by value" and "copied by reference"?

- What will typeof null return and why?

- How does BigInt differ from Number in JavaScript?