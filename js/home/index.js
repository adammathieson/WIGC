import { contentBox } from '../Content-display/contentBox.js'
import { carAnimation } from './carAnimation.js'
import { lunaAnimation } from './lunaAnimation.js'
import { goose } from './goose.js'
import { gooseAnimation } from './gooseAnimation.js'

const home = () => {
    carAnimation()
    lunaAnimation()
    goose(1)
    goose(2)
    goose(3)
    gooseAnimation()
}

home()