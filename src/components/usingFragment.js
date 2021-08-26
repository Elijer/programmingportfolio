import { createElement, createFragment } from '../utility/jsx'


/** @jsx createElement */
/*** @jsxFrag createFragment */

export const UsingFragment = () => (
    <div>
      <p>This is regular paragraph</p>
      <div>
        <p>This is a paragraph in a fragment</p>
        <>
          <p>Hello</p>
        </>
        <ul>
          {[1, 2, 3, 4].map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );