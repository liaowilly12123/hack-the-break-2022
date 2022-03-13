// Selecting all required elements
const java_btn = document.querySelector("#java");
const system_btn = document.querySelector("#webdev");
const web_btn = document.querySelector("#bizanal");
const modal = document.querySelector(".quiz-modal");
const infoModal = document.querySelector(".info-modal");
const modalCloseButton = document.querySelector("#modal-close-btn");
const modalNextButton = document.querySelector("#modal-next-btn")
let questions;


// quiz modal
function openQuizModal() {
    modal.style.display = "block";
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
let optionSelect = 0;
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
    } else {
        closeQuizModal();
    }
}

//if user clicked on option
function optionSelected(userSelection) {
    const optionsLength = questions[currentQuestionIdx].options.length;
    const correctAnswer = questions[currentQuestionIdx].answer;

    if (userSelection == correctAnswer) {
        // add css to turn it green
        console.log("correct");
    } else {
        // add css to turn selection red
        // add css to turn correct answer green
        console.log("incorrect");
    }

    // disable all options once a selection has been made
    const optionList = document.querySelector(".option-list");

    for (let i = 0; i < optionsLength; i++) {
        optionList.children[i].classList.add("disabled");
    }

    // display next button
    modalNextButton.style.display = "block";
    
    // if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    //     userScore += 1; //upgrading score value with 1
    //     answer.classList.add("correct"); //adding green color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //     console.log("Correct Answer");
    //     console.log("Your correct answers = " + userScore);
    // }
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