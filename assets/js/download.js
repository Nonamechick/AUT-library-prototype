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
const majorsLink = document.querySelector('.dropdown .nav-link'); // Select the "Majors" link specifically

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Close dropdown when hamburger is toggled
        if (dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    });
}

// Dropdown Toggle for Mobile (only for "Majors" link)
if (majorsLink) {
    majorsLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 600) {
            console.log('Majors link clicked');
            e.preventDefault(); // Prevent default only for the "Majors" link
            dropdown.classList.toggle('active');
        }
    });
}

// Handle navigation for dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
if (dropdownLinks.length > 0) {
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 600) {
                console.log('Dropdown link clicked:', link.getAttribute('href'));
                // Close dropdown and hamburger menu
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                // Navigate to the link's href
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    console.log('Navigating to:', href);
                    setTimeout(() => {
                        window.location.href = href; // Add slight delay to ensure UI updates
                    }, 100);
                } else {
                    console.log('No valid href, skipping navigation');
                }
            }
        });
    });
}

// Close dropdown when clicking outside
if (dropdown) {
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 600 && !dropdown.contains(e.target)) {
            console.log('Clicked outside dropdown');
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