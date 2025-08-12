# Object Destructuring & API Basics

This guide covers:
- What object destructuring is
- Syntax variations (renaming, defaults, nested)
- Real-world usage in **React**
- Basics of **APIs** and **JSON**
- Advanced concepts & interview questions

## 1. What is Object Destructuring?

**Destructuring** is a concise way to extract values from **objects** (or arrays) and assign them to variables without writing repetitive `obj.key` syntax.

### Without destructuring:
```javascript
const course = {
    courseName: "learning-javascript",
    coursePrice: 4000,
    courseId: 120
};

console.log(course.courseId);
console.log(course.courseName);
```

### With destructuring:
```javascript
const { courseId } = course;
console.log(courseId); // 120
```

## 2. Renaming Variables During Destructuring

You can rename extracted variables to avoid naming conflicts or make names more descriptive.

```javascript
const { courseId: id } = course;
console.log(id); // 120
```

## 3. Destructuring in React Components

Destructuring is **widely used in React** to make props cleaner.

### With destructuring:
```javascript
function CourseCard({ courseName, coursePrice }) {
    return <h2>{courseName} - ₹{coursePrice}</h2>;
}
```

### Without destructuring:
```javascript
function CourseCard(props) {
    return <h2>{props.courseName} - ₹{props.coursePrice}</h2>;
}
```

## 4. Default Values in Destructuring

Set a default value if the property is missing:

```javascript
const { duration = "3 months" } = course;
console.log(duration); // "3 months"
```

## 5. Nested Object Destructuring

Destructuring can work on **nested objects**:

```javascript
const user = {
    id: 101,
    profile: {
        name: "John",
        email: "john@example.com"
    }
};

const { profile: { name, email } } = user;
console.log(name, email);
```

## 6. Introduction to APIs

**API** = **Application Programming Interface**  
In web development:
- The **frontend** uses APIs to talk to the **backend**.
- APIs often return data in **JSON** format.

### Example JSON API Response:
```json
{
    "courseName": "learning-javascript",
    "coursePrice": 4000,
    "courseId": 120
}
```

**Note:** JSON is a **string** that needs to be parsed using `.json()` when fetched.
**Useful Tool:** [JSON Formatter](https://jsonformatter.org/) for making API data more readable.

## 7. Using Destructuring with API Data

```javascript
fetch("https://api.example.com/course")
    .then(res => res.json())
    .then(data => {
        const { courseName, coursePrice } = data;
        console.log(courseName, coursePrice);
    });
```

## 8. Interview-Level Concepts

### a) Object vs Array Destructuring
- **Object Destructuring:** Matches **keys** by name.
- **Array Destructuring:** Matches **items** by index.

```javascript
// Array destructuring example
const arr = [10, 20];
const [first, second] = arr;
```

### b) Spread vs Rest in Destructuring
```javascript
const { courseName, ...rest } = course;
console.log(rest); // { coursePrice: 4000, courseId: 120 }
```
- **Spread (`...`)** in object literals copies properties into a new object.
- **Rest (`...`)** in destructuring collects remaining properties.

### c) Deep Destructuring & Safety
Destructuring deeply nested properties can cause **errors** if intermediate properties are `undefined`.

**Unsafe:**
```javascript
const { profile: { email } } = user; // ❌ Error if profile is undefined
```

**Safe:**
```javascript
const email = user.profile?.email;
```
(Uses **optional chaining** `?.`)

### d) Mixing Defaults & Renaming
```javascript
const { coursePrice: price = 0 } = course;
console.log(price); // 4000 or 0 if undefined
```

## 9. Best Practices
- Use **default values** for optional API data.
- Use **renaming** to avoid variable name clashes.
- Avoid deep destructuring without null checks.
- In React, destructure props **in function parameters** for cleaner code.
- When handling API responses, **validate data** before destructuring.

## 10. Common Interview Questions
1. Explain the difference between **object** and **array** destructuring.
2. How do you set a **default value** while destructuring?
3. What is the difference between **rest** and **spread** operators in objects?
4. How to rename a variable while destructuring an object?
5. Why can deep destructuring cause runtime errors, and how do you prevent them?
6. How do you destructure data from an **API response** safely?