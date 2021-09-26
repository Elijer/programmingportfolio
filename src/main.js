import { createElement, createFragment, append } from '/utility/jsx'
import { banner, portfolio, someEl } from '/components/general'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
append(banner);
append(portfolio());