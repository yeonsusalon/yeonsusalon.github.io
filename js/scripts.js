/*!
* Start Bootstrap - Stylish Portfolio v6.0.1 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    // Smooth scroll for navigation
    function setupNavScroll() {
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    // Simple contact form handler (demo only)
    function setupContactForm() {
      const form = document.querySelector('.contact-form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for reaching out! We will contact you soon.');
          form.reset();
        });
      }
    }

    // Carousel logic for all carousels
    function setupCarousels() {
      document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-images img');
        let current = 0;
        // 첫 번째 이미지만 active
        images.forEach((img, i) => {
          img.classList.toggle('active', i === 0);
          if (i === 0) {
            console.log('첫 이미지 active?', img, img.classList.contains('active'));
          }
        });
        function showImage(idx) {
          images.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
          });
        }
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        if (prevBtn && nextBtn) {
          prevBtn.onclick = () => {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
          };
          nextBtn.onclick = () => {
            current = (current + 1) % images.length;
            showImage(current);
          };
        }
      });
    }

    setupNavScroll();
    setupContactForm();
    setupCarousels();
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
