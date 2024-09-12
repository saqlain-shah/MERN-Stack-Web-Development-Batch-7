// async wait :
// async is a asynchronous method that can be used in js to run the code asynchronously 
// it will not block the execution of code 
// as the js behavour is synchronous and single threading so to over come this problem we use async wait keyword



// Async/Await is a modern feature in JavaScript that simplifies writing asynchronous code, making it look and behave more like synchronous
//  code, thus enhancing readability and maintainability.

// Async Function: The async keyword is used to declare a function as asynchronous. This indicates that the function will always return 
// a promise. Inside an async function, you can use the await keyword to pause the execution of the function until a promise is resolved.
//  This makes it seem like the asynchronous code is executing synchronously.

// Await Expression: The await keyword is used to pause the execution of an async function until a promise is settled (either resolved or
//      rejected), and to resume the execution of the async function after the promise is settled. The expression after await should be a
//       promise. If the promise is resolved, the value of the expression becomes the resolved value of the promise. If the promise is rejected,
//        it throws an error, which can be caught using try...catch blocks.

// Here's a simple example:
function fetch(){
    console.log("i can fetch data ")
}


async function fetchData(a) {
    // Simulate fetching data from an API with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
            console.log(a);
        }, 2000); // Simulate 2 seconds delay
    });
}
fetchData(fetch);

async function processData() {
    console.log("Fetching data...");
    try {
        // Pause execution until the promise returned by fetchData() is resolved
        const data = await fetchData();
        console.log(data); // Output: Data fetched successfully!
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    console.log("Data processing complete.");
}

processData();
// In this example, fetchData() is an asynchronous function that returns a promise. Inside processData(),
//  the await keyword is used to pause the execution of the function until the promise returned by fetchData() is resolved. 
//  This makes the asynchronous code appear synchronous, improving readability and maintainability.