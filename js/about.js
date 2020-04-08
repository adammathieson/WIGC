const sheepTurn = () => {
    const sheep = document.querySelector('.sheep')
    // console.log(sheep)
    let count = 0
    setInterval(() => {
        console.log(count++)
        sheep.classList.toggle('reverse')
        
    }, 4000)
}

const minkTurn = () => {
    const mink = document.querySelector('.mplg-inner')
    setInterval(() => {
        mink.classList.toggle('mink-reverse')
    }, 2000)
}

const about = () => {
    sheepTurn()
    minkTurn()
}

about()