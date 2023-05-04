let username = document.getElementById("username");
let password = document.getElementById("password");

let usernameMsg = document.getElementById("usernameMsg");

let passwordMsg = document.getElementById("passwordMsg");


function validateFrom() {

    let flag = 1;

    //USERNAME VALIDATION
    if (username.value == "") {
        usernameMsg.classList.add("error");
        usernameMsg.innerHTML = "User Name is Empty!"

        flag = 0;
    } else if (username.value.length < 3) {
        usernameMsg.classList.add("error");
        usernameMsg.innerHTML = "User Name required min 3 characters";

        flag = 0;
    }
    else {

        usernameMsg.classList.add("ok");

        usernameMsg.innerHTML = "User Name Ok";

        username.innerHTML = "";

    }

    //PASSWORD VALIDATION
    if (password.value == "") {
        passwordMsg.classList.add("error");
        passwordMsg.innerHTML = "Password is Empty!"

        flag = 0;
    } else if (password.value.length < 8) {
        passwordMsg.classList.add("error");
        passwordMsg.innerHTML = "Password required min 8 characters";

        flag = 0;
    }
    else {

        passwordMsg.classList.add("ok");

        passwordMsg.innerHTML = "Password Ok";

        password.innerHTML = "";
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}