
export const lunaAnimation = () => {
    const hatch = document.querySelector('.car-hatch')
    const luna = document.querySelector('.luna')
    const lunaFaceView = document.querySelector('.luna-fv')

    hatch.addEventListener('animationstart', () => {
        luna.classList.remove('hide')
    })

    luna.addEventListener('animationend', () => {
        luna.classList.add('hide')
        lunaFaceView.classList.remove('hide')
    })
}
