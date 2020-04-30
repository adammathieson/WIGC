const startBtn = document.querySelector('.start-btn button')

const minkAnimation = async () => {
    const minkSit = document.querySelector('.mink-sit')
    const minkRun = document.querySelector('.mink-profile')
    const minkRunReverse = document.querySelector('.mp-2')
    const minkFrontView = document.querySelector('.mink-front-view')
    const minkFrontView2 = document.querySelector('.mfv-2')
    const minkCrouchLeft = document.querySelector('.mink-profile-crouch-lg')
    const minkRearView = document.querySelector('.mink-rear-view')
    
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
        minkRunReverse.classList.add('active')
    })

    minkRunReverse.addEventListener('animationend', () => {
        minkRunReverse.classList.remove('active')
        minkFrontView2.classList.add('active')
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