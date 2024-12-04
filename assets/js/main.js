// When the page is scrolled
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {  // Change 50 to adjust when to apply the effect
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});