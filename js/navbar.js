const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('active');
  overlay.classList.toggle('show', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  hamburgerBtn.textContent = isOpen ? '✕' : '☰';
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
}

if (hamburgerBtn && navLinks && overlay) {

  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.setAttribute('role', 'button');
  hamburgerBtn.setAttribute('aria-label', 'Toggle menu');

  hamburgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) toggleMenu();
  });
}