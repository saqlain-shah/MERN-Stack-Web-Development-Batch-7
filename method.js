
// Using Array methods

let traineesArray = [
  "aliya",
  "malika",
  "mehmooda",
  "mudeera",
  "shahina",
  "fatima",
  "qamar",
  "akbar",
  "zakir",
  "shehbaz",
  "javed",
  "tehzeeb",
];



traineesArray.unshift("Khadija"); 
console.log("\n Apply Unshift ");
console.log(traineesArray);

traineesArray.pop(); 
console.log("\n Apply Pop  ");
console.log(traineesArray);

traineesArray.push("Amina"); 
console.log("\n Apply push ");
console.log(traineesArray);

traineesArray.shift();
console.log("\n Apply Shift  ");
console.log(traineesArray);

console.log("\n Actual Array  ");
console.log(traineesArray);


let mappedTraineesArray = traineesArray.map((trainee) => trainee.toUpperCase()); 
console.log("\n Apply Map  ");
console.log(mappedTraineesArray);

let filteredTraineesArray = traineesArray.filter(
  (trainee) => trainee.charAt(0) === "m"
); // Filter elements based on a condition
console.log("\n Apply Filter");
console.log(filteredTraineesArray);