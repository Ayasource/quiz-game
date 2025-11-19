// art.js - quiz logic for geography page
// Only runs on pages that contain the quiz markup

document.addEventListener('DOMContentLoaded', () => {
  const correctAnswers = [1, 0, 2, 1, 3];
  let score = 0;
  const scoreEl = document.getElementById('score');

  function updateScore() {
    if (scoreEl) scoreEl.textContent = score;
  }

  function saveScore(name) {
    const key = 'quiz_leaderboard';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push({ name: name || 'Player', score: score, date: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list.slice(-50)));
    localStorage.setItem('quiz_lastScore', String(score));
  }

  function enableLeaderboardLinks() {
    const pageLink = document.getElementById('leaderboardLink');
    const modalLink = document.getElementById('modalLeaderboardLink');
    if (pageLink) {
      pageLink.classList.remove('disabled');
      pageLink.setAttribute('aria-disabled', 'false');
      pageLink.removeAttribute('tabindex');
    }
    if (modalLink) {
      modalLink.classList.remove('disabled');
      modalLink.setAttribute('aria-disabled', 'false');
      modalLink.removeAttribute('tabindex');
    }
    const modalEl = document.getElementById('resultModal');
    if (modalEl && window.bootstrap && modalLink) {
      modalEl.addEventListener('shown.bs.modal', function handler() {
        try { modalLink.focus(); } catch (e) {}
        modalEl.removeEventListener('shown.bs.modal', handler);
      });
    } else if (pageLink) {
      try { pageLink.focus(); } catch (e) {}
    }
  }

  function showResult() {
    const msg = document.getElementById('resultMessage');
    if (msg) msg.textContent = `Your score: ${score} / 5`;
    enableLeaderboardLinks();
    const modalEl = document.getElementById('resultModal');
    if (modalEl && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    } else {
      try { alert(`Quiz finished! Your score: ${score} / 5`); } catch (e) {}
    }
  }

  function finishQuiz() {
    let playerName = 'Player';
    if (typeof prompt === 'function') {
      const input = prompt('Enter your name for the leaderboard (optional):', '');
      if (input && input.trim()) playerName = input.trim();
    }
    saveScore(playerName);
    showResult();
  }

  function markOptions(form, chosenIndex, correctIndex) {
    const wraps = Array.from(form.querySelectorAll('.choice-wrap'));
    if (wraps.length) {
      wraps.forEach(w => {
        const val = Number(w.dataset.value);
        w.classList.remove('correct', 'incorrect', 'disabled');
        const b = w.querySelector('.choice-btn');
        if (b) {
          b.disabled = true;
          b.classList.remove('btn-success', 'btn-danger', 'btn-outline-secondary', 'text-white');
        }
        if (val === correctIndex) {
          w.classList.add('correct');
          if (b) b.classList.add('btn-success', 'text-white');
        } else if (b) {
          b.classList.add('btn-outline-secondary');
        }
      });
      const chosenWrap = form.querySelector(`.choice-wrap[data-value="${chosenIndex}"]`);
      if (chosenWrap && chosenIndex !== correctIndex) {
        chosenWrap.classList.add('incorrect');
        const cb = chosenWrap.querySelector('.choice-btn');
        if (cb) { cb.classList.remove('btn-outline-secondary'); cb.classList.add('btn-danger', 'text-white'); }
      }
    } else {
      const buttons = Array.from(form.querySelectorAll('.choice-btn'));
      buttons.forEach(b => {
        const val = Number(b.dataset.value);
        b.disabled = true;
        b.classList.remove('correct', 'incorrect', 'btn-success', 'btn-danger', 'btn-outline-secondary');
        if (val === correctIndex) b.classList.add('correct', 'btn', 'btn-success', 'text-white');
        else b.classList.add('btn', 'btn-outline-secondary');
      });
      const chosenBtn = form.querySelector(`.choice-btn[data-value="${chosenIndex}"]`);
      if (chosenBtn && chosenIndex !== correctIndex) {
        chosenBtn.classList.remove('btn-outline-secondary');
        chosenBtn.classList.add('incorrect', 'btn', 'btn-danger', 'text-white');
      }
    }
  }

  // wire up question forms (only if quiz exists on the page)
  document.querySelectorAll('.choices-form').forEach(form => {
    const idx = Number(form.dataset.index);
    const nextBtn = form.parentElement.querySelector('.next-btn');
    const prevBtn = form.parentElement.querySelector('.prev-btn');
    const finishBtn = form.parentElement.querySelector('.finish-btn');

    form.addEventListener('click', (ev) => {
      const wrap = ev.target.closest && ev.target.closest('.choice-wrap');
      const btn = ev.target.closest && ev.target.closest('.choice-btn');
      let chosen = null;
      if (wrap && form.contains(wrap)) chosen = Number(wrap.dataset.value);
      else if (btn && form.contains(btn)) chosen = Number(btn.dataset.value);
      if (chosen === null) return;
      if (form.dataset.answered === 'true') return;
      const correct = correctAnswers[idx];
      markOptions(form, chosen, correct);
      if (chosen === correct) { score += 1; updateScore(); }
      form.dataset.answered = 'true';
      if (nextBtn) nextBtn.disabled = false;
      if (finishBtn) finishBtn.disabled = false;
      document.querySelectorAll('.prev-btn').forEach(p => p.disabled = false);
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      const carouselEl = document.getElementById('questionCarousel');
      if (!carouselEl || !window.bootstrap) return;
      bootstrap.Carousel.getOrCreateInstance(carouselEl).prev();
    });
  });

  // prevent moving forward until answered
  const carouselEl = document.getElementById('questionCarousel');
  if (carouselEl) {
    carouselEl.addEventListener('slide.bs.carousel', (e) => {
      const items = Array.from(carouselEl.querySelectorAll('.carousel-item'));
      const current = carouselEl.querySelector('.carousel-item.active');
      if (!current) return;
      const currentIndex = items.indexOf(current);
      const nextIndex = items.indexOf(e.relatedTarget);
      if (nextIndex > currentIndex) {
        const currentForm = current.querySelector('.choices-form');
        if (currentForm && currentForm.dataset.answered !== 'true') e.preventDefault();
      }
    });
  }

  // delegated finish click
  document.addEventListener('click', (ev) => {
    const f = ev.target.closest && ev.target.closest('.finish-btn');
    if (!f) return;
    if (f.disabled) return;
    finishQuiz();
  });

  // guard disabled leaderboard anchor
  const leaderboardLinkEl = document.getElementById('leaderboardLink');
  if (leaderboardLinkEl) {
    leaderboardLinkEl.addEventListener('click', (ev) => {
      if (leaderboardLinkEl.getAttribute('aria-disabled') === 'true') ev.preventDefault();
    });
  }

  updateScore();
});

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
