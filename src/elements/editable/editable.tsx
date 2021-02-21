import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { getCaretPosition, setCaretPosition } from '../../utils';

import { EditableWrapper } from './editable.styles';

type EditableProps = {
  value: string;
  placeholder: string;

  onInput: (value: string) => void;
  onKeyDown: (evt: KeyboardEvent) => void;
};

export const Editable: React.FC<EditableProps> = ({
  value,
  placeholder,

  onInput,
  onKeyDown,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [caretCurrentPosition, setCaretCurrentPosition] = useState(-1);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    if (caretCurrentPosition >= 0) {
      setCaretPosition(elementRef.current, caretCurrentPosition);
    }
  });

  const handleOnInput = () => {
    if (!elementRef.current) {
      return;
    }

    const element = elementRef.current;

    setCaretCurrentPosition(getCaretPosition(element));

    let currentValue = element.innerHTML;

    if (!value && currentValue) {
      currentValue = currentValue.replace(placeholder, '');
    }

    onInput(currentValue);
  };

  const handleOnKeyDown = (evt: KeyboardEvent) => {
    onKeyDown(evt);
  };

  const handleOnFocus = () => {
    if (!value) {
      setCaretCurrentPosition(0);
    }
  };

  const handleOnBlur = () => {
    setCaretCurrentPosition(-1);
  };

  return (
    <EditableWrapper showPlaceholder={!value}>
      <div
        ref={elementRef}
        contentEditable={true}
        onInput={handleOnInput}
        onKeyDown={handleOnKeyDown}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        dangerouslySetInnerHTML={{ __html: value ?? placeholder }}
      ></div>
    </EditableWrapper>
  );
};
