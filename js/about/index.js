import { minkAnimation } from './minkAnimation.js'
import { sheepAnimation } from './sheepAnimation.js'
import { contentBox } from './contentBox.js'

const aboutScript = [
    "Welcome to Sauk Mountain Farm, a 20 acre working sheep farm nestled deep in the Cascade mountains...",
    "it's here where every Wingin' It Goose Control dog receives training and evaluation...,",
    "Anne Devine, who owns and operates the farm, has raised and trained border collies for over 35 years!",
]

const about = () => {
    sheepAnimation()
    contentBox(aboutScript)
}

about()