# API Calls: XHR, Fetch & Async Programming

## **Overview**
This project demonstrates:
- Making API calls using **XMLHttpRequest (XHR)**.
- Modern **Fetch API** usage.
- Converting response to JSON.
- **Promise** & **async/await** handling.
- JavaScript **event loop** interaction with network requests.

## **Core Concepts**

### 1. **XMLHttpRequest (XHR)**
- Legacy way of making HTTP requests.
- Uses `open(method, url)`, `send()`.
- Provides states via `readyState`:
  - 0: UNSENT
  - 1: OPENED
  - 2: HEADERS_RECEIVED
  - 3: LOADING
  - 4: DONE
- Response available in `responseText` (string). Must be parsed to JSON.

**Drawbacks:** More verbose, uses callbacks, harder error handling.

### 2. **Fetch API**
- Modern way for network requests.
- Returns a **Promise**.
- Simpler syntax.
- Needs `.json()` to parse response.
- Example:
  ```js
  fetch('https://api.github.com/users/proficiencyhub95')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  ```

### 3. **Async/Await**

* Syntactic sugar for Promises.
* Makes asynchronous code look synchronous.
* Must be inside an `async` function.
* Example:

  ```js
  async function getUser() {
      try {
          const response = await fetch('https://api.github.com/users/proficiencyhub95');
          const data = await response.json();
          console.log(data.following);
      } catch (error) {
          console.error(error);
      }
  }
  getUser();
  ```

### 4. **Event Loop & Asynchronous Flow**

* JS is single-threaded.
* Network calls are asynchronous; handled in Web APIs environment.
* Responses are queued back via callback queue/microtask queue.
* **Fetch** promises are microtasks; executed before macrotasks.

## **Interview Questions**

### **Basic**

1. Difference between XHR and Fetch?
2. What is the purpose of `readyState` in XHR?
3. Why do we use `JSON.parse()`?
4. What is a Promise? How does it work internally?

### **Intermediate**

5. What are microtasks and macrotasks in JS?
6. What happens if `fetch()` fails (e.g., network error)?
7. Difference between `.then().catch()` and `try/catch` with async/await?
8. Can you abort an XHR request? What about Fetch?

### **Advanced**

9. How does the event loop handle Promises vs setTimeout?
10. What is CORS and how does it affect fetch requests?
11. What are HTTP status codes (200, 404, 500) and how do you handle them?
12. How would you implement retry logic in fetch?
13. Difference between `response.ok` and checking status code manually?
