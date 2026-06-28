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
// Highlight active nav link based on current page
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#4F6EF7;color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:1.2rem;cursor:pointer;display:none;z-index:999;';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Page load fade in
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

