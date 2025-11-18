// leaderboard.js - rendering and clearing leaderboard for leaderboard.html

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    if (body) body.classList.add('leaderboard-page');
  const key = 'quiz_leaderboard';
  function escapeHtml(s){ return String(s).replace(/[&<>"'\\]/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;","\\":"\\"})[c]); }
  function render(){
    const container = document.getElementById('leaderboard');
    if (!container) return;
    container.innerHTML = '';
    let list = [];
    try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch(e) { list = []; }
    if (!list.length) { container.innerHTML = '<p class="text-muted">No scores yet. Play the quiz to add your score.</p>'; return; }
    list.sort((a,b)=> (b.score - a.score) || (new Date(a.date) - new Date(b.date)));
    const top = list.slice(0,50);
    const ol = document.createElement('ol'); ol.className = 'list-group list-group-numbered';
    top.forEach(item => {
      const li = document.createElement('li'); li.className = 'list-group-item d-flex justify-content-between align-items-start';
      li.innerHTML = `<div class="ms-2 me-auto"><div class="fw-bold">${escapeHtml(item.name||'Player')}</div><div class="meta">${new Date(item.date).toLocaleString()}</div></div><span class="badge bg-primary rounded-pill">${escapeHtml(String(item.score))}</span>`;
      ol.appendChild(li);
    });
    container.appendChild(ol);
  }
  const clearBtn = document.getElementById('clearBtn');
  if (clearBtn) clearBtn.addEventListener('click', ()=>{ if (!confirm('Clear the leaderboard?')) return; localStorage.removeItem(key); render(); });
  render();
});
