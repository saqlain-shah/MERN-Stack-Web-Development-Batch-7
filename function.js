function Addition  ( ){
    let a = 90, b =89
console.log("Addition", a+b)

}

let Add = function(){
    let a = 90, b =89
console.log("Add", a+b)

}

let Sum1 = ()=>{
    let a = 90, b =89
console.log("Sum1", a+b)
}
let Sum2 = ()=>console.log("Sum2", 10+20)
let Sum3 = param=>console.log("Sum3", param+2)
let Sum4 = (param)=>{

    console.log("Sum4", param+2)
}
()=>{

}

function display()
{
    console.log("Hello")
}


function showMessage(a)
{
    a()
}

Addition( )
Add()
Sum1()
Sum2()
Sum3(50)
Sum4(550)


showMessage(display)



// simple function

// function add() {
//     let a = 4;
//     let b = 4;
//     r = a + b;
//     console.log("result is:" + r);
// }
// add();

//arguments 
// function multipli(num1, num2) {
//     result = num1 + num2;
//     return result;
// }


// function sub(n1, n2) {
//     let a = n1 + n2;
//     console.log(a);

// }
// let sHowMessage = function () {
//     a = 40; b = 30;
//     console.log("The show message result is:", a + b);

// }
// let sum1 = () => {
//     let b = 5; c = 5;
//     console.log("the sum of arrow function is", b + c);
// }
// let sum2 = () => console.log("the sum of single line arrow", 50 + 20);
// let sum3 = p1 => console.log("the sum of arrow sum3 is ", p1 + 20);
// let sum4 = (p2, p7) => console.log("the sum of function 4 is", p2 + p7);


// sub(2, 4);
// result = multipli(20, 20);
// console.log(result);
// sHowMessage();
// sum1();
// sum2();
// sum3(5);
// sum4(40, 50);





// try function as a arguments


function mul() {
    let a = 20; let b = 5;
    console.log(r=a + b);
}
function add(num1) 
{
 mul(); 
}
function sub()
{
    mul();

}

 add(mul);

// function show()
// {
//     console.log("hello i am function")
// }
// function inner(b)
// {
//     b();
// }
// inner(show);
sub();