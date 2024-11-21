const logform = document.querySelector(".logform");
const loguser = document.querySelector(".loguser");
const logpass = document.querySelector(".logpass");

let users = JSON.parse(localStorage.getItem("users")) || [];

logform.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loguser.value.trim();
    const password = logpass.value;
    const foundUser = users.find(user =>
        (user.username === username || user.email === username) && user.password === password
    );

    if (foundUser) {
        foundUser.isLogged = true;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.replace("home.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
