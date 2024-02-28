
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

traineesArray.push("Amina"); // Add an element to the end of the array
console.log("\n Apply push ");
console.log(traineesArray);

traineesArray.unshift("Khadija"); // Add an element to the beginning of the array
console.log("\n Apply Unshift ");
console.log(traineesArray);


traineesArray.shift(); // Remove the first element from the array
console.log("\n Apply Shift  ");
console.log(traineesArray);

let slicedTraineesArray = traineesArray.slice(3, 7); // Slice a part of the array
console.log("\n Apply Slice ");
console.log(slicedTraineesArray);

let isArray = Array.isArray(traineesArray); // Check if the variable is an array
console.log("\n Apply is Array  ");
console.log(isArray);

let arrayLength = traineesArray.length; // Get the length of the array
console.log("\n Apply Array Length  ");
console.log(arrayLength);

let filteredTraineesArray = traineesArray.filter(
  (trainee) => trainee.charAt(0) === "m"
); // Filter elements based on a condition
console.log("\n Apply Filter");
console.log(filteredTraineesArray);

let mappedTraineesArray = traineesArray.map((trainee) => trainee.toUpperCase()); // Map elements to a new array based on a condition
console.log("\n Apply Map  ");
console.log(mappedTraineesArray);

console.log("\n Apply Switch  ");


switch (
  traineesArray[0] // Use a switch statement
) {
  case "aliya":
    console.log("First trainee is Aliya");
    break;
  case "malika":
    console.log("First trainee is Malika");
    break;
  default:
    console.log("First trainee is not Aliya or Malika");
    break;
}

console.log("\n For Loop ");
let result = "";
for (let i = 0; i < traineesArray.length; i++) {
  result += traineesArray[i] + " ";
}
console.log(result);
