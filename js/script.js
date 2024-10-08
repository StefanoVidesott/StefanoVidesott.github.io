// JavaScript to toggle the navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
    navToggle.classList.toggle('nav-toggle_open');
});

// Optional: Close the menu when a link is clicked (useful for single-page applications)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('nav-menu_visible')) {
            navMenu.classList.remove('nav-menu_visible');
            navToggle.classList.remove('nav-toggle_open');
        }
    });
});
