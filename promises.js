// ******************  Promise **************************
// promises are the js object ,
//it is a soloution for callBack Hell 
// it hs normaly three states (pending,relolve,rejected)
//these three states are executed when the promises are fullfilled or rejected 


function getData(data1,data2){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve("success");
            if(data2){
               console.log(data2);
            }


        },2000)
    })

}

// How we use use promise
function getPromises(){
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        // resolve("success");
        reject("error");
        single thread
blocking
synchronus
event loop 
single thread
asynchrouus
sync await
clouser and hosting 


    })
}
let promise =getPromises();
promise.then(()=>{
    console.log("promise fullfilled",res)
});
promise.catch(()=>{
    console.log(("promise rejected"))
})