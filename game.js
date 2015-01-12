
usersCounter = 0;
computersCounter = 0;

function play() {

    function computerChoice() {
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice < 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        return computerChoice;
    }

    function compare(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "The result is a tie!"}

        else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                usersCounter += 1;
                return "Rock wins"}
            else {
                computersCounter += 1;
                return "Paper wins"}
        }
        else if (userChoice === "paper") {
            if (computerChoice === "rock"){
                usersCounter += 1;
                return "Paper wins"}
            else {
                computersCounter += 1;
                return "Scissors wins"}
        }
        else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                computersCounter += 1;
                return "Rock wins"}
            else {
                usersCounter += 1;
                return "Scissors wins"}
        }
    }

    console.log("The game is strated!");
    var usersChoice = document.getElementById("userschoice").value;
    var usersCounterElement = document.getElementById("usercounter");
    var computersCounterElement = document.getElementById("computercounter");
    var computersChoice = computerChoice();
    var messages = document.getElementById("messages");

    var result = compare(usersChoice, computersChoice);
    messages.innerHTML =  result + "</br>" + messages.innerHTML;
    usersCounterElement.innerHTML = usersCounter;
    computersCounterElement.innerHTML = computersCounter;
}



