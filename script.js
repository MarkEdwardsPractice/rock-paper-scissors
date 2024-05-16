let humanScore = 0;
let computerScore = 0;
let counter = 0;

const choices = document.querySelector("#container");
const results = document.querySelector("#displayResults");
const scoreBox = document.querySelector("#displayWinner");
const scoreDisplay = document.querySelector("#score");

let humanSelection = "";  


function getComputerChoice()
{
    let choice = "";
    let computerGuessIndex = Math.floor(Math.random() * 3) + 1;
    switch(computerGuessIndex)
    {
        case 1:
            choice = "rock";
            break;
            case 2:
                choice = "paper";
                break;
                case 3:
                    choice = "scissors";
                    break;
                    default:
                        "Something went wrong.";
    }

    return choice;
}   
    


function playRound(humanChoice, computerChoice)
{
    let winner = "";
    if(humanChoice === computerChoice)
    {
        winner = "It's a tie!"
    }
    else if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            computerScore++;
            winner = "You lose!"
        }
        else
        {
            humanScore++;
            winner = "You win!";
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "scissors")
        {
            computerScore++;
            winner = "You lose!";
        }
        else
        {
            humanScore++;
            winner ="You win!";
        }
    }
    else if(humanChoice === "scissors")
    {
        if(computerChoice === "paper")
        {
            computerScore++;
            winner = "You lose!";
        }
        else
        {
            humanScore++;
            winner = "You win!" ;
        }
    }
    else
    {
        winner = "Your selection not rock, paper, or scissors.";
    }
    return winner;
}
function printResults(humanChoice, computerChoice)
{
    const div = document.createElement("div");
    const para = document.createElement("p");

    div.style.border = "2px solid black";
    div.style.height = "122px";
    div.style.width = "88px";
    para.textContent = `Your choice: ${humanChoice}
                        Computer choice: ${computerChoice}
                        ${playRound(humanChoice, computerChoice)}`;

    div.appendChild(para);
    results.appendChild(div);
}

function printScores()
{
    scoreDisplay.textContent = `Your Score: ${humanScore}
    Computer Score: ${computerScore}`
    
    
}

function addReplayButton()
{
    choices.removeEventListener('click');
        const replayButton = document.createElement("button");

        replayButton.textContent = "Replay";

        results.appendChild(replayButton);
}

function resetGame()
{
    while(results.firstChild)
    {
        results.removeChild(results.lastChild);
    }
}

function playGame()
{
    
    printResults(humanSelection, getComputerChoice());
    printScores();
}

choices.addEventListener('click', (e) => {

    if(humanScore >= 5 || computerScore >= 5)
    {
        if(humanScore > computerScore)
        {
            scoreDisplay.textContent = "You win!";
        }
        else
        {
            scoreDisplay.textContent = "You lose!";
        }
        addReplayButton();

    }
    else
    {
        humanSelection = e.target.id;
        playGame();
    }
 });
