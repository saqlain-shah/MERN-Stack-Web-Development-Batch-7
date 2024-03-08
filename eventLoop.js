
// ********************EVENT LOOP********************
// The event loop is a critical concept in JavaScript that enables non-blocking I/O operations. It's part of the JavaScript 
// runtime environment, such as web browsers or Node.js, and it's responsible for managing asynchronous operations and handling events.

// Here's how the event loop works:

// Event Queue: When asynchronous operations (such as setTimeout, AJAX requests, or I/O operations) are encountered in JavaScript
//  code, they are not executed immediately. Instead, they are pushed into an event queue along with any associated callback functions.

// Call Stack: The call stack is a data structure that keeps track of the execution of synchronous code. When a function is invoked,
//  it is added to the top of the call stack. When the function completes, it is removed from the stack.

// Event Loop: The event loop constantly checks if the call stack is empty. If the call stack is empty and there are pending tasks 
// in the event queue, the event loop will move tasks from the event queue to the call stack one by one, executing their associated 
// callback functions. This process continues indefinitely, allowing asynchronous operations to be handled without blocking the main 
// execution thread.

// The event loop ensures that JavaScript remains responsive even while executing time-consuming tasks asynchronously.
//  It's a fundamental mechanism that enables JavaScript to handle I/O operations efficiently, making it suitable for building responsive 
//  and interactive applications both in web browsers and on the server-side with Node.js.