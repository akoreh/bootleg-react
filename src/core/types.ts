export interface VirtualNode {
  type: keyof HTMLElementTagNameMap | "TEXT_ELEMENT";
  props: VirtualNodeProps;
}

export interface VirtualNodeProps {
  children: VirtualNode[];
  nodeValue?: string;
  [key: string]: unknown;
}
