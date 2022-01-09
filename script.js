let userScore = 0;
let compScore = 0;

// Create a function where a random output either rock paper or scissor is generated
// this will be the computers pick

function computer(){
    let ranNum = Math.floor(Math.random() * 3); //random num between 0 and 2
    let pick;

    //Assigns either Rock Paper or Scissors as the computers pick based on the random number
    switch(ranNum){
        case 0:
            pick = "ROCK";
            break;
        case 1:
            pick = "PAPER";
            break;
        case 2: 
            pick = "SCISSORS";
            break;
        default:
            console.log("Something went wrong in the Computer pick");
            break;
    }   
    return pick;
}

// create a function where the game is played with two parameters, your pick and the computers pick

function play(comp){
    let userPick = prompt("Pick either Rock, Paper or Scissors", "");

    //make the pick case insensitive
    userPick = userPick.toUpperCase();

    //game
    switch(userPick){
        case "ROCK": //options if user picked rock
            switch(comp){
                case "ROCK":
                    console.log("Draw! Computer also picked Rock.");
                    break;
                case "PAPER":
                    console.log("You lost! Computer picked Paper.");
                    compScore++;
                    break;
                case "SCISSORS":
                    console.log("You win! Computer picked scissors.");
                    userScore++;
                    break;
            }
            break;
        case "PAPER": //options if user picked paper
            switch(comp){
                case "ROCK":
                    console.log("You win! Computer picked Rock.");
                    userScore++;
                    break;
                case "PAPER":
                    console.log("Draw! Computer also picked paper.");
                    break;
                case "SCISSORS":
                    console.log("You lost! Computer picked scissors.");
                    compScore++;
                    break;
            }
            break;
        case "SCISSORS": //options if user picked scissors
            switch(comp){
                case "ROCK":
                    console.log("You lost! Computer picked Rock.");
                    compScore++;
                    break;
                case "PAPER":
                    console.log("You win! Computer  picked paper.");
                    userScore++;
                    break;
                case "SCISSORS":
                    console.log("Draw! Computer also picked scissors.");
                    break;
            }
            break; 
        default: //fallback if user picked none of the three
            console.log("Pick either Rock, Paper or Scissors!");
            break;
    }

    console.log("Computer Score: " + compScore);
    console.log("Your Score: " + userScore);
    
}

function game(){
    userScore = 0;
    compScore = 0;

    for(let i=0; i<5; i++){
        play(computer());
    }

    if(userScore>compScore){
        console.log("You won! Congratulations.");
    } else if(compScore > userScore){
        console.log("Oh no! You lost. Better luck next time.");
    } else{
        console.log("It's a draw. Maybe play again.");
    }
}

document.getElementById("test").addEventListener("click", () => game());

// create a new function game() and use the previous function to play 5 rounds of RPS. Function keeps score and declares winner at the end
