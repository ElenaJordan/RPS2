const rockButton = document.getElementById("RockButton");
const paperButton = document.getElementById("PaperButton");
const scissorsButton = document.getElementById("ScissorsButton");
var announcerBubble = document.getElementById("announcerbubble");
var playerResultsTable = document.getElementById("resultstable1");
var cpuResultsTable = document.getElementById("resultstable2");
var playerResultsTotal = 0;
var cpuResultsTotal = 0;
var endCard = document.getElementById("endcard");
const winString = "Congrats, you've pushed back the computers and won for humanity or some shit.";
const loseString = "You lose... Submit to your new robot overlords or some shit";

function ComputerPlay() {
    picker = Math.floor(Math.random() * 3);
    switch (picker) {
        case 0:
            CPUchoice = "Rock";
            break;
        case 1:
            CPUchoice = "Paper";
            break;
        case 2:
            CPUchoice = "Scissors"
            break;
    }
}

function ResolveRound() {
    ComputerPlay();
    console.log(CPUchoice);
    switch (playerInput) {
        case "Rock":
            switch (CPUchoice) {
                case "Rock":
                    outcome = "Tie";
                    console.log(outcome);
                    break;
                case "Paper":
                    outcome = "Lose";
                    cpuResultsTotal++;
                    console.log(outcome);
                    break;
                case "Scissors":
                    outcome = "Win";
                    playerResultsTotal++;
                    console.log(outcome);
                    break;
            }
            break;
        case "Paper":
            switch (CPUchoice) {
                case "Rock":
                    outcome = "Win";
                    playerResultsTotal++;
                    console.log(outcome);
                    break;
                case "Paper":
                    outcome = "Tie";
                    console.log(outcome);
                    break;
                case "Scissors":
                    outcome = "Lose";
                    cpuResultsTotal++;
                    console.log(outcome);
                    break;
            }
            break;
        case "Scissors":
            switch (CPUchoice) {
                case "Rock":
                    outcome = "Lose";
                    cpuResultsTotal++;
                    console.log(outcome);
                    break;
                case "Paper":
                    outcome = "Win";
                    playerResultsTotal++;
                    console.log(outcome);
                    break;
                case "Scissors":
                    outcome = "Tie";
                    console.log(outcome);
                    break;
            }
            break;
    }
}

function RockChanger() {
    playerInput = "Rock";
}

function PaperChanger() {
    playerInput = "Paper";
}

function ScissorsChanger() {
    playerInput = "Scissors";
}

function ReplaceAnnouncement() {
    announcerBubble.innerHTML = "The Computer chose " + CPUchoice + ", you " + outcome + ".";;
}

function ReplaceResultsTable() {
    playerResultsTable.innerHTML = "You have " + playerResultsTotal + " wins so far."
    cpuResultsTable.innerHTML = "The Computer has " + cpuResultsTotal + " wins so far."
}

function WinChecker() {
    if (playerResultsTotal == 5) {
        endCard.innerHTML = winString;
    } else if (cpuResultsTotal == 5) {
        endCard.innerHTML = loseString;
    }
}

rockButton.addEventListener("click", RockChanger, false);
rockButton.addEventListener("click", ResolveRound, false);
rockButton.addEventListener("click", ReplaceAnnouncement, false);
rockButton.addEventListener("click", ReplaceResultsTable, false);
rockButton.addEventListener("click", WinChecker, false);
paperButton.addEventListener("click", PaperChanger, false);
paperButton.addEventListener("click", ResolveRound, false);
paperButton.addEventListener("click", ReplaceAnnouncement, false);
paperButton.addEventListener("click", ReplaceResultsTable, false);
paperButton.addEventListener("click", WinChecker, false);
scissorsButton.addEventListener("click", ScissorsChanger, false);
scissorsButton.addEventListener("click", ResolveRound, false);
scissorsButton.addEventListener("click", ReplaceAnnouncement, false);
scissorsButton.addEventListener("click", ReplaceResultsTable, false);
scissorsButton.addEventListener("click", WinChecker, false);