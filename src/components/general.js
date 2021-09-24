import { createElement, createFragment } from '../utility/jsx'
import { gg } from '../utility/helpers'
import { append } from '/utility/jsx'
import { el, mount } from "redom";

// This is another way to import images with parcel
//import commerce1 from "../../media/commerce1.png";

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner =
<div id = "banner">
    <h1> ELIJAH KENNEDY </h1>
</div>

export const portfolio = () => {


    var pieces = [
        {   
            active: true,
            url: require("../../media/commerce2.png"),
            gif: require("../../media/gifs/auctions1.gif"),
            title: "Auctions",
            id: "auctions",
            description: "Ebay-like bidding platform with images and login system",
            stack: ["Django", "Sass", "MYSQL"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            active: true,
            url: require("../../media/codingwiki1.png"),
            gif: require("../../media/gifs/wiki1.gif"),
            title: "Wiki",
            id: "wiki",
            description: "Custom wiki I use to keep and share all my programming notes.",
            stack: ["Django", "MYSQL", "Sass"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            active: true,
            url: require("../../media/bodega3.png"),
            gif: require("../../media/gifs/bodega1.gif"),
            title: "Bodega.Photo",
            id: "bodega",
            description: "Grab color samples out of uploaded photos.",
            stack: ["JS", "NPM"],
            link: "https://bodega.photo/"
        },
        {
            active: false,
            url: require("../../media/jinjialin3.png"),
            gif: require("../../media/jinjialin3.png"),
            title: "Jinjialin",
            id: "jinjialin",
            description: "Fun informational site about a fictional planet, with incorporated chat and twitter.",
            stack: ["JS", "NPM"],
            link: "https://invisibleplanetnine.web.app/"
        },
        {
            active: true,
            url: require("../../media/wesume1.png"),
            gif: require("../../media/wesume1.png"),
            title: "Resume",
            id: "resume",
            description: "My online resume with filterable experience entries.",
            stack: ["JS", "Sass"],
            link: "https://elijahresume.com/"
        },
        {
            active: true,
            url: require("../../media/gyst6.png"),
            gif: require("../../media/gifs/gyst1.gif"),
            title: "Playgyst.com",
            id: "gyst",
            description: "Two-player game similar to tic-tac-toe. Play it with a friend!",
            stack: ["Firebase", "Cloud-Functions", "Sass"],
            link: "https://playgyst.com/"
        },
        {
            active: true,
            url: require("../../media/cafe1.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Cafe Infinite",
            id: "cafe",
            description: "Social exploration web app built on top of google maps.",
            stack: ["Firebase", "Google Maps API"],
            link: "https://cafe-infinite.web.app/"
        }
    ]

    var port =
    <div id = "port" >
    </div>;

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