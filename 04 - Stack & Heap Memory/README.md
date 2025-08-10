## Stack & Heap Memory

### Overview

- JavaScript stores data in two main memory areas:

- Stack → For primitive values.

- Heap → For non-primitive values.

### Stack Memory (Primitive Types)

- Stores: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

- Pass-by-value → Copy of the value is passed, not the original.

- Changing the copied value does not affect the original.

### Heap Memory (Non-Primitive Types)

- Stores: `object`, `array`, `function`, `date`, `map`, `set`, etc.

- Pass-by-reference → Stores a reference (address in memory), not the actual value.

- Changing the reference’s content does affect the original.

### Visual Representation

![memory-management-js](../assets/memory-management-js.png)