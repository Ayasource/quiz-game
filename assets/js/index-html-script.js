  
  
    // Render leaderboard summary in the index sidebar from localStorage
    (function(){
      function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }
      const key = 'quiz_leaderboard';
      try{
        const raw = localStorage.getItem(key);
        const list = raw ? JSON.parse(raw) : [];
        const container = document.getElementById('leaderboard-list');
        if (!container) return;
        if (!list.length) {
          container.innerHTML = '<li class="text-muted">No scores yet</li>';
          return;
        }
        // sort by score desc then date asc
        list.sort((a,b)=> (b.score - a.score) || (new Date(a.date) - new Date(b.date)));
        const top = list.slice(0,5);
        container.innerHTML = top.map(item => `<li>${escapeHtml(item.name||'Player')} — <strong>${escapeHtml(String(item.score))}</strong></li>`).join('');
      }catch(e){ console.warn('Leaderboard read error', e); }
    })();
  