// Tiny script for a friendly interaction
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('ping');
  const out = document.getElementById('status');
  if (btn && out){
    btn.addEventListener('click', () => {
      const now = new Date();
      out.textContent = `Checked at ${now.toLocaleTimeString()}. If you just edited on GitHub, give the deploy a moment, then refresh.`;
    });
  }
})();