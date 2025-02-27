// Mobile menu toggle
const setupMobileMenu = () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
};

// Smooth scrolling
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href !== '#0') {
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
};

// Fade in elements as they come into view
const setupFadeInElements = () => {
  // Add fade-in class to elements EXCEPT headers
  document.querySelectorAll('.card, .section, .feature, .image-container').forEach(el => {
    el.classList.add('fade-in');
  });
  
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const checkFadeInElements = () => {
    fadeInElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - elementHeight / 2) {
        element.classList.add('visible');
      }
    });
  };
  
  // Check elements on load and scroll
  checkFadeInElements();
  window.addEventListener('scroll', checkFadeInElements);
};

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to the Hugo + Tailwind starter");
  
  setupMobileMenu();
  smoothScroll();
  setupFadeInElements();
});
