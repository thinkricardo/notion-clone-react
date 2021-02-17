import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { getCaretPosition, setCaretPosition } from '../../utils';

type EditableProps = {
  value: string;
  onInput: (value: string) => void;
  onKeyDown: (evt: KeyboardEvent) => void;
};

export const Editable: React.FC<EditableProps> = ({
  value,
  onInput,
  onKeyDown,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [caretCurrentPosition, setCaretCurrentPosition] = useState(0);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    setCaretPosition(elementRef.current, caretCurrentPosition);
  });

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    setCaretCurrentPosition(getCaretPosition(elementRef.current));

    onInput(elementRef.current.innerHTML);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    onKeyDown(evt);
  };

  return (
    <div
      ref={elementRef}
      contentEditable={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
};
