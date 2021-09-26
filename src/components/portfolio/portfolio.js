import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { pieces } from './portfolioData.js'

/* This is another way to import images with parcel
import commerce1 from "../../media/commerce1.png"; */

export const portfolio = () => {

    //https://portsite.web.app/editor/editor.html
    var port =
    <div id = "port" >
    </div>;

    // I guess the append() utility function doesn't need to be imported because it's
    // in the context of the main.js file that calls this construction function?

    append(port);

    for (let piece of pieces){
        if (piece.active == true){

            const tile =
            <div id = {"tile-" + piece.id} class = "tile" >

                <a href = {piece.link}
                target="_blank" // this makes link open in a new tab
                >

                    <img
                    id = {"tile-img-" + piece.id}
                    class = "tile-img"
                    src = {piece.url} >
                    </img>

                    <div class = "tile-body">

                        <h1
                        id = {"tile-title-"+piece.id}
                        class = "tile-title">
                            {piece.title}
                        </h1>

                        <div id = {"stack-" + piece.id} class = "tile-stack">
                        </div>

                        <p
                        id = {"tile-desc-" + piece.id}
                        class = "tile-desc">
                            {piece.description}
                        </p>
                        

                    </div>

                </a>
                
            </div>
            
            // Handle gif display for images on mouse hover
            let imgID = "tile-img-" + piece.id;

            tile.addEventListener("mouseenter",
            () => {
                gg(imgID).src = piece.gif;
            });

            tile.addEventListener("mouseleave",
            () => {
                gg(imgID).src = piece.url;
            });

            // Finally, add the tile to the portfolio container
            document.getElementById("port").appendChild(tile);

            for (let tech of piece.stack){
                let stack =
                <span id = {"stack-item-" + piece.id} class = "stack-item">
                    {tech}
                </span>;

                document.getElementById("stack-" + piece.id).appendChild(stack)
            }

        }

    }

    return port;

}