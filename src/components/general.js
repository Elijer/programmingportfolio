import { createElement, createFragment } from '../utility/jsx'
import { append } from '/utility/jsx'
import { el, mount } from "redom";

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner = <div id = "banner">
<h1> ELIJAH KENNEDY </h1>
</div>

export const someEl = <h1> Yohoo</h1>

export const test = () => {
    var container =
    <div id = "target" >
    </div>;

    append(container);

    // The problem is that if you are appending the SAME element over and over again within a loop,
    // Nothing happens, because the same element is being appended over again!
    // I guess? Seems weird. I don't totally understand, but I'm glad it works.
    for (var i = 0; i < 10; i++){
        const someEl = <h1> Yohoo </h1>
        document.getElementById("target").appendChild(someEl);
    }

    return container;

}