import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { stacks } from '../portfolio/data.js'

export const stack = () => {

    // 1) Create a container for the stack descripton
    let stackDescription = <h1 id = "tech-description-display"> Example content for stack </h1>
    document.getElementById("root").appendChild(stackDescription)


    // 2) Create a bubble for each element in tech
    stacks.forEach(tech => {
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
            port.style.display = "grid"
        });
        //append(techBubble, "tech-list");

    });
}