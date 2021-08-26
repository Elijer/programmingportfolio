import { createElement, createFragment } from '/utility/createElement'
import { UsingFragment } from '/components/usingFragment'

/** @jsx createElement */
/*** @jsxFrag createFragment */

  const anotherElement = <h1> HEYO </h1>
  
  document.getElementById("root").appendChild(<UsingFragment name="foo" />);
  document.getElementById("root").appendChild(anotherElement);
  