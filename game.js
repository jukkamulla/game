
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

    function compare(choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a tie!"}
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock wins"}
            else {
                return "Paper wins"}
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock"){
                return "Paper wins"}
            else {
                return "Scissors wins"}
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "Rock wins"}
            else {
                return "Scissors wins"}
        }
    }

    console.log("The game is strated!");
    var usersChoice = document.getElementById("userschoice").value;
    var computersChoice = computerChoice();
    var messages = document.getElementById("messages");

    var result = compare(usersChoice, computersChoice);
    messages.innerHTML =  result + "</br>" + messages.innerHTML;
}



