// ── DENIYAYA BEVERLY VILLA — GLOBAL SCRIPT ──

document.addEventListener('DOMContentLoaded', () => {
  // PRELOADER
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
      }, 1500);
    });
  }

  // MOBILE MENU TOGGLE (CHILL TOWN STYLE)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // NAVBAR & SCROLL EFFECTS
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    const floatTop = document.querySelector('.float-top');
    
    if (window.scrollY > 50) {
      if (nav) nav.classList.add('scrolled');
      if (floatTop) floatTop.classList.add('visible');
    } else {
      if (nav) nav.classList.remove('scrolled');
      if (floatTop) floatTop.classList.remove('visible');
    }

    // Parallax Hero (if present)
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.3}px)`;
    }
  });

  // REVEAL ON SCROLL
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });

  // CUSTOM CURSOR
  const cursor = document.getElementById('cursor');
  const blur = document.getElementById('cursor-blur');
  if (cursor && blur) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      blur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  // TYPING EFFECT (Home Page Only)
  const titleEl = document.getElementById('hero-title');
  if (titleEl) {
    const titleText = "Your Private Rainforest Sanctuary";
    let charIndex = 0;

    function typeTitle() {
      if (charIndex < titleText.length) {
        titleEl.innerHTML = titleText.substring(0, charIndex + 1) + '<span class="cursor-type"></span>';
        charIndex++;
        setTimeout(typeTitle, 80);
      } else {
        titleEl.innerHTML = titleText + '<span class="cursor-type"></span>';
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeTitle, 2000);
  }
});

// GLOBAL FUNCTIONS
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
