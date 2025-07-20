### A question for you

- Can you change the value of `PI` in `Math` ? 
- `PI` is a constant and its value is immutable
- But is there anything in javascript that gives us the power to do so ? 

### Know more about the objects

- There is `getOwnPropertyDescriptor` in your `Object`'s prototype
- It gives the power to make our properties immutable or mutable

### OpenLib example

- I have made an object `OpenLib`
- I want to make `dof` property immutable by anyone
- So, I will use `defineProperty` 