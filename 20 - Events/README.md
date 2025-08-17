# Events & Event Handling

## Introduction
JavaScript provides the **Event System** to make web pages interactive.  
Events represent actions that happen in the browser (clicks, key presses, mouse moves, form submissions, etc.).

## Event Registration Methods

### 1. Inline Event Handlers (Not Scalable)
```html
<img src="tree.png" onclick="alert('Tree clicked!')">
````

* Easy but **not recommended** (mixes HTML & JS).

### 2. DOM Property Event Handlers

```javascript
const img = document.getElementById("roadTrees");
img.onclick = () => console.log("roadTrees image clicked");
```

* Only **one handler** can be assigned per event type.

### 3. `addEventListener()` (Preferred)

```javascript
element.addEventListener("click", () => {
  console.log("Clicked!");
}, false);
```

* Supports **multiple listeners**
* Has **third argument**: `true` for **capturing**, `false` for **bubbling** (default).

## Event Flow: Capturing & Bubbling

1. **Capturing phase** – event travels from root → target (if `true` in addEventListener).
2. **Target phase** – event reaches the actual target element.
3. **Bubbling phase** – event bubbles back up to the root (default behavior).

```javascript
parent.addEventListener("click", () => console.log("parent"), false); // Bubbling
child.addEventListener("click", () => console.log("child"), true);   // Capturing
```

## Stopping Event Propagation

```javascript
element.addEventListener("click", (e) => {
  e.stopPropagation(); // stops bubbling/capturing
});
```

## Prevent Default Behavior

Some events have default browser actions:

* `<a>` click → opens link
* `<form>` submit → reloads page

```javascript
link.addEventListener("click", (e) => {
  e.preventDefault(); // prevents navigation
});
```

## Event Object

Each event callback receives an **event object** with useful properties:

* **General**

  * `type`, `timeStamp`, `target`, `currentTarget`
* **Mouse**

  * `clientX`, `clientY`, `screenX`, `screenY`
* **Keyboard**

  * `key`, `keyCode`, `altKey`, `ctrlKey`, `shiftKey`
* **Other**

  * `defaultPrevented`

## Event Delegation

Instead of adding listeners to every child, attach a single listener to the parent and use `e.target` to detect which child triggered it.

```javascript
document.querySelector("#images").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    console.log("Image clicked:", e.target.id);
  }
});
```

This is **scalable** and improves **performance**.

## Removing Elements Dynamically

```javascript
function removeChildren(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
  }
}
document.querySelector("#images").addEventListener("click", removeChildren);
```

## Interview Questions

1. Difference between `onclick` and `addEventListener()`?
2. Explain **event bubbling** and **event capturing** with an example.
3. What is the difference between `target` and `currentTarget`?
4. What does `stopPropagation()` do?
5. Why is event delegation useful?
6. What is the difference between `preventDefault()` and `stopPropagation()`?
7. Can multiple event listeners be attached to the same element?
8. Difference between `once`, `passive`, and `capture` options in `addEventListener()`.
9. What are synthetic events in React compared to native DOM events?
10. What performance issues can arise from attaching many event listeners?