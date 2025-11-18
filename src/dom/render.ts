import type { VirtualNode } from "../core/types";

function createDOMNode(element: VirtualNode): HTMLElement | Text {
  return element.type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(element.type);
}

function setDOMProperties(
  dom: HTMLElement | Text,
  props: Record<string, unknown>
): void {
  Object.entries(props)
    .filter(([key]) => key !== "children")
    .forEach(([name, value]) => {
      (dom as any)[name] = value;
    });
}

export function render(
  element: VirtualNode,
  container: HTMLElement | Text
): void {
  const dom = createDOMNode(element);

  setDOMProperties(dom, element.props);

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
