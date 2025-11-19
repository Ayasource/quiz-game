/* --------------------------------------------------
   SPORTS QUESTION BANK
-------------------------------------------------- */

const sportsQuestions = [
  {
    question: "Which country won the 2018 FIFA World Cup?",
    choices: ["France", "Brazil", "Germany", "Argentina"],
    answer: "France"
  },
  {
    question: "How many players are on a basketball court per team?",
    choices: ["5", "7", "9", "11"],
    answer: "5"
  },
  {
    question: "In tennis, what is the term for 40–40?",
    choices: ["Deuce", "Break", "Love", "Advantage"],
    answer: "Deuce"
  },
  {
    question: "Which sport uses a shuttlecock?",
    choices: ["Badminton", "Squash", "Table Tennis", "Cricket"],
    answer: "Badminton"
  },
  {
    question: "The Stanley Cup is awarded in which sport?",
    choices: ["Ice Hockey", "Baseball", "Rugby", "American Football"],
    answer: "Ice Hockey"
  }
];

/* --------------------------------------------------
   STATE
-------------------------------------------------- */

let username = localStorage.getItem("quiz-username") || "Guest";
let bestScore = Number(localStorage.getItem("best-score") || 0);
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");

let currentIndex = 0;
let score = 0;
let correctCount = 0;
let incorrectCount = 0;

/* --------------------------------------------------
   DOM ELEMENTS
-------------------------------------------------- */

const usernameInput = document.getElementById("username-input");
const usernameForm = document.getElementById("username-form");
const savedUsername = document.getElementById("saved-username");

const intro = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");

const quizArea = document.getElementById("quiz-area");
const questionText = document.getElementById("question-text");
const choicesDiv = document.getElementById("choices");
const qIndexSpan = document.getElementById("q-index");
const qTotalSpan = document.getElementById("q-total");
const scoreSpan = document.getElementById("score");
const submitBtn = document.getElementById("submit-btn");
const skipBtn = document.getElementById("skip-btn");
const feedback = document.getElementById("feedback");

const resultsArea = document.getElementById("results-area");
const finalCorrect = document.getElementById("final-correct");
const finalIncorrect = document.getElementById("final-incorrect");
const finalScore = document.getElementById("final-score");
const finalSummary = document.getElementById("final-summary");
const retryBtn = document.getElementById("retry-btn");

const bestScoreSpan = document.getElementById("best-score");
const leaderboardList = document.getElementById("leaderboard-list");

/* --------------------------------------------------
   INITIALIZE SIDEBAR
-------------------------------------------------- */

savedUsername.textContent = username;
bestScoreSpan.textContent = bestScore;

/* --------------------------------------------------
   USERNAME SAVE
-------------------------------------------------- */

usernameForm.addEventListener("submit", e => {
  e.preventDefault();
  username = usernameInput.value.trim() || "Guest";
  savedUsername.textContent = username;
  localStorage.setItem("quiz-username", username);
});

/* --------------------------------------------------
   START QUIZ
-------------------------------------------------- */

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quizArea.classList.remove("hidden");

  currentIndex = 0;
  score = 0;
  correctCount = 0;
  incorrectCount = 0;

  qTotalSpan.textContent = sportsQuestions.length;
  loadQuestion();
});

/* --------------------------------------------------
   LOAD QUESTION
-------------------------------------------------- */

function loadQuestion() {
  const q = sportsQuestions[currentIndex];

  qIndexSpan.textContent = currentIndex + 1;
  scoreSpan.textContent = score;
  questionText.textContent = q.question;

  choicesDiv.innerHTML = "";
  feedback.textContent = "";
  submitBtn.disabled = true;

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      submitBtn.disabled = false;
    });

    choicesDiv.appendChild(btn);
  });
}

/* --------------------------------------------------
   SUBMIT ANSWER
-------------------------------------------------- */

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector(".choice-btn.selected");
  if (!selected) return;

  const userAnswer = selected.textContent;
  const correctAnswer = sportsQuestions[currentIndex].answer;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "#27ae60";
    score += 10;
    correctCount++;
  } else {
    feedback.textContent = "Incorrect! Correct answer: " + correctAnswer;
    feedback.style.color = "#c0392b";
    incorrectCount++;
  }

  currentIndex++;

  if (currentIndex >= sportsQuestions.length) {
    setTimeout(showResults, 600);
  } else {
    setTimeout(loadQuestion, 600);
  }
});

/* --------------------------------------------------
   SKIP QUESTION
-------------------------------------------------- */

skipBtn.addEventListener("click", () => {
  incorrectCount++;
  currentIndex++;

  if (currentIndex >= sportsQuestions.length) {
    showResults();
  } else {
    loadQuestion();
  }
});

/* --------------------------------------------------
   SHOW RESULTS
-------------------------------------------------- */

function showResults() {
  quizArea.classList.add("hidden");
  resultsArea.classList.remove("hidden");

  finalCorrect.textContent = correctCount;
  finalIncorrect.textContent = incorrectCount;
  finalScore.textContent = score;
  finalSummary.textContent = `${username}, you scored ${score} points!`;

  updateLeaderboard();
}

/* --------------------------------------------------
   RETRY
-------------------------------------------------- */

retryBtn.addEventListener("click", () => {
  resultsArea.classList.add("hidden");
  intro.classList.remove("hidden");
});

/* --------------------------------------------------
   LEADERBOARD LOGIC
-------------------------------------------------- */

function updateLeaderboard() {
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("best-score", bestScore);
  }

  leaderboard.push({ name: username, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10);

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  renderLeaderboard();
}

function renderLeaderboard() {
  leaderboardList.innerHTML = "";

  leaderboard.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} — ${entry.score}`;
    leaderboardList.appendChild(li);
  });

  bestScoreSpan.textContent = bestScore;
}

// Initial load
renderLeaderboard();
