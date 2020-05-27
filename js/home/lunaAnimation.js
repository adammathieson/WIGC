
export const lunaAnimation = () => {
    const hatch = document.querySelector('.car-hatch')
    const luna = document.querySelector('.luna-sv')
    const lunaFaceView = document.querySelector('.luna-fv')
    const lunaAngle = document.querySelector('.luna-ang')
    const lunaAngleTwo = document.querySelector('.luna-ang-2')

    hatch.addEventListener('animationstart', () => {
        luna.classList.remove('hide')
    })

    luna.addEventListener('animationend', () => {
        luna.classList.add('hide')
        lunaFaceView.classList.remove('hide')
    })

    lunaFaceView.addEventListener('animationend', () => {
        lunaFaceView.classList.add('hide')
        lunaAngle.classList.remove('hide')
    })

    lunaAngle.addEventListener('animationend', (e) => {
        let name = e.animationName
        if (name === 'luna-ang-walk') {
            lunaAngle.classList.add('luna-ang-2')
        }
        if (name === 'luna-ang-walk-2') {
            lunaAngle.classList.add('hide')
        }
    })
}
