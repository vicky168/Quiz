const questions = [
    {
        question : "Which one is the first web browser invented?",
        answers : [
            {text : "Internet Explorer", correct: false},
            {text : "Chrome", correct: false},
            {text : "Mozaic", correct: false},
            {text : "Nexus", correct: true},
        ]
    },
    {
        question : ".gif file is an extension of?",
        answers : [
            {text : "Video file", correct: false},
            {text : "Audio file", correct: false},
            {text : "Word file", correct: false},
            {text : "Image file", correct: true},
        ]
    },
    {
        question : "What does GUI stands for?",
        answers : [
            {text : "General User Imprint", correct: false},
            {text : "Generalised User Interface", correct: false},
            {text : "Graphical User Interface", correct: true},
            {text : "Graphical Union Interconnect", correct: false},
        ]
    },
    {
        question : "One gigabyte is equal to how many megabytes?",
        answers : [
            {text : "10", correct: false},
            {text : "1000", correct: true},
            {text : ".100", correct: false},
            {text : "100", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bt");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        showScore();
        // Add links for home and categories
        addLinks();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "none";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
}

function addLinks() {
    // Create links for home and categories
    const homeLink = document.createElement("a");
    homeLink.href = "../Home/home.html"; // Replace with actual home page URL
    homeLink.textContent = "Home";
    homeLink.classList.add("link");
    answerButtons.appendChild(homeLink);

    const categoriesLink = document.createElement("a");
    categoriesLink.href = "../categories/cat.html"; // Replace with actual categories page URL
    categoriesLink.textContent = "Categories";
    categoriesLink.classList.add("link");
    answerButtons.appendChild(categoriesLink);

    const playLink = document.createElement("a");
    playLink.href = "./Quiz2.html"; 
    playLink.textContent = "Play Again";
    playLink.classList.add("link3");
    answerButtons.appendChild(playLink);
}

startQuiz();
