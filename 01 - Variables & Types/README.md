## Variables 

### Variable Declarations

- `let`, `const`, `var` are used to declare variables.

- Prefer using `let` and `const` instead of `var`.

- Reason:

    - Older JavaScript (`var`) had function scope instead of block scope, which caused bugs.

    - `var`-declared variables can be accessed outside the block they were declared in.

### Data Types in JavaScript

- Primitive Types → Stored in stack memory, immutable:

    - `String`

    - `Number`

    - `Boolean`

    - `Symbol`

    - `BigInt`

    - `Null`

    - `Undefined`

- Non-Primitive Types → Stored in heap memory, mutable:

    - `Array`
    
    - `Object`

    - `Function`

### Key Notes

- All non-primitive data types have a type of `"object"`.
 
- Primitives are copied by value, non-primitives are copied by reference.

- Use:

    - `const` → For values that won’t be reassigned.

    - `let` → For values that will change.

    - Avoid `var` → To prevent scope-related bugs.