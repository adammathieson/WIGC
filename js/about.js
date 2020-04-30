const startBtn = document.querySelector('.start-btn button')

const minkAnimation = async () => {
    const minkSit = document.querySelector('.mink-sit')
    const minkRun = document.querySelector('.mink-profile-lg')
    const minkRunInner = document.querySelector('.mplg-inner')
    const minkFrontView = document.querySelector('.mink-front-view')
    const minkCrouchLeft = document.querySelector('.mink-profile-crouch-lg')
    const minkRearView = document.querySelector('.mink-rear-view')
    const minkRunHeadRight = document.querySelector('.mplg-head')
    const minkRunHeadLeft = document.querySelector('.mplg-head-left')
    
    minkRun.addEventListener('animationend', () => {
        minkRun.classList.remove('active')
        minkFrontView.classList.add('active')
    })

    minkFrontView.addEventListener('animationend', () => {
        minkFrontView.classList.remove('active')
        minkCrouchLeft.classList.add('active')

    })

    minkCrouchLeft.addEventListener('animationend', () => {
        minkCrouchLeft.classList.remove('active')
        minkRearView.classList.add('active')
    })

    minkRearView.addEventListener('animationend', () => {
        minkRearView.classList.remove('active')
        minkRun.classList.add('active')
        minkRun.classList.add('mink-run-left')
        minkRunInner.classList.add('mink-left-face')
        minkRunHeadRight.classList.add('hide')
        minkRunHeadLeft.classList.remove('hide')

    })

    minkRunInner.addEventListener('animationend', () => {
        minkRunInner.classList.remove('mink-run-left')
        minkRun.classList.remove('active')
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