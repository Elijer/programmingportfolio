import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { techList } from '/components/portfolio/data'

export const banner = () => {

    let banner = 
    <div id = "banner">
        <h1>ELIJAH KENNEDY
    {/* <span class = "first-name">ELIJAH </span>
    <span class = "last-name">KENNEDY</span> */}
        </h1>
        <div id = "tech-list" class = "tech-list"></div>
    </div>

    append(banner);

    techList().forEach(tech => {
        let techBubble =
        <span class = "tech-bubble"> {tech} </span>;

        document.getElementById("tech-list").appendChild(techBubble);
        //append(techBubble, "tech-list");

    });

    return banner;
}