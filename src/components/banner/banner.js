import { createElement, append } from '/utility/jsx'
import { gg } from '/utility/helpers'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { stacks } from '/components/portfolio/data'

export const banner = () => {

    let banner = 
    <div id = "banner">
        <h1 id = "site-title">ELIJAH KENNEDY</h1>
        <div id = "tech-list" class = "tech-list"></div>
    </div>

    append(banner);

    return banner;
}