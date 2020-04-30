const startBtn = document.querySelector('.start-btn button')

const minkAnimation = async () => {
    const minkSit = document.querySelector('.mink-sit')
    const minkRun = document.querySelector('.mink-profile')
    const minkRunReverse = document.querySelector('.mp-2')
    const minkFrontView = document.querySelector('.mink-front-view')
    const minkFrontView2 = document.querySelector('.mfv-2')
    const minkCrouch = document.querySelector('.mink-crouch')
    const minkCrouch2 = document.querySelector('.mc-2')
    const minkRearView = document.querySelector('.mink-rear-view')
    const minkRearView2 = document.querySelector('.mrv-2')
    
    minkRun.addEventListener('animationend', () => {
        minkRun.classList.remove('active')
        minkFrontView.classList.add('active')
    })

    minkFrontView.addEventListener('animationend', () => {
        minkFrontView.classList.remove('active')
        minkCrouch.classList.add('active')

    })

    minkCrouch.addEventListener('animationend', () => {
        minkCrouch.classList.remove('active')
        minkRearView.classList.add('active')
    })

    minkRearView.addEventListener('animationend', () => {
        minkRearView.classList.remove('active')
        minkRunReverse.classList.add('active')
    })

    minkRunReverse.addEventListener('animationend', () => {
        minkRunReverse.classList.remove('active')
        minkFrontView2.classList.add('active')
    })

    minkFrontView2.addEventListener('animationend', () => {
        minkFrontView2.classList.remove('active')
        minkCrouch2.classList.add('active')
    })

    minkCrouch2.addEventListener('animationend', () => {
        minkCrouch2.classList.remove('active')
        minkRearView2.classList.add('active')
    })

    minkRearView2.addEventListener('animationend', () => {
        minkRearView2.classList.remove('active')
        minkRun.classList.add('active')
    })

    minkSit.classList.remove('active')
    minkRun.classList.add('active')
}

startBtn.addEventListener('click', () => {
    minkAnimation()
})

const sheepTurn = () => {
    const sheep = document.querySelector('.sheep')
    setInterval(() => {
        sheep.classList.toggle('reverse')
        
    }, 4000)
}

const minkTurn = () => {
    const mink = document.querySelector('.mplg-inner')
    setInterval(() => {
        mink.classList.toggle('mink-reverse')
    }, 4000)
}

const about = () => {
    // sheepTurn()
    // minkTurn()
}

about()