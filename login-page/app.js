let formData = document.querySelector("#formData");
formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = {
        name: formData[0].value,
        email: formData[1].value,
        pass: formData[2].value,
    };

    localStorage.setItem("userData", JSON.stringify(data));

    // SHOW DATA ON SCREEN
    document.querySelector("h1").innerText = data.name;
    document.querySelector("h2").innerText = data.email;
    document.querySelector("h3").innerText = data.pass;
});
   
let LoginData = document.querySelector("#LoginData");

LoginData.addEventListener("submit", (e) => {
    e.preventDefault();

    let login = {
        email: LoginData[0].value,
        pass: LoginData[1].value,
    };

    let mainData = JSON.parse(localStorage.getItem("userData"));

    if (
        login.email === mainData.email &&
        login.pass === mainData.pass
    ) {
        alert("Login Successful");
    } else {
        alert("Invalid Email or Password");
    }
});