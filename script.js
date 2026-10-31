
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Check whether the profile photo loads
const profilePhoto = document.querySelector('.hero-image img');

profilePhoto.addEventListener('error', function() {
    this.alt = 'Profile photo not found. Add jahnavi.jpg inside the assets folder.';
    this.style.display = 'none';
});
