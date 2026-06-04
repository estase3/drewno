// === Mobile Menu Toggle ===
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  document.getElementById('menuIcon').classList.toggle('hidden');
  document.getElementById('closeIcon').classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.getElementById('menuIcon').classList.remove('hidden');
    document.getElementById('closeIcon').classList.add('hidden');
  });
});

// === Initialize AOS ===
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});

// === Navbar Visibility & Active Section Detection ===
const navbar = document.getElementById('navbar');
const scrollIndicator = document.getElementById('scrollIndicator');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const heroHeight = document.getElementById('hero').offsetHeight;

  // Detect active section
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    if (currentScrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  // Update active nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    }
  });

});


// === Scroll Indicator Click ===
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
}
