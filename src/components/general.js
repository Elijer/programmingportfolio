import { createElement, createFragment } from '../utility/jsx'
import { append } from '/utility/jsx'
import { el, mount } from "redom";

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner =
<div id = "banner">
    <h1> ELIJAH KENNEDY </h1>
</div>

var pieces = [
    {
        url: "https//i2.wp.com/www.knom.org/wp/wp-content/uploads/2019/09/Bull-Moose-stock-image-from-Pixabay.jpg?fit=1200%2C800&ssl=1",
        title: "Moose",
        id: "moose",
        description: "This is a moose that I created with my godlike powers.",
        stack: ["flesh", "blood", "grey-matter"],
        link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
    },

]

export const portfolio = () => {
    var port =
    <div id = "port" >
    </div>;

    append(port);

    for (const piece of pieces ){
    //for (var i = 0; i < 10; i++){

        const tile =
        <div id = {"tile-" + i} class = "tile" >

            <img
            id = {"tile-img" + i}
            class = "tile-img"
            src = "https://i2.wp.com/www.knom.org/wp/wp-content/uploads/2019/09/Bull-Moose-stock-image-from-Pixabay.jpg?fit=1200%2C800&ssl=1" width = "300px">
            </img>

            <div class = "tile-body">

                <h1
                id = {"tile-title-"+{i}}
                class = "tile-title">
                    Title {i}
                </h1>

                <p
                id = {"tile-desc" + i}
                class = "tile-desc">
                    Description {i*6}: This is a description for this title.
                </p>

            </div>

        </div>

        // Finally, add the tile to the portfolio container
        document.getElementById("port").appendChild(tile);

    }

    return port;

}