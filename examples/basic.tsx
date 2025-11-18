/// <reference path="../src/jsx.d.ts" />
/** @jsx BootlegReact.createElement */
import { BootlegReact } from "../src/index";

const element = (
  <div id="foo">
    <a>bar</a>
    <p>Some paragraph</p>
    <button>Press</button>
  </div>
);

console.log("element", element);

const container = document.getElementById("root");

if (container) {
  BootlegReact.render(element, container);
}
