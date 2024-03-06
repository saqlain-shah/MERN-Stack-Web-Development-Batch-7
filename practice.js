// jvascript : is a programmin language 
// varibles in js: Three are commonly three types of variables (var,const,let)
// var: it has globel scope and can be redifined and redeclered
// let:it has block scope and can be redefined but can't redeclered
// const:it has also local scope and can't be redefine or redecleare
// 8*******************************Examples***************************
var   name ='ali';
console.log(name);// it will print the name
 var name ="noor";
console.log(name);// it will print the name


let book ="english";
function price()
{
    console.log(book);
}

price();

// we had lean that var has globle scope
function color()
{
    var myClor="red";
    let hisColor="green";
    console.log("my clolor is"+myClor+"and his color is"+hisColor);
}
color();
// console.log(myClor);
// console.log(hisColor);
// from above example we had learn that the block scope variable are accesssible in some stituation that's called lexical scoping 
// lexical scoping: in lexical scoping the local variable of partent's are acccessible for its child but child local or globel variables are not accessible 
// for its parent

// ******************************strings********************************
// is a  squence of character used to represent text
 let strings ="ali is my friend ali";   
 console.log(strings);
            //  strings method
            // console.log(strings.charAt(0));// char at
            // console.log(strings.length);// length
            // console.log(strings.charCodeAt(5));// charCode at 
            // console.log(strings.slice(5,14));   // it will return the slice of string
            // console.log(strings.split(3,9));
let result =strings.matchAll("ali");
console.log(result);

// ***********************operators and conditional operation
// #Arithetic operation(+,-*,/,%.**,++,--)
// assigment soprator:(=,+=,-=,*=,%=,/=)
//comparision operator (==,,===,!=,!==,<,>,>=,<=)

