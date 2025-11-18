import type { VirtualNode } from "./types";

export function createElement(
  type: keyof HTMLElementTagNameMap,
  props: Record<string, unknown> | null,
  ...children: unknown[]
): VirtualNode {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" && child !== null
          ? (child as VirtualNode)
          : createTextElement(String(child))
      ),
    },
  };
}

export function createTextElement(text: string): VirtualNode {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
