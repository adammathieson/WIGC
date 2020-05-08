const display = document.querySelector('.display')
const displayP = document.querySelector('.display-p')

export const contentBox = array => {
    let current = 0
    
    displayP.textContent = array[current]
}