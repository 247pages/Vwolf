// /Vwolf/js/script.js
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('close-menu');

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('show'); // Toggle the 'show' class
    });

    // Close menu when the close button is clicked
    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('show'); // Remove 'show' class
    });

    // Close menu when clicking outside of the menu
    window.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
            sideMenu.classList.remove('show'); // Remove 'show' class
        }
    });
});

// Your web app's Firebase configuration
 // Get modal element
const cookieConsentModal = document.getElementById('cookieConsentModal');

// Function to check consent status
function checkConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
        cookieConsentModal.style.display = 'none';
    } else {
        cookieConsentModal.style.display = 'block';
    }
}

// Accept button event listener
document.getElementById('acceptBtn').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsentModal.style.display = 'none';
});

// Reject button event listener
document.getElementById('rejectBtn').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    window.location.href = '/home'; // Redirect to home page
});

// Check consent status on page load
window.onload = checkConsent;
