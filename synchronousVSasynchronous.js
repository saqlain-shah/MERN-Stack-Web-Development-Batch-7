// Synchronous: In synchronous programming, tasks are executed sequentially, one after another. Each task must wait for 

// the previous one to complete before it can start. Synchronous operations block the execution of the program until they are finished, 
// meaning that the program waits for each operation to complete before moving on to the next one. This can lead to inefficiencies, especially 
// when dealing with operations that take a significant amount of time, such as file I/O or network requests.

// Example:

// Synchronous code example
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Asynchronous: In asynchronous programming, tasks are executed independently of the main program flow. Asynchronous operations
//  do not block the execution of the program. Instead, they allow the program to continue executing while waiting for certain operations 
//  to complete. Asynchronous operations typically use callbacks, promises, or async/await syntax to handle the results of the operation 
//  once it completes.

// Example with callback:

// Asynchronous code example using callback
console.log("Task 1");
setTimeout(() => {
    console.log("Task 2");
}, 1000);  // Wait for 1 second
console.log("Task 3");
// Example with promise:

// Asynchronous code example using promise
console.log("Task 1");
fetchData()
    .then(result => {
        console.log("Task 2");
    })
    .catch(error => {
        console.error(error);
    });
console.log("Task 3");
// Example with async/await:

// Asynchronous code example using async/await
async function fetchDataAndPrint() {
    console.log("Task 1");
    try {
        const result = await fetchData();
        console.log("Task 2");
    } catch (error) {
        console.error(error);
    }
}
fetchDataAndPrint();
console.log("Task 3");
// In summary, synchronous programming executes tasks sequentially and blocks the program's execution until each task is completed, 
// while asynchronous programming allows tasks to execute independently, enabling the program to continue its execution without 
// waiting for each operation to finish.