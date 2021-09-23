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
        const tile = <h1 id = {"tile-" + i} class = "tile" > Yohoo </h1>
        document.getElementById("port").appendChild(tile);
    }

    return port;

}