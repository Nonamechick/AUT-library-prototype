// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Load Saved Theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dropdown Toggle for Mobile
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 600) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    }
});

// Go to Top Button
window.onscroll = function() {
    const btn = document.getElementById('goToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};
document.getElementById('goToTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};