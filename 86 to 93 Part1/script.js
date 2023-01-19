
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let one = document.querySelector("#elzero");
let two = document.querySelector(".element");
let three = document.querySelector("[name = 'js']");
let four = document.querySelector("div");
let five = document.querySelectorAll("#elzero")[0];
let six = document.querySelectorAll(".element")[0];
let seven = document.querySelectorAll("[name = 'js']")[0];
let eight = document.querySelectorAll("div")[0];
let nine = document.getElementById("elzero");
let ten = document.getElementsByClassName("element")[0];
let eleven = document.getElementsByTagName("div")[0];
let twelve = document.getElementsByName("js")[0];
let thirteen = document.body.firstElementChild;
let fourteen = document.body.children[0];
let fifteen = document.body.childNodes[1];

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);
console.log(fourteen);
console.log(fifteen);

/* ####################################### */

// let myLogo = document.images;

// for(i = 0; i < myLogo.length; i++){
//     myLogo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myLogo[i].alt = "Elzero Logo";
//     myLogo[i].style = "background-color: blue; margin-bottom: 30px; padding: 30px";

// }

/* ####################################### */

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function(){
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
}

/* ####################################### */

let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");

elOne.title = elOne.className;
elTwo.title = elTwo.className;
elOne.textContent = elOne.className.toUpperCase();
elTwo.textContent = `${elTwo.className.toUpperCase()} ${elTwo.attributes.length}`;

/* ####################################### */

let image = document.querySelectorAll("img");

for(i = 0; i < image.length; i++){
    if(image[i].hasAttribute("alt")){
        image[i].alt = "old";
    }else{
        image[i].alt = "Elzero New";
    }
}





