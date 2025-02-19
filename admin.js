const correctPassword = "joe1234";

function checkPassword() {
    let input = document.getElementById("password").value;
    if (input === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("admin-section").style.display = "block";
    } else {
        alert("Wrong password!");
    }
}

function addTeam() {
    alert("Team added! (Would save to JSON in a real setup)");
}

function addPlayer() {
    alert("Player added! (Would save to JSON in a real setup)");
}
