// in taday class we had review the yesterday topic (spread and rest opearator)
// **************spearad opearator*************
//it is started with(...),three dots
// the spread operator expand the arrays values ,
// if it is used with any ary than it is known as spread operator
 function add(...a)// it is rest operator it convert the normal values into array
 {
    
    console.log(a);
 }
 console.log(add(2,5,4,6));
//  ********************************example 2*****************************
function show(...b){
    console.log(b);
}
let arr=[1,2,3,4,5,6];
console.log(show(...arr));
let arr2=[...arr];
console.log(arr2);
//  ********************************example 3*****************************
function check(...args){
    console.log(args);
}
let book=[['english'],['math'],['physics']];
console.log(book);
let myBook=[...book];
console.log(myBook);
console.log(check(...myBook));
 

// *********************Rest operators****************************
// the rest operator convert the values,variables ,arrays into a single array
function checkRest(a,b,...c){
return console.log(c);

}
const print =checkRest(3,5,8,9);
console.log(print);



// *********************Example-2*****************
function fun(...b)
{
    console.log(b);
}
let arrr=[1,2,3,4,5];
console.log(fun('k',...arrr));
// *********************Example-4*****************
function see(a,...i)//rest
{
    console.log(a,i);
}
let a=[1,2,3,4,5]
const c=[...a] ;
console.log(c);
console.log(see(1,...a));//spread
 
// more example
const shapes = ["triangle", "square", "circle"];
const objects = ["pencil", "notebook", "eraser"];
const chaos = shapes.concat(objects);
console.log(chaos);

const chaos2 = [shapes, objects];
console.log(chaos2);

function myFunction(x, y, z) {}
const args = [0, 1, 2];
const my=myFunction.apply(null, args);
console.log(my);
