let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice()
{
 let humanChoice = prompt("Type Rock, Paper, or Scissors to make your choice.");
 return humanChoice.toLowerCase();   
}

function playRound(humanChoice, computerChoice)
{
    printChoices(humanChoice, computerChoice);
    if(humanChoice === computerChoice)
        {
            console.log("It's a tie!")
        }
        else if(humanChoice === "rock")
            {
                if(computerChoice === "paper")
                    {
                        console.log("You lose!")
                    }
                    else
                    {
                        console.log("You win!");
                    }
            }
            else if(humanChoice === "paper")
                {
                    if(computerChoice === "scissors")
                        {
                            console.log("You lose!");
                        }
                        else
                        {
                            console.log("You win!");
                        }
                }
                else if(humanChoice === "scissors")
                    {
                        if(computerChoice === "paper")
                            {
                                console.log("You lose!");
                            }
                            else
                            {
                                console.log("You win!");
                            }
                    }
                    else
                    {
                        console.log("Your selection not rock, paper, or scissors.");
                    }
}
function printChoices(humanChoice, computerChoice)
{
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
}





function playGame()
{
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}

playGame();