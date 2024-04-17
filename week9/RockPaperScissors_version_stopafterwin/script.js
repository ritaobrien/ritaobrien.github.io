const resultOutput = document.getElementById("Result");
const thanksOutput = document.getElementById("Thanks");
const userScoreOutput = document.getElementById("userScore");
const compScoreOutput = document.getElementById("compScore");

var compWin = 0; //keeps track of computer score
var userWin = 0; //keep track of user score
var userTurn = 0; //keeps track of number of turns the user has had

//ROCK BEATS SCISSORS
function play(userChoice) {
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    if (userWin==1){
        document.getElementById("RockPaperScissors").style.display = "none";
        document.getElementById("Result").style.display = "none";
        document.getElementById("textHide").style.display = "none";
        thanks = "You won that round! Thanks for playing!"
        thanksOutput.textContent = thanks;
        return;
    }

    //END GAME MESSAGES
    if(userWin==compWin){
        thanks = "It's a draw! Thanks for playing!"
    }
    if(userWin>compWin){
        thanks = "Congratulations, you win! Thanks for playing!"}

    if(userWin<compWin){
        thanks = "Better luck next time! Thanks for playing!"};

    //IF USER HAS HAD THREE GOES, REMOVE SCREEN TEXT AND OUTPUT SCORE
    if (userTurn == 3) {
        document.getElementById("RockPaperScissors").style.display = "none";
        document.getElementById("Result").style.display = "none";
        thanksOutput.textContent = thanks;
        userScore = "Your score: " + userWin;
        userScoreOutput.textContent = userScore;
        compScore = "My score: " + compWin;
        compScoreOutput.textContent = compScore;
        document.getElementById("textHide").style.display = "none";
        document.getElementById("textHide1").style.display = "none";
        return;}
       
    //IF USER PICKS ROCK, ROCK BEATS SCISSORS
    if (userChoice == 1) {
        userTurn++;
         if (userChoice == compChoice) {
                result = "IT'S A DRAW!   ...I also chose Rock";
            }
            else {
                if (compChoice == 2) {
                    result = "YOU LOSE!   ...I chose Paper";
                    compWin++;
                }
                else {
                    result = "YOU WIN!   ...I chose Scissors";
                    userWin++;
                    }
            }
            resultOutput.textContent = result;
    }
    

    //IF USER PICKS PAPER, PAPER BEATS ROCK
    else if (userChoice == 2) {
        userTurn++;
        if (userChoice == compChoice) {
            result = "IT'S A DRAW!   ...I also chose Paper";
             }
        else {
            if (compChoice == 1) {
                result = "YOU WIN!   ...I chose Rock";
                userWin++;
            }
            else {
                result = "YOU LOSE!   ...I chose Scissors";
                compWin++;
            }
        }
        resultOutput.textContent = result;
    }

    //IF USER PICKS SCISSORS, SCISSORS BEATS PAPER
    else if (userChoice == 3) {
        userTurn++;
        if (userChoice == compChoice) {
            result = "IT'S A DRAW!   ...I also chose Scissors";
        }
        else {
            if (compChoice == 2) {
                result = "YOU WIN!   ...I chose Paper";
                userWin++;
            }
            else {
                result = "YOU LOSE!   ...I chose Rock";
                compWin++;
            }
        }
        resultOutput.textContent = result;
    }
}

