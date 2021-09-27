import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'

export const about = () => {

    // 1) Create a container for the stack descripton
/*     let about =
    <div id = "about">
        <h1> About Me </h1>
        <p> Hi, I am a web designer based in Memphis. I would describe myself as midfield. I can set up databses, write and consume APIS, and build web apps., write and consume REST API's, and build web apps in Python or Javascript. Literally or technologically, I enjoy running all over the place.</p>
    </div> */

    //document.getElementById("root").appendChild(about)

    const aboutContent =
    "Hi, I'm a web designer based in Memphis. I wouldn't say 'fullstack', I would say 'midfield'. I excel at querying databases, writing and consuming APIs, and building web apps."
    
    let title = gg("site-title")
    let port = gg("port");

    let display = gg("tech-description-display");
    let desc = gg("tech-description-description");
    let name = gg("tech-description-name");

    title.addEventListener("mouseenter", () => {
        display.style.display = "block";
        name.innerHTML = "About Me";
        desc.innerHTML = aboutContent;
        port.style.display = "none";
    })

    title.addEventListener("mouseleave", () => {
        display.style.display = "none";
        port.style.display = "grid";
    })
}