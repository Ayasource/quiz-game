// ==============================
// QUIZ QUESTIONS
// ==============================

const QUESTIONS = {
    sports: [
        { q: "How many players are on a standard football (soccer) team?", a: ["9", "10", "11", "12"], correct: 2 },
        { q: "What sport uses a shuttlecock?", a: ["Badminton", "Tennis", "Squash", "Table Tennis"], correct: 0 },
        { q: "Where were the 2012 Olympics held?", a: ["Beijing", "Tokyo", "London", "Rio"], correct: 2 },
        { q: "In basketball, how many points is a free throw worth?", a: ["1", "2", "3", "4"], correct: 0 },
        { q: "Which country invented baseball?", a: ["UK", "Japan", "USA", "Canada"], correct: 2 }
    ],
    art: [
        { q: "Who painted the Mona Lisa?", a: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], correct: 1 },
        { q: "The Starry Night was painted by?", a: ["Van Gogh", "Monet", "Rembrandt", "Cézanne"], correct: 0 },
        { q: "Which artist is known for abstract drip paintings?", a: ["Pollock", "Klimt", "Matisse", "Dali"], correct: 0 },
        { q: "Michelangelo painted the ceiling of which chapel?", a: ["St. Peter's", "Sistine Chapel", "Notre Dame", "Florence Chapel"], correct: 1 },
        { q: "Edvard Munch painted which iconic work?", a: ["The Kiss", "The Scream", "Guernica", "Girl with a Pearl Earring"], correct: 1 }
    ],
    history: [
        { q: "Who was the first President of the United States?", a: ["Lincoln", "Washington", "Jefferson", "Adams"], correct: 1 },
        { q: "The Roman Empire fell in which year?", a: ["476 AD", "1200 AD", "800 AD", "1066 AD"], correct: 0 },
        { q: "Which war ended in 1945?", a: ["WWI", "WWII", "Cold War", "Korean War"], correct: 1 },
        { q: "Who discovered penicillin?", a: ["Marie Curie", "Tesla", "Alexander Fleming", "Newton"], correct: 2 },
        { q: "The pyramids were built in which country?", a: ["Greece", "Mexico", "Egypt", "India"], correct: 2 }
    ],
    geography: [
        { q: "What is the capital of France?", a: ["Paris", "Rome", "Berlin", "Madrid"], correct: 0 },
        { q: "Which is the largest ocean?", a: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
        { q: "Mount Everest is located in?", a: ["India", "Nepal", "China", "Bhutan"], correct: 1 },
        { q: "Which continent is the Sahara Desert on?", a: ["Africa", "Asia", "Australia", "South America"], correct: 0 },
        { q: "The Nile River flows into which sea?", a: ["Red Sea", "Caspian Sea", "Mediterranean Sea", "Black Sea"], correct: 2 }
    ]
};

// Mixed category produces a shuffled blend
function getMixedQuestions() {
    let all = Object.values(QUESTIONS).flat();
    return shuffle(all).slice(0, 10);
}

// ==============================
// DOM ELEMENTS
// ==============================

const intro = document.getElementById("intro");
const quizArea = document.getElementById("quiz-area");
const resultsArea = document.getElementById("results-area");

const startBtn = document.getElementById("start-btn");
const categorySelect = document.getElementById("category-select");

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");

const submitBtn = document.getElementById("submit-btn");
const skipBtn = document.getElementById("skip-btn");
const feedback = document.getElementById("feedback");

const qIndexDisplay = document.getElementById("q-index");
const qTotalDisplay = document.getElementById("q-total");
const scoreDisplay = document.getElementById("score");

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedChoice = null;

// ==============================
// QUIZ CONTROL
// ==============================

startBtn.addEventListener("click", () => {
    const category = categorySelect.value;

    questions = category === "any" 
        ? getMixedQuestions()
        : [...QUESTIONS[category]];

    currentIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;

    intro.classList.add("hidden");
    resultsArea.classList.add("hidden");
    quizArea.classList.remove("hidden");

    qTotalDisplay.textContent = questions.length;

    loadQuestion();
});

function loadQuestion() {
    const q = questions[currentIndex];

    questionText.textContent = q.q;
    qIndexDisplay.textContent = currentIndex + 1;
    feedback.textContent = "";

    // render choices
    choicesContainer.innerHTML = "";
    selectedChoice = null;
    submitBtn.disabled = true;

    q.a.forEach((choice, index) => {
        const item = document.createElement("label");
        item.className = "choice-item";

        item.innerHTML = `
            <input type="radio" name="choice" value="${index}">
            ${choice}
        `;

        item.addEventListener("change", () => {
            selectedChoice = index;
            submitBtn.disabled = false;
        });

        choicesContainer.appendChild(item);
    });
}

// ==============================
// SUBMIT / SKIP
// ==============================

submitBtn.addEventListener("click", () => {
    checkAnswer();
});

skipBtn.addEventListener("click", nextQuestion);

function checkAnswer() {
    const q = questions[currentIndex];
    const isCorrect = selectedChoice == q.correct;

    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedback.innerHTML = `<span style="color:green;">Correct!</span>`;
    } else {
        feedback.innerHTML = `<span style="color:red;">Incorrect</span>`;
    }

    setTimeout(nextQuestion, 800);
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex >= questions.length) {
        endQuiz();
    } else {
        loadQuestion();
    }
}

// ==============================
// END QUIZ
// ==============================

function endQuiz() {
    quizArea.classList.add("hidden");
    resultsArea.classList.remove("hidden");

    document.getElementById("final-correct").textContent = score;
    document.getElementById("final-incorrect").textContent = questions.length - score;
    document.getElementById("final-score").textContent = score;

    document.getElementById("final-summary").textContent =
        `You scored ${score} out of ${questions.length}.`;
}

// ==============================
// UTILS
// ==============================

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
