document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navBar = document.querySelector('.navBar');

    menuButton.addEventListener('click', function () {
        navBar.classList.toggle('open');
    });
});

