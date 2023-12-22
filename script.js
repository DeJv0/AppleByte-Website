document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links ul');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle("open");
        if (navLinks.classList.length <= 0) {
            menuIcon.innerHTML = "&equiv;";
        }
        else {
            menuIcon.innerHTML = "&times;";
        }
    });
});