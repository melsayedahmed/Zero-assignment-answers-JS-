
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");

font.onchange = function(){
    window.localStorage.setItem("font", font.value);
    document.body.style.fontFamily = font.value;
}
color.onchange = function(){
    window.localStorage.setItem("color", color.value);
    document.body.style.color = color.value;
}
size.onchange = function(){
    window.localStorage.setItem("size", size.value);
    document.body.style.fontSize = size.value;
}

document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.color = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("size");

font.value = window.localStorage.getItem("font");
color.value = window.localStorage.getItem("color");
size.value = window.localStorage.getItem("size");