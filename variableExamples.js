// var, let const, hoisting 

// console.log(num1);//will be umdefines=d 

function scope(){
    let name="Pervez"
    var num1=10
}
name="Abbas"
name="Pevez"
console.log(name)
console.log(num1);//num1 can't be access due to lexical scope , a/c Lexical Scope the local and global variables are accessale for chlids but not for parents.

