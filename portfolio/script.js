const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const expanded = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', expanded);
  navToggle.setAttribute('aria-label', expanded ? 'メニューを閉じる' : 'メニューを開く');
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});
