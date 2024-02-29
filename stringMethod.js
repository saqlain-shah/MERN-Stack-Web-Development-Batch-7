let text="ali,akram,babar,ali,ali,ali"
let part=text.slice(-6,-2)
console.log(part)
let part1=text.substring(-3)
console.log(part1)
let part2=text.substr(3)
console.log(part2)
let text1=text.toUpperCase()
console.log(text1)
let text2=text1.toLowerCase()
console.log(text2)
let text3=text1.concat("/",text2)
console.log(text3)
let text4=text.trim()
console.log(text4)
let text5=text.padStart(5,"x");
console.log(text5)
let tex = "5";
let padded = tex.padStart(4,"x");
console.log(padded);
let  replace=text.replaceAll("ali","javiad")
console.log(replace);
text.split(" / ")
console.log(text);
console.log(text.repeat(3))