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

  const setInitialCaretPosition = () => {
    if (!value) {
      setCaretCurrentPosition(0);
    }
  };

  const handleOnInput = () => {
    if (!elementRef.current) {
      return;
    }

    const element = elementRef.current;

    let currentValue = element.innerHTML;
    const currentText = element.innerText.replace('\n', '');

    let caretPosition = getCaretPosition(element);

    if (!currentText) {
      currentValue = '';
    } else if (currentText && !value) {
      currentValue = currentValue.replace(placeholder, '');
      caretPosition = currentValue.length;
    }

    setCaretCurrentPosition(caretPosition);
    onInput(currentValue);
  };

  const handleOnKeyDown = (evt: KeyboardEvent) => {
    onKeyDown(evt);
  };

  const handleOnFocus = () => {
    setInitialCaretPosition();
  };

  const handleOnBlur = () => {
    setCaretCurrentPosition(-1);
  };

  const handleOnMouseUp = () => {
    setInitialCaretPosition();
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
        onMouseUp={handleOnMouseUp}
        dangerouslySetInnerHTML={{ __html: !value ? placeholder : value }}
      ></div>
    </EditableWrapper>
  );
};
