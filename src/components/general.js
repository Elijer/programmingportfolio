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

        </div>

        // Finally, add the tile to the portfolio container
        document.getElementById("port").appendChild(tile);

    }

    return port;

}