// Get the profile element and dropdown menu
const profile = document.getElementById('profile');
const dropdown = document.getElementById('profile-dropdown');

profile.addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});
document.addEventListener('click', function(event) {
    if (!profile.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }x
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.product ul li');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const header = this.querySelector('.header');
            if (header) {
                header.style.display = 'block';
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            const header = this.querySelector('.header');
            if (header) {
                header.style.display = 'none';
            }
        });
    });
});


function validateBookingForm() {
    const form = document.querySelector('#bookingForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const checkin = form.querySelector('input[name="checkin"]').value;
        const checkout = form.querySelector('input[name="checkout"]').value;

        if (!name || !email || !checkin || !checkout) {
            alert("All fields are required!");
            return false;
        }

        alert("Booking confirmed!");
        form.reset();
    });
}

const bookingForm = document.querySelector('#bookingForm');
if (bookingForm) {
    validateBookingForm();
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
