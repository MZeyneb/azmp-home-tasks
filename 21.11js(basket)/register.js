document.addEventListener("DOMContentLoaded", function() {
    const regform = document.querySelector(".regform");
    const regemail = document.querySelector(".regemail");
    const regpass = document.querySelector(".regpass");
    const reguser = document.querySelector(".reguser");
    if (!regform || !regemail || !regpass || !reguser) {
        console.error("Required elements not found in the DOM");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    regform.addEventListener("submit", function(event) {
        event.preventDefault();

        const user = {
            id: Date.now(),
            username: reguser.value.trim(),
            email: regemail.value.trim(),
            password: regpass.value,
            isLogged: false
        }

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.replace("login.html");
        regform.reset();
    });
});
