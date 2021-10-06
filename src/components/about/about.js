import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'

export const about = () => {


    // 1) Create a container for the stack descripton
    let about =
    <div id = "about">
        <img id = "mobile-image" src = "https://portfoliosite-h264.s3.us-east-2.amazonaws.com/bio2.jpg" width = "300px"></img>
        <div id = "content">
            <h1> About Me </h1>
            <p> Hi, I am a web developer based in Memphis. I would describe myself as midfield. I can set up databses, write and consume APIS, and build web apps, write and consume REST API's, and build web apps in Python or Javascript. Literally or technologically, I enjoy running all over the place.</p>
        </div>
        <img id = "desktop-image" src = "https://portfoliosite-h264.s3.us-east-2.amazonaws.com/bio2.jpg"></img>
    </div>

    document.getElementById("root").appendChild(about)
    gg("about").style.display = "none" // make it initially hidden

    var bio;

    const aboutContent =
    "Hi, I'm a web designer based in Memphis. My role as a developer is like playing midfield in soccer - I am neither a frontend nor backend specialist; I can support everything in between. "
    
    let title = gg("site-title")
    let port = gg("port");
    let mobile = gg("mobile-image");
    let desktop = gg("desktop");

    if (window.innerWidth > 480){
        title.addEventListener("click", ()=> {
            if (!bio){
                bio = true;
                port.style.display = "none";
                about.style.display = "grid";
            } else if (bio) {
                bio = false;
                port.style.display = "grid";
                about.style.display = "none";
            }
        })
    } else {
        title.addEventListener("click", ()=> {
            if (!bio){
                bio = true;
                port.style.display = "none";
                about.style.display = "block";
            } else if (bio) {
                bio = false;
                port.style.display = "block";
                about.style.display = "none";
            }
        })
    }
}