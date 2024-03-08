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