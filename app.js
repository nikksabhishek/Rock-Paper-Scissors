let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function to fetch a random computer choice 
// Math.random generated a value between 0-1 which 
// when multiplied with 3 and ignoring the decimal value
// results in a integer value 0,1,2
// The function then returns a relevant letter from the list.
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to map letters to words,
// Ensure readability of the output.
function letterToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

// Win function increments user score for a win.
// green-glow added in style.css to give the green-border effect.
// Timeout function to wear the effect down.
function win(userChoice, computerChoice) {
    const userWord = "User".fontsize(3).sub();
    const computerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)} ${userWord} beats ${letterToWord(computerChoice)}${computerWord}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('green-glow')
    }, 300)
}

// lose function increments computer score for a loss.
// red-glow added in style.css to give the green-border effect.
// Timeout function to wear the effect down.
function lose(userChoice, computerChoice) {
    const userWord = "User".fontsize(3).sub();
    const computerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)} ${userWord} loses to ${letterToWord(computerChoice)}${computerWord}. You lose!`
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 300)
}

// Draw function neither increments/decrements the score.
// grey-glow added in style.css to give the green-border effect.
// Timeout function to wear the effect down.
function draw(userChoice, computerChoice) {
    const userWord = "User".fontsize(3).sub();
    const computerWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${letterToWord(userChoice)} ${userWord} equals ${letterToWord(computerChoice)}${computerWord}. It's  a draw!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('grey-glow')
    }, 300)
}

// Switch statement to compare the choices,
// Calls relevant functions win/lose/draw.
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

// Main Function
function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
}

main()
