let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice")

const computerChoice = () => {
    // rock, paper, scissors
    const opt = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random()*3)
    return opt[randInd];
}

const msg = document.querySelector("#msg")
const msgContainer = document.querySelector(".message-container")

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#computer-score")
const drawGame = () => {
    console.log("It is a draw.")
    msg.innerText = "The game was draw"
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        console.log("You Won !!!!!")
        msg.innerText = `You Won!!!!!  ${userChoice} beats ${compChoice}`
        msgContainer.style.backgroundColor = "green";
        uScore.innerText = userScore
    }else{
        computerScore++;
        console.log("You Lose")
        msg.innerText = `You Lose  ${compChoice} beats ${userChoice}`
        msgContainer.style.backgroundColor = "red";
        cScore.innerText = computerScore
    }
}


const playGame = (userChoice) => {
    console.log("User Choice: ",userChoice);
    const compChoice = computerChoice();
    console.log("Computer Choice: ", compChoice)

    if(userChoice === compChoice){
        // DRAW
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked ",userChoice);
        playGame(userChoice)
    })
});