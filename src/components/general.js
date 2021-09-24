import { createElement, createFragment } from '../utility/jsx'
import { append } from '/utility/jsx'
import { el, mount } from "redom";

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner =
<div id = "banner">
    <h1> ELIJAH KENNEDY </h1>
</div>

export const portfolio = () => {


    var pieces = [
        {
            url: "https://i.natgeofe.com/n/21838d6e-005b-4ae9-a781-016bb156cf6c/01mooseWAQ.jpg",
            title: "Moose",
            id: "moose",
            description: "This is a moose that I created with my godlike powers.",
            stack: ["flesh", "blood", "grey-matter"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            url: "https://wilderness-society.org/wp-content/uploads/2021/03/moose-70254.jpg",
            title: "Another Moose",
            id: "moose2",
            description: "This moose on the other hand...it created me",
            stack: ["flesh", "blood", "grey-matter"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        },
        {
            url: "data:image/jpeg;base64,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",
            title: "Improbable Moose",
            id: "moose3",
            description: "I mean this moose, THIS moose, who even knows",
            stack: ["flesh", "blood", "magic"],
            link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
        }

    ]

    var port =
    <div id = "port" >
    </div>;

    append(port);

    for (var piece of pieces){
        console.log(piece.url);
    //for (var i = 0; i < 10; i++){

        const tile =
        <div id = {"tile-" + piece.id} class = "tile" >

            <a href = {piece.link}
            target="_blank" // this makes link open in a new tab
            >

                <img
                id = {"tile-img" + piece.id}
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

        // Finally, add the tile to the portfolio container
        document.getElementById("port").appendChild(tile);

    }

    return port;

}