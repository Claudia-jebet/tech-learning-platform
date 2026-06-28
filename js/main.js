// TechLearn - Main JavaScript File

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)';
  }
});

console.log('TechLearn loaded successfully!');
// Update footer year automatically
const yearEl = document.querySelector('.footer-bottom span');
if (yearEl) {
  const year = new Date().getFullYear();
  yearEl.textContent = `© ${year} TechLearn. All rights reserved.`;
}

