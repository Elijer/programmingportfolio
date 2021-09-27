import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { stacks } from './data.js'

export const stack = () => {

    // 1) Create a container for the stack descripton
    let stackDescription =
    <div id = "tech-description-display">
        <div id = "name-block">
            <h1 id = "tech-description-name"></h1>
        </div>
        <p id = "tech-description-description"></p>
    </div>
    document.getElementById("root").appendChild(stackDescription)


    // 2) Create a bubble for each element in tech
    stacks.forEach(tech => {
        let techBubble =
        <span class = "tech-bubble" data-descrip = {tech.description} data-link = {tech.link} > {tech.name} </span>;

        document.getElementById("tech-list").appendChild(techBubble);

        let port = gg("port");
        let display = gg("tech-description-display");
        let desc = gg("tech-description-description");
        let name = gg("tech-description-name");

        techBubble.addEventListener("mouseenter",
        () => {
            display.style.display = "block"
            desc.innerHTML = tech.description;
            name.innerHTML = tech.name;
            port.style.display = "none"
        });

        techBubble.addEventListener("mouseleave",
        () => {
            display.style.display = "none"
            port.style.display = "grid"
        });
        //append(techBubble, "tech-list");

    });
}