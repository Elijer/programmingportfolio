import { createElement, createFragment } from '../utility/jsx'
import { append } from '/utility/jsx'
import { el, mount } from "redom";

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner =
<div id = "banner">
    <h1> ELIJAH KENNEDY </h1>
</div>

export const test = () => {
    var container =
    <div id = "target" >
    </div>;

    append(container);

    for (var i = 0; i < 10; i++){
        const someEl = <h1> Yohoo </h1>
        document.getElementById("target").appendChild(someEl);
    }

    return container;

}