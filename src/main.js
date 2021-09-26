import { createElement, createFragment, append } from '/utility/jsx'
import { banner } from '/components/banner'
import { portfolio } from './components/portfolio/portfolio'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
append(banner);
append(portfolio());