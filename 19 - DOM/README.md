# DOM (Document Object Model)

## Overview
The **Document Object Model (DOM)** is a programming interface that represents the structure of an HTML or XML document as a tree of **nodes**. It allows JavaScript to **access, manipulate, and update** the content, structure, and styles of a webpage.

## DOM Tree
An HTML page is converted into a **tree structure**:
- **Document** → root
- **Element nodes** → `<html>`, `<body>`, `<div>` etc.
- **Text nodes** → text inside elements
- **Attributes** → element properties

Example:
```html
<html>
  <body>
    <h1 id="title">Hello DOM</h1>
  </body>
</html>
````

Tree Representation:

```
Document
 └── html
     └── body
         └── h1 (#title)
             └── "Hello DOM"
```

---

## Accessing Elements

```javascript
document.getElementById("id")         // single element by ID
document.getElementsByClassName("c")  // HTMLCollection
document.getElementsByTagName("p")    // HTMLCollection
document.querySelector(".class")      // first match
document.querySelectorAll("p")        // NodeList (iterable)
```

## Updating Content

```javascript
let heading = document.getElementById("title");
heading.innerText = "Updated Title";  // changes only text
heading.innerHTML = "<i>Italic Title</i>"; // allows HTML
```

## Manipulating Styles

```javascript
heading.style.color = "blue";
heading.style.background = "yellow";
```

## Creating & Removing Elements

```javascript
let div = document.createElement("div");
div.innerText = "Hello, I'm new here!";
document.body.appendChild(div);

div.remove(); // removes element
```

## Event Handling

```javascript
let btn = document.querySelector("#clickMe");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});
```

## DOM vs BOM

* **DOM** → Represents the page structure.
* **BOM (Browser Object Model)** → Represents the browser (window, history, navigator, screen).

## Interview Questions

1. What is the difference between DOM and BOM?
2. Explain the difference between `innerText`, `textContent`, and `innerHTML`.
3. What is the difference between `querySelector()` and `getElementById()`?
4. What are HTMLCollection and NodeList? How are they different?
5. How do you dynamically add and remove elements in the DOM?
6. Why is event delegation used in DOM?
7. Explain the difference between capturing and bubbling in events.
8. What is the difference between `==` and `===` in the context of DOM attributes?
9. Can you explain reflow and repaint in the DOM rendering process?
10. How does the Virtual DOM differ from the Real DOM?