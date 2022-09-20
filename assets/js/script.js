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
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}. Abortin!`;

    }
}


function checkAnswer() {

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
        return [operand1 + operand2, "addition"];


    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";
}

function displaySubtractionQuestion() {

}

function displayMultiplynQuestion() {

}

function displayDivisionQuestion() {

}