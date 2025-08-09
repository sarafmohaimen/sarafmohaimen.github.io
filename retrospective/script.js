document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');

    if (navToggle && navUl) {
        navToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        function updateThemeIcon() {
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
            themeToggle.setAttribute('aria-label', document.body.classList.contains('dark-mode') ? 'Toggle light mode' : 'Toggle dark mode');
        }

        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            updateThemeIcon();
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
        
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcon();
        } else {
            updateThemeIcon();
        }
    }
});
