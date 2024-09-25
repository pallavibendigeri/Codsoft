// script.js
// Smooth scrolling and sticky navbar functionality


document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Get the target section

            if (targetSection) {
                // Scroll to the target section
                window.scroll({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('a.nav-link');
    
    // Smooth scrolling for navbar links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll behavior
                    block: 'start' // Scroll to the top of the section
                });
            }
        });
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});





console.log("Script loaded"); // Check if the script loads

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const message = document.getElementById('message').value;

        alert(`Message sent! \n\nName: ${firstName} ${lastName} \nMessage: ${message}`);

        this.reset(); // Clear the form
    });
});


