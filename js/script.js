const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const header = document.querySelector('.header');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('menu-open');
        header.classList.toggle('menu-open');
    })
}