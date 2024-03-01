// *********************foreach**************************
// it is used with arry to perform specfic task to each index of the array 
//HigerOrder function/method:are that function that take another function as paramater or they return another  function as argument


let arr =['karachi','skardu','punjab','sindh'];


arr.forEach((val)=>{console.log(val)})
// Q:For given array of SVGAnimatedNumberList,print the square of each value using the foreach loop

let numbers=[1,2,3,4,5,6];
numbers.forEach(function printSqr(val){
    console.log(val*val);
})