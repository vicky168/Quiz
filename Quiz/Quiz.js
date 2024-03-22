const questions = [
    {
        question: "What is the time complexity of Binary Search?",
        answers: [
            { text: "O(logn)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(n*n)", correct: false },
            { text: "O(nlogn)", correct: false },
        ]
    },
    {
        question : "Which format specifier is often used to print integers?",
        answers : [
            {text : "%f", correct: false},
            {text : "%c", correct: false},
            {text : "%d", correct: true},
            {text : "%s", correct: false},
        ]
    },
    {
        question : "Who is the father of C language?",
        answers : [
            {text : "Charles Babbage", correct: false},
            {text : "Bjarne Stroustrup", correct: false},
            {text : "James Gosling", correct: false},
            {text : "Dennis Ritchie", correct: true},
        ]
    },
    {
        question : "Which among the following is not a C keyword?",
        answers : [
            {text : "break", correct: false},
            {text : "register", correct: false},
            {text : "typedef", correct: false},
            {text : "count", correct: true},
        ]
    }
    // Other questions...
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
    playLink.href = "./Quiz.html"; // Replace with actual categories page URL
    playLink.textContent = "Play Again";
    playLink.classList.add("link3");
    answerButtons.appendChild(playLink);
}

startQuiz();