import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'

export const about = () => {

    // 1) Create a container for the stack descripton
    let about =
    <div id = "about">
        <h1> About Elijah </h1>
        <p> Elijah is a web designer based in Memphis, Tennessee. Elijah isn't frontend, backend or full-stack; he's midfield. He can query relational or non-relational databases, write REST API's, grab data from other APIs, and write web apps in Python or Javascript. Literally or technologically, he can sprint all over the place.</p>
    </div>

    document.getElementById("root").appendChild(about)
    
    let title = gg("site-title")
    let aboutRef = gg("about")
    let port = gg("port")

    title.addEventListener("mouseenter", () => {
        aboutRef.style.display = "block";
        port.style.display = "none";
    })

    title.addEventListener("mouseleave", () => {
        aboutRef.style.display = "none";
        port.style.display = "block";
    })
}