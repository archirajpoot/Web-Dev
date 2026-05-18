let inp = document.querySelector('input');
let buttons = document.querySelectorAll('button');

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        let innerText = btn.textContent;

        if (innerText === "C") {
            inp.value = "";
        } else if (innerText === "=") {
                inp.value = eval(inp.value);  
        } else {
            inp.value += innerText; 
        }
    });
}

function example() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Hello world");
            res();
        }, 5000);
    });
}
function example() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Hello ");
            res();
        }, 4000);
    });
}
let response = await fetch("https://jsonplaceholder.typicode.com/users");
let data = await response.json();
document.getElementById("result").innerText = data.name;

