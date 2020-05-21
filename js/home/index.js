import { contentBox } from '../Content-display/contentBox.js'
import { carAnimation } from './carAnimation.js'
import { lunaAnimation } from './lunaAnimation.js'
import { goose } from './goose.js'

const home = () => {
    carAnimation()
    lunaAnimation()
    goose(2)
}

home()