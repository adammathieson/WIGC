const toggleMenu = () => {
    const menu = document.querySelector('.nav-list')
    const burger = document.querySelector('.burger')

    burger.addEventListener('click', () => {
        menu.classList.toggle('toggle')
    })
}

toggleMenu()