document.addEventListener('DOMContentLoaded', () => {
  // AOS scroll animations
  AOS.init({ duration: 800, once: true, offset: 100 });

  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.getElementById('scrollIndicator');

  // Show navbar after scrolling past hero
  const heroObserver = new IntersectionObserver(([entry]) => {
    navbar.classList.toggle('visible', !entry.isIntersecting);
    if (scrollIndicator) scrollIndicator.classList.toggle('hidden', !entry.isIntersecting);
  }, { threshold: 0.1 });
  heroObserver.observe(hero);

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
});
