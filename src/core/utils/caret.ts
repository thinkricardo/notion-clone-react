const getSelection = (): Selection | null => {
  const selection = window.getSelection;

  if (typeof selection === 'undefined') {
    return null;
  }

  return selection();
};

const findNodeAtPosition = (parent: Node, position: number): [Node, number] => {
  if (parent.nodeType === Node.TEXT_NODE) {
    if (parent.textContent) {
      position -= parent.textContent.length;
    }

    return [parent, position];
  }

  for (const child of parent.childNodes) {
    const [node, offset] = findNodeAtPosition(child, position);

    if (offset <= 0) {
      return [node, offset];
    }

    position = offset;
  }

  return [parent, position];
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

export const setCaretPosition = (
  element: HTMLElement,
  position: number
): void => {
  const selection = getSelection();

  if (!selection) {
    return;
  }

  const [node, offset] = findNodeAtPosition(element as Node, position);

  let offsetPosition = offset * -1;

  if (node.textContent) {
    offsetPosition = node.textContent.length - offsetPosition;
  }

  const range = document.createRange();
  range.setStart(node, offsetPosition);

  selection.removeAllRanges();
  selection.addRange(range);
};
