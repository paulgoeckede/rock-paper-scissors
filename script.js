let userScore = 0;
let compScore = 0;

const topDiv = document.querySelector(".buttons");
const bottomDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".scores");
const compScoreDiv = document.querySelector(".computerScore");
const userScoreDiv = document.querySelector(".userScore");
const header = document.querySelector(".header");

//Event Listeners for the three buttons
const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener('click', playRock);
const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener("click", playPaper);
const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener("click", playScissors);

header.addEventListener("transitionend", removeTransition);

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
    const compPick = computer(); //Grabs a random pick, either Rock Paper or Scissors which will be the computers Pick

    //Grabs the div where the Text "Computer Score" and the actual computer Score will be displayed
    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");
    //Grabs the div where the Text "User Score" and the actual user Score will be displayed
    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");

    //These remove the text-color effect on the header
    header.classList.remove("won");
    header.classList.remove("lost");
    header.classList.remove("draw");

    switch(compPick){
        case "ROCK":
            header.classList.add("draw"); //This is for changing the color of the header
            header.textContent = "Draw! Computer also picked Rock.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            break;
        case "PAPER":
            header.classList.add("lost"); //This is for changing the color of the header
            header.textContent = "You lost! Computer picked Paper.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            compScore++;
            break;
        case "SCISSORS":
            header.classList.add("won"); //This is for changing the color of the header
            header.textContent = "You win! Computer picked scissors.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            userScore++;
            break;
    }

    //Update both Scores accordingly
    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;

    //This checks if either computer or User has reached 5 points and if so, ends the game
    if(checkScore()){
        scoreDiv.removeChild(compScoreDiv);
        scoreDiv.removeChild(userScoreDiv);

        if(compScore === 5){
            header.textContent = "Computer has reached 5 points. You lose!";
            header.classList.add("headerEffect");
        } else {
            header.textContent = "You have reached 5 points. You won! Congratulations.";
            header.classList.add("headerEffect");
        }

        //Creates and inserts the play again prompt at the bottom
        const playAgain = document.createElement("a");
        playAgain.classList.add("link");
        playAgain.textContent = "Play Again?";
        playAgain.setAttribute("href", "index.html");

        document.querySelector(".linkDiv").appendChild(playAgain);

        //Removes Rock Paper Scissors Buttons functionality 
        buttonRock.removeEventListener("click", playRock);
        buttonPaper.removeEventListener("click", playPaper);
        buttonScissors.removeEventListener("click", playScissors);
    }
}

//This function plays one round of Rock Paper Scissors with the users Pick being Paper, for more detailed comments see playRock (This works the same way)

function playPaper(){
    const compPick = computer();

    //Grabs the div where the Text "Computer Score" and the actual computer Score will be displayed
    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");
    //Grabs the div where the Text "User Score" and the actual user Score will be displayed
    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");
    
    //These remove the text-color effect on the header
    header.classList.remove("won");
    header.classList.remove("lost");
    header.classList.remove("draw");

    switch(compPick){
        case "ROCK":
            header.classList.add("won"); //This is for changing the color of the header
            header.textContent = "You won! Computer picked Rock.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            userScore++;
            break;
        case "PAPER":
            header.classList.add("draw"); //This is for changing the color of the header
            header.textContent = "Draw! Computer also picked Paper.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            break;
        case "SCISSORS":
            header.classList.add("lost"); //This is for changing the color of the header
            header.textContent = "You lost! Computer picked scissors.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            compScore++;
            break;
    }

    //Update both Scores accordingly
    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;
    
    //This checks if either computer or User has reached 5 points and if so, ends the game
    if(checkScore()){
        scoreDiv.removeChild(compScoreDiv);
        scoreDiv.removeChild(userScoreDiv);

        if(compScore === 5){
            header.textContent = "Computer has reached 5 points. You lose!";
            header.classList.add("headerEffect");
        } else {
            header.textContent = "You have reached 5 points. You won! Congratulations.";
            header.classList.add("headerEffect");
        }

        //Creates and inserts the play again prompt at the bottom
        const playAgain = document.createElement("a");
        playAgain.classList.add("link");
        playAgain.textContent = "Play Again?";
        playAgain.setAttribute("href", "index.html");

        document.querySelector(".linkDiv").appendChild(playAgain);

        //Removes Rock Paper Scissors Buttons functionality 
        buttonRock.removeEventListener("click", playRock);
        buttonPaper.removeEventListener("click", playPaper);
        buttonScissors.removeEventListener("click", playScissors);
    }
}

//This function plays one round of Rock Paper Scissors with the users Pick being Scissors,for more detailed comments see playRock (This works the same way)

function playScissors(){
    const compPick = computer();

    //Grabs the div where the Text "Computer Score" and the actual computer Score will be displayed
    const compScoreText = document.querySelector(".compScoreText");
    compScoreText.textContent = "Computer Score:";
    const compScoreNumber = document.querySelector(".compScoreNumber");
    //Grabs the div where the Text "User Score" and the actual user Score will be displayed
    const userScoreText = document.querySelector(".userScoreText");
    userScoreText.textContent = "Your Score:";
    const userScoreNumber = document.querySelector(".userScoreNumber");

    //These remove the text-color effect on the header
    header.classList.remove("won");
    header.classList.remove("lost");
    header.classList.remove("draw");

    switch(compPick){
        case "ROCK":
            header.classList.add("lost"); //This is for changing the color of the header
            header.textContent = "You lost! Computer picked Rock.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            compScore++;
            break;
        case "PAPER":
            header.classList.add("won"); //This is for changing the color of the header
            header.textContent = "You won! Computer picked Paper.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            userScore++;
            break;
        case "SCISSORS":
            header.classList.add("draw"); //This is for changing the color of the header
            header.textContent = "Draw! Computer also picked scissors.";
            header.classList.add("headerEffect"); //The effect when the text displays the result
            break;
    }

    //Update both Scores accordingly
    compScoreNumber.textContent = compScore;
    userScoreNumber.textContent = userScore;

    //This checks if either computer or User has reached 5 points and if so, ends the game
    if(checkScore()){
        scoreDiv.removeChild(compScoreDiv);
        scoreDiv.removeChild(userScoreDiv);

        if(compScore === 5){
            header.textContent = "Computer has reached 5 points. You lose!";
            header.classList.add("headerEffect");
        } else {
            header.textContent = "You have reached 5 points. You won! Congratulations.";
            header.classList.add("headerEffect");
        }

        //Creates and inserts the play again prompt at the bottom
        const playAgain = document.createElement("a");
        playAgain.classList.add("link");
        playAgain.textContent = "Play Again?";
        playAgain.setAttribute("href", "index.html");

        document.querySelector(".linkDiv").appendChild(playAgain);

        //Removes Rock Paper Scissors Buttons functionality 
        buttonRock.removeEventListener("click", playRock);
        buttonPaper.removeEventListener("click", playPaper);
        buttonScissors.removeEventListener("click", playScissors);
    }


}

//This function checks if either computer or user have reached five points (which is the end condition) and returns either true or false
function checkScore(){
    if(compScore>=5 || userScore>=5){
        return true;
    }
    return false;
}

//This function is called as an event listener for the header text and waits until the popup effect has ended and then removes the according class
function removeTransition(e){
    if(e.propertyName !== "transform") return; // skip it if its not a transition
    this.classList.remove("headerEffect");
}
