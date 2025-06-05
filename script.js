// Placeholder for future JavaScript functionality
console.log("LABOBO Website Initialized");

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Optional: Highlight active link
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
