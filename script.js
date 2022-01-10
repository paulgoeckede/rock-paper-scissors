let userScore = 0;
let compScore = 0;

const topDiv = document.querySelector(".buttons");
const bottomDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".scores");
const compScoreDiv = document.querySelector(".computerScore");
const userScoreDiv = document.querySelector(".userScore");

//This function randomly returns either "ROCK", "PAPER" or "SCISSORS" as a pick

function computer(){  
    let ranNum = Math.floor(Math.random() * 3);
    let pick;

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

//This function plays one round of Rock Paper Scissors with the users Pick being Rock

function playRock(){
    const compPick = computer();

    const resultMessage = document.createElement("h1");
    resultMessage.classList.add("header");

    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");

    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");

    switch(compPick){
        case "ROCK":
            resultMessage.classList.add("draw");
            resultMessage.textContent = "Draw! Computer also picked Rock.";
            break;
        case "PAPER":
            resultMessage.classList.add("lost");
            resultMessage.textContent = "You lost! Computer picked Paper.";
            compScore++;
            break;
        case "SCISSORS":
            resultMessage.classList.add("won");
            resultMessage.textContent = "You win! Computer picked scissors.";
            userScore++;
            break;
    }

    bottomDiv.removeChild(document.querySelector(".header"));
    bottomDiv.insertBefore(resultMessage, scoreDiv);

    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;
}

//This function plays one round of Rock Paper Scissors with the users Pick being Paper

function playPaper(){
    const compPick = computer();

    const resultMessage = document.createElement("h1");
    resultMessage.classList.add("header");

    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");

    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");

    switch(compPick){
        case "ROCK":
            resultMessage.classList.add("won");
            resultMessage.textContent = "You won! Computer picked Rock.";
            userScore++;
            break;
        case "PAPER":
            resultMessage.classList.add("draw");
            resultMessage.textContent = "Draw! Computer also picked Paper.";
            break;
        case "SCISSORS":
            resultMessage.classList.add("lost");
            resultMessage.textContent = "You lost! Computer picked scissors.";
            compScore++;
            break;
    }

    bottomDiv.removeChild(document.querySelector(".header"));
    bottomDiv.insertBefore(resultMessage, scoreDiv);

    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;
    
}

//This function plays one round of Rock Paper Scissors with the users Pick being Scissors

function playScissors(){
    const compPick = computer();

    const resultMessage = document.createElement("h1");
    resultMessage.classList.add("header");

    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");

    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");

    switch(compPick){
        case "ROCK":
            resultMessage.classList.add("lost");
            resultMessage.textContent = "You lost! Computer picked Rock.";
            compScore++;
            break;
        case "PAPER":
            resultMessage.classList.add("won");
            resultMessage.textContent = "You won! Computer picked Paper.";
            userScore++;
            break;
        case "SCISSORS":
            resultMessage.classList.add("draw");
            resultMessage.textContent = "Draw! Computer also picked scissors.";
            break;
    }

    bottomDiv.removeChild(document.querySelector(".header"));
    bottomDiv.insertBefore(resultMessage, scoreDiv);

    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;
    
}

function checkScore(computerScore, userScoreCheck){
    if(computerScore===5 || userScoreCheck===5){
        return true;
    }
    return false;
}

const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener('click', playRock);

const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener("click", playPaper);

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener("click", playScissors);



// create a new function game() and use the previous function to play 5 rounds of RPS. Function keeps score and declares winner at the end
