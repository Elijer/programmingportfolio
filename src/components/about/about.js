import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { stacks } from './data.js'

export const about = () => {

    // 1) Create a container for the stack descripton
    let about =
    <div id = "about">
        About
    </div>

    document.getElementById("root").appendChild(about)
}