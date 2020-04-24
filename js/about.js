const startBtn = document.querySelector('.start-btn button')

const minkAnimation = async () => {
    const minkSit = document.querySelector('.mink-sit')
    const minkRunRight = document.querySelector('.mink-profile-lg')
    const minkFrontView = document.querySelector('.mink-front-view')
    const minkCrouchLeft = document.querySelector('.mink-profile-crouch-lg')

    minkRunRight.addEventListener('animationend', () => {
        minkRunRight.classList.remove('active')
        minkFrontView.classList.add('active')
    })

    minkFrontView.addEventListener('animationend', () => {
        minkFrontView.classList.remove('active')
        minkCrouchLeft.classList.add('active')

    })

    minkSit.classList.remove('active')
    minkRunRight.classList.add('active')
}

startBtn.addEventListener('click', () => {
    minkAnimation()
})

const sheepTurn = () => {
    const sheep = document.querySelector('.sheep')
    // console.log(sheep)
    let count = 0
    setInterval(() => {
        // console.log(count++)
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