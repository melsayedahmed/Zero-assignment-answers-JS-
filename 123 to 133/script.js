
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe
"==================================================================="


// Assignment-1

let setOfNumbers = new Set();

setOfNumbers.add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

console.log("=".repeat(40));
"==================================================================="

// Assignment-2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriends = new Set(myFriends.sort());

console.log(newFriends);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log("=".repeat(40));
"==================================================================="

// Assignment-3

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));

console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

console.log("=".repeat(40));
"==================================================================="

// Assignment-4

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// Needed Output
// 123

console.log("=".repeat(40));
"==================================================================="

// Assignment-5

let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

console.log("=".repeat(40));
"==================================================================="

// Assignment-6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.sort();
// chars.copyWithin(0, 3, 6);

// console.log(chars);

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// chars.sort();
// chars.copyWithin(0, 4, 8);

// console.log(chars);

// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.copyWithin(2);

console.log(chars);

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

console.log("=".repeat(40));
"==================================================================="

// Assignment-7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));

numsOne.push(...numsTwo);

console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6]

console.log("=".repeat(40));
"==================================================================="

// Assignment-8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);

// Needed Output
// 210

