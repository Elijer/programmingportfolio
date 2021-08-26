import { createElement, createFragment } from '/createElement'

/** @jsx createElement */
/*** @jsxFrag createFragment */
  
  const UsingFragment = () => (
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
  
  document.getElementById("root").appendChild(<UsingFragment name="foo" />);
  