//  Blocking: Blocking code stops further execution of the program until a particular task is finished.
//  This means that if there is a task that takes some time to complete (like fetching data from a server 
//     or reading a file), the code execution halts until that task is completed. During this time, the 
//     entire program waits, and no other code can execute.

// Example:

// javascript
// Copy code
// Blocking code example
const result = fetchData(); // This line will block until fetchData() completes
console.log(result);



// Non-blocking:
//  Non-blocking code allows the program to continue executing other tasks without
//  waiting for a particular task to finish. Instead of halting the entire program, non-blocking
//   code lets other operations proceed while waiting for certain operations to complete. This is
//    typically achieved through callbacks, promises, or async/await syntax in JavaScript.

// Example with callback:

// Non-blocking code example using callback
fetchData((result) => {
    console.log(result);
});

// Non-blocking code example using promise
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));





    // *************************threaidng ****************************
//     Single Threading: 
//     In JavaScript, single threading means that the program has only one thread of execution. This implies that at any 
    
//     given moment, only one task is being processed, and all other tasks wait in a queue until the current task completes. JavaScript,
//      as implemented in web browsers and Node.js, follows a single-threaded model, meaning that it can only execute one operation at a
//       time in the main thread. Asynchronous operations, such as event handling and network requests, are handled in a non-blocking manner, 
//       allowing the program to appear concurrent even though it's executing on a single thread.


// Multi-Threading: Multi-threading refers to the ability of a program to execute multiple threads concurrently. Each thread represents a 
// separate flow of control within the program, capable of executing its own set of instructions independently of other threads.
//  While JavaScript itself doesn't support multi-threading in the traditional sense due to its single-threaded nature, environments 
//  like web browsers and Node.js provide APIs that allow developers to work with threads indirectly. For instance, web workers in 
//  browsers enable concurrent execution of JavaScript code in background threads, and in Node.js, the worker_threads module allows
 
//  for creating and managing worker threads for parallel processing tasks.

// In summary, single threading in JavaScript means that only one task is processed at a time, while multi-threading involves the 
// concurrent execution of multiple threads, each capable of performing its own operations independently.


// what is thread

// A thread is the smallest unit of execution within a process. In simpler terms, it's a sequence of instructions that a computer's
//  CPU can execute independently. Threads are a way for a program to split itself into two or more simultaneously running tasks.

// In a multi-threaded environment, multiple threads can exist within the same process, each executing its own set of instructions. 
// These threads can share resources such as memory, but each thread has its own stack and registers, allowing them to operate independently.

// Threads are commonly used in programming to perform concurrent tasks. For example, in a web browser, one thread might be responsible
//  for handling user interface interactions while another thread simultaneously fetches data from the internet.

// Threads are managed by the operating system's kernel, which schedules them for execution on the CPU. Depending on the operating system 
// and programming language, there are different ways to create and manage threads.




