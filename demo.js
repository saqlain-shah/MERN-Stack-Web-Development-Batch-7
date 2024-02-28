//Here's the complete program that applies all the mentioned methods on the given trainee data:
//array of trainees name
let trainees = [
  "aliya",
  "malika",
  "mehmooda",
  "mudeera",
  "shahina",
  "fatima",
  "aliya",
  "akbar",
  "zakir",
  "shehbaz",
  "javed",
  "tehzeeb",
];

// Using String methods


let traineeString = trainees.join("*"); // Convert array to a string separated by commas
console.log("\n Apply join  ");
console.log(traineeString);


let splitTraineeString = traineeString.split("*"); // Split the string into an array based on a specified separator
console.log("\n Apply Split  ");
console.log(splitTraineeString);