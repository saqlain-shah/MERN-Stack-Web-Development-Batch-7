let array=[1,2,3,4,5]
let array1=[6,7,8,9,10]
let size=array.length;
console.log(array)
console.log(array.toString())
console.log(array.at(3))
let array2=array.join("")
console.log(array2)
array.pop()
console.log(array)
array.push("ali")
console.log(array)
array.unshift("yawar")
console.log(array)
console.log(array.concat(array1))

array.copyWithin(4,0,4)
console.log(array)
let array3=[[1,2],[3,4],[5,6]]
let newarra=array3.flat()
console.log(newarra)
array1.splice(2,0,"22","33")
console.log(array1)
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(3,0, "Lemon", "Kiwi");
//console.log(fruits)
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced)
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)