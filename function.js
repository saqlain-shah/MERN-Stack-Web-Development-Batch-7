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

function display(){
    console.log("Hello")
}


function showMessage(a){

    a()
}

Addition( )
Add()
Sum1()
Sum2()
Sum3(50)
Sum4(550)


showMessage(display)