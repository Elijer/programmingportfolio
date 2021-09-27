import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { banner } from '/components/banner/banner'
import { portfolio } from './components/portfolio/portfolio'
import { stack } from './components/stack/stack'
import { about } from './components/about/about';
  
banner();
//portfolio();
//stack();
about();