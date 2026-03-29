 // Initialize Typed.js
  new Typed('.typed', {
    strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // Initialize AOS
  AOS.init({
    duration: 700,
    once: true
  });

  // Set current year
  document.getElementById("year") ? document.getElementById("year").textContent = new Date().getFullYear() : null;
