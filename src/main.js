import { createElement, createFragment, append } from '/utility/jsx'
import { UsingFragment } from '/components/usingFragment'
import { banner, grid } from '/components/general'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
// document.getElementById("root").appendChild(banner);
//document.getElementById("root").appendChild(<UsingFragment name="foo" />);
append(banner);
append(grid(4));
//document.getElementById("root").appendChild(banner);
