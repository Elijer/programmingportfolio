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
    var port =
    <div id = "port" >
    </div>;

    append(port);

    for (var i = 0; i < 10; i++){

        const tile =
        <div id = {"tile-" + i} class = "tile" >

            <img
            id = {"tile-img" + i}
            class = "tile-img"
            src = "https://i2.wp.com/www.knom.org/wp/wp-content/uploads/2019/09/Bull-Moose-stock-image-from-Pixabay.jpg?fit=1200%2C800&ssl=1" width = "300px">
            </img>

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

        // Finally, add the tile to the portfolio container
        document.getElementById("port").appendChild(tile);

    }

    return port;

}