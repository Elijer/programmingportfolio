import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { pieces } from './data.js'

/* This is another way to import images with parcel
import commerce1 from "../../media/commerce1.png"; */

export const portfolio = () => {

    // 1) Create container to put portfolio in
    var port = <div id = "port" ></div>;
    append(port);
    
    
    // 1.1) Description container


    // 2) Create a tile element for each portfolio piece in 'pieces' array
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

                    <video autoplay muted
                    loop inline
                    class = "tile-gif"
                    id = {"tile-gif-" + piece.id}
                    >
                        <source src = {piece.gif} type="video/mp4" />
                    </video>

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
            let gifID = "tile-gif-" + piece.id;

            tile.addEventListener("mouseenter",
            () => {
                //gg(imgID).src = piece.gif;
                gg(imgID).style.display = "none";
                gg(gifID).style.display = "inline";
                //gg(gifID).play();

            });

            tile.addEventListener("mouseleave",
            () => {
                //g(imgID).src = piece.url;
                gg(imgID).style.display = "block";
                gg(gifID).style.display = "none";
                //gg(gifID).pause();
            });

            // Add the tile to the portfolio container
            document.getElementById("port").appendChild(tile);

            // Finally, now that the tile is in the DOM, we can add its tech stack
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