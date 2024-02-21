
function show(){
    console.log("hellow") //1st type
}
function show1(nam,fname){
    console.log(nam,fname);  //2th type
}

var num=function(){
    console.log("ghamgeen"); //3nd type
}
var num5=function(a,b){
    console.log(a+b); //4th type

}
var num1=()=>{
    console.log("gultari"); //5rd type
}
var num2=()=>console.log("pervaz"); //6th type
var num3=name=>console.log(name); //7th type

var num4=fname=>{
    fname(); //8th type
}


var num6=(c,d)=>console.log(c+d);///9th type
var num7=(fnam,lnam)=>{
    console.log(fnam+lnam); //10th type
}
show();
num();
num1();
num2();
num3("mali");

num4(num);
show1("ali","raza");
num5(4,5);
num6(3,2);
num7("Muhammad","Ali");