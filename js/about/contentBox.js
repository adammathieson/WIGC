const display = document.querySelector('.display')
const displayP = document.querySelector('.display-p')
const prev = document.querySelector('.prev-script')
const next = document.querySelector('.next-script')

export const contentBox = array => {
    let current = 0
    let maxPage = array.length

    displayP.textContent = array[current]

    next.addEventListener('click', () => {
        if (current < maxPage-1) {
            current++
            displayP.textContent = array[current]
            if (current > 0) {
                prev.classList.remove('hide')
            }
            if (current === maxPage-1) {
                next.classList.add('hide')
            }
        }
    })

    prev.addEventListener('click', () => {
        if (current > 0) {
            current--
            displayP.textContent = array[current]
            if (current === 0) {
                prev.classList.add('hide')
            }
            if (current < maxPage-1) {
                next.classList.remove('hide')
            }
        }
    })

}