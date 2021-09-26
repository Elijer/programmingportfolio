import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { banner } from '/components/banner/banner'
import { portfolio } from './components/portfolio/portfolio'
  
banner();
portfolio();