const searchButton = document.querySelector('#search-button'),
    filterButton = document.querySelector('#filter-button'),
    extraFields =  document.querySelector('#extra-fields'),
    textField = document.querySelector('#search-text'),
    cardTitles = document.querySelectorAll('.title')
    postTags = document.querySelectorAll('.tag-list'),
    skillCheckboxes = document.querySelectorAll('.skill-checkbox')

searchButton.addEventListener('click', function(e) {
    e.preventDefault()

    /**
     * Get all the selected checkboxes with names,
     * to be able to match the tags on the post,
     * filtered by checkboxes that are checked
     */
    let checkedBoxes = Object
        .entries(skillCheckboxes)
        .filter(([key, value]) => value.checked)
        .map(([key, value])=> value.name)

    if (textField.value === '' && checkedBoxes.length === 0) return

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

    cardTitles.forEach((value, key) => {
        let titleValue = value.textContent.toLocaleLowerCase(),
            searchValue = textField.value.toLocaleLowerCase()
            //console.log()

        const card = value.parentNode.parentNode

        if (!titleValue.includes(searchValue) && checkedBoxes.length === 0) {
            card.classList.add('hidden')
            return
        }
        if (searchValue === '' && matchedTagsOnSearch[key] === false) {
            card.classList.add('hidden')

        }
        if (!titleValue.includes(searchValue) && matchedTagsOnSearch[key] === false) {
            card.classList.add('hidden')
            return
        }

        // if search value is found, show card
        // if tags matched = true, show card
        // if search value not found but tags matched = true show card
        // if tags matched and no search value, show cards with tags
        if (matchedTagsOnSearch[key] === false || !titleValue.includes(searchValue)) console.log('hi')
        console.log(matchedTagsOnSearch[key], value.textContent)
    })
})

filterButton.addEventListener('click', function (e) {
    extraFields.classList.toggle('hidden')
})
