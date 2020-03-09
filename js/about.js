const sheepTurn = () => {
    const sheep = document.querySelector('.flock')
    console.log(sheep)
    setInterval(() => {
        let count = 0
        console.log(count + 1)
        sheep.classList.toggle('reverse')
    }, 4000)
}

const about = () => {
    sheepTurn()
}

about()