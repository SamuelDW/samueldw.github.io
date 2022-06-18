const searchButton = document.querySelector('#search-button'),
    filterButton = document.querySelector('#filter-button'),
    extraFields =  document.querySelector('#extra-fields'),
    textField = document.querySelector('#search-text'),
    cardTitles = document.querySelectorAll('.title')
    postTags = document.querySelectorAll('.tag-list')

searchButton.addEventListener('click', function(e) {
    e.preventDefault()
    if (textField.value === '') return
    cardTitles
        .forEach(title => {
            let titleValue = title.textContent.toLocaleLowerCase()
            let searchValue = textField.value.toLocaleLowerCase()

            if (!titleValue.includes(searchValue)) {
               const card = title.parentNode.parentNode
               card.classList.add('hidden')
            }
        })
})

filterButton.addEventListener('click', function (e) {
    extraFields.classList.toggle('hidden')

    const tags = Object
        .entries(postTags)
        .map(([key, value]) => value.classList[2].split(','))
    console.log(tags)
    // postTags.forEach(post => {
    //     console.log(post.classList[2])
    // })
})
