
// let roll=prompt("enter rollno");
// let input=document.querySelector("h3");
// input.innerText("rollno"+roll);

let h1=document.querySelector("h1");

let input=document.querySelector("input");
input.addEventListener("input",function(e){
 h1.innerText=e.target.value;
})
let but=document.querySelector("button")
but.addEventListener("click",function(e){
    h1.innerText=e.target.value;
})