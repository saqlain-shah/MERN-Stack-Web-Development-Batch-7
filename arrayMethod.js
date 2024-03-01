var stdName = ["iftikhar","shahid","saqlain","anjum"];


// slice

console.log("array slice :",stdName.slice(2,4))



//pop

console.log("pop :",stdName.pop())
console.log(stdName)


//push

console.log("push :",stdName.push("sajid"))
console.log(stdName)


//unshift

console.log("unshift :",stdName.unshift("liaqat"))
console.log(stdName)



//shift

console.log("shift :",stdName.shift())
console.log(stdName)


//delete
//  delete stdName[1];
// console.log("delete :",stdName)



//to string

console.log("to string :",stdName.toString())
console.log(stdName)


//splice

console.log("splice :",stdName.splice(1,0,"amjad","kashif"))
console.log(stdName)


//tosplice
//removed the element at index 1 and added ali before index 2
console.log("tosplice :",stdName.toSpliced(2,1,"ali"))
console.log("orignal array :")
console.log(stdName)


//flat

console.log("flat :",stdName.flat())
console.log(stdName)

//copyWithin

console.log("copy within :",stdName.copyWithin(3,0))
console.log(stdName)

//array length

console.log("array length :",stdName.length)


//string At

let a=stdName.at(1);
console.log("array At :",a)




