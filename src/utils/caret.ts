const getSelection = (): Selection | null => {
  const selection = window.getSelection;

  if (typeof selection === 'undefined') {
    return null;
  }

  return selection();
};

export const getCaretPosition = (element: HTMLElement): number => {
  const selection = getSelection();

  if (!selection || selection.rangeCount === 0) {
    return 0;
  }

  const range = selection.getRangeAt(0);
  const clonedRange = range.cloneRange();

  clonedRange.selectNodeContents(element);
  clonedRange.setEnd(range.endContainer, range.endOffset);

  return clonedRange.toString().length;
};

const getTextNodes = (element: HTMLElement): Node[] => {
  const iterator = document.createNodeIterator(element, NodeFilter.SHOW_TEXT);

  const nodes: Node[] = [];
  let currentNode: Node | null;

  while ((currentNode = iterator.nextNode())) {
    nodes.push(currentNode);
  }

  return nodes;
};

const getCaretData = (
  element: HTMLElement,
  position: number
): { node: Node | null; offset: number } => {
  const nodes = getTextNodes(element);

  let currentNode: Node | null = null;
  let offset = position;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nodeValue = node.nodeValue;

    if (nodeValue) {
      if (offset > nodeValue.length) {
        offset -= nodeValue.length;
      } else {
        currentNode = node;
        break;
      }
    }
  }

  return { node: currentNode, offset };
};

export const setCaretPosition = (
  element: HTMLElement,
  position: number
): void => {
  const selection = getSelection();

  if (!selection) {
    return;
  }

  const caretData = getCaretData(element, position);

  if (caretData.node) {
    const range = document.createRange();
    range.setStart(caretData.node, caretData.offset);

    selection.removeAllRanges();
    selection.addRange(range);
  }
};
