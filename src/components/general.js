import { createElement, createFragment } from '../utility/jsx'
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
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Auctions",
            id: "auctions",
            description: "Ebay-like bidding platform with images and login system",
            stack: ["django", "sass", "MYSQL"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            active: true,
            url: require("../../media/codingwiki1.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Wiki",
            id: "wiki",
            description: "Custom wiki I use to keep and share all my programming notes.",
            stack: ["django", "MYSQL", "Sass"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            active: true,
            url: require("../../media/bodega3.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Bodega.Photo",
            id: "bodega",
            description: "A color sampling tool that grabs color-keys out of your uploaded images.",
            stack: ["javascript", "NPM"],
            link: "https://bodega.photo/"
        },
        {
            active: false,
            url: require("../../media/jinjialin3.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Jinjialin",
            id: "jinjialin",
            description: "Fun informational site about a fictional planet, with incorporated chat and twitter.",
            stack: ["javascript", "NPM"],
            link: "https://invisibleplanetnine.web.app/"
        },
        {
            active: true,
            url: require("../../media/wesume1.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Resume",
            id: "resume",
            description: "My online resume with filterable experience entries.",
            stack: ["javascript", "NPM", "Sass"],
            link: "https://elijahresume.com/"
        },
        {
            active: true,
            url: require("../../media/gyst6.png"),
            gif: require("../../media/gifs/cafe1.gif"),
            title: "Playgyst.com",
            id: "gyst",
            description: "Two-player game similar to tic-tac-toe. Play it with a friend!",
            stack: ["Firebase", "Google Cloud Functions", "Sass"],
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
            console.log(piece.url);
            //for (var i = 0; i < 10; i++){

            //let id = piece.id;

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

                        <p
                        id = {"tile-desc" + piece.id}
                        class = "tile-desc">
                            {piece.description}
                        </p>

                    </div>

                </a>
                
            </div>

            tile.addEventListener("mouseenter", function(event) {
                document.getElementById("tile-img-" + piece.id).src = piece.gif;
            });

            tile.addEventListener("mouseleave", function( event ) {
                //console.log(id)
                document.getElementById("tile-img-" + piece.id).src = piece.url;
            }, false);

            // Finally, add the tile to the portfolio container
            document.getElementById("port").appendChild(tile);
        }

    }

    return port;

}