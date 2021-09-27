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

    stacks.forEach(tech => {
        let techBubble =
        <span class = "tech-bubble" data-descrip = {tech.description} data-link = {tech.link} > {tech.name} </span>;

        document.getElementById("tech-list").appendChild(techBubble);

        let title = gg("site-title");
        let descrip = gg("tech-description-display");
/* 
        techBubble.addEventListener("mouseenter",
        () => {
            descrip.style.display = "block"
            descrip.innerHTML = tech.description;
            title.style.display = "none"
        });

        techBubble.addEventListener("mouseleave",
        () => {
            descrip.style.display = "none"
            title.style.display = "block"
        }); */
        //append(techBubble, "tech-list");

    });

    return banner;
}