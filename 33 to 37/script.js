
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let num = 110;

if (num < 10){
    console.log(`${"00"}${num}`);
} else if(num > 10 && num < 100){
    console.log(`${0}${num}`)
} else{
    console.log(num);
}

console.log("=====================================");

let num10 = 9;
let str = "9";
let str2 = "20";

if (num10 == str){
    console.log("{num1} Is The Same Value As {str}");
}
if (num10 !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num10 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

console.log("=====================================");

let num7 = 10;
let num8 = 30;
let num9 = "30";

if ((num9 > num7 && num9 !== num8) && (num9 > num7 && num9 == num8 && num9 !== num8) && (num9 !== num7 && num9 !== num8)){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number" +
    "\n" + "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
    "\n" +"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}

console.log("=====================================");


// Edit What You Want Here

let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
