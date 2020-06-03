
export const gooseAnimation = () => {
    let geese = document.querySelectorAll('.goose')
    let fly = document.querySelector('.fly')
    let lunaFV = document.querySelector('.luna-fv')
    let lunaAng = document.querySelector('.luna-ang')

    // geese.forEach(goose => goose.classList.add('pre-fly-zone1'))

    lunaFV.addEventListener('animationstart', () => {
        geese.forEach(goose => {
            let zone = goose.parentElement.classList.value
            // console.log(goose)
            goose.classList.add(`pre-fly-${zone}`)
        })
    })

    geese.forEach(goose => {
        goose.addEventListener('animationend', () => {
            goose.classList.add('fly')
            goose.addEventListener('animationend', () => {
                goose.classList.add('hide')
            })
        })
    })

    const goose = document.querySelector('.goose')
    let height = window.getComputedStyle(goose).getPropertyValue('height')
    // console.log(height)
}