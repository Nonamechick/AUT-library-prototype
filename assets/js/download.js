// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
}

// Load Saved Theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Close dropdown when hamburger is toggled
        if (dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    });
}

// Dropdown Toggle for Mobile
if (dropdown) {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 600) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });

    // Close dropdown and hamburger menu when a dropdown link is clicked
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                dropdown.classList.remove('active');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 600 && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

// Go to Top Button
window.onscroll = function() {
    const btn = document.getElementById('goToTopBtn');
    if (btn && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
        btn.style.display = 'block';
    } else if (btn) {
        btn.style.display = 'none';
    }
};
if (document.getElementById('goToTopBtn')) {
    document.getElementById('goToTopBtn').onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}