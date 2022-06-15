const searchButton = document.querySelector('#search-button'),
    filterButton = document.querySelector('#filter-button'),
    extraFields =  document.querySelector('#extra-fields')

searchButton.addEventListener('click', function(e) {
    e.preventDefault()
    extraFields.classList.add('hidden')
})


filterButton.addEventListener('click', function (e) {
    extraFields.classList.toggle('hidden')
})
