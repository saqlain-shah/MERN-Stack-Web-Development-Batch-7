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


let traineeString = trainees.join(" , "); // Convert array to a string separated by commas
console.log("\n Apply join  ");
console.log(traineeString);


let slicedTraineeString = traineeString.slice(-16, -8); // Slice a part of the string
console.log("\n Apply slice");
console.log(slicedTraineeString);


let substringTraineeString = traineeString.substring( 16,5); // Get a substring of the string
console.log("\n Apply substring");
console.log(substringTraineeString);


let replacedTraineeString = traineeString.replace("aliya", "Aliya Ejaz"); // Replace a string with another string
console.log("\n Apply replace  ");
console.log(replacedTraineeString);


let upperCaseTraineeString = traineeString.toUpperCase(); // Convert string to uppercase
console.log("\n Apply toUpperCase ");
console.log(upperCaseTraineeString);

let lowerCaseTraineeString = traineeString.toLowerCase(); // Convert string to lowercase
console.log("\n Apply toLowerCase ");
console.log(lowerCaseTraineeString);

let concatenatedTraineeString = traineeString.concat(" are trainees."); // Concatenate a string
console.log("\n Apply concat ");
console.log(concatenatedTraineeString);