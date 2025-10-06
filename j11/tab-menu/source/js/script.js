const buttonWrapper = document.querySelector('.buttonWrapper')
const tabButtons = document.querySelectorAll('.tab-button')
const contents = document.querySelectorAll('.content')

buttonWrapper.addEventListener('click', event => {

    const mainContentID = event.target.dataset.id
    const mainContent = document.querySelector(`#${mainContentID}`)

    tabButtons.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')

})
