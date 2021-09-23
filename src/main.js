import { createElement, createFragment, append } from '/utility/jsx'
import { UsingFragment } from '/components/usingFragment'
import { banner, portfolio, someEl } from '/components/general'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
// document.getElementById("root").appendChild(banner);
//document.getElementById("root").appendChild(<UsingFragment name="foo" />);
append(banner);
append(portfolio());