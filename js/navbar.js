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

/* ==========================================
   HIGHLIGHT CURRENT PAGE + DISABLE SELF-LINK
   Works across every page automatically —
   no per-page hardcoding needed.

   Only links that point to a DIFFERENT FILE
   matching the current page are affected.
   Plain "#section" anchors (Music, Gallery,
   Events, Contact, etc.) are left completely
   alone so in-page scrolling keeps working.
========================================== */
(function highlightActiveNavLink() {

  function getFileName(href) {
    const withoutHash = href.split('#')[0];
    if (withoutHash === '') return null; // pure "#section" anchor — not a page link
    const parts = withoutHash.split('/');
    const file = parts[parts.length - 1];
    return file === '' ? 'index.html' : file;
  }

  const path = window.location.pathname.split('/');
  let currentFile = path[path.length - 1];
  if (currentFile === '') currentFile = 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {

    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = getFileName(href);

    // Only act on links that explicitly name a file (e.g. "members.html",
    // "index.html#home") AND that file is the one we're currently on.
    // Pure "#section" links (linkFile === null) are never touched.
    if (linkFile !== null && linkFile === currentFile) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }

  });

})();