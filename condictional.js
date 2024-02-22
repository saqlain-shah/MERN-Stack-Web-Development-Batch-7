// *******************if else**********************

let a= 5,b=4;
if(a==b){
    console.log(true);
}
else{
    console.log("false");
}

// *************************else if*******************
let totalMarks =1100;
obtMarks=600;
if(obtMarks>=800){
    console.log("Grade:A");
}
else if(obtMarks>=700){
    console.log("Grade:B")

}
else if(obtMarks>=600){
    console.log("Grade:c")

}
else{
    console.log("Grade D");
}


// ***********************Switch statment***********************


let vowels=alert("enter alphabet from a to z");

switch(vowels){
    case "a":
        console.log("a is vowels");
    break ;
    case "e":
        console.log("e is vowels");
    break ;
    default:
        case "i":
        console.log("e is vowels");
    break ;
    case "o":
        console.log("e is vowels");
    break ;
    case "u":
        console.log("e is vowels");
    break ;
        console.log("consonent");

        break;

   
}






// *******************Escap characters***************************
var tab ="gjfkld"
let name ="name";
let fName ="taqi";
console.log(name);
console.log(fName);

console.log(name +"\\" +fName) // it is used to add backslash
console.log(name+"\b"+fName); // it delete the last character of first string 
console.log(name+"\f"+fName); // it  (consused)
console.log(name+"\n"+fName); // it is used for a new line 
console.log(name+"\r"+fName); // it  compare the both strings and check the both string charaters if the first  string charactero are  more than 
// last string than it will shift the that letters on last string and return new string 

console.log(name+"\v"+fName); // not clear
console.log(name+"\t"+fName); // it is used for tab 



