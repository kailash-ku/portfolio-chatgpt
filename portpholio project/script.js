document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

//  slider js 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 5000); // Change slide every 5 seconds

// Service Section Toggle
function toggleService(serviceId) {
    const service = document.getElementById(serviceId);
    const list = service.querySelector('ul');
    const button = service.querySelector('button');

    if (list.style.display === 'block') {
        list.style.display = 'none';
        button.textContent = '+';
    } else {
        list.style.display = 'block';
        button.textContent = '-';
    }
}