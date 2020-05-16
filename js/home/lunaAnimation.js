
export const lunaAnimation = () => {
    const hatch = document.querySelector('.car-hatch')
    const luna = document.querySelector('.luna')

    hatch.addEventListener('animationstart', () => {
        luna.classList.remove('hide')
    })
}