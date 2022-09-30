const mobileMenuButton = document.querySelector('.mobile-menu-button')

mobileMenuButton.addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('m-hide')
})
