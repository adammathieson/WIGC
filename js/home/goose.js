
export const goose = (z) => {
    const container = document.querySelector(`.goose-zone${z}`)
    const goose = document.createElement("div")
    goose.classList.add('goose')

    // Body
    const body = document.createElement("div")
    body.classList.add('goose-body')
    const bodyImg = document.createElement("img")
    bodyImg.src = '../../img/scenes/goose/body_goose.png'
    body.append(bodyImg)
    goose.append(body)

    // Head Standing
    const headStand = document.createElement("div")
    headStand.classList.add('goose-head-neck-stand')
    const headStandImg = document.createElement("img")
    headStandImg.src = '../../img/scenes/goose/Head_neck_goose_standing.png'
    headStand.append(headStandImg)
    goose.append(headStand)

    // Head Fly
    const headFly = document.createElement("div")
    headFly.classList.add('goose-head-neck-fly')
    const headFlyImg = document.createElement("img")
    headFlyImg.src = '../../img/scenes/goose/Head_neck_fly.png'
    headFly.append(headFlyImg)
    goose.append(headFly)

    // Wing Standing
    const wingStand = document.createElement("div")
    wingStand.classList.add('goose-wing-stand')
    const wingStandImg = document.createElement("img")
    wingStandImg.src = '../../img/scenes/goose/wing_standing.png'
    wingStand.append(wingStandImg)
    goose.append(wingStand)

    // Wing Fly - Right
    const wingFlyR = document.createElement("div")
    wingFlyR.classList.add('goose-wing-R')
    const wingFlyRImg = document.createElement("img")
    wingFlyRImg.src = '../../img/scenes/goose/wing-R.png'
    wingFlyR.append(wingFlyRImg)
    goose.append(wingFlyR)

    // WIng Fly - Left
    const wingFlyL = document.createElement("div")
    wingFlyL.classList.add('goose-wing-L')
    const wingFlyLImg = document.createElement("img")
    wingFlyLImg.src = '../../img/scenes/goose/wing-L.png'
    wingFlyL.append(wingFlyLImg)
    goose.append(wingFlyL)

    // Tail
    const tail = document.createElement("div")
    tail.classList.add('goose-tail')
    const tailImg = document.createElement("img")
    tailImg.src = '../../img/scenes/goose/Tail_goose.png'
    tail.append(tailImg)
    goose.append(tail)

    // Foot - Back
    const backFoot = document.createElement("div")
    backFoot.classList.add('back-foot')
    const backFootImg = document.createElement("img")
    backFootImg.src= '../../img/scenes/goose/foot_leg_goose.png'
    backFoot.append(backFootImg)
    goose.append(backFoot)

    // Foot - Front
    const frontFoot = document.createElement("div")
    frontFoot.classList.add('front-foot')
    const frontFootImg = document.createElement("img")
    frontFootImg.src= '../../img/scenes/goose/foot_leg_goose.png'
    frontFoot.append(frontFootImg)
    goose.append(frontFoot)

    container.append(goose)
}