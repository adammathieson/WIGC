const menu = document.querySelector('.nav-list')
const burger = document.querySelector('.burger')
// const body = document.querySelector("body")


const toggleMenu = () => {

    burger.addEventListener('click', () => {
        menu.classList.toggle('toggle')
    })
    
    // Hides menu when resizing to mobile view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 500) {
            menu.classList.remove('toggle')
        } else {
            menu.classList.add('toggle')
        }        
    })
}

const clickOffClose = () => {
    window.addEventListener('mouseup', () => {
        if (
            !menu.classList.contains('toggle') &&
            event.target !== menu && 
            event.target !== burger
        ) {
            menu.classList.add('toggle')            
            }
        
    })
    
}

toggleMenu()
clickOffClose()