//Extracting last four characters 
let a = "extravaganza" ;
console.log(a.slice(-4));

//Inserting a string
const food = "The quick fox jumped over the lazy dog";
const eat = "eat"
const eatFood = `${food.slice(0,4)}${eat} ${food.slice(4,)}`;
console.log({eatFood})

//Counting appearance
const story = "The quick brown fox jumps over the lazy dog";
let variable1= "the";
let variable2= "brown";
console.log(story.split(variable1).length-1);
console.log(story.split(variable2).length-1);

//Logs the index of the first word if it exits in the string and logs -1 if the string doesn't exist.
const string1 = "The pupils are reading in the library";
console.log(string1.indexOf("are"));

const string2= "The child was sitting on the table before it fell";
console.log(string2.indexOf("sitting"));

//converting string
//Upper case
let word1 = "wonderful";
console.log(word1.toUpperCase());

//Lower case
let word2 = "amazing";
console.log(word2.toLowerCase());

let word3 = "UndERneath";
console.log(word3.toLowerCase());

//Title case
let titleCase = "A wonderful world"
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase);
