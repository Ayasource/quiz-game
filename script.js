/* script.js - quiz logic for geography carousel
   This file contains plain JavaScript (no <script> tags). It waits for DOMContentLoaded
   before initializing to avoid timing issues when loaded in the head. */

document.addEventListener('DOMContentLoaded', () => {
  const correctAnswers = [1, 0, 2, 1, 3]; // indices of correct options per question
  let score = 0;
  const scoreEl = document.getElementById('score');

  function updateScore() { if (scoreEl) scoreEl.textContent = score; }

  // Initialize each question area (choices are buttons now)
  document.querySelectorAll('.choices-form').forEach(form => {
    const idx = Number(form.dataset.index);
    const nextBtn = form.parentElement.querySelector('.next-btn');
    const prevBtn = form.parentElement.querySelector('.prev-btn');
    const finishBtn = form.parentElement.querySelector('.finish-btn');

    // handle choice button clicks
    form.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // if already answered, ignore
        if (form.dataset.answered === 'true') return;

        const chosen = Number(btn.dataset.value);
        const correct = correctAnswers[idx];

        // mark buttons
        form.querySelectorAll('.choice-btn').forEach(b => {
          b.classList.remove('correct','incorrect','btn-success','btn-danger','btn-outline-secondary');
          b.disabled = true;
          // highlight correct answer green
          if (Number(b.dataset.value) === correct) {
            b.classList.add('correct','btn','btn-success','text-white');
          } else {
            // keep others outlined unless they are the chosen wrong one
            b.classList.add('btn','btn-outline-secondary');
          }
        });

        if (chosen !== correct) {
          // highlight chosen wrong answer red
          btn.classList.remove('btn-outline-secondary');
          btn.classList.add('incorrect','btn','btn-danger','text-white');
        } else {
          score += 1;
          updateScore();
        }

        form.dataset.answered = 'true';

        // enable next or finish on this slide
        if (nextBtn) nextBtn.disabled = false;
        if (finishBtn) finishBtn.disabled = false;

        // enable prev buttons globally (user can go back)
        document.querySelectorAll('.prev-btn').forEach(p => p.disabled = false);
      });
    });

    // Prev button navigates to previous slide
    if (prevBtn) prevBtn.addEventListener('click', () => {
      const carouselEl = document.getElementById('questionCarousel');
      if (!carouselEl || !window.bootstrap) return;
      const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
      carousel.prev();
    });
  });

  // Hook the Next buttons (no-op; Bootstrap handles sliding via attributes)
  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', () => {});
  });

  // Finish button: show results and enable leaderboard link
  const finish = document.querySelector('.finish-btn');
  if (finish) finish.addEventListener('click', () => {
    // Prompt for player's name (simple) and save the score to localStorage leaderboard
    let playerName = 'Player';
    try {
      const input = prompt('Enter your name for the leaderboard (optional):', '');
      if (input && input.trim()) playerName = input.trim();
    } catch (err) {
      // prompt may be blocked in some environments; fall back to Player
    }

    try {
      const key = 'quiz_leaderboard';
      const raw = localStorage.getItem(key);
      const list = raw ? JSON.parse(raw) : [];
      list.push({ name: playerName, score: score, date: new Date().toISOString() });
      // keep only last 50 entries
      localStorage.setItem(key, JSON.stringify(list.slice(-50)));
      // also store lastScore for quick reference
      localStorage.setItem('quiz_lastScore', String(score));
    } catch (err) {
      console.warn('Could not save leaderboard:', err);
    }

    // Enable leaderboard link (visible but disabled by default in the HTML)
    const leaderboardLink = document.getElementById('leaderboardLink');
    if (leaderboardLink) {
      leaderboardLink.classList.remove('disabled');
      leaderboardLink.setAttribute('aria-disabled', 'false');
      leaderboardLink.removeAttribute('tabindex');
    }

    // Optionally show an alert or replace with an in-page results panel
    alert('Quiz finished! Your score: ' + score + ' / 5');
  });

  // Prevent moving forward (including indicators) until current question answered
  const carouselEl = document.getElementById('questionCarousel');
  if (carouselEl) {
    carouselEl.addEventListener('slide.bs.carousel', (e) => {
      // relatedTarget is the element that will be shown
      const items = Array.from(carouselEl.querySelectorAll('.carousel-item'));
      const current = carouselEl.querySelector('.carousel-item.active');
      if (!current) return;
      const currentIndex = items.indexOf(current);
      const nextIndex = items.indexOf(e.relatedTarget);
      // if moving forward and current not answered, cancel
      if (nextIndex > currentIndex) {
        const currentForm = current.querySelector('.choices-form');
        if (currentForm && currentForm.dataset.answered !== 'true') {
          e.preventDefault();
        }
      }
    });
  }

  // Guard the leaderboard link so it does nothing while still disabled
  const leaderboardLinkEl = document.getElementById('leaderboardLink');
  if (leaderboardLinkEl) {
    leaderboardLinkEl.addEventListener('click', (ev) => {
      if (leaderboardLinkEl.getAttribute('aria-disabled') === 'true') {
        ev.preventDefault();
      }
    });
  }

  updateScore();
});