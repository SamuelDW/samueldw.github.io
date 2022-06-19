const searchButton = document.querySelector('#search-button'),
    filterButton = document.querySelector('#filter-button'),
    extraFields =  document.querySelector('#extra-fields'),
    textField = document.querySelector('#search-text'),
    cardTitles = document.querySelectorAll('.title')
    postTags = document.querySelectorAll('.tag-list'),
    skillCheckboxes = document.querySelectorAll('.skill-checkbox')

searchButton.addEventListener('click', function(e) {
    e.preventDefault()
    if (textField.value === '') return

    /**
     * Get all the selected checkboxes with names,
     * to be able to match the tags on the post,
     * filtered by checkboxes that are checked
     */
    let checkedBoxes = Object
        .entries(skillCheckboxes)
        .filter(([key, value]) => value.checked)
        .map(([key, value])=> value.name)

    /**
     * Grab the hidden classes that hold the tags, and split into readable
     * tags
     */
    const tagsFromPosts = Object
        .entries(postTags)
        .map(([key, value]) => {return {name: value.parentNode.outerText, tags: value.classList[2].split(',')}})

    /**
     * Compare the checked boxes and the tags,
     * and returns true or false that the objects
     * contain checkbox values
     */
    let matchedTagsOnSearch = Object
        .entries(tagsFromPosts)
        .map(([key, value]) => value.tags.some(r => checkedBoxes.includes(r)))

    cardTitles
        .forEach(title => {
            let titleValue = title.textContent.toLocaleLowerCase(),
                searchValue = textField.value.toLocaleLowerCase()

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
        .map(([key, value]) => {return {name: value.parentNode.outerText, tags: value.classList[2].split(',')}})
})
