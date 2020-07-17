// const barn = document.querySelector("#barn")
const flock = document.getElementById("flock-dtl")
// const rect = barn.getBoundingClientRect()

// console.log(barn)
console.log(flock)

const tl = gsap.timeline({repeat:Infinity, repeatDelay: 1 })
    // tl.set("#flock-dtl", {transform}) 
    tl.to("#flock-dtl", {y: 200, scale: 2, transformOrigin: "50%, 50%",   duration: 3})
    console.log(tl)



export const sheepAnimation = () => {
    
}


// ______PREVIOUS VERSION USING PNG FILES________
// export const sheepAnimation = () => {
//     const flock = document.querySelector('.flock')
//     const flockLeft = document.querySelector('.flock-left')
//     const flockRight = document.querySelector('.flock-right')
//     const sheep = document.querySelector('.sheep')
//     const sheepLeft = document.querySelector('.sheep-left')

//     const minkCrouch = document.querySelector('.mink-crouch')
//     const minkCrouch2 = document.querySelector('.mc-2')


//     minkCrouch.addEventListener('animationstart', () => {
//         sheep.classList.remove('reverse')
//         flockRight.classList.add('active-flock')
//     })

//     flockRight.addEventListener('animationend', () => {
//         flockRight.classList.remove('active-flock')
//         flockRight.classList.add('hide')
//         flockLeft.classList.remove('hide')
//     })

//     minkCrouch2.addEventListener('animationstart', () => {
//         sheepLeft.classList.add('reverse')
//         flockLeft.classList.add('active-flock-left')
//     })

//     flockLeft.addEventListener('animationend', () => {
//         flockLeft.classList.add('hide')
//         flockLeft.classList.remove('active-flock-left')
//         sheepLeft.classList.remove('reverse')
//         flockRight.classList.remove('hide')

//         sheep.classList.add('reverse')
//     })

// }