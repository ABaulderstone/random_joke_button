// fetch("https://alexs-joke-api.herokuapp.com/api/jokes/")
//     .then(response => response.json())
//     .then(data => console.log(data))
let jwt; 

function populateJokeDiv(data) { 
    const jokeDiv = document.getElementById("joke-div");
    jokeDiv.innerHTML = `<p> ${data.body} </p>`
}

function onButtonClick(event) {
    fetch("https://alexs-joke-api.herokuapp.com/api/jokes/random")
        .then(response => response.json())
        .then(populateJokeDiv)

}

function onSignIn(event) {
    credentials = {
        email: "test@jokes.com",
        password:"password123"
    }
    fetch("https://alexs-joke-api.herokuapp.com/api/auth/sign_in",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => jwt = data.jwt);
}
const button = document.getElementById("joke-button");
button.addEventListener("click", onButtonClick);

document.getElementById("sign-in").addEventListener("click", onSignIn);