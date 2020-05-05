export const sheepAnimation = () => {
    const flock = document.querySelector('.flock')
    const flockLeft = document.querySelector('.flock-left')
    const flockRight = document.querySelector('.flock-right')
    const flockAnimation1 = document.querySelector('.active-flock')
    const flockAnimation2 = document.querySelector('.active-flock-left')
    const sheep = document.querySelector('.sheep')
    const sheepLeft = document.querySelector('.sheep-left')

    const minkCrouch = document.querySelector('.mink-crouch')
    const minkCrouch2 = document.querySelector('.mc-2')


    minkCrouch.addEventListener('animationstart', () => {
        sheep.classList.remove('reverse')
        flockRight.classList.add('active-flock')
    })

    flockRight.addEventListener('animationend', () => {
        flockRight.classList.remove('active-flock')
        flockRight.classList.add('hide')
        flockLeft.classList.remove('hide')
    })

    minkCrouch2.addEventListener('animationstart', () => {
        sheepLeft.classList.add('reverse')
        flockLeft.classList.add('active-flock-left')
    })

    flockLeft.addEventListener('animationend', () => {
        flockLeft.classList.add('hide')
        flockLeft.classList.remove('active-flock-left')
        sheepLeft.classList.remove('reverse')
        flockRight.classList.remove('hide')

        sheep.classList.add('reverse')
    })

}