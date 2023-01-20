
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select");

one.oninput = function(){
    window.sessionStorage.setItem("text-1", one.value);
}
two.oninput = function(){
    window.sessionStorage.setItem("text-2", two.value);
}
three.oninput = function(){
    window.sessionStorage.setItem("text-3", three.value);
}
select.onchange = function(){
    window.sessionStorage.setItem("select", select.value);
}

one.value = window.sessionStorage.getItem("text-1");
two.value = window.sessionStorage.getItem("text-2");
three.value = window.sessionStorage.getItem("text-3");
select.value = window.sessionStorage.getItem("select");