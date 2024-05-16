let humanScore = 0;
let computerScore = 0;


const choices = document.querySelector("#container");
const results = document.querySelector("#displayResults");
const scoreBox = document.querySelector("#displayWinner");
const scoreDisplay = document.querySelector("#score");
const body = document.querySelector("body");

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
    
        const replayButton = document.createElement("button");

        replayButton.textContent = "Replay";
        replayButton.style.textAlign = "center";

        body.append(replayButton);

        replayButton.addEventListener('click', () =>
        {
            humanScore = 0;
            computerScore = 0;
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
            body.removeChild(replayButton);
            toggleOn();
            
        });
}


function playGame()
{
    
    printResults(humanSelection, getComputerChoice());
    printScores();
}

function resetGame()
{
    while(results.firstChild)
    {
        results.removeChild(results.lastChild);
    }
    
}


function toggleOff()
{
    results.style.display = "none";
    choices.style.display = "none";
    
    
}

function toggleOn()
{
    results.style.display = "flex";
    choices.style.display = "block";
}



 choices.addEventListener('click', (e) => {

    if(humanScore > 4 || computerScore > 4)
    {
         toggleOff();
         addReplayButton();
         resetGame();
         if(humanScore > computerScore)
         {
            scoreDisplay.textContent = "You win!";
         }
         else
         {
            scoreDisplay.textContent = "You lose!";
         }
                
        
        }
        else
        {
            humanSelection = e.target.id;
            playGame();
        }
});
