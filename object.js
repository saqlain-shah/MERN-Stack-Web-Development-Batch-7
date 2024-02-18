
const person={
    name :{
        firstName :"Pervez",
        lastName : "Abbas",
        surName : "Hotovi"
    },
    age : 23,
    PhoneNo : {
        scomNo :[35548703,355489809,35584398],
        TelenorNo : [346525, 3456590,3478450]
    }
        
    
}

Person1=[
    "Pervez", "Abbas", 23, 35545
]

console.log("First Name : " + person.name.firstName)   //accessing the specific key value using dot(.) notation

console.log("Last Name : " + person['name']['lastName'])  //accessing the specific key value using bracket notation
console.log("SCOM Numbers:  " + person.PhoneNo.scomNo)

console.log("array"  + Person1)
let num=33;
let num2=33;

num=num2++; // value will be increment after assigning (num=33 and num2 =34 )
console.log(num,num2)

const obj1 = {
name :{
    firstName:"Syed",
    SurName:"Saqlain",
    lastName:"Shah",
}, 
isMale : true, 
phoneNo : {
    telenor: [34754, 34755],
    scom :[35551, 35552]
}
}

const obj2 = {
        firstName:"Syed",
        SurName:"Saqlain",
        lastName:"Shah",
        isMale : true, 
        telenor1: 34754,
        telenor2:34755,
        scom1 :35551, 
        scom2 :35552
    }



let arr = ["Saqlain", true,  346 ]
    


console.log("Object1 ", obj1.phoneNo.scom)
//console.log("Object2 ", obj2.scom2)

//console.log("Array ", arr)
