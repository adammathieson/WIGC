
const toggleMenu = () => {
    const menu = document.querySelector('.nav-list')
    const burger = document.querySelector('.burger')
    
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

    // Click off elements to close menu
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

const load = () => {
    const menu = document.querySelector('.nav-list')
    if (window.innerWidth > 500) {
        menu.classList.remove('toggle')
        console.log('load')
    }
}

const app = () => {
    toggleMenu()
    load()
}

app()

