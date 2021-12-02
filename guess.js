let userName;

while (userName === undefined || userName === null || userName.length === 0) {
    userName = prompt("Hoe heet je?");
    console.log(userName);
}

alert("Welkom bij Guess the Number " + userName + "!!");

function play() {
    let randomNumber = Math.floor(Math.random() * 25);
    console.log("The number is:" + randomNumber);

    let guess;
    guess = prompt("Please choose a number between 1 and 25");
    console.log("Your guess is: " + guess);
}

while (guess !== randomNumber) {
    if (maxTries < 1) {
        alert(
            "Sorry, your tries are up. You lost. We'll start over with a new number!"
        );
        maxTries = 5;
        randomNumber = Math.floor(Math.random() * 25);
    }
    guess = parseInt(prompt("Fill in number.."));

    while (isNaN(guess)) {
        guess = parseInt(
            prompt(
                " Error! Please fill in only numbers. Please try again!"
            )
        );

        alert("Your guess is: " + guess);

        if (guess < randomNumber) {
            console.log("Your guess is too Low!");

        } else if (guess > randomNumber) {
            alert("Your gues is too High!");

        } else {
            alert("You guessed it good. The random number was " + randomNumber);
        }
    }
}