//function
function sum(a,b){
    console.log(a+b)
}
sum(5,5);

//function expression
let sub = function(a,b){
    console.log(a-b)
}
sub(5,5);

//arrow function
let mul=(a,b)=> {
   console.log(a*b)
}
mul(5,5);


function showData(a){
    console.log(a)
}
function setData(b)
{
    showData(b);
}
setData(5);