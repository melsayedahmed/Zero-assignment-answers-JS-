
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

function sayHello(theName, theGender = "") {
    // Your Code Here
    if(theGender === "Male"){
        theGender = "Mr";
    }else if(theGender === "Female"){
        theGender = "Miss";
    }
    document.write(`<p>"Hello ${theGender} ${theName}"</p>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("=".repeat(40));

function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if(secondNum === undefined && operation === undefined){
        console.log(firstNum);
    }else if(operation === undefined){
        console.log(firstNum + secondNum);
    }else if(operation === "add"){
        console.log(firstNum + secondNum);
    }else if(operation === "subtract"){
        console.log(firstNum - secondNum);
    }else if(operation === "multiply"){
        console.log(firstNum * secondNum);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("=".repeat(40));

function ageInTime(theAge) {
    // Your Code Here
    if(theAge > 100 || theAge < 10){
        console.log("Age Out Of Range");
    }else{
        console.log(`The Age With years Is ${theAge}`)
        console.log(`The Age With Months Is ${theAge * 12}`);
        console.log(`The Age With Weeks Is ${theAge * 12 * 4}`);
        console.log(`The Age With Days Is ${theAge * 12 * 4 * 7}`);
        console.log(`The Age With Hours Is ${theAge * 12 * 4 * 7 * 24}`);
        console.log(`The Age With Minutes Is ${theAge * 12 * 4 * 7 * 24 * 60}`);
        console.log(`The Age With Seconds Is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
    }
}

// Needed Output
ageInTime(9); // Age Out Of Range
ageInTime(80); // Months Example => 456 Months

console.log("=".repeat(40));

function checkStatus(a, b, c) {
    // Your Code Here
    let name;
    let age;
    let status;

    typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a;
    typeof b === "string" ? name = b : typeof b === "number" ? age = b : status = b;
    typeof c === "string" ? name = c : typeof c === "number" ? age = c : status = c;

    status === true ?  status = "You Are Available For Hire" : status = "You Are Not Available For Hire";
    document.write(`<p>"Hello ${name}, Your Age Is ${age}, ${status}"</p>`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


console.log("=".repeat(40));

function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`);
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value = "${i}">${i}</option>`)
    }
    document.write(`</select>`);
    
}
createSelectBox(2000, 2021);

console.log("=".repeat(40));


function multiply(...numbers){
    let result = 0;
    for(let j = 0; j < numbers.length; j++){
        if(typeof numbers[j] === "string"){
            continue;
        }else{
            result = parseInt(numbers[j - 1]) * parseInt(numbers[j]);
        }
    }
    return result;
}


console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000