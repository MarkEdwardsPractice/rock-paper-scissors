let humanScore = 0;
let computerScore = 0;

const choices = document.querySelector("#container");
const results = document.querySelector("#displayResults");

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
            winner = "You lose!"
        }
        else
        {
            winner = "You win!";
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "scissors")
        {
            winner = "You lose!";
        }
        else
        {
            winner ="You win!";
        }
    }
    else if(humanChoice === "scissors")
    {
        if(computerChoice === "paper")
        {
            winner = "You lose!";
        }
        else
        {
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

    para.textContent = `Your choice: ${humanChoice}
                        Computer choice: ${computerChoice}
                        ${playRound(humanChoice, computerChoice)}`;

    div.appendChild(para);
    results.appendChild(div);
}

function playGame()
{
    printResults(humanSelection, getComputerChoice());

}

choices.addEventListener('click', (e) => {
    humanSelection = e.target.id;
    playGame();
 });
