// Selecting all required elements
const java_btn = document.querySelector("#java");
const system_btn = document.querySelector("#webdev");
const web_btn = document.querySelector("#bizanal");
const modal = document.querySelector(".quiz-modal");
const infoModal = document.querySelector(".info-modal");
const modalCloseButton = document.querySelector("#modal-close-btn");
let questions;


// quiz modal
function openQuizModal() {
    modal.style.display = "block";
    startQuiz();
}

function closeQuizModal() {
    modal.style.display = "none";
}

// info modal
function openInfoModal(selection) {
    console.log(selection)
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

function startQuiz() {
    console.table(questions);
    showQuestions();
}

let currentQuestionIdx = 0;

// Questions
// getting questions and options from array
// uses global currentQuestionIdx
function showQuestions() {
    
    // Create new textNode for Question
    const question_text = document.querySelector(".question-text");
    let questionTextNode = document.createTextNode(questions[currentQuestionIdx].question);
    console.log(question_text)
    question_text.appendChild(questionTextNode);

    // Create options list
    const option_list = document.querySelector(".option-list");
    questions[currentQuestionIdx].options.forEach(option => {
        // create new option div
        let optionNode = document.createElement("div");

        optionNode.classList.add("option");
        optionNode.innerHTML = option;

        option_list.appendChild(optionNode);
        console.log(option)
    })



    // //creating a new span and div tag for question and option and passing the value using array index
    // let question_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    // let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    // question_text.innerHTML = question_tag; //adding new span tag inside que_tag
    // option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    // const option = option_list.querySelectorAll(".option");

    // // set onclick attribute to all available options
    // for (i = 0; i < option.length; i++) {
    //     option[i].setAttribute("onclick", "optionSelected(this)");
    // }
}

function nextQuestion() {
    if (currentQuestionIdx < questions.length - 1) {
        currentQuestionIdx++;
        showQuestions()
    }
}

//if user clicked on option
function optionSelected(answer) {
    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }
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
    // for (i = 0; i < allOptions; i++) {
    //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    // }
    next_btn.classList.add("show"); //show the next button if user selected any option
}