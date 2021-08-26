import { createElement, createFragment } from '/utility/createElement'
import { UsingFragment } from '/components/usingFragment'
import { heyo } from '/components/heyo'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
document.getElementById("root").appendChild(<UsingFragment name="foo" />);
document.getElementById("root").appendChild(heyo);
