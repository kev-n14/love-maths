//get the button elements and ass event ;isteners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});
/** 
 * The main game"loop, called when the script is first loaded
 * and after the users answer has been processed
 * */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtraction") {
        displaySubtractionQuestion(num1, num2);

    } else if (gameType === "multiply") {
        displayMultiplynQuestion(num1, num2);

    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}. Abortin!`;

    }
}
/**
 * Checks the answer against the first element in the 
 * returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("Hey! you got it right! :D");
        incrementScore();
    } else {

        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculateAnswer [0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculateAnswer[1]);
}
/** 
 * Gets the operands(numbers) and the operator directly
 * from the DOM and returns the correct answer)
 */
function calculateCorrectAnswer() {
    // gettting valuse back from the DOM
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText; // tp get text content of those eleemnts

    if (operator === "+") {

        return [operand1 + operand2, "addition"]; // return an array.


    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "*") {
        return [operand1 * operand2, "multiply"];
    } else {

        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}
/**
 * Gets the current score from the dom and increment it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById(`operand2`).textContent = operand2 > operand2 ? operand1 : operand2;
    document.getElementById(`operator`).textContent = "-";

}

function displayMultiplynQuestion(operand1, operand2) {
    //which is bigger operand  or operand  ? if operand  return that, if operand, return that instead
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "/";
}