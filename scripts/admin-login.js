// ===== Credenciales temporales SOLO FRONT =====
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin1234';
const ADMIN_FLAG_KEY = 'sf:isAdmin';

const $ = (s) => document.querySelector(s);
function toast(msg, type = 'info') {
  const el = $('#toast');
  if (!el) return alert(msg);
  el.textContent = msg;
  el.className = `toast show ${type}`;
  setTimeout(() => { el.className = 'toast'; el.textContent = ''; }, 2200);
}

$('#adminLoginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const username = (fd.get('username') || '').trim();
  const password = (fd.get('password') || '').trim();

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem(ADMIN_FLAG_KEY, '1');
    toast('Bienvenido 👋', 'success');
    setTimeout(() => { window.location.href = 'adminPanel.html'; }, 600);
  } else {
    localStorage.removeItem(ADMIN_FLAG_KEY);
    toast('Credenciales inválidas', 'error');
  }
});
