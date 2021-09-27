import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

//import { gg } from '/utility/helpers'
import { stacks } from '../portfolio/data.js'

export const stack = () => {
    let stackDescription = <h1 id = "tech-description-display">The Geolocation API is a feature of all modern web browsers that gives web apps approximate access to the user's GPS location, allowing calulcation of fitness data, location on a map, and much more. </h1>
    document.getElementById("root").appendChild(stackDescription)
}