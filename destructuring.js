// destructuring can extract values from arrays or object
var profile={
    name :'ali',
    rollNo:386,
    group:'BsCs',
    GPA:3.4

};
// console.log(profile.name);// simple way to extract properties of object
var {name,rollNo,group,GPA}=profile;
//it is the new method to extract values from object in E6(egma 6)
console.log(name);
console.log(rollNo);
console.log(group);
console.log(GPA);
// ***********************Restriction******************
// using this method while extracting properties from object the key values must be same as in 
//  destructing but if you want to change you can do 
// by using this method
const {name:n,rollNo:rln,group:grp}=profile;
console.log(n);
console.log(rln);

// spread and rest operator
let arr1=[1,2,3,4,5,];
let arr2=[6,7,8,9];
// challange 1:i want to print both arry value on single array
// let arr1Arr2=[arr1+arr2];// it will convert both arrrys into string 
// let arr1Arr2 =arr1.concat(arr2); //it will convert both arrays into single array
let arr1Arr2=[...arr1,...arr2];
console.log(arr1Arr2);

// fuction through rest and spread operator
function add(...a)
{
    console.log(...a);
    let sum=0;
    for (const i of a) {
        sum+=i;
        
    }
    return sum;
}
console.log(add(1,2,3,4));

// letiral 
console.log(`the last name of student is ${n}`);
console.log(`the last nam ${n}`);





