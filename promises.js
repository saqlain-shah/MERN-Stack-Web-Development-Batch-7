// ******************  Promise **************************
// promises are the js object ,
//it is a soloution for callBack Hell 
// it is normaly three states (pending,relolve,rejected)
//these three states are executed when the promises are fullfilled or rejected 


function getData(id ,name){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(id);
        resolve("success");
        // reject();
    }, 3000);
})  

}
let promise=getData();
promise.then(()=>{
    console.log("proposal accepted");
})
promise.catch((error)=>{
    console.log("i am sorry")
})

// console.log(getData(2,"noor"));
getData(1,3);

// How we use use promise
// function getPromises(){
//     return new Promise((resolve,reject)=>{
//         console.log("i am promise");
//         // resolve("success");
//         reject("error");
//         // single thread




// let we pratice some more example 



//     })
// }
// let promise =getPromises();
// promise.then(()=>{
//     console.log("promise fullfilled",res)
// });
// promise.catch(()=>{
//     console.log(("promise rejected"))
// })



// *********************today self assesment ************************
// blocking vs non-blocking
// synchronus vs asynchronous
// event loop 
// single thread and multi threading
// sync await
// clouser and hosting 
// *********************************#****************************************8


function fetch(){
    console.log("i can fetch data ")
}


async function fetchData(a) {
    // Simulate fetching data from an API with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
            console.log(a());
        }, 2000); // Simulate 2 seconds delay
    });
}
fetchData();
fetchData(fetch);