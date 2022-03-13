// Selecting all required elements
const java_btn = document.querySelector("#java");
const system_btn = document.querySelector("#webdev");
const web_btn = document.querySelector("#bizanal");
const modal = document.querySelector(".quiz-modal");
const infoModal = document.querySelector(".info-modal");

const modalCloseButton = document.querySelector("#modal-close-btn");

// quiz modal
function openQuizModal() {
    modal.style.display = "block";
}

function closeQuizModal() {
    modal.style.display = "none";
}

// info modal
function openInfoModal() {
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