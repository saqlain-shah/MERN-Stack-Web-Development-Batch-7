// spread operator 

let array1=[2,3,4,6,4,6];
let array2=['s','f','d',...array1];
console.log("Spread operator : ",array2)


// rest operator

let add = (...numbers) =>  {

  let sum=0;
  numbers.forEach(a => {
    sum+=a;
  });

  console.log("sum of numbers using rest operator",sum);

}

add(3,4,2,5,35,3);