
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");

form[0].onsubmit = function(el){
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for(let i = 1; i <= elNum.value; i++){
        let myEl = document.createElement(type.value);
        let myText = document.createTextNode(text.value);

        myEl.className = "box";
        myEl.title = "Element";
        myEl.id = `id-${i}`;

        myEl.style.display = "inline-block";
        myEl.style.width = "200px";
        myEl.style.margin = "20px";
        myEl.style.padding = "10px";
        myEl.style.color = "white";
        myEl.style.backgroundColor = "blue";
        myEl.style.textAlign = "center";
        myEl.style.borderRadius = ".5rem";

        myEl.appendChild(myText);
        results.appendChild(myEl);
    }
};

let input = document.querySelectorAll(".input");
submit = document.querySelector("[type= 'submit']");
box = document.querySelectorAll(".box");

for(let i = 0; i < input.length; i++){
    input[i].style.display = "block";
    input[i].style.boxSizing = "border-box";
    input[i].style.width = "250px";
    input[i].style.padding = "10px";
    input[i].style.margin = "15px auto";
    input[i].style.borderRadius = ".5rem";
    input[i].style.border = "1px solid black";
}

submit.style.backgroundColor = "gray";
submit.style.display = "block";
submit.style.width = "250px";
submit.style.padding = "10px";
submit.style.borderRadius = ".5rem";
submit.style.border = "none";
submit.style.margin = "15px auto";
submit.style.color = "white";