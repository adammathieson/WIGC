
export const carAnimation = () => {
    let notPlaying = true
    
    const next = document.querySelector('.next-script')
    const car = document.querySelector('.car')

    next.addEventListener('click', () => {
        if (notPlaying) {
            car.classList.remove('hide')
            notPlaying = false
        }
    })
}

