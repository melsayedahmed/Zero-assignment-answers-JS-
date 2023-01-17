
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += start){
    if (i === exclude){
        continue;
    }
    console.log(`${i}`);
}

console.log("=".repeat(40));

let startOne = 10;
let endOne = 0;
let stop = 3;

for (let j = startOne; j > endOne; j--){
    if (j < startOne){
        console.log(`${endOne}${j}`)
    }else {
        console.log(`${j}`)
    }
    if(j === stop){
        break;
    }
}

console.log("=".repeat(40));

let startTwo = 1;
let endTwo = 6;
let breaker = 2;

for(let k = startTwo; k <= endTwo; k++){
    console.log(`${k}`);
    for (let l = breaker; l < endTwo; l += breaker){
        console.log(`-- ${l}`)
    }
}

console.log("=".repeat(40));

let index = 10;
let jump = 2;
let endThree = 0;
let m = index;

for (;;) {
    // Write Your Code Here
    if(m >= endThree){
        console.log(`${m}`);
    }
    if (m === jump + jump){
        break;
    }
    m -= jump
}

console.log("=".repeat(40));

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

number = letter.length;
for (let o = 0; o < friends.length; o++){
    if(friends[o].startsWith(letter.toUpperCase())){
        continue;
    }
    console.log(`"${number} => ${friends[o]}"`);
    number++
}

console.log("=".repeat(40));

let startThree = 0;
let swappedName = "elZerO";
let result = "";

for(let n = startThree; n < swappedName.length; n++){
    if(swappedName[n] === swappedName[n].toLowerCase()){
        result += swappedName[n].toUpperCase();
    }else if(swappedName[n] === swappedName[n].toUpperCase()){
        result += swappedName[n].toLowerCase();
    }
}
console.log(result);

console.log("=".repeat(40));

let startFour = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let v = startFour + mix.indexOf(2); v < mix.length; v++){
    if(typeof mix[v] === "string"){
        continue;
    }
    console.log(mix[v]);
}