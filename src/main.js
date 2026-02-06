import './style.css'

// Image Map
const images = {
  hero: '/hero_highrise.jpg',
  exterior1: '/exterior_real_1.jpg',
  render1: '/vertical_render_1_1770152318318.png',
  render2: '/vertical_render_2_1770152330577.png',
  map: '/location_aerial_minimal_1770152348268.png',
  devLogo: '/op_logo_seal.png'
};

// Apply images to elements
document.getElementById('hero-img').src = images.hero;
document.getElementById('render-1').src = images.render1;
document.getElementById('render-2').src = images.render2;
document.getElementById('map-img').src = images.map;
document.getElementById('dev-logo').src = images.devLogo;

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add scroll animation class to sections
document.querySelectorAll('section').forEach(section => {
  if (!section.classList.contains('hero')) { // Hero handles its own animations
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
    observer.observe(section);
  }
});

// Custom visibility helper
const style = document.createElement('style');
style.textContent = `
  .fade-in-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
