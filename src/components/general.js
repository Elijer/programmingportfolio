import { createElement, createFragment } from '../utility/jsx'
import { append } from '/utility/jsx'

/** @jsx createElement */
/*** @jsxFrag createFragment */

export const banner = <div id = "banner">
<h1> ELIJAH KENNEDY </h1>
</div>

export const grid = function(n){
    var gridContainer = 
    <div id = "main-grid">
    </div>;

    var gridElement = <h1> Test </h1>;

    for (var i = 0; i++; i < n){
        append(gridElement, gridContainer);
    }

}