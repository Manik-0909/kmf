document.addEventListener('DOMContentLoaded', () => {
   const menuToggle = document.getElementById('menu-toggle');
   const menuClose = document.getElementById('menu-close');
   const navMenu = document.getElementById('nav-menu');
   const menuOverlay = document.getElementById('menu-overlay');
   const navLinks = document.querySelectorAll('.nav-links .nav-item a');

   function openMenu() {
      navMenu.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.classList.add('no-scroll');
      menuToggle.setAttribute('aria-expanded', 'true');
   }

   function closeMenu() {
      navMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      menuToggle.setAttribute('aria-expanded', 'false');
   }

   if (menuToggle) {
      menuToggle.addEventListener('click', openMenu);
   }

   if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
   }

   if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenu);
   }

   navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
   });

   // Close on ESC key
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
         closeMenu();
      }
   });

   // Close when resizing above 1024px
   window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && navMenu.classList.contains('active')) {
         closeMenu();
      }
   });
});

