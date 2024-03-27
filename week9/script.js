var userChoice=0;

const resultOutput = document.getElementById("Result");


function play(userChoice)
{
var compChoice=Math.floor(Math.random() * 3 ) + 1

console.log(userChoice);
console.log(compChoice);

let result = "";

//ROCK BEATS SCISSORS
if (userChoice==1){
    if (userChoice==compChoice){
        result = "IT'S A DRAW!   ...I also chose Rock";
         }
        else {if (compChoice==2){
                result = "YOU LOSE!   ...I chose Paper";
            }
                else {result = "YOU WIN!   ...I chose Scissors";
                }
             }
}

//PAPER BEATS ROCK
if (userChoice==2){
    if (userChoice==compChoice){
        result = "IT'S A DRAW!   ...I also chose Paper";
    }
        else {if (compChoice==1)
                {result= "YOU WIN!   ...I chose Rock";
                }
                else {result = "YOU LOSE!   ...I chose Scissors";
                }
            }
}
    
//SCISSORS BEATS PAPER
if (userChoice==3){
    if (userChoice==compChoice){
        result = "IT'S A DRAW!   ...I also chose Scissors";
       }
    else {if(compChoice==2)
        {result = "YOU WIN!   ...I chose Paper";}
            else {result = "YOU LOSE!   ...I chose Rock";
            }
        }
}

resultOutput.textContent = result;
}

