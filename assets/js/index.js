// index.js - minimal leaderboard preview (top 5)
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('leaderboard-list');
  if (!el) return;
  const key = 'quiz_leaderboard';
  let list = [];
  try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { list = []; }
  if (!list.length) { el.innerHTML = '<li class="text-muted">No scores yet</li>'; return; }
  list.sort((a,b) => (b.score - a.score) || (new Date(a.date) - new Date(b.date)));
  el.innerHTML = list.slice(0,5).map(i => `<li>${escape(i.name||'Player')} — <strong>${escape(String(i.score))}</strong></li>`).join('');

  function escape(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }
});
