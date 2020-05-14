import { minkAnimation } from './minkAnimation.js'
import { sheepAnimation } from './sheepAnimation.js'
import { contentBox } from '../Content-display/contentBox.js'
import { aboutScript } from '../Content-display/content-scripts/scripts.js'

const about = () => {
    sheepAnimation()
    contentBox(aboutScript)
}

about()