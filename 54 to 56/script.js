
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(index < friends.length){
    if(typeof friends[index] === "number" || friends[index].startsWith("A")){
        index++;
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}"`);
    index++;

}
