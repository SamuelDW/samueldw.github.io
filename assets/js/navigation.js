const showButton = document.querySelector('#show-hide-menu'),
    navContainer = document.querySelector('.nav-container'),
    shortNav = document.querySelector('#short-nav')

showButton.addEventListener('click', function (e) {
    shortNav.classList.toggle('m-hide')
    navContainer.classList.toggle('m-hide')
})
