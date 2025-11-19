
document.addEventListener('DOMContentLoaded', function () {
  // Questions array: 5 questions, each with 3 choices
  const quizData = [
    {
      text: "What is the capital city of Australia?",
      choices: ["Sydney", "Canberra", "Melbourne"],
      correct: 1
    },
    {
      text: "The Sahara Desert is primarily located on which continent?",
      choices: ["Africa", "Asia", "South America"],
      correct: 0
    },
    {
      text: "Lake Como and Lake Garda are in which European country?",
      choices: ["France", "Switzerland", "Italy"],
      correct: 2
    },
    {
      text: "Which country is known for having the most natural lakes?",
      choices: ["Canada", "Russia", "United States"],
      correct: 0
    },
    {
      text: "Mount Kilimanjaro is located in which country??",
      choices: ["Tanzania", "Kenya", "Uganda"],
      correct: 0
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