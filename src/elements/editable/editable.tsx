import React, { KeyboardEvent, useRef } from 'react';

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

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

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
