
document.addEventListener('DOMContentLoaded', function () {
  // Questions array: 5 questions, each with 3 choices
  const quizData = [
  {
    text: "Which is the famous Vincent van Gogh painting?",
    choices: ["Night Skies", "A Quiet Night", "The Starry Night"],
    correct: 2
  },
  {
    text: "Spanish painter Pablo Picasso had an era refered to as:",
    choices: ["Yellow Period", "Purple Period", "Blue Period"],
    correct: 2
  },
  {
    text: "Which of the following paintings was painted by Salvador Dalí?",
    choices: ["The Old Guitarist", "The Persistence of Memory", "Guernica"],
    correct: 1
  },
  {
    text: "Which artist created the famous \"The Scream\" painting?",
    choices: ["Edvard Munch", "Andy Warhol", "Leonardo da Vinci"],
    correct: 0
  },
  {
    text:  "Which fruit did René Magritte famously use in his painting \"The Son of Man\" ?",
    choices: [ "Banana", "Apple", "Orange"],
    correct: 1
  }
];

  
  const questionTitle = document.getElementById('question-title');
  const answersEl = document.getElementById('answers');
  const submitBtn = document.getElementById('submit-answer');
  const skipBtn = document.getElementById('skip-question');
  const feedbackEl = document.getElementById('answer-feedback');
  const quizCard = document.getElementById('quiz-card');

  let currentQuestion = 0;
  let score = 0;
  let selectedIndex = null;

  function renderQuestion() {
    const q = quizData[currentQuestion];
    if (!q) return;
    // Title
    questionTitle.textContent = q.text;

    // Clear answers
    answersEl.innerHTML = '';

    // Build radio list
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('role', 'radiogroup');
    fieldset.setAttribute('aria-labelledby', 'question-title');

    q.choices.forEach((choiceText, i) => {
      const div = document.createElement('div');
      div.className = 'form-check';

      const input = document.createElement('input');
      input.className = 'form-check-input';
      input.type = 'radio';
      input.name = 'history-answer';
      input.id = `history-choice-${i}`;
      input.value = i;
      input.addEventListener('change', () => {
        selectedIndex = i;
        submitBtn.disabled = false;
        feedbackEl.textContent = '';
      });

      const label = document.createElement('label');
      label.className = 'form-check-label';
      label.htmlFor = input.id;
      label.textContent = choiceText;

      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
    });

    answersEl.appendChild(fieldset);

    // reset state
    selectedIndex = null;
    submitBtn.disabled = true;
    feedbackEl.textContent = '';
  }

  function showResultScreen() {
    quizCard.innerHTML = `
      <div class="card-body text-center">
        <h3>Quiz complete</h3>
        <p class="lead">You scored ${score} / ${quizData.length}</p>
        <div class="mt-3">
          <a href="index.html" class="btn btn-primary">Back to Home</a>
          <a href="leaderboard.html" class="btn btn-outline-secondary ms-2">See Leaderboard</a>
        </div>
      </div>
    `;
  }

  submitBtn.addEventListener('click', () => {
    if (selectedIndex === null) return;
    const q = quizData[currentQuestion];
    if (selectedIndex === q.correct) {
      score++;
      feedbackEl.className = 'mt-2 text-success';
      feedbackEl.textContent = 'Correct!';
    } else {
      feedbackEl.className = 'mt-2 text-danger';
      feedbackEl.textContent = `Incorrect. Correct answer: ${q.choices[q.correct]}`;
    }

    // small delay to show feedback, then advance
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        renderQuestion();
      } else {
        showResultScreen();
      }
    }, 900);
  });

  skipBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      renderQuestion();
    } else {
      showResultScreen();
    }
  });

  // init
  renderQuestion();

  // expose for debugging
  window.historyQuiz = { quizData, renderQuestion };
});

  // navigate in the same tab
  document.getElementById('category').addEventListener('change', function (e) {
    const url = e.target.value;
    if (!url) return;
    window.location.href = url; // replace with window.open(url, '_blank') to open new tab
  });
