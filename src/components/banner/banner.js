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

/*     stacks.forEach(tech => {
        let techBubble =
        <span class = "tech-bubble" data-descrip = {tech.description} data-link = {tech.link} > {tech.name} </span>;

        document.getElementById("tech-list").appendChild(techBubble);

        let port = gg("port");
        let desc = gg("tech-description-display");

        techBubble.addEventListener("mouseenter",
        () => {
            desc.style.display = "block"
            desc.innerHTML = tech.description;
            port.style.display = "none"
        });

        techBubble.addEventListener("mouseleave",
        () => {
            desc.style.display = "none"
            port.style.display = "block"
        });
        //append(techBubble, "tech-list");

    }); */

    return banner;
}