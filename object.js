const person={
    name :{
        firstName :"Pervez",
        lastName : "Abbas",
        surName : "Hotovi"
    },
    age : 23,
    PhoneNo : 3534
}

Person1=[
    "Pervez", "Abbas", 23, 035545
]

console.log("First Name : " + person.name.firstName)   //accessing the specific key value using dot(.) notation

console.log("Last Name : " + person['name']['lastName'])  //accessing the specific key value using bracket notation

console.log("array"  + Person1)
let num=33;
let num2=33;

num=num2++; // value will be increment after assigning (num=33 and num2 =34 )
console.log(num,num2)