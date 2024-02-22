
function fun1(){
    console.log("welcome");
}
fun1()

function fun2(num1,num2){
    console.log(num1+num2);
}
fun2(3,7);

function fun3(name)
{
    return name;
}
let result=fun3("muhammad");
console.log(result);


//arrow function
let arrowFun1=()=>{
    console.log("this is first method of arrow function");
}
arrowFun1();

// method 2
let arrowFun2=()=>console.log("This is the second method of arrow function")
arrowFun2();
//method 3
let arrowFun3=(firstName, name)=>{
    console.log("welcome",firstName,name);
}
arrowFun3("Muhammad","Ali");

//function other method

let fun4=function()
{
    console.log("welcome function")

}
fun4();

//2nd method
let fun5=function() {console.log("welcome function");}



// function type
let fun6 =function(fun){
    fun();
}
fun6(fun5);
let fun7 =function(a){
    a();
}
fun7(fun6);


