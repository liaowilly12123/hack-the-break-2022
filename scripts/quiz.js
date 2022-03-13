// Selecting all required elements
const java_btn = document.querySelector("#java");
const system_btn = document.querySelector("#webdev");
const web_btn = document.querySelector("#bizanal");
const modal = document.querySelector(".quiz-modal");
const infoModal = document.querySelector(".info-modal");
const modalCloseButton = document.querySelector("#modal-close-btn");
const modalNextButton = document.querySelector("#modal-next-btn")
const timeBar = document.getElementById("timebar");
const optionList = document.querySelector(".option-list");
const timeLimit = 4;

let gameOver = false;
let questions;
let counter;


// quiz modal
function openQuizModal() {
    modal.style.display = "block";
    startTimer(timeLimit);
    createPath();
    reset();
    showQuestions();
}

function closeQuizModal() {
    modal.style.display = "none";
}

// info modal
function openInfoModal(selection) {
    if (selection == "j") {
        questions = questions1;
    }

    if (selection == "b") {
        questions = questions2;
    }

    if (selection == "w") {
        questions = questions3;
    }

    infoModal.style.display = "block";
}

function closeInfoModal() {
    infoModal.style.display = "none";
}

// modal util
function infoToQuiz() {
    closeInfoModal();
    openQuizModal();
}

let currentQuestionIdx = 0;
// let optionSelect = 0;
// Questions
// getting questions and options from array
// uses global currentQuestionIdx
function showQuestions() {

    // Create new textNode for Question
    const question_text = document.querySelector(".question-text");
    removeChildren(question_text);

    let questionTextNode = document.createTextNode(questions[currentQuestionIdx].question);
    question_text.appendChild(questionTextNode);

    // Create options list
    const option_list = document.querySelector(".option-list");
    questions[currentQuestionIdx].options.forEach(option => {
        // create new option div
        let optionNode = document.createElement("div");

        // add option class
        optionNode.classList.add("option");

        optionNode.innerHTML = option;

        // add what happens when option is clicked
        optionNode.onclick = () => { optionSelected(option) };

        option_list.appendChild(optionNode);
    })
}

function nextQuestion() {
    if (currentQuestionIdx < questions.length - 1) {
        const optionList = document.querySelector(".option-list");
        modalNextButton.style.display = "none";
        currentQuestionIdx++;
        removeChildren(optionList);
        showQuestions();
        clearInterval(counter);
        startTimer(timeLimit);
        resetTimeBar();
    } else {
        clearInterval(counter);
        closeQuizModal();
    }
}

//if user clicked on option
function optionSelected(userSelection) {
    const optionsLength = questions[currentQuestionIdx].options.length;
    const correctAnswer = questions[currentQuestionIdx].answer;

    // Stop timer and timebar
    timeBar.classList.add("paused");
    clearInterval(counter);

    if (userSelection == correctAnswer) {
        // add css to turn it green
        movePlayer();
        checkWin();
        console.log("correct");
    } else {
        // add css to turn selection red
        // add css to turn correct answer green
        moveBug();
        checkGameOver();
        console.log("incorrect");
    }

    // disable all options once a selection has been made
    disableOptions(optionsLength);

    // display next button
    modalNextButton.style.display = "block";

    // else {
    //     answer.classList.add("incorrect"); //adding red color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //     console.log("Wrong Answer");

    //     for (i = 0; i < allOptions; i++) {
    //         if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
    //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //             option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //             console.log("Auto selected correct answer.");
    //         }
    //     }
    // }

}

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function resetTimeBar() {
    timeBar.classList.remove("timebar");
    timeBar.classList.remove("paused");

    void timeBar.offsetWidth;

    timeBar.classList.add("timebar");
}


function startTimer(time) {
    time = time
    counter = setInterval(timer, 1000);

    function timer() {
        const optionsLength = questions[currentQuestionIdx].options.length;
        // timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 1) { //if timer is less than 0
            clearInterval(counter); //clear counter
            // const allOptions = option_list.children.length; //getting all option items
            // let correcAns = questions[que_count].answer; //getting correct answer from array
            // for (i = 0; i < allOptions; i++) {
            //     if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
            //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            //         console.log("Time Off: Auto selected correct answer.");
            //     }
            // }

            disableOptions(optionsLength);
            moveBug();
            checkGameOver();
            modalNextButton.style.display = "block";
            // console.log("done");
        }
    }
}

function disableOptions(optionsLength) {
    for (let i = 0; i < optionsLength; i++) {
        optionList.children[i].classList.add("disabled");
    }
}


function checkGameOver() {
    clearInterval(counter);
    if (bugLocation == playLocation) {
        window.location.href = "lose.html";
    }
}

function checkWin() {
    clearInterval(counter);
    if (playLocation == 18) {
        window.location.href = "win.html";
    }
}