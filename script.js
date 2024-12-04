// script.js

// Add a smooth scroll to the navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Example of adding an interactive feature: Show "back to top" button on scroll
window.onscroll = function () {
  const backToTopBtn = document.getElementById("backToTop");
  
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

document.getElementById("backToTop").addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
