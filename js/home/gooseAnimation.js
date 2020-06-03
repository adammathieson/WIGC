
export const gooseAnimation = () => {
    let geese = document.querySelectorAll('.goose')
    let fly = document.querySelector('.fly')
    let lunaFV = document.querySelector('.luna-fv')
    let lunaAng = document.querySelector('.luna-ang')

    // geese.forEach(goose => goose.classList.add('pre-fly-zone1'))

    lunaFV.addEventListener('animationstart', () => {
        // console.log('here')
        geese.forEach(goose => {
            let zone = goose.parentElement.classList.value
            // console.log(goose)
            goose.classList.add(`pre-fly-${zone}`)
            // if (zone === 'goose-zone1') {
            //     goose.classList.add('pre-fly-zone1')
            // }
            // if (zone === 'goose-zone2') {
            //     goose.classList.add('pre-fly-zone2')
            // }
            // if (zone === 'goose-zone3') {
            //     goose.classList.add('pre-fly-zone3')
            // }
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