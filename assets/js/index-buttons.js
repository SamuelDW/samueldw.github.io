const portfolio = document.querySelector('#portfolio'),
    contact = document.querySelector('#contact')

portfolio.addEventListener('click', () => {
    window.location = '/portfolio'
})

contact.addEventListener('click', () => {
    window.location = '/contact'
})
