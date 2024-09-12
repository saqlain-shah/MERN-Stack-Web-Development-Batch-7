
let string ="sring";
let newSting =string.toUpperCase(string);
console.log(newSting);
let upperCase =string.toLowerCase(newSting);
console.log("to lower case",upperCase);
let returnIndex=string.indexOf('r');
console.log(returnIndex);
//length
let newLength ="my name is muhammad ali";
let returnLength=newLength.length;
console.log(returnLength);

//at(),cahrAt(),cahrCodeAt()
let text = "HELLO WORLD";
let char = text.charCodeAt(6);
console.log(char);

let char1=text.charAt(3);
console.log(char1);

const name = "W3Schools";
let letter = name.at(-5);//it also allow to use negative index
console.log(letter);
//access[]
let text3 = "HELLO WORLD";
let char2 = text[1]='A';
console.log(char2);


// Extracting String Parts
// There are 3 methods for extracting a part of a string:
//	slice(start, end)
// 	substring(start, end)
// 	substr(start, length)

let text2="coding with ali";
let newText=text2.slice(0,8)//it take two position start and end
console.log(newText);

//substirng(it work same as slice but the index less than 0 is consider as 0)
let str = "Apple, Banana, Kiwi";
let part = str.substring(-7, 13);
console.log(part);

//substr
let str1 = "ali,is,my,best, friend";
let part1 = str1.substr(7, 6);// here pass to index first is start and second is the length(of return string)
console.log(part1);

// JavaScript String concat()
// concat() joins two or more strings:
let firstStr="ali and aslam";
let secondStr="are best friends";
// console.log(firstStr+secondStr);
let bestFreind=firstStr.concat(secondStr);
 console.log(bestFreind);


//trim(remove the white spaces from the both side of the string 
let spaceStr="   ali is ";
console.log(spaceStr);
let removeSpace=spaceStr.trim();
console.log(removeSpace);

// padstring

let text4 = "5";
let padded = text4.padEnd(4,"X");
console.log(padded);
// to padd number

let numb = 5;
let text6 = numb.toString();
let pad = text6.padStart(4,"5");
console.log(pad);

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let text7 = "Hello world!";
let result = text7.repeat(5);
console.log(result);
// to check the orginal string
console.log(text7);


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let value ="coding, with, ALI .and munzoor, friend is ali";
replaceWith =value.replace(/ali/i,"aslam");// if you want to replace all the match than use /g to global change in whole strin
console.log(replaceWith);
// to check the orginal string 
console.log(value);


// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.
// JavaScript String split()

let splt = value.split(",");
console.log(splt);








