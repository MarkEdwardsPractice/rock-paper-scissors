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
 let humanChoice = prompt("Type Rock, Paper, or Scissors to make your choice.", "Rock");
 return humanChoice.toLowerCase();   
}

console.log(getHumanChoice());