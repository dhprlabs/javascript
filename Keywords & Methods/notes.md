### `call()` method

- say we call a function inside a function
- that function does some complex task and stores the argument
- then we need it inside the other function
- but the context is not preserved after that function call
- so, `call()` is used to preserve the context of a function called inside a function

### `bind()` method

- assume we have create a button element
- we have a class in which we have a method
- we are handling clicking event 
- we need to access other properties from class 
- but when we try to access them, result is undefined
- so, `bind()` is used to refer the current instance context 

### `this` keyword

- it refers to the context of current instance
- say there are many instances of a class
- all are accessing a common method
- so, `this` helps to refer the current instance accessing the method