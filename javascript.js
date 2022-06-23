var wins = 0;
var losses = 0;
var ties = 0;

var playerChoice;

function randomNo(x,y){
    var min = x;
    var max = y;
    
    var randomNo = Math.floor(Math.random()*(max-min+1)+min);
    
    return randomNo;
}

var choiceRPS = ["r", "p", "s"];

var computerChoice = "who knows";

var choiceIndex = 0;

var keepPlaying = true;

do {
    playerChoice = prompt("Pick your choice: R, P, S").toLowerCase();
    alert("You chose "+ playerChoice);
    choiceIndex = randomNo(0,choiceRPS.length-1);
    computerChoice = choiceRPS[choiceIndex];
    if (playerChoice === "r") {
        checkRockChoice();
    } else if (playerChoice === "s") {
        checkScissorChoice();
    } else {
        checkPaperChoice();
    }
    alert("Wins: " + wins + "\n" + "Losses: "+losses+"\n"+"Ties: "+ ties);
    keepPlaying = confirm("Do you want to keep playing?");

} while (keepPlaying);

function checkRockChoice() {
    if (computerChoice === "s") {
        alert("You won!");
        wins++;
    } else if (computerChoice === "p") {
        alert("You scrub!");
        losses++;
    } else {
        alert("You tied! Try again!");
        ties++;
    }
}
function checkScissorChoice() {
    if (computerChoice === "p") {
        alert("You won!");
        wins++;
    } else if (computerChoice === "r") {
        alert("You scrub!");
        losses++;
    } else {
        alert("You tied! Try again!");
        ties++;
    }
}
function checkPaperChoice() {
    if (computerChoice === "r") {
        alert("You won!");
        wins++;
    } else if (computerChoice === "s") {
        alert("You scrub!");
        losses++;
    } else {
        alert("You tied! Try again!");
        ties++;
    }
}


