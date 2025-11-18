// index.js - small leaderboard preview for the index page

document.addEventListener('DOMContentLoaded', () => {
  function escapeHtml(s){ return String(s).replace(/[&<>"'\\]/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;","\\":"\\"})[c]); }
  const lbContainer = document.getElementById('leaderboard-list');
  if (!lbContainer) return;
  try {
    const key = 'quiz_leaderboard';
    const raw = localStorage.getItem(key);
    const list = raw ? JSON.parse(raw) : [];
    if (!list.length) { lbContainer.innerHTML = '<li class="text-muted">No scores yet</li>'; return; }
    list.sort((a,b)=> (b.score - a.score) || (new Date(a.date) - new Date(b.date)));
    const top = list.slice(0,5);
    lbContainer.innerHTML = top.map(item => `<li>${escapeHtml(item.name||'Player')} — <strong>${escapeHtml(String(item.score))}</strong></li>`).join('');
  } catch(e) { console.warn('Leaderboard read error', e); }
});
