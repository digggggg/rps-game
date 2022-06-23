var wins = 0;
var losses = 0;
var ties = 0;

var playerChoice;

var computerChoice;

var keepPlaying = true;

do {
    playerChoice = prompt("Pick your choice: R, P, S");
    if (playerChoice === "r") {
        checkRockChoice();
    } else if (playerChoice === "s") {
        checkScissorChoice();
    } else {
        checkPaperChoice();
    }
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


