
function guessGame(){
    number = Math.floor(Math.random()*11);
    document.write(number);
    var guess = prompt("Guess a number: ");
        do {
            guess = prompt("Keep guessing!");
            if (number < guess) {
                prompt("You've guessed too high!");
            } else if (number > guess) {
                prompt("You've guessed too low!");
            } else document.write("Congratulations!! You Just Won a Pair of Yeezys");
        } while (guess != number);
}


